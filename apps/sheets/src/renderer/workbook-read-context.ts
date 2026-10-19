import type { InMemoryWorkbookAdapter } from '@genoffice/xlsx-gateway/domain/in-memory-workbook'
import type { LazyWorkbookState, UniverRuntime } from './univer-state'

/** The App refs the workbook-wide readers need; passed per call so they never go stale. */
export interface WorkbookReadContext {
  univerRef: { readonly current: UniverRuntime | null }
  lazyWorkbookRef: { readonly current: LazyWorkbookState | null }
  adapterRef: { readonly current: InMemoryWorkbookAdapter }
}
