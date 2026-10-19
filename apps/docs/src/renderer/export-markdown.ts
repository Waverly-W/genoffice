import type { Editor } from '@tiptap/core'
import type { Node as ProseMirrorNode } from '@tiptap/pm/model'
import { pmTableToModel, type PmMark, type PmNode } from './editor/convert'
import { MARKDOWN_MEDIA_DIR_TOKEN, type MarkdownImage } from '../shared/ipc'

export interface MarkdownExport {
  markdown: string
  images: MarkdownImage[]
}

const IMAGE_EXT: Record<string, string> = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/gif': 'gif',
  'image/bmp': 'bmp',
  'image/webp': 'webp',
  'image/svg+xml': 'svg',
  'image/tiff': 'tif',
}

function imageExt(src: string): string | null {
  const data = /^data:(image\/[\w.+-]+);base64,/.exec(src)
  if (data) return IMAGE_EXT[data[1]] ?? null
  if (src.startsWith('genoffice-docx-media://')) {
    const ext = /\.(\w+)$/.exec(src)?.[1]?.toLowerCase()
    if (!ext) return null
    return Object.values(IMAGE_EXT).includes(ext === 'jpeg' ? 'jpg' : ext) ? ext : null
  }
  return null
}

/**
 * The whole document as GFM. Rich blocks go through a restricted-HTML
 * serializer first; protected blocks become a display formula, a field's
 * visible text, a picture, or nothing. Pictures are collected for the writer
 * and referenced by name.
 */
export function documentToMarkdown(editor: Editor): MarkdownExport {
  const top = editor.state.doc
  const parts: string[] = []
  const images: MarkdownImage[] = []
  const named = new Map<string, string>()
  const image = (src: string): string | null => {
    if (!src) return null
    let name = named.get(src)
    if (!name) {
      const ext = imageExt(src)
      if (!ext) return null
      name = `image${images.length + 1}.${ext}`
      named.set(src, name)
      images.push({ name, src })
    }
    return `${MARKDOWN_MEDIA_DIR_TOKEN}/${name}`
  }
  let runStart = -1
  const flush = (end: number) => {
    if (runStart >= 0) parts.push(serializeRangeToHtml(editor, runStart, end, image))
    runStart = -1
  }
  top.forEach((node, _offset, index) => {
    if (node.type.name !== 'docProtected') {
      if (runStart < 0) runStart = index
      return
    }
    flush(index - 1)
    if (isTrackedDeleted(node)) return
    const formula = node.attrs.formulaDisplay as { tokens?: string[]; latex?: string } | null
    if (formula?.latex) {
      parts.push(`<formula>${escapeHtml(formula.latex)}</formula>`)
    } else if (formula?.tokens?.length) {
      parts.push(`<p>${escapeHtml(formula.tokens.join(' '))}</p>`)
    } else if (node.attrs.imageDataUrl) {
      const src = image(String(node.attrs.imageDataUrl))
      if (src) parts.push(`<p><img src="${escapeHtml(src)}"></p>`)
    } else {
      const preview = String(node.attrs.previewText ?? '')
        .replace(/\s+/g, ' ')
        .trim()
      if (preview) parts.push(`<p>${escapeHtml(preview)}</p>`)
    }
  })
  flush(top.childCount - 1)
  return { markdown: restrictedHtmlToMarkdown(parts.join('\n')), images }
}

/** Maps a picture's source to the `src` the restricted HTML should carry; null drops it. */
type ImageSrcMapper = (src: string) => string | null

const hasDelMark = (node: ProseMirrorNode) => node.marks.some((m) => m.type.name === 'del')

/**
 * The whole block is a pending deletion revision (struck through in the editor).
 * Checked structurally, not by text length: atom leaves (inline formulas, ruby)
 * carry no textContent, so a live formula must still count as live content.
 */
function isTrackedDeleted(node: ProseMirrorNode): boolean {
  if ((node.attrs?.blockRevision as { kind?: string } | null)?.kind === 'del') return true
  let hasContent = false
  let hasLive = false
  node.descendants((child) => {
    if (child.isText || (child.isInline && child.isLeaf)) {
      hasContent = true
      if (!hasDelMark(child)) hasLive = true
    }
  })
  return hasContent && !hasLive
}

const isDeletedRun = (node: PmNode) => (node.marks ?? []).some((m: PmMark) => m.type === 'del')

function wrapInlineText(raw: string, marks: PmMark[]): string {
  let text = escapeHtml(raw)
  const has = (type: string) => marks.some((m: PmMark) => m.type === type)
  if (has('bold')) text = `<strong>${text}</strong>`
  if (has('italic')) text = `<em>${text}</em>`
  if (has('underline')) text = `<u>${text}</u>`
  if (has('strike')) text = `<s>${text}</s>`
  const link = marks.find((m: PmMark) => m.type === 'link')
  if (link?.attrs?.href) text = `<a href="${escapeHtml(String(link.attrs.href))}">${text}</a>`
  return text
}

function inlineAtomToHtml(node: PmNode, image: ImageSrcMapper): string {
  if (node.type === 'hardBreak') return '<br>'
  if (node.type === 'docInlineImage') {
    const src = node.attrs?.rule ? null : image(String(node.attrs?.dataUrl ?? ''))
    return src ? `<img src="${escapeHtml(src)}">` : ''
  }
  if (node.type === 'docInlineMath') {
    // editor-created formulas carry LaTeX; parsed-from-docx ones degrade to the flat token strip
    const source = String(node.attrs?.latex ?? '') || String(node.attrs?.text ?? '')
    return source ? `<formula>${escapeHtml(source)}</formula>` : ''
  }
  if (node.type === 'docRuby') return escapeHtml(String(node.attrs?.base ?? ''))
  return ''
}

/** inline content as restricted HTML; pending tracked deletions are left out */
function inlineToHtml(content: PmNode[] | undefined, image: ImageSrcMapper): string {
  if (!content) return ''
  let html = ''
  for (const node of content) {
    if (isDeletedRun(node)) continue
    html +=
      node.type === 'text'
        ? wrapInlineText(node.text ?? '', node.marks ?? [])
        : inlineAtomToHtml(node, image)
  }
  return html
}

/** plain text of a paragraph's inline content, hard breaks as newlines */
function inlineToPlainText(content: PmNode[] | undefined): string {
  if (!content) return ''
  return content
    .filter((n) => !isDeletedRun(n))
    .map((n) => (n.type === 'hardBreak' ? '\n' : n.type === 'text' ? (n.text ?? '') : ''))
    .join('')
}

/** a shaded, fully bordered Consolas-style paragraph reads as a code block */
function isCodeParagraph(node: PmNode): boolean {
  return node.attrs?.shadingFill === 'F2F2F2' && node.attrs?.borders === 'tblr'
}

/** an indented paragraph with only a left border reads as a quote */
function isQuoteParagraph(node: PmNode): boolean {
  return node.attrs?.borders === 'l' && Number(node.attrs?.indentLeft) > 0
}

/**
 * Table block as restricted <table> HTML. The grid comes from the table model
 * so merged cells keep their columns; each non-continuation entry maps to the
 * row's next physical cell node, whose inline pictures are kept.
 */
function tableToHtml(node: PmNode, image: ImageSrcMapper): string {
  const model = pmTableToModel(node)
  const headerRow =
    model.rows.length > 1 && model.rows[0].every((c) => c.bold || c.fill !== undefined)
  const rows = model.rows.map((row, r) => {
    const tag = headerRow && r === 0 ? 'th' : 'td'
    const physical = node.content?.[r]?.content ?? []
    let next = 0
    const cells = row
      .map((entry) => {
        if (entry.vMerge === 'continue') return `<${tag}></${tag}>`
        const cell = physical[next++]
        const paras = (cell?.content ?? [])
          .filter((n) => n.type === 'docParagraph' || n.type === 'docListItem')
          .map((n) => inlineToHtml(n.content, image))
        return `<${tag}>${paras.join('<br>')}</${tag}>`
      })
      .join('')
    return `<tr>${cells}</tr>`
  })
  return `<table>${rows.join('')}</table>`
}

/**
 * Serialize top-level nodes [startIndex, endIndex] into restricted HTML.
 * Consecutive list items of the same kind are grouped into ul/ol.
 */
function serializeRangeToHtml(
  editor: Editor,
  startIndex: number,
  endIndex: number,
  image: ImageSrcMapper,
): string {
  const json = editor.getJSON() as PmNode
  const children = (json.content ?? []).slice(startIndex, endIndex + 1)
  const parts: string[] = []
  let listBuffer: { kind: string; items: string[] } | null = null

  const flushList = () => {
    if (!listBuffer) return
    const tag = listBuffer.kind === 'ordered' ? 'ol' : 'ul'
    parts.push(`<${tag}>${listBuffer.items.join('')}</${tag}>`)
    listBuffer = null
  }

  for (let i = 0; i < children.length; i++) {
    const node = children[i]
    if (isTrackedDeleted(editor.state.doc.child(startIndex + i))) {
      // the deleted block still separates the surrounding lists in the document
      flushList()
      continue
    }
    if (node.type === 'docHeading') {
      flushList()
      const level = Math.min(Math.max(Number(node.attrs?.level) || 1, 1), 6)
      parts.push(`<h${level}>${inlineToHtml(node.content, image)}</h${level}>`)
    } else if (node.type === 'docListItem') {
      const kind = (node.attrs?.kind as string) ?? 'bullet'
      if (!listBuffer || listBuffer.kind !== kind) {
        flushList()
        listBuffer = { kind, items: [] }
      }
      listBuffer.items.push(`<li>${inlineToHtml(node.content, image)}</li>`)
    } else if (node.type === 'docParagraph') {
      flushList()
      if (isCodeParagraph(node)) {
        parts.push(`<pre>${escapeHtml(inlineToPlainText(node.content))}</pre>`)
      } else if (isQuoteParagraph(node)) {
        parts.push(`<blockquote>${inlineToHtml(node.content, image)}</blockquote>`)
      } else {
        parts.push(`<p>${inlineToHtml(node.content, image)}</p>`)
      }
    } else if (node.type === 'docTable') {
      flushList()
      parts.push(tableToHtml(node, image))
    } else {
      flushList()
      const formula = node.attrs?.formulaDisplay as { tokens?: string[]; latex?: string } | null
      if (formula?.latex) {
        parts.push(`<formula>${escapeHtml(formula.latex)}</formula>`)
      } else if (formula?.tokens?.length) {
        parts.push(`<p>${escapeHtml(formula.tokens.join(' '))}</p>`)
      } else {
        const preview = String(node.attrs?.previewText ?? '')
          .replace(/\s+/g, ' ')
          .trim()
        if (preview) parts.push(`<p>${escapeHtml(preview)}</p>`)
      }
    }
  }
  flushList()
  return parts.join('\n')
}

/** Restricted HTML (paragraphs, headings, lists, pre, blockquote, table, formula + inline marks) → GFM. */
export function restrictedHtmlToMarkdown(html: string): string {
  const body = new DOMParser().parseFromString(`<body>${html}</body>`, 'text/html').body
  const blocks: string[] = []
  for (const el of Array.from(body.children)) {
    const md = blockToMarkdown(el)
    if (md) blocks.push(md)
  }
  return blocks.join('\n\n').trimEnd() + '\n'
}

function blockToMarkdown(el: Element): string {
  const tag = el.tagName.toLowerCase()
  const heading = /^h([1-6])$/.exec(tag)
  if (heading) return `${'#'.repeat(Number(heading[1]))} ${inline(el)}`
  switch (tag) {
    case 'p':
      return escapeBlockStart(inline(el))
    case 'ul':
    case 'ol':
      return Array.from(el.children)
        .map(
          (li, i) =>
            `${tag === 'ol' ? `${i + 1}.` : '-'} ${escapeBlockStart(inline(li)).replace(/\n/g, '\n  ')}`,
        )
        .join('\n')
    case 'pre':
      return fence(el.textContent ?? '')
    case 'blockquote':
      return escapeBlockStart(inline(el))
        .split('\n')
        .map((line) => `> ${line}`)
        .join('\n')
    case 'formula':
      return `$$\n${el.textContent ?? ''}\n$$`
    case 'table':
      return table(el)
    default:
      return escapeBlockStart(inline(el))
  }
}

function fence(code: string): string {
  const longest = Math.max(2, ...Array.from(code.matchAll(/`+/g), (m) => m[0].length))
  const ticks = '`'.repeat(longest + 1)
  return `${ticks}\n${code.replace(/\n$/, '')}\n${ticks}`
}

function table(el: Element): string {
  const rows = Array.from(el.querySelectorAll('tr')).map((tr) =>
    Array.from(tr.children).map((cell) =>
      inline(cell).replace(/\n/g, '<br>').replace(/\|/g, '\\|'),
    ),
  )
  if (rows.length === 0) return ''
  const width = Math.max(...rows.map((r) => r.length))
  const line = (cells: string[]) =>
    `| ${Array.from({ length: width }, (_, i) => cells[i] ?? '').join(' | ')} |`
  const header = rows[0]
  const sep = `| ${Array.from({ length: width }, () => '---').join(' | ')} |`
  return [line(header), sep, ...rows.slice(1).map(line)].join('\n')
}

function inline(node: Node): string {
  let out = ''
  node.childNodes.forEach((child) => {
    if (child.nodeType === Node.TEXT_NODE) {
      out += escapeText(child.textContent ?? '')
      return
    }
    if (child.nodeType !== Node.ELEMENT_NODE) return
    const el = child as Element
    const inner = () => inline(el)
    switch (el.tagName.toLowerCase()) {
      case 'br':
        out += '\n'
        break
      case 'strong':
        out += wrap(inner(), '**')
        break
      case 'em':
        out += wrap(inner(), '*')
        break
      case 's':
        out += wrap(inner(), '~~')
        break
      case 'u':
        out += wrap(inner(), '<u>', '</u>')
        break
      case 'a': {
        const href = el.getAttribute('href') ?? ''
        const text = inner()
        out += href ? `[${text}](${href.replace(/[()\s]/g, encodeURIComponent)})` : text
        break
      }
      case 'formula':
        out += `$${el.textContent ?? ''}$`
        break
      case 'img': {
        const src = el.getAttribute('src') ?? ''
        if (src) out += `![](${src.replace(/[()\s]/g, encodeURIComponent)})`
        break
      }
      default:
        out += inner()
    }
  })
  return out
}

/** Marks hug the text: leading/trailing spaces move outside the delimiters. */
function wrap(text: string, open: string, close = open): string {
  const m = /^(\s*)([\s\S]*?)(\s*)$/.exec(text)!
  return m[2] ? `${m[1]}${open}${m[2]}${close}${m[3]}` : text
}

function escapeText(s: string): string {
  return s.replace(/[\\`*_[\]<~$]/g, '\\$&')
}

/** Every line: hard breaks and quote lines start new Markdown lines too. */
function escapeBlockStart(s: string): string {
  return s.replace(/^(\s*)(#{1,6}\s|>|[-+]\s|\d+[.)]\s|(?:[-*_]\s*){3,}$)/gm, '$1\\$2')
}

function escapeHtml(s: string): string {
  return s.replace(
    /[&<>"]/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!,
  )
}
