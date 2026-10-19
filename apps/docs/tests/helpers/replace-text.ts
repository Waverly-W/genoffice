import type { Editor } from '@tiptap/core'
import type { Mark } from '@tiptap/pm/model'

/**
 * Replace every occurrence of `find` inside a single text node with `replace`,
 * keeping the marks of the text it replaces, as one transaction (Find &
 * Replace's Replace All without the dialog). Returns the number of hits.
 */
export function replaceText(editor: Editor, find: string, replace: string): number {
  const tr = editor.state.tr
  const hits: Array<{ from: number; to: number; marks: readonly Mark[] }> = []
  tr.doc.descendants((node, pos) => {
    if (!node.isText || !node.text) return
    let at = node.text.indexOf(find)
    while (at !== -1) {
      hits.push({ from: pos + at, to: pos + at + find.length, marks: node.marks })
      at = node.text.indexOf(find, at + find.length)
    }
  })
  for (const hit of hits.reverse()) {
    if (replace) tr.replaceWith(hit.from, hit.to, editor.schema.text(replace, hit.marks))
    else tr.delete(hit.from, hit.to)
  }
  if (hits.length > 0) editor.view.dispatch(tr)
  return hits.length
}
