import type { Editor } from '@tiptap/core'
import type { Node as PmNode } from '@tiptap/pm/model'
import type { Transaction } from '@tiptap/pm/state'

/**
 * Paragraph-level edits issued by the app's own UI (ribbon, shortcuts,
 * dialogs). Each call resolves the paragraphs a range touches — the top-level
 * text block itself, or for containers such as tables the nested paragraphs
 * inside the range — and applies its change as one transaction, so one undo
 * reverts it. Protected blocks are left alone (a picture block still takes
 * an alignment as its w:jc).
 */

interface Range {
  from: number
  to: number
}

interface ParagraphHit {
  node: PmNode
  pos: number
}

const PARAGRAPH_TYPES = new Set(['docParagraph', 'docHeading', 'docListItem'])

/** a block (or nested paragraph) spanning [from, to) is in play when it overlaps the range or holds the caret */
function touches(range: Range, from: number, to: number): boolean {
  const overlaps = to > range.from && from < range.to
  const caretInside = range.from === range.to && range.from >= from && range.from <= to
  return overlaps || caretInside
}

/** top-level blocks the range touches */
function topBlocksIn(doc: PmNode, range: Range): ParagraphHit[] {
  const out: ParagraphHit[] = []
  doc.forEach((node, pos) => {
    if (touches(range, pos, pos + node.nodeSize)) out.push({ node, pos })
  })
  return out
}

/** paragraph-like nodes inside a top block: the block itself, or the nested paragraphs inside the range */
function paragraphsIn(block: ParagraphHit, range: Range): ParagraphHit[] {
  if (block.node.type.name === 'docProtected') return []
  if (block.node.isTextblock) return [block]
  const hits: ParagraphHit[] = []
  block.node.descendants((node, offset) => {
    if (!PARAGRAPH_TYPES.has(node.type.name)) return true
    const pos = block.pos + 1 + offset
    if (!touches(range, pos, pos + node.nodeSize)) return false
    hits.push({ node, pos })
    return false
  })
  return hits
}

function selectionRange(editor: Editor, range?: Range): Range {
  if (!range) return { from: editor.state.selection.from, to: editor.state.selection.to }
  const size = editor.state.doc.content.size
  const from = Math.min(Math.max(range.from, 0), size)
  return { from, to: Math.min(Math.max(range.to, from), size) }
}

/**
 * Run `edit` over every paragraph the range touches and dispatch the result.
 * Returns true when something changed; focus is restored like a tiptap chain
 * unless the caller opts out.
 */
function editParagraphs(
  editor: Editor,
  range: Range | undefined,
  edit: (tr: Transaction, block: ParagraphHit, scoped: Range) => void,
  focus = true,
): boolean {
  const scoped = selectionRange(editor, range)
  const tr = editor.state.tr
  for (const block of topBlocksIn(tr.doc, scoped)) edit(tr, block, scoped)
  if (tr.steps.length > 0) editor.view.dispatch(tr)
  if (focus) editor.commands.focus()
  return tr.steps.length > 0
}

/**
 * Patch raw paragraph attrs (any schema attr, e.g. lineRule / tabStops /
 * dropCap) on every paragraph in the range; `align` also lands on selected
 * picture blocks as their w:jc. An explicit spacing value turns Word's "Auto"
 * spacing off.
 */
export function applyParagraphAttrs(
  editor: Editor,
  attrs: Record<string, unknown>,
  opts: { range?: Range; focus?: boolean } = {},
): boolean {
  const patch = { ...attrs }
  if ('spaceBefore' in patch && !('spaceBeforeAuto' in patch)) patch.spaceBeforeAuto = false
  if ('spaceAfter' in patch && !('spaceAfterAuto' in patch)) patch.spaceAfterAuto = false
  return editParagraphs(
    editor,
    opts.range,
    (tr, block, scoped) => {
      if (block.node.type.name === 'docProtected') {
        if ('align' in patch && block.node.attrs.blockType === 'image') {
          const align = patch.align ?? null
          if (block.node.attrs.imageAlign !== align)
            tr.setNodeMarkup(block.pos, undefined, { ...block.node.attrs, imageAlign: align })
        }
        return
      }
      for (const p of paragraphsIn(block, scoped)) {
        const next = { ...p.node.attrs, ...patch }
        if (Object.keys(patch).every((k) => next[k] === p.node.attrs[k])) continue
        tr.setNodeMarkup(p.pos, undefined, next)
      }
    },
    opts.focus !== false,
  )
}

/** Word's ribbon indent step: half an inch, in twips */
const INDENT_STEP = 720

/** Ribbon increase/decrease indent: list items change level, paragraphs and headings snap to the next half-inch stop */
export function stepParagraphIndent(editor: Editor, delta: 1 | -1): boolean {
  return editParagraphs(editor, undefined, (tr, block, scoped) => {
    for (const p of paragraphsIn(block, scoped)) {
      if (p.node.type.name === 'docListItem') {
        const ilvl = Number(p.node.attrs.ilvl) || 0
        const next = Math.min(Math.max(ilvl + delta, 0), 8)
        if (next !== ilvl) tr.setNodeMarkup(p.pos, undefined, { ...p.node.attrs, ilvl: next })
        continue
      }
      const cur = Number(p.node.attrs.indentLeft) || 0
      const next =
        delta > 0
          ? Math.floor(cur / INDENT_STEP) * INDENT_STEP + INDENT_STEP
          : Math.max(Math.ceil(cur / INDENT_STEP) * INDENT_STEP - INDENT_STEP, 0)
      if (next !== cur)
        tr.setNodeMarkup(p.pos, undefined, { ...p.node.attrs, indentLeft: next || null })
    }
  })
}

/**
 * Word's Ctrl+T / Ctrl+Shift+T — a hanging indent moves the left indent one
 * stop right while pulling the first line back by the same amount, so
 * continuation lines sit under the body text; the reverse walks it back and
 * only clears the negative first line once the left indent is home.
 */
export function stepHangingIndent(editor: Editor, delta: 1 | -1): boolean {
  return editParagraphs(editor, undefined, (tr, block, scoped) => {
    for (const p of paragraphsIn(block, scoped)) {
      const left = Number(p.node.attrs.indentLeft) || 0
      const nextLeft = Math.max(
        delta > 0
          ? Math.floor(left / INDENT_STEP) * INDENT_STEP + INDENT_STEP
          : Math.ceil(left / INDENT_STEP) * INDENT_STEP - INDENT_STEP,
        0,
      )
      const nextHanging = nextLeft > 0 ? -Math.min(nextLeft, INDENT_STEP) : 0
      if (nextLeft === left && nextHanging === (Number(p.node.attrs.indentFirstLine) || 0)) continue
      tr.setNodeMarkup(p.pos, undefined, {
        ...p.node.attrs,
        indentLeft: nextLeft || null,
        indentFirstLine: nextHanging || null,
      })
    }
  })
}

/** Paragraph dialog outline level (0 = body text): a direct w:outlineLvl, the style stays (Word never restyles for it) */
export function setOutlineLevel(editor: Editor, level: number): boolean {
  const schema = editor.schema
  return editParagraphs(editor, undefined, (tr, block, scoped) => {
    for (const p of paragraphsIn(block, scoped)) {
      const name = p.node.type.name
      const isHeading = name === 'docHeading'
      // a styled heading's level belongs to its style; list items have no level slot
      if (isHeading ? !p.node.attrs.outlineOnly : name !== 'docParagraph') continue
      if (level === 0) {
        if (!isHeading) continue
        const { level: _l, outlineOnly: _o, ...rest } = p.node.attrs
        tr.setNodeMarkup(p.pos, schema.nodes.docParagraph, rest)
      } else {
        if (isHeading && Number(p.node.attrs.level) === level) continue
        tr.setNodeMarkup(p.pos, schema.nodes.docHeading, { ...p.node.attrs, level, outlineOnly: true })
      }
    }
  })
}
