import { afterEach, describe, expect, it, vi } from 'vitest'

class FakeWorker {
  static created: FakeWorker[] = []
  onmessage: ((e: MessageEvent) => void) | null = null
  onerror: (() => void) | null = null
  terminate = vi.fn()
  postMessage = vi.fn()
  constructor() {
    FakeWorker.created.push(this)
  }
}

describe('disposeParseWorker', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.resetModules()
    FakeWorker.created = []
  })

  it('terminates the worker and fails a waiting parse instead of hanging it', async () => {
    vi.stubGlobal('Worker', FakeWorker)
    const { parseDocxOffThread, disposeParseWorker } =
      await import('../src/renderer/parse-off-thread')
    const parse = parseDocxOffThread(new Uint8Array([1, 2, 3]))
    expect(FakeWorker.created).toHaveLength(1)
    expect(FakeWorker.created[0].postMessage).toHaveBeenCalledOnce()

    disposeParseWorker()
    expect(FakeWorker.created[0].terminate).toHaveBeenCalledOnce()
    await expect(parse).rejects.toThrow('parse worker disposed')
  })

  it('is safe before any worker was started', async () => {
    vi.stubGlobal('Worker', FakeWorker)
    const { disposeParseWorker } = await import('../src/renderer/parse-off-thread')
    expect(() => disposeParseWorker()).not.toThrow()
    expect(FakeWorker.created).toHaveLength(0)
  })
})
