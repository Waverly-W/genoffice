/**
 * Test helper: per-page text of a whole PDF file, extracted with the same
 * main-process pdfium WASM as the text editor. Redaction tests use it to prove
 * that removed strings are gone from the text layer, not merely covered.
 */
import { chainPdfium, loadPdfium, withDocument, type Pdfium } from '../src/main/text-edit'

export interface PdfTextDoc {
  pages: { page: number; text: string }[]
}

/** whole textpage text (UTF-16LE, pdfium uses \r\n line breaks) normalized to \n */
function pageText(m: Pdfium, textPage: number): string {
  const count = m._FPDFText_CountChars(textPage)
  if (count <= 0) return ''
  // pdfium writes count chars plus a UTF-16 NUL terminator
  const buf = m._malloc((count + 1) * 2)
  if (!buf) return ''
  try {
    const written = m._FPDFText_GetText(textPage, 0, count, buf)
    if (written <= 0) return ''
    return Buffer.from(m.HEAPU8.subarray(buf, buf + written * 2))
      .toString('utf16le')
      .replace(/\0+$/, '')
      .replace(/\r\n?/g, '\n')
      .trimEnd()
  } finally {
    m._free(buf)
  }
}

export function readPdfText(bytes: Uint8Array): Promise<PdfTextDoc> {
  return chainPdfium(async () => {
    const m = await loadPdfium()
    return withDocument(m, bytes, async (doc) => {
      const pages: PdfTextDoc['pages'] = []
      for (let index = 0; index < m._FPDF_GetPageCount(doc); index++) {
        const page = m._FPDF_LoadPage(doc, index)
        if (!page) {
          pages.push({ page: index + 1, text: '' })
          continue
        }
        try {
          const textPage = m._FPDFText_LoadPage(page)
          if (!textPage) {
            pages.push({ page: index + 1, text: '' })
            continue
          }
          try {
            pages.push({ page: index + 1, text: pageText(m, textPage) })
          } finally {
            m._FPDFText_ClosePage(textPage)
          }
        } finally {
          m._FPDF_ClosePage(page)
        }
      }
      return { pages }
    })
  })
}
