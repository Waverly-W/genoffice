import { test, expect, beforeAll } from '@playwright/test'
import { copyFile, mkdtemp, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { launchShell, closeAndSaveVideo, waitForPageWithUrl, screenshotPath } from './helpers'

/**
 * What one file looks like as the app reads it under three names.
 *
 * The file's *content* never changes — only the extension the app dispatches on
 * (apps/markdown/src/shared/text-mode.ts). That is the whole point of the
 * three shots: same bytes, three different editors.
 *
 * What the shots show is the editor swap and the ribbon losing the block
 * controls that cannot act on raw text.
 */

const SAMPLE = `# Deployment notes

Server: db.internal.example.com

<script>
  const KEY = "sk-live-DEMO-0001";
  render(KEY);
</script>

Customer phone: 13800138000
`

let dir = ''
let asMd = ''
let asTxt = ''
let asJson = ''

beforeAll(async () => {
  dir = await mkdtemp(join(tmpdir(), 'gx-md-demo-'))
  asMd = join(dir, 'notes.md')
  asTxt = join(dir, 'notes.txt')
  asJson = join(dir, 'notes.json')
  await writeFile(asMd, SAMPLE)
  await copyFile(asMd, asTxt)
  await copyFile(asMd, asJson)
})

test.describe('the same bytes under three names', () => {
  test('as .md', async () => {
    test.setTimeout(180_000)
    const launched = await launchShell({
      onboardingSeen: true,
      settings: { lang: 'en' },
      videoDir: 'demo-md',
      openFile: asMd,
    })
    try {
      const page = await waitForPageWithUrl(launched.app, '://markdown/')
      await expect(page.locator('.doc-page')).toBeVisible({ timeout: 30_000 })
      await page.waitForTimeout(800)
      await page.screenshot({ path: screenshotPath('demo-1-md-block-editor') })

      // the ribbon: this is the block editor, so the formatting controls are live
      await page.screenshot({
        path: screenshotPath('demo-2-md-ribbon'),
        clip: { x: 0, y: 0, width: 1500, height: 180 },
      })
    } finally {
      await closeAndSaveVideo(launched, 'demo-md')
    }
  })

  test('as .txt', async () => {
    test.setTimeout(180_000)
    const launched = await launchShell({
      onboardingSeen: true,
      settings: { lang: 'en' },
      videoDir: 'demo-txt',
      openFile: asTxt,
    })
    try {
      const page = await waitForPageWithUrl(launched.app, '://markdown/')
      await expect(page.locator('.source-editor')).toBeVisible({ timeout: 30_000 })
      await page.waitForTimeout(800)
      await page.screenshot({ path: screenshotPath('demo-7-txt-source-editor') })

      // the ribbon, to show what the block controls did
      await page.screenshot({
        path: screenshotPath('demo-8-txt-ribbon'),
        clip: { x: 0, y: 0, width: 1500, height: 180 },
      })
    } finally {
      await closeAndSaveVideo(launched, 'demo-txt')
    }
  })

  test('as .json', async () => {
    test.setTimeout(180_000)
    const launched = await launchShell({
      onboardingSeen: true,
      settings: { lang: 'en' },
      videoDir: 'demo-json',
      openFile: asJson,
    })
    try {
      const page = await waitForPageWithUrl(launched.app, '://markdown/')
      await expect(page.locator('.source-editor')).toBeVisible({ timeout: 30_000 })
      await page.waitForTimeout(800)
      // Same bytes, now read as JSON — and they are not JSON. This is the shot
      // that answers "what breaks if I just change the extension".
      await page.screenshot({ path: screenshotPath('demo-10-json-not-json') })
    } finally {
      await closeAndSaveVideo(launched, 'demo-json')
    }
  })
})
