import type { Editor, ChainedCommands, SingleCommands } from '@tiptap/core'
import type { Node as PmNode } from '@tiptap/pm/model'
import { NodeSelection, TextSelection, type Transaction } from '@tiptap/pm/state'
import { createTable } from '@tiptap/extension-table'
import { stripLegacyFencedDivs } from '../markdown/docText'

/**
 * The single edit entry shared by the discrete UI actions (ribbon, slash
 * menu, table menu, block handle, block keymap). Typing and paste stay on the
 * raw ProseMirror step layer; everything with a name goes through here so
 * every caller gets the same block addressing and list/quote handling. Every
 * op acts on the blocks covered by the selection; inserts land after them.
 */

export type StylableMark = 'bold' | 'italic' | 'strike' | 'code'
export type BlockType = 'paragraph' | 'heading' | 'blockquote' | 'codeBlock'
export type ListKind = 'bullet' | 'ordered' | 'task'
export type TableAction =
  | 'addRowBefore'
  | 'addRowAfter'
  | 'deleteRow'
  | 'addColumnBefore'
  | 'addColumnAfter'
  | 'deleteColumn'
  | 'toggleHeaderRow'
  | 'deleteTable'

export type MdOp =
  | { op: 'insertContent'; markdown: string }
  | { op: 'deleteBlocks' }
  | { op: 'setStyle'; style: StylableMark; mode?: 'apply' | 'remove' | 'toggle' }
  | { op: 'setLink'; href: string | null }
  | { op: 'setBlockType'; type: BlockType; level?: number; language?: string }
  | { op: 'toggleList'; list: ListKind }
  | { op: 'duplicateBlocks' }
  | { op: 'insertTable' }
  | { op: 'insertHorizontalRule' }
  | { op: 'insertImage'; src: string }
  | { op: 'editTable'; action: TableAction }

interface Range {
  from: number
  to: number
}

/** top-level block index range covered by [from, to] */
function blockIndexRange(
  doc: PmNode,
  from: number,
  to: number,
): { startIndex: number; endIndex: number } {
  let startIndex = -1
  let endIndex = -1
  let index = 0
  doc.forEach((node, offset) => {
    if (offset + node.nodeSize > from && offset < to) {
      if (startIndex === -1) startIndex = index
      endIndex = index
    }
    index++
  })
  if (startIndex === -1) {
    startIndex = doc.childCount - 1
    endIndex = startIndex
  }
  return { startIndex, endIndex }
}

/** doc positions [from, to) spanning top-level blocks from..to inclusive */
function blockRange(doc: PmNode, from: number, to: number): Range {
  let pos = 0
  let start = 0
  let end = 0
  for (let i = 0; i <= to; i++) {
    const child = doc.child(i)
    if (i === from) start = pos
    pos += child.nodeSize
    if (i === to) end = pos
  }
  return { from: start, to: end }
}

/** exactly one empty paragraph — a lone image/math/table with no text is content, not blank */
function isBlankDoc(doc: PmNode): boolean {
  if (doc.childCount !== 1) return doc.childCount === 0
  return isEmptyParagraph(doc.firstChild!)
}

function isEmptyParagraph(node: PmNode): boolean {
  if (node.type.name !== 'paragraph') return false
  let hasLeaf = false
  node.descendants((n) => {
    if (!n.isText) hasLeaf = true
    return !hasLeaf
  })
  return !hasLeaf && node.textContent.trim() === ''
}

/** [start, end) of the top-level blocks covered by the selection */
function selectionBlockRange(editor: Editor): Range {
  const sel = editor.state.selection
  if (sel instanceof NodeSelection && sel.$from.depth === 0) return { from: sel.from, to: sel.to }
  const { startIndex, endIndex } = blockIndexRange(editor.state.doc, sel.from, sel.to)
  return blockRange(editor.state.doc, startIndex, endIndex)
}

function parseMarkdownToNodes(editor: Editor, markdown: string): PmNode[] {
  // `:::` fenced divs are not GFM and would land as literal text — strip the
  // fences and keep the body (same as file open)
  const json = editor.markdown?.parse(stripLegacyFencedDivs(markdown))
  const content = json?.content ?? []
  return content.map((c) => editor.schema.nodeFromJSON(c))
}

class OpError extends Error {}

function fail(msg: string): never {
  throw new OpError(msg)
}

/** insertion point plus the empty paragraph to swallow, if any */
function resolveInsertion(editor: Editor): { pos: number; replace?: Range } {
  const doc = editor.state.doc
  if (isBlankDoc(doc)) return { pos: 0, replace: { from: 0, to: doc.content.size } }
  // a caret inside a list item inserts after that item, not after the whole list
  liftFromList(editor)
  const range = selectionBlockRange(editor)
  const block = editor.state.doc.nodeAt(range.from)
  const lone = block && range.to === range.from + block.nodeSize
  return lone && isEmptyParagraph(block) ? { pos: range.from, replace: range } : { pos: range.to }
}

function nodesSize(nodes: PmNode[]): number {
  return nodes.reduce((s, n) => s + n.nodeSize, 0)
}

function dispatch(editor: Editor, tr: Transaction): void {
  editor.view.dispatch(tr.scrollIntoView())
}

function insertNodes(editor: Editor, nodes: PmNode[]): void {
  const { pos, replace } = resolveInsertion(editor)
  let tr = editor.state.tr
  tr = replace ? tr.replaceWith(replace.from, replace.to, nodes) : tr.insert(pos, nodes)
  const end = pos + nodesSize(nodes)
  // a trailing atom (rule/image) leaves nowhere to type — give the caret a paragraph
  if (!nodes.at(-1)!.isTextblock && end >= tr.doc.content.size) {
    tr = tr.insert(end, editor.schema.nodes.paragraph!.create())
  }
  tr = tr.setSelection(
    TextSelection.near(tr.doc.resolve(Math.min(pos + 1, tr.doc.content.size)), 1),
  )
  dispatch(editor, tr)
}

function chain(editor: Editor): ChainedCommands {
  return editor.chain().focus()
}

/** run a selection-based tiptap command, failing the op when the editor rejects it */
function runCommand(run: () => boolean): void {
  if (!run()) fail('the editor rejected this edit at the selection')
}

/**
 * Block-type conversions are illegal inside a list item — setHeading would
 * silently fail. Lift the current item out of its list(s) first.
 */
function liftFromList(editor: Editor): void {
  for (let guard = 0; guard < 10; guard++) {
    const itemName = editor.isActive('taskItem')
      ? 'taskItem'
      : editor.isActive('listItem')
        ? 'listItem'
        : null
    if (!itemName) return
    if (!chain(editor).liftListItem(itemName).run()) return
  }
}

/** caret-scoped unwrap of blockquotes (setBlockType paragraph = plain paragraph) */
function liftFromQuote(editor: Editor): void {
  for (let guard = 0; guard < 10 && editor.isActive('blockquote'); guard++) {
    if (!chain(editor).lift('blockquote').run()) return
  }
}

function execOp(editor: Editor, op: MdOp): void {
  switch (op.op) {
    case 'insertContent': {
      if (!op.markdown.trim()) fail('markdown must not be empty')
      const nodes = parseMarkdownToNodes(editor, op.markdown)
      if (nodes.length === 0) fail('markdown parsed to no content')
      insertNodes(editor, nodes)
      return
    }

    case 'deleteBlocks': {
      const range = selectionBlockRange(editor)
      const doc = editor.state.doc
      // the schema needs one block — deleting everything leaves an empty paragraph
      let tr =
        range.from === 0 && range.to === doc.content.size
          ? editor.state.tr.replaceWith(
              range.from,
              range.to,
              editor.schema.nodes.paragraph!.create(),
            )
          : editor.state.tr.delete(range.from, range.to)
      tr = tr.setSelection(
        TextSelection.near(tr.doc.resolve(Math.min(range.from, tr.doc.content.size))),
      )
      dispatch(editor, tr)
      return
    }

    case 'setStyle': {
      const mode = op.mode ?? 'apply'
      runCommand(() => {
        const c = chain(editor)
        const cmd =
          mode === 'toggle'
            ? c.toggleMark(op.style)
            : mode === 'remove'
              ? c.unsetMark(op.style)
              : c.setMark(op.style)
        return cmd.run()
      })
      return
    }

    case 'setLink': {
      const href = op.href
      runCommand(() => {
        const c = chain(editor).extendMarkRange('link')
        return (href === null ? c.unsetLink() : c.setLink({ href })).run()
      })
      return
    }

    case 'setBlockType': {
      const convert = (commands: SingleCommands): boolean => {
        switch (op.type) {
          case 'paragraph':
            return commands.setParagraph()
          case 'heading':
            return commands.setHeading({ level: op.level as 1 | 2 | 3 | 4 | 5 | 6 })
          case 'blockquote':
            return commands.setBlockquote()
          case 'codeBlock':
            return commands.setCodeBlock(op.language ? { language: op.language } : undefined)
        }
      }
      runCommand(() => {
        // already quoted = nothing to do; lifting one paragraph would split a multi-paragraph quote
        if (op.type === 'blockquote' && editor.isActive('blockquote')) return true
        liftFromList(editor)
        if (op.type === 'paragraph') liftFromQuote(editor)
        const c = chain(editor)
        return (op.type === 'blockquote' ? c.setParagraph() : c)
          .command(({ commands }) => convert(commands))
          .run()
      })
      return
    }

    case 'toggleList': {
      runCommand(() => {
        const c = chain(editor)
        switch (op.list) {
          case 'bullet':
            return c.toggleBulletList().run()
          case 'ordered':
            return c.toggleOrderedList().run()
          case 'task':
            return c.toggleTaskList().run()
        }
      })
      return
    }

    case 'duplicateBlocks': {
      const range = selectionBlockRange(editor)
      const content = editor.state.doc.slice(range.from, range.to).content
      const caretOffset = editor.state.selection.head - range.from
      let tr = editor.state.tr.insert(range.to, content)
      tr = tr.setSelection(TextSelection.near(tr.doc.resolve(range.to + Math.max(0, caretOffset))))
      dispatch(editor, tr)
      return
    }

    case 'insertTable': {
      insertNodes(editor, [createTable(editor.schema, 3, 3, true)])
      return
    }

    case 'insertHorizontalRule': {
      insertNodes(editor, [editor.schema.nodes.horizontalRule!.create()])
      return
    }

    case 'insertImage': {
      if (!op.src.trim()) fail('src must not be empty')
      const image = editor.schema.nodes.image!.create({ src: op.src, alt: null })
      insertNodes(editor, [editor.schema.nodes.paragraph!.create(null, image)])
      return
    }

    case 'editTable': {
      if (!editor.isActive('table')) fail('the selection is not inside a table')
      const c = chain(editor)
      const commands: Record<TableAction, () => ChainedCommands> = {
        addRowBefore: () => c.addRowBefore(),
        addRowAfter: () => c.addRowAfter(),
        deleteRow: () => c.deleteRow(),
        addColumnBefore: () => c.addColumnBefore(),
        addColumnAfter: () => c.addColumnAfter(),
        deleteColumn: () => c.deleteColumn(),
        toggleHeaderRow: () => c.toggleHeaderRow(),
        deleteTable: () => c.deleteTable(),
      }
      if (!commands[op.action]().run()) fail(`the table rejected ${op.action}`)
      return
    }
  }
}

/** run one op on the current selection, focus kept in the editor; false when it was refused */
export function uiOp(editor: Editor, op: MdOp): boolean {
  try {
    execOp(editor, op)
    return true
  } catch (err) {
    if (err instanceof OpError) return false
    throw err
  }
}

/** swap the selection's top-level blocks with the previous/next sibling; false at the edges */
export function moveSelectedBlocks(editor: Editor, direction: -1 | 1): boolean {
  const { doc, selection } = editor.state
  const { startIndex, endIndex } = blockIndexRange(doc, selection.from, selection.to)
  const after = direction === -1 ? startIndex - 2 : endIndex + 1
  if (after < -1 || after >= doc.childCount) return false
  const range = selectionBlockRange(editor)
  const anchor = after === -1 ? 0 : blockRange(doc, after, after).to
  const content = doc.slice(range.from, range.to).content
  const caretOffset = selection.head - range.from
  const insertAt = anchor > range.to ? anchor - content.size : anchor
  let tr = editor.state.tr.delete(range.from, range.to).insert(insertAt, content)
  if (caretOffset >= 0 && caretOffset <= content.size) {
    tr = tr.setSelection(TextSelection.near(tr.doc.resolve(insertAt + caretOffset)))
  }
  dispatch(editor, tr)
  return true
}
