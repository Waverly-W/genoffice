import { app, dialog, webContents } from 'electron'
import type { BrowserWindow, ProcessMetric, WebContents } from 'electron'
import { execFile } from 'node:child_process'
import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'

/**
 * Renderer resource watchdog. A document renderer that keeps a core busy or
 * grows past a couple of gigabytes for minutes on end (a long open paginating
 * chunk by chunk in a background tab, a runaway layout loop) used to go
 * unnoticed until the machine swapped: nothing in the main process looked at
 * renderer CPU or memory, and the `unresponsive` event never fires for a
 * renderer that still answers input. This samples `app.getAppMetrics()` (plus,
 * on macOS, a sparse physical-footprint read so swapped memory still counts),
 * records diagnostics (metrics plus a short CPU profile of the hot renderer)
 * under userData when a renderer stays hot, and offers to close the document.
 */
export interface WatchdogDocumentInfo {
  kind: string
  title: string
  filePath?: string
}

export type WatchdogStringKey = 'watchdogTitle' | 'watchdogBody' | 'watchdogWait' | 'watchdogClose'

export interface RendererWatchdogOptions {
  /** the document a renderer shows; null for chrome (Home) renderers, which are logged but never prompted */
  describe: (wc: WebContents) => WatchdogDocumentInfo | null
  parentWindow: (wc: WebContents) => BrowserWindow | null
  /** close through the regular close path (save prompt included) */
  closeDocument: (wc: WebContents) => Promise<void> | void
  t: (key: WatchdogStringKey, params?: Record<string, string | number>) => string
  sampleMs?: number
  memoryLimitMB?: number
  cpuLimitPercent?: number
  /** hot samples within the last `windowSamples` before the renderer is reported */
  hotSamplesBeforeReport?: number
  /** how many recent samples the hot count looks at */
  windowSamples?: number
  /**
   * Physical footprint (MB) per renderer pid, compressed and swapped pages
   * included. `workingSetSize` only counts what is resident, so a renderer
   * that has pushed the machine into swap reads small exactly when it matters
   * most. Absent (or undefined from the factory) where the platform has no reader.
   */
  readFootprintsMB?: ((pids: number[]) => Promise<Map<number, number>>) | null
  /** run the footprint reader at most once per this many samples (it is not free) */
  footprintEverySamples?: number
  /** minimum gap between two reports of the same renderer */
  reportCooldownMs?: number
  /** duration of the CPU profile captured with a report (0 disables) */
  profileMs?: number
}

const DEFAULTS = {
  sampleMs: 30_000,
  memoryLimitMB: 1536,
  cpuLimitPercent: 90,
  hotSamplesBeforeReport: 7,
  windowSamples: 10,
  footprintEverySamples: 10,
  reportCooldownMs: 15 * 60_000,
  profileMs: 5_000,
}

interface RendererState {
  /** hot/cool verdicts of the most recent samples, oldest first */
  recent: boolean[]
  /** last physical footprint read for this renderer's process */
  footprintMB?: number
  reportedAt: number
  prompting: boolean
  /** cumulative CPU seconds at the previous sample (absent on the first) */
  cpuSeconds?: number
  sampledAt?: number
}

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms))

/** short CDP CPU profile of a live renderer; false when another debugger holds it */
async function captureCpuProfile(wc: WebContents, outPath: string, ms: number): Promise<boolean> {
  if (wc.isDestroyed() || wc.debugger.isAttached()) return false
  wc.debugger.attach('1.3')
  try {
    await wc.debugger.sendCommand('Profiler.enable')
    await wc.debugger.sendCommand('Profiler.setSamplingInterval', { interval: 1000 })
    await wc.debugger.sendCommand('Profiler.start')
    await sleep(ms)
    const { profile } = (await wc.debugger.sendCommand('Profiler.stop')) as { profile: unknown }
    await writeFile(outPath, JSON.stringify(profile))
    return true
  } finally {
    try {
      if (!wc.isDestroyed()) wc.debugger.detach()
    } catch {
      /* already gone */
    }
  }
}

/** `top`'s MEM column is the physical footprint (what Activity Monitor shows), e.g. `7334M+` */
export function parseTopFootprints(output: string): Map<number, number> {
  const footprints = new Map<number, number>()
  const unitMB: Record<string, number> = {
    B: 1 / (1024 * 1024),
    K: 1 / 1024,
    M: 1,
    G: 1024,
    T: 1024 * 1024,
  }
  for (const line of output.split('\n')) {
    const m = /^\s*(\d+)\s+([\d.]+)([BKMGT])[+-]?\s*$/.exec(line)
    if (m) footprints.set(Number(m[1]), Number(m[2]) * unitMB[m[3]])
  }
  return footprints
}

/** one `top` snapshot of the given pids; costs about a second of system CPU, hence sparse */
function readDarwinFootprintsMB(pids: number[]): Promise<Map<number, number>> {
  const args = ['-l', '1', '-stats', 'pid,mem', ...pids.flatMap((pid) => ['-pid', String(pid)])]
  return new Promise((resolve) => {
    execFile('/usr/bin/top', args, { timeout: 15_000, maxBuffer: 1024 * 1024 }, (err, stdout) =>
      resolve(err ? new Map() : parseTopFootprints(stdout)),
    )
  })
}

export function startRendererWatchdog(options: RendererWatchdogOptions): () => void {
  const opts = { ...DEFAULTS, ...options }
  const readFootprintsMB =
    options.readFootprintsMB === undefined
      ? process.platform === 'darwin'
        ? readDarwinFootprintsMB
        : null
      : options.readFootprintsMB
  const states = new Map<number, RendererState>()
  /** pid -> physical footprint (MB) from the last reader run */
  let footprints = new Map<number, number>()
  let footprintPending = false
  let ticks = 0

  const rendererFor = (pid: number): WebContents | undefined =>
    webContents.getAllWebContents().find((wc) => !wc.isDestroyed() && wc.getOSProcessId() === pid)

  const report = async (
    wc: WebContents,
    metric: ProcessMetric,
    all: ProcessMetric[],
    memoryMB: number,
    cpu: number,
  ): Promise<void> => {
    const info = opts.describe(wc)
    const footprintMB = states.get(wc.id)?.footprintMB
    const stamp = Date.now()
    const base = join(app.getPath('userData'), `renderer-watchdog-${stamp}`)
    try {
      await writeFile(
        `${base}.json`,
        JSON.stringify(
          {
            at: new Date(stamp).toISOString(),
            webContentsId: wc.id,
            pid: metric.pid,
            document: info,
            url: wc.getURL(),
            memoryMB: Math.round(memoryMB),
            footprintMB: footprintMB === undefined ? undefined : Math.round(footprintMB),
            cpuPercent: Math.round(cpu),
            metric,
            appMetrics: all,
          },
          null,
          2,
        ),
      )
      if (opts.profileMs > 0) await captureCpuProfile(wc, `${base}.cpuprofile`, opts.profileMs)
    } catch {
      /* diagnostics are best effort and must never make the situation worse */
    }
    // chrome renderers (Home) have no document to close: logging is all that applies
    if (!info || wc.isDestroyed()) return
    const state = states.get(wc.id)
    if (!state || state.prompting) return
    state.prompting = true
    try {
      const parent = opts.parentWindow(wc)
      const dialogOptions = {
        type: 'warning' as const,
        message: opts.t('watchdogTitle'),
        detail: opts.t('watchdogBody', {
          title: info.title,
          memory: Math.round(memoryMB),
          cpu: Math.round(cpu),
        }),
        buttons: [opts.t('watchdogWait'), opts.t('watchdogClose')],
        defaultId: 0,
        cancelId: 0,
      }
      const { response } =
        parent && !parent.isDestroyed()
          ? await dialog.showMessageBox(parent, dialogOptions)
          : await dialog.showMessageBox(dialogOptions)
      if (response === 1 && !wc.isDestroyed()) await opts.closeDocument(wc)
    } catch {
      /* a failed prompt only means the renderer keeps running */
    } finally {
      state.prompting = false
    }
  }

  const refreshFootprints = (pids: number[]): void => {
    if (!readFootprintsMB || footprintPending || pids.length === 0) return
    footprintPending = true
    readFootprintsMB(pids)
      .then((read) => {
        footprints = read
      })
      .catch(() => {
        /* keep the previous reading: the working set is still checked */
      })
      .finally(() => {
        footprintPending = false
      })
  }

  const sample = (): void => {
    let metrics: ProcessMetric[]
    try {
      metrics = app.getAppMetrics()
    } catch {
      return
    }
    if (ticks++ % opts.footprintEverySamples === 0)
      refreshFootprints(metrics.filter((m) => m.type === 'Tab').map((m) => m.pid))
    const seen = new Set<number>()
    for (const metric of metrics) {
      if (metric.type !== 'Tab') continue
      const wc = rendererFor(metric.pid)
      if (!wc) continue
      seen.add(wc.id)
      // workingSetSize is reported in kilobytes; it misses compressed and
      // swapped pages, so the (sparser) physical footprint wins when larger
      const memoryMB = Math.max(
        metric.memory.workingSetSize / 1024,
        footprints.get(metric.pid) ?? 0,
      )
      const state = states.get(wc.id) ?? { recent: [], reportedAt: 0, prompting: false }
      states.set(wc.id, state)
      state.footprintMB = footprints.get(metric.pid)
      // percentCPUUsage is normalized differently per platform (a full core
      // read 10% on a 10-core Mac): derive one-core percent from the
      // cumulative CPU seconds between two samples instead
      const now = Date.now()
      const cpuSeconds = metric.cpu.cumulativeCPUUsage
      let cpu = 0
      if (cpuSeconds !== undefined) {
        if (
          state.cpuSeconds !== undefined &&
          state.sampledAt !== undefined &&
          now > state.sampledAt
        )
          cpu = ((cpuSeconds - state.cpuSeconds) / ((now - state.sampledAt) / 1000)) * 100
        state.cpuSeconds = cpuSeconds
        state.sampledAt = now
      }
      // a runaway renderer is bursty (layout passes, GC under memory
      // pressure): one cool sample must not reset the count, so judge the
      // recent window instead of requiring an unbroken streak
      state.recent.push(memoryMB > opts.memoryLimitMB || cpu > opts.cpuLimitPercent)
      if (state.recent.length > opts.windowSamples) state.recent.shift()
      const hotCount = state.recent.filter(Boolean).length
      if (
        hotCount >= opts.hotSamplesBeforeReport &&
        !state.prompting &&
        Date.now() - state.reportedAt >= opts.reportCooldownMs
      ) {
        state.reportedAt = Date.now()
        state.recent = []
        void report(wc, metric, metrics, memoryMB, cpu)
      }
    }
    for (const id of states.keys()) if (!seen.has(id)) states.delete(id)
  }

  const timer = setInterval(sample, opts.sampleMs)
  // a pending sample must never keep the app alive at quit
  timer.unref?.()
  return () => clearInterval(timer)
}
