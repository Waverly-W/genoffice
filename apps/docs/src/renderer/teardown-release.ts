import { disposeParseWorker } from './parse-off-thread'

export interface TeardownReleaseDeps {
  /** the preload's docs:teardown subscription; absent in a dev renderer without the bridge */
  onTeardown?: (handler: () => void) => () => void
  /** unmounts the React tree */
  unmount: () => void
  /** the element the React tree is rendered into */
  container: Element
  disposeWorker?: () => void
  /** where the automation hooks live; the page's window by default */
  globals?: object
}

/**
 * The editor publishes `window.__*` hooks for automation and tests
 * (`__aidocs`, `__exportImages`, `__pageDebug`, …). They
 * close over the App scope, so after an unmount they alone kept the editor,
 * the page layout and every paginated paragraph reachable. Nothing calls into
 * a torn-down page again, so all of them go.
 */
function clearWindowHooks(globals: object): void {
  const target = globals as Record<string, unknown>
  for (const key of Object.keys(target)) {
    if (!key.startsWith('__')) continue
    try {
      delete target[key]
    } catch {
      /* non-configurable: leave it */
    }
  }
}

export interface TeardownRelease {
  /** true from the moment docs:teardown arrives */
  readonly released: boolean
}

/**
 * A closed docs tab is detached but never destroyed (destroying its
 * webContents freezes the shell — see TabManager.removeTab), so the renderer
 * process lives until the app quits. Stopping the recovery/autosave
 * effects alone left the editor, the parsed document, the paginated DOM and
 * the parse worker resident: a few closed tabs were enough to hold several
 * gigabytes and keep layout work running in the background. Unmounting the
 * whole tree runs every effect cleanup and drops the document, so the orphan
 * shrinks to an empty page.
 */
export function installTeardownRelease(deps: TeardownReleaseDeps): TeardownRelease {
  let released = false
  const off = deps.onTeardown?.(() => {
    if (released) return
    released = true
    off?.()
    // next task: App's own teardown listener (registered later, same dispatch)
    // still runs against a mounted tree
    setTimeout(() => {
      try {
        deps.unmount()
      } finally {
        deps.container.replaceChildren()
        ;(deps.disposeWorker ?? disposeParseWorker)()
        clearWindowHooks(deps.globals ?? window)
      }
    }, 0)
  })
  return {
    get released() {
      return released
    },
  }
}
