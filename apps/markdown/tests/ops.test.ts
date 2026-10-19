import { afterEach, describe, expect, it } from 'vitest'
import { Editor } from '@tiptap/core'
import { TextSelection } from '@tiptap/pm/state'
import { buildExtensions } from '../src/renderer/editor/extensions'
import { moveSelectedBlocks, uiOp } from '../src/renderer/editor/ops'

const editors: Editor[] = []
afterEach(() => {
  for (const e of editors.splice(0)) e.destroy()
})

function createEditor(md = ''): Editor {
  const editor = new Editor({
    extensions: buildExtensions({
      slashController: { onOpen() {}, onUpdate() {}, onKeyDown: () => false, onClose() {} },
      slashItems: () => [],
    }),
    content: '',
  })
  if (md) editor.commands.setContent(md, { contentType: 'markdown' })
  editors.push(editor)
  return editor
}

/** caret right after the first occurrence of `needle` */
function placeAfter(editor: Editor, needle: string): void {
  let found = -1
  editor.state.doc.descendants((node, pos) => {
    if (found >= 0) return false
    if (node.isText && node.text?.includes(needle))
      found = pos + node.text.indexOf(needle) + needle.length
    return found < 0
  })
  expect(found).toBeGreaterThan(0)
  editor.commands.setTextSelection(found)
}

function blocks(editor: Editor): string[] {
  const out: string[] = []
  editor.state.doc.forEach((n) => out.push(`${n.type.name}:${n.textContent}`))
  return out
}

describe('UI ops on the selection', () => {
  it('insertTable from an empty paragraph replaces it and puts the caret in the first cell', () => {
    const editor = createEditor('intro\n\n')
    editor.commands.setTextSelection(editor.state.doc.content.size - 1)
    expect(uiOp(editor, { op: 'insertTable' })).toBe(true)
    expect(blocks(editor).map((b) => b.split(':')[0])).toEqual(['paragraph', 'table', 'paragraph'])
    expect(editor.isActive('table')).toBe(true)
  })

  it('inserting on a multi-block selection never swallows selected content', () => {
    const editor = createEditor('\n\nkeep me\n\nand me')
    editor.view.dispatch(
      editor.state.tr.setSelection(
        TextSelection.create(editor.state.doc, 1, editor.state.doc.content.size - 1),
      ),
    )
    uiOp(editor, { op: 'insertHorizontalRule' })
    const md = editor.getMarkdown()
    expect(md).toContain('keep me')
    expect(md).toContain('and me')
    expect(md).toContain('---')
  })

  it('inserting from inside a list item lifts the item and inserts right after it', () => {
    const editor = createEditor('- one\n- two\n- three')
    placeAfter(editor, 'two')
    uiOp(editor, { op: 'insertHorizontalRule' })
    expect(blocks(editor)).toEqual([
      'bulletList:one',
      'paragraph:two',
      'horizontalRule:',
      'bulletList:three',
      'paragraph:',
    ])
  })

  it('/quote inside a quote is a no-op (no split, no nesting); paragraph unwraps the caret block', () => {
    const editor = createEditor('> first\n>\n> second')
    placeAfter(editor, 'first')
    uiOp(editor, { op: 'setBlockType', type: 'blockquote' })
    expect(blocks(editor)).toEqual(['blockquote:firstsecond', 'paragraph:'])
    expect(editor.getMarkdown()).not.toContain('> >')
    uiOp(editor, { op: 'setBlockType', type: 'paragraph' })
    expect(blocks(editor)).toEqual(['paragraph:first', 'blockquote:second', 'paragraph:'])
  })

  it('insertHorizontalRule after the last block leaves a paragraph to type in', () => {
    const editor = createEditor('only')
    placeAfter(editor, 'only')
    uiOp(editor, { op: 'insertHorizontalRule' })
    expect(blocks(editor).map((b) => b.split(':')[0])).toEqual([
      'paragraph',
      'horizontalRule',
      'paragraph',
    ])
    expect(editor.state.selection.$from.parent.type.name).toBe('paragraph')
    expect(editor.state.selection.from).toBeGreaterThan(editor.state.doc.child(0).nodeSize)
  })

  it('setStyle toggle on a selection behaves like the toolbar button', () => {
    const editor = createEditor('bold me please')
    editor.view.dispatch(editor.state.tr.setSelection(TextSelection.create(editor.state.doc, 1, 8)))
    uiOp(editor, { op: 'setStyle', style: 'bold', mode: 'toggle' })
    expect(editor.getMarkdown()).toContain('**bold me** please')
    uiOp(editor, { op: 'setStyle', style: 'bold', mode: 'toggle' })
    expect(editor.getMarkdown()).not.toContain('**')
  })

  it('toggleList and setBlockType act on the caret block', () => {
    const editor = createEditor('a\n\nb')
    placeAfter(editor, 'b')
    uiOp(editor, { op: 'toggleList', list: 'ordered' })
    expect(blocks(editor)).toEqual(['paragraph:a', 'orderedList:b', 'paragraph:'])
    uiOp(editor, { op: 'setBlockType', type: 'heading', level: 3 })
    expect(blocks(editor)).toEqual(['paragraph:a', 'heading:b', 'paragraph:'])
  })

  it('editTable on the selection needs the caret inside a table', () => {
    const editor = createEditor('plain')
    placeAfter(editor, 'plain')
    expect(uiOp(editor, { op: 'editTable', action: 'addRowAfter' })).toBe(false)
  })

  it('setBlockType codeBlock sets and re-sets the language', () => {
    const editor = createEditor('print(1)')
    placeAfter(editor, 'print')
    uiOp(editor, { op: 'setBlockType', type: 'codeBlock', language: 'python' })
    expect(editor.getMarkdown()).toContain('```python')
    expect(uiOp(editor, { op: 'setBlockType', type: 'codeBlock', language: 'ruby' })).toBe(true)
    expect(editor.getMarkdown()).toContain('```ruby')
  })

  it('toggleList wraps the selected paragraphs into one list and back', () => {
    const editor = createEditor('a\n\nb\n\nc')
    editor.view.dispatch(editor.state.tr.setSelection(TextSelection.create(editor.state.doc, 1, 5)))
    uiOp(editor, { op: 'toggleList', list: 'bullet' })
    expect(blocks(editor)).toEqual(['bulletList:ab', 'paragraph:c'])
    uiOp(editor, { op: 'toggleList', list: 'bullet' })
    expect(blocks(editor)).toEqual(['paragraph:a', 'paragraph:b', 'paragraph:c'])
  })

  it('setLink links the selection and unlinks with href null', () => {
    const editor = createEditor('see the docs')
    editor.view.dispatch(
      editor.state.tr.setSelection(TextSelection.create(editor.state.doc, 9, 13)),
    )
    uiOp(editor, { op: 'setLink', href: 'https://x.test' })
    expect(editor.getMarkdown()).toContain('[docs](https://x.test)')
    uiOp(editor, { op: 'setLink', href: null })
    expect(editor.getMarkdown()).not.toContain('](')
  })

  it('insertImage lands after the caret block; an empty src is refused', () => {
    const editor = createEditor('a\n\nb')
    placeAfter(editor, 'a')
    expect(uiOp(editor, { op: 'insertImage', src: 'assets/p.png' })).toBe(true)
    expect(editor.getMarkdown()).toContain('![](assets/p.png)')
    expect(blocks(editor)[2]).toBe('paragraph:b')
    expect(uiOp(editor, { op: 'insertImage', src: ' ' })).toBe(false)
  })

  it('editTable acts at the caret cell', () => {
    const editor = createEditor('| h1 | h2 |\n| --- | --- |\n| a | b |')
    placeAfter(editor, 'a')
    expect(uiOp(editor, { op: 'editTable', action: 'addRowAfter' })).toBe(true)
    expect(uiOp(editor, { op: 'editTable', action: 'addColumnAfter' })).toBe(true)
    const table = editor.state.doc.child(0)
    expect(table.type.name).toBe('table')
    expect(table.childCount).toBe(3)
    expect(table.child(0).childCount).toBe(3)
  })

  it('moveSelectedBlocks keeps the caret in the moved block', () => {
    const editor = createEditor('a\n\nb\n\nc')
    placeAfter(editor, 'c')
    expect(moveSelectedBlocks(editor, -1)).toBe(true)
    expect(blocks(editor).map((b) => b.slice(-1))).toEqual(['a', 'c', 'b'])
    expect(editor.state.selection.$from.parent.textContent).toBe('c')
  })
})
