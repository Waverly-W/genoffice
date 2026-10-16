import { test, expect, type Page } from '@playwright/test'
import { mkdtempSync, realpathSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import JSZip from 'jszip'
import { launchShell, closeAndSaveVideo, waitForPageWithUrl } from './helpers'

/**
 * A closed docs tab is detached but never destroyed (destroying it freezes
 * the shell), so its renderer lives until quit. It must not keep the document:
 * the editor tree is unmounted on docs:teardown, so the orphan's JS heap and
 * DOM drop to an empty page instead of holding the whole paginated document.
 */

interface AidocsWindow {
  __aidocs?: { editor?: unknown }
}

async function bigDocx(paragraphs: number): Promise<Buffer> {
  const zip = new JSZip()
  zip.file(
    '[Content_Types].xml',
    '<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>',
  )
  zip.file(
    '_rels/.rels',
    '<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>',
  )
  const sentence =
    'The quick brown fox jumps over the lazy dog while the renderer keeps every page laid out. '
  const body = Array.from(
    { length: paragraphs },
    (_, i) =>
      `<w:p><w:r><w:t xml:space="preserve">${i + 1}. ${sentence.repeat(3)}</w:t></w:r></w:p>`,
  ).join('')
  zip.file(
    'word/document.xml',
    `<?xml version="1.0" encoding="UTF-8"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${body}</w:body></w:document>`,
  )
  return zip.generateAsync({ type: 'nodebuffer' })
}

async function heapAndNodes(page: Page): Promise<{ heapMB: number; nodes: number }> {
  const cdp = await page.context().newCDPSession(page)
  try {
    await cdp.send('HeapProfiler.collectGarbage')
    const heap = (await cdp.send('Runtime.getHeapUsage')) as { usedSize: number }
    const dom = (await cdp.send('Memory.getDOMCounters')) as { nodes: number }
    return { heapMB: heap.usedSize / (1024 * 1024), nodes: dom.nodes }
  } finally {
    await cdp.detach().catch(() => {})
  }
}

test.describe('closed docs tab', () => {
  let dir: string
  let docPath: string

  test.beforeEach(async () => {
    dir = realpathSync(mkdtempSync(join(tmpdir(), 'genoffice-e2e-closed-tab-')))
    docPath = join(dir, 'big.docx')
    writeFileSync(docPath, await bigDocx(3000))
  })

  test.afterEach(() => {
    rmSync(dir, { recursive: true, force: true })
  })

  test('releases the document held by its orphaned renderer', async () => {
    test.setTimeout(240_000)
    const launched = await launchShell({
      onboardingSeen: true,
      videoDir: 'docs-closed-tab-release',
      openFile: docPath,
    })
    const { app } = launched
    try {
      const shell = await waitForPageWithUrl(app, 'shell/out')
      const docs = await waitForPageWithUrl(app, '://docs/')
      await docs.waitForFunction(
        () => Boolean((window as unknown as AidocsWindow).__aidocs?.editor),
        undefined,
        { timeout: 60_000 },
      )
      // let the long document finish paginating
      await docs.waitForTimeout(8_000)
      const open = await heapAndNodes(docs)

      const tab = shell.locator('.tab-bar .tab-item', { hasText: 'big.docx' })
      await tab.hover()
      await tab.locator('.tab-close').click()
      await expect(tab).toHaveCount(0)

      // the renderer survives the close (by design) …
      const orphans = await app.evaluate(({ webContents }) =>
        webContents
          .getAllWebContents()
          .filter((wc) => !wc.isDestroyed() && wc.getURL().includes('://docs/'))
          .map((wc) => wc.id),
      )
      expect(orphans.length).toBeGreaterThan(0)

      // … but drops its document
      await expect
        .poll(async () => (await heapAndNodes(docs)).nodes, { timeout: 20_000 })
        .toBeLessThan(Math.max(200, open.nodes / 20))
      const closed = await heapAndNodes(docs)
      console.log(
        `docs renderer open: heap ${open.heapMB.toFixed(1)} MB, ${open.nodes} DOM nodes; ` +
          `after close: heap ${closed.heapMB.toFixed(1)} MB, ${closed.nodes} DOM nodes`,
      )
      // what stays is the empty page's own code; unfixed, the heap did not move at all
      expect(closed.heapMB).toBeLessThan(open.heapMB * 0.6)
    } finally {
      await closeAndSaveVideo(launched, 'docs-closed-tab-release')
    }
  })
})
