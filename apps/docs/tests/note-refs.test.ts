import { describe, expect, it } from 'vitest'
import { Editor } from '@tiptap/core'
import JSZip from 'jszip'
import type { Run } from '@genoffice/docx-engine'
import { parseDocx, saveDocx } from '@genoffice/docx-engine'
import { buildDocx } from '../../../packages/docx-engine/tests/helpers/build-docx'
import { editorExtensions } from '../src/renderer/editor/extensions'
import {
  blocksToPmDoc,
  inlineToRuns,
  pmDocToSavePlan,
  runsToInline,
  type PmNode,
} from '../src/renderer/editor/convert'

function createEditor(content: PmNode[]): Editor {
  return new Editor({
    element: document.createElement('div'),
    extensions: editorExtensions,
    content: { type: 'doc', content },
  })
}

describe('footnote / endnote reference conversion', () => {
  it('a styled reference keeps its rPr through an edit to its own paragraph', async () => {
    // genoffice#2005: a rebuilt paragraph used to emit the marker as a bare superscript
    const XML_DECL = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
    const W = 'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"'
    const body =
      '<w:p><w:r><w:t xml:space="preserve">The court held so. </w:t></w:r>' +
      '<w:r><w:rPr><w:rStyle w:val="FootnoteReference"/>' +
      '<w:rFonts w:ascii="Palatino Linotype" w:hAnsi="Palatino Linotype"/>' +
      '<w:color w:val="000000"/><w:sz w:val="26"/><w:szCs w:val="26"/></w:rPr>' +
      '<w:footnoteReference w:id="2"/></w:r></w:p>'
    const footnotes =
      `${XML_DECL}<w:footnotes ${W}>` +
      '<w:footnote w:id="2"><w:p><w:r><w:t> A footnote.</w:t></w:r></w:p></w:footnote>' +
      '</w:footnotes>'
    const source = await buildDocx({
      bodyXml: body,
      extraRels:
        '<Relationship Id="rId40" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes" Target="footnotes.xml"/>',
      extraParts: [
        {
          path: 'word/footnotes.xml',
          xml: footnotes,
          contentType:
            'application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml',
        },
      ],
    })
    const parsed = await parseDocx(source)
    const editor = new Editor({
      element: document.createElement('div'),
      extensions: editorExtensions,
      content: blocksToPmDoc(parsed.blocks) as never,
    })
    // the op: reword the text run; the marker atom is not touched
    editor.commands.insertContentAt(2, 'X')
    const plan = pmDocToSavePlan(editor.getJSON() as PmNode, parsed.blocks)
    const out = await saveDocx(parsed, plan.saveBlocks)
    const xml = await JSZip.loadAsync(out).then((z) => z.file('word/document.xml')!.async('string'))
    const at = xml.indexOf('<w:footnoteReference')
    const refRun = xml.slice(xml.lastIndexOf('<w:r>', at), xml.indexOf('</w:r>', at) + 6)
    expect(refRun).toContain('<w:rStyle w:val="FootnoteReference"/>')
    expect(refRun).toContain('w:ascii="Palatino Linotype"')
    expect(refRun).toContain('<w:color w:val="000000"/>')
    expect(refRun).toContain('<w:sz w:val="26"/>')
  })

  it('maps Run.noteRef to a docNoteRef atom and back', () => {
    const runs: Run[] = [
      { text: 'body' },
      { text: '2', noteRef: { kind: 'footnote', id: '3' } },
      { text: 'continued' },
    ]
    const inline = runsToInline(runs)
    expect(inline).toEqual([
      { type: 'text', text: 'body' },
      { type: 'docNoteRef', attrs: { kind: 'footnote', id: '3', num: 2, rawRPr: null } },
      { type: 'text', text: 'continued' },
    ])
    expect(inlineToRuns(inline)).toEqual(runs)
  })

  it('maps Run.xeTerm to a trailing docXeMark atom and back', () => {
    const runs: Run[] = [{ text: 'artificial intelligence', xeTerm: 'artificial intelligence' }]
    const inline = runsToInline(runs)
    expect(inline).toEqual([
      { type: 'text', text: 'artificial intelligence' },
      { type: 'docXeMark', attrs: { term: 'artificial intelligence' } },
    ])
    // splits back into a plain text run + an empty XE-carrier run
    expect(inlineToRuns(inline)).toEqual([
      { text: 'artificial intelligence' },
      { text: '', xeTerm: 'artificial intelligence' },
    ])
  })

  it('renders both atoms in the editor schema without dropping them', () => {
    const editor = createEditor([
      {
        type: 'docParagraph',
        attrs: { docxIndex: 0 },
        content: [
          { type: 'text', text: 'a' },
          { type: 'docNoteRef', attrs: { kind: 'endnote', id: '5', num: 1 } },
          { type: 'docXeMark', attrs: { term: 'glossary term' } },
        ],
      },
    ])
    const para = (editor.getJSON() as PmNode).content![0]
    const types = (para.content ?? []).map((n) => n.type)
    expect(types).toEqual(['text', 'docNoteRef', 'docXeMark'])
    const html = editor.getHTML()
    expect(html).toContain('data-note-ref="5"')
    expect(html).toContain('data-xe-term="glossary term"')
    editor.destroy()
  })
})
