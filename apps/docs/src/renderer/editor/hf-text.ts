/**
 * Paragraph view of a header/footer part for the on-canvas editing surface.
 * Layout-table rows (cells) and images stay out of the text flow and keep
 * their original content.
 */
import {
  PAGE_MARK,
  type HeaderFooter,
  type HfImage,
  type HfParagraph,
  type Run,
} from '@genoffice/docx-engine'

export const PAGE_TOKEN = '{PAGE}'

/** effective paragraphs: rich paras when present, else the legacy single line */
export function hfParasOf(value: HeaderFooter, images?: HfImage[] | null): HfParagraph[] {
  if (value.paras?.length) return value.paras
  const runs: Run[] = value.text ? [{ text: value.text }] : []
  if (value.pageNumber && !value.text.includes('#') && !value.text.includes(PAGE_MARK)) {
    runs.push({ text: runs.length > 0 ? ` ${PAGE_MARK}` : PAGE_MARK })
  }
  // Word reserves exactly the picture height for a picture-only part: no text line
  if (runs.length === 0 && images?.some((im) => !im.floating)) return []
  return [{ align: 'center', runs }]
}

/** Pictures are not editable: they leave the text runs and return to the
 *  same side of the text they came from (a logo before the title stays first). */
export function hfPictureRuns(runs: Run[]): { leading: Run[]; text: Run[]; trailing: Run[] } {
  const leading: Run[] = []
  const text: Run[] = []
  const trailing: Run[] = []
  for (const run of runs) {
    if (run.image) {
      ;(text.length > 0 ? trailing : leading).push({ ...run, text: '' })
      if (run.text === '') continue
    }
    const { image: _image, ...rest } = run
    text.push(rest)
  }
  return { leading, text, trailing }
}
