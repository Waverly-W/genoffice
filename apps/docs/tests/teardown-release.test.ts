import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { installTeardownRelease } from '../src/renderer/teardown-release'

function bridge() {
  let handler: (() => void) | null = null
  const off = vi.fn(() => {
    handler = null
  })
  return {
    onTeardown: (h: () => void) => {
      handler = h
      return off
    },
    fire: () => handler?.(),
    off,
  }
}

describe('torn-down docs renderer releases its document', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  it('unmounts the tree, empties the container and stops the parse worker', () => {
    const b = bridge()
    const container = document.createElement('div')
    container.innerHTML = '<div class="pv-page">page</div>'
    const unmount = vi.fn()
    const disposeWorker = vi.fn()
    const release = installTeardownRelease({
      onTeardown: b.onTeardown,
      unmount,
      container,
      disposeWorker,
    })
    expect(release.released).toBe(false)

    b.fire()
    expect(release.released).toBe(true)
    expect(b.off).toHaveBeenCalledOnce()
    // App's own listener runs in the same dispatch: nothing is torn down yet
    expect(unmount).not.toHaveBeenCalled()

    vi.runAllTimers()
    expect(unmount).toHaveBeenCalledOnce()
    expect(container.childNodes.length).toBe(0)
    expect(disposeWorker).toHaveBeenCalledOnce()
  })

  it('drops the window hooks that close over the editor', () => {
    const b = bridge()
    const globals: Record<string, unknown> = {
      __aidocs: { editor: {} },
      __exportImages: () => {},
      __pageDebug: () => {},
      keepMe: 1,
    }
    installTeardownRelease({
      onTeardown: b.onTeardown,
      unmount: vi.fn(),
      container: document.createElement('div'),
      disposeWorker: vi.fn(),
      globals,
    })
    b.fire()
    expect(globals.__aidocs).toBeDefined()
    vi.runAllTimers()
    expect(Object.keys(globals)).toEqual(['keepMe'])
  })

  it('still empties the container and stops the worker when unmount throws', () => {
    const b = bridge()
    const container = document.createElement('div')
    container.textContent = 'x'
    const disposeWorker = vi.fn()
    installTeardownRelease({
      onTeardown: b.onTeardown,
      unmount: () => {
        throw new Error('boom')
      },
      container,
      disposeWorker,
    })
    b.fire()
    expect(() => vi.runAllTimers()).toThrow('boom')
    expect(container.childNodes.length).toBe(0)
    expect(disposeWorker).toHaveBeenCalledOnce()
  })

  it('is a no-op without the preload bridge', () => {
    const unmount = vi.fn()
    const release = installTeardownRelease({ unmount, container: document.createElement('div') })
    vi.runAllTimers()
    expect(release.released).toBe(false)
    expect(unmount).not.toHaveBeenCalled()
  })
})
