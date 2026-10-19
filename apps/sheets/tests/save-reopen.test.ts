/**
 * Saving swaps the sidecar session: the save path reopens the saved workbook
 * and only reports success once that reopen went through.
 */
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { handleSave, type SaveContext } from '../src/renderer/save-actions'
import { createEditJournal, recordSetRangeValues } from '../src/renderer/edit-journal'

const saveWorkbookEdits = vi.fn()
const writeWorkbookRecovery = vi.fn()

beforeEach(() => {
  saveWorkbookEdits.mockReset()
  writeWorkbookRecovery.mockReset().mockResolvedValue({ ok: true })
  ;(globalThis as unknown as { window: unknown }).window = {
    desktopApi: { saveWorkbookEdits, writeWorkbookRecovery },
  }
})

function ctxWith(): { ctx: SaveContext; openLazyWorkbook: ReturnType<typeof vi.fn> } {
  const journal = createEditJournal()
  recordSetRangeValues(journal, 'sheet-1', { 0: { 0: { v: 'edited' } } })
  const openLazyWorkbook = vi.fn()
  return {
    openLazyWorkbook,
    ctx: {
      univerRef: { current: null },
      stashViewRestore: () => {},
      lazyWorkbookRef: {
        current: {
          editJournal: journal,
          recalc: {
            timer: null,
            generation: 0,
            failed: false,
            formulaCells: new Map(),
            overlay: new Map(),
          },
          flags: { preloadComplete: true },
          file: {
            sessionId: '11111111-1111-4111-8111-111111111111',
            needsSaveAs: false,
            restoredFromRecovery: false,
          },
        },
      } as never,
      setMessage: () => {},
      openLazyWorkbook,
    },
  }
}

describe('handleSave reopen', () => {
  it('reopens the saved workbook', async () => {
    const file = { sessionId: '22222222-2222-4222-8222-222222222222', path: '/tmp/a.xlsx' }
    saveWorkbookEdits.mockResolvedValue({ canceled: false, file })
    const { ctx, openLazyWorkbook } = ctxWith()
    const outcome = await handleSave(ctx, 'save')
    expect(outcome.ok).toBe(true)
    expect(openLazyWorkbook).toHaveBeenCalledTimes(1)
    expect(openLazyWorkbook).toHaveBeenCalledWith(file)
  })

  it('does not report success when the committed editor rejects the reopen', async () => {
    const file = { sessionId: '33333333-3333-4333-8333-333333333333', path: '/tmp/a.xlsx' }
    saveWorkbookEdits.mockResolvedValue({ canceled: false, file })
    const { ctx, openLazyWorkbook } = ctxWith()
    openLazyWorkbook.mockResolvedValue(false)

    await expect(handleSave(ctx, 'save')).resolves.toEqual({ ok: false })
    expect(openLazyWorkbook).toHaveBeenCalledTimes(1)
  })

  it('a canceled save never reopens', async () => {
    saveWorkbookEdits.mockResolvedValue({ canceled: true })
    const { ctx, openLazyWorkbook } = ctxWith()
    await handleSave(ctx, 'save')
    expect(openLazyWorkbook).not.toHaveBeenCalled()
  })
})
