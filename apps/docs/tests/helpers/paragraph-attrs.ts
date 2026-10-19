import type { Editor } from '@tiptap/core'
import { applyParagraphAttrs } from '../../src/renderer/editor/paragraph-ops'

/** Patch paragraph attrs on the given top-level blocks, as the Paragraph dialog does for a selection there. */
export function setBlockParagraphAttrs(
  editor: Editor,
  blockIndexes: number[],
  attrs: Record<string, unknown>,
): void {
  for (const index of blockIndexes) {
    let from = 0
    for (let i = 0; i < index; i++) from += editor.state.doc.child(i).nodeSize
    const to = from + editor.state.doc.child(index).nodeSize
    applyParagraphAttrs(editor, attrs, { range: { from: from + 1, to: to - 1 }, focus: false })
  }
}
