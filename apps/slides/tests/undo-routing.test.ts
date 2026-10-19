import { describe, expect, it } from 'vitest'
import { isTextUndoTarget } from '../src/renderer/undo-routing'

describe('Slides history shortcut routing', () => {
  it('keeps native history in text inputs and editable text', () => {
    expect(isTextUndoTarget({ tagName: 'INPUT' })).toBe(true)
    expect(isTextUndoTarget({ tagName: 'TEXTAREA' })).toBe(true)
    expect(isTextUndoTarget({ isContentEditable: true })).toBe(true)
  })

  it('routes everything else to deck history', () => {
    expect(isTextUndoTarget({ tagName: 'DIV', isContentEditable: false })).toBe(false)
    expect(isTextUndoTarget(null)).toBe(false)
  })
})
