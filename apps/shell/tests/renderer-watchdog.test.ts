import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const electron = vi.hoisted(() => ({
  metrics: [] as unknown[],
  contents: [] as unknown[],
  showMessageBox: vi.fn(async () => ({ response: 0 })),
}))

vi.mock('electron', () => ({
  app: {
    getAppMetrics: () => electron.metrics,
    getPath: () => '/tmp/genoffice-test-user-data',
  },
  dialog: { showMessageBox: electron.showMessageBox },
  webContents: { getAllWebContents: () => electron.contents },
}))

const writeFile = vi.hoisted(() => vi.fn(async () => undefined))
vi.mock('node:fs/promises', () => ({ writeFile }))

import { parseTopFootprints, startRendererWatchdog } from '../src/main/renderer-watchdog'

/**
 * Renderer watchdog (src/main/renderer-watchdog.ts): which sample patterns
 * count as a hot renderer, and which memory figure is compared to the limit.
 */

const PID = 4242
const SAMPLE_MS = 30_000

function fakeContents() {
  return {
    id: 7,
    isDestroyed: () => false,
    getOSProcessId: () => PID,
    getURL: () => 'genoffice-app://docs/index.html',
    debugger: { isAttached: () => true },
  }
}

/** one metric whose cumulative CPU grew by `cpuPercent` of a core since the last sample */
let cumulative = 0
function metric(cpuPercent: number, workingSetMB = 200) {
  cumulative += (cpuPercent / 100) * (SAMPLE_MS / 1000)
  return {
    pid: PID,
    type: 'Tab',
    cpu: { cumulativeCPUUsage: cumulative },
    memory: { workingSetSize: workingSetMB * 1024 },
  }
}

function start(extra: Partial<Parameters<typeof startRendererWatchdog>[0]> = {}) {
  return startRendererWatchdog({
    describe: () => ({ kind: 'docs', title: 'Report.docx' }),
    parentWindow: () => null,
    closeDocument: vi.fn(),
    t: (key) => key,
    sampleMs: SAMPLE_MS,
    profileMs: 0,
    readFootprintsMB: null,
    ...extra,
  })
}

async function tick(m: unknown): Promise<void> {
  electron.metrics = [m]
  await vi.advanceTimersByTimeAsync(SAMPLE_MS)
}

const reports = () => writeFile.mock.calls.length

describe('renderer watchdog', () => {
  let stop: (() => void) | null = null

  beforeEach(() => {
    vi.useFakeTimers()
    cumulative = 0
    electron.contents = [fakeContents()]
    writeFile.mockClear()
    electron.showMessageBox.mockClear()
  })

  afterEach(() => {
    stop?.()
    stop = null
    vi.useRealTimers()
  })

  it('reports a bursty renderer that is hot in most, not all, recent samples', async () => {
    stop = start()
    await tick(metric(0)) // baseline: no CPU delta yet
    // the pattern a runaway renderer showed in the field: busy, with short lulls
    const pattern = [150, 120, 40, 200, 110, 95, 30, 180, 140, 100]
    for (const cpu of pattern) await tick(metric(cpu))
    expect(reports()).toBe(1)
    expect(electron.showMessageBox).toHaveBeenCalledOnce()
  })

  it('does not report a renderer that is only occasionally busy', async () => {
    stop = start()
    await tick(metric(0))
    for (let i = 0; i < 30; i++) await tick(metric(i % 3 === 0 ? 150 : 5))
    expect(reports()).toBe(0)
  })

  it('counts the physical footprint when the working set is small (swapped out)', async () => {
    const readFootprintsMB = vi.fn(async (pids: number[]) => new Map(pids.map((p) => [p, 4600])))
    stop = start({ readFootprintsMB })
    for (let i = 0; i < 8; i++) await tick(metric(0, 900))
    expect(readFootprintsMB).toHaveBeenCalledWith([PID])
    expect(reports()).toBe(1)
    const json = JSON.parse(String((writeFile.mock.calls[0] as unknown[])[1]))
    expect(json.memoryMB).toBe(4600)
    expect(json.footprintMB).toBe(4600)
  })

  it('reads the footprint sparsely', async () => {
    const readFootprintsMB = vi.fn(async () => new Map<number, number>())
    stop = start({ readFootprintsMB, footprintEverySamples: 10 })
    for (let i = 0; i < 25; i++) await tick(metric(0))
    expect(readFootprintsMB).toHaveBeenCalledTimes(3)
  })

  it('stays quiet on the working set alone below the limit', async () => {
    stop = start()
    for (let i = 0; i < 20; i++) await tick(metric(0, 1000))
    expect(reports()).toBe(0)
  })
})

describe('parseTopFootprints', () => {
  it('reads the MEM column with units and trend markers', () => {
    const out = [
      'Processes: 725 total, 38 running',
      '',
      'PID    MEM',
      '68770  7334M+',
      '68466  4659M-',
      '1558   183M ',
      '8576   41M',
      '90     1.5G',
      '12     512K',
    ].join('\n')
    const fp = parseTopFootprints(out)
    expect(fp.get(68770)).toBe(7334)
    expect(fp.get(68466)).toBe(4659)
    expect(fp.get(1558)).toBe(183)
    expect(fp.get(8576)).toBe(41)
    expect(fp.get(90)).toBe(1536)
    expect(fp.get(12)).toBe(0.5)
    expect(fp.size).toBe(6)
  })
})
