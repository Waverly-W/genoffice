<h1 align="center">GenOffice</h1>

<p align="center"><b>A free, open-source office suite that runs entirely on your machine.</b><br>
Word, Excel, PowerPoint, PDF, Markdown and HTML files, opened, edited and saved back in their real formats.</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/github/license/genspark-ai/genoffice" alt="License: Apache-2.0"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases/latest"><img src="https://img.shields.io/github/v/release/genspark-ai/genoffice" alt="Latest release"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases"><img src="https://img.shields.io/github/downloads/genspark-ai/genoffice/total" alt="Downloads"></a>
  <a href="https://github.com/genspark-ai/genoffice/stargazers"><img src="https://img.shields.io/github/stars/genspark-ai/genoffice?style=flat" alt="GitHub stars"></a>
</p>

<p align="center"><b>English</b> · <a href="docs/i18n/README.es.md">Español</a> · <a href="docs/i18n/README.pt-BR.md">Português (Brasil)</a> · <a href="docs/i18n/README.de.md">Deutsch</a> · <a href="docs/i18n/README.fr.md">Français</a> · <a href="docs/i18n/README.zh-CN.md">简体中文</a> · <a href="docs/i18n/README.zh-TW.md">繁體中文</a> · <a href="docs/i18n/README.ko.md">한국어</a> · <a href="docs/i18n/README.ja.md">日本語</a> · <a href="docs/i18n/README.ar.md">العربية</a> · <a href="docs/i18n/README.ru.md">Русский</a> · <a href="docs/i18n/README.it.md">Italiano</a> · <a href="docs/i18n/README.nl.md">Nederlands</a> · <a href="docs/i18n/README.pl.md">Polski</a> · <a href="docs/i18n/README.cs.md">Čeština</a> · <a href="docs/i18n/README.id.md">Bahasa Indonesia</a> · <a href="docs/i18n/README.ms.md">Bahasa Melayu</a> · <a href="docs/i18n/README.th.md">ไทย</a> · <a href="docs/i18n/README.hi.md">हिन्दी</a> · <a href="docs/i18n/README.he.md">עברית</a> · <a href="docs/i18n/README.vi.md">Tiếng Việt</a></p><!-- lang-switcher · public-hygiene: allow -->

<p align="center">
  <a href="#download"><b>Download</b></a> ·
  <a href="#development"><b>Development</b></a> ·
  <a href="PRIVACY.md"><b>Privacy</b></a>
</p>

GenOffice is a free, open-source alternative to Microsoft Office for macOS,
Windows and Linux. It opens and saves native `.docx`, `.xlsx` and `.pptx`
files and edits PDF, Markdown and HTML, all in one tabbed window. There is no
account to create and nothing to sign in to: files open, edit, save and
convert on your own computer.

- **Real formats, byte-preserving.** Only what you edit is rewritten. Everything
  else in the file survives byte-for-byte, so documents keep working in Word,
  Excel and PowerPoint.
- **Local by design.** No cloud, no upload. PDF → Word / Excel / PowerPoint,
  Markdown → Word and HTML → Word all run on-device.
- **Six editors, one window.** Docs, Sheets, Slides, PDF, Markdown and HTML
  share one tab strip, one Home screen and one set of settings.
- **Find files by what they say.** The Home screen searches the names, folders
  and full text of your `.docx`, `.xlsx`, `.pptx`, PDF, Markdown and HTML files
  from a local index, CJK included.
- **21 interface languages**, light, dark and system themes, and a built-in
  user guide (F1) in every language.

**Get it:** [macOS](https://github.com/genspark-ai/genoffice/releases/latest) (Apple Silicon and Intel) ·
[Windows](https://github.com/genspark-ai/genoffice/releases/latest) (x64 and Arm) ·
[Linux](https://github.com/genspark-ai/genoffice/releases/latest) (deb, rpm, AppImage) —
details and requirements in [Download](#download).

## The apps

| App          | Opens and saves                       | Highlights                                                                                                                                                                       |
| ------------ | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Docs**     | `.docx` (and `.doc` to open)          | True WYSIWYG pagination on Word's line metrics; styles, tables, headers and footers, footnotes, table of contents, comments, tracked changes, compare, equations and ink.        |
| **Sheets**   | `.xlsx`, `.xls`, `.csv`, `.tsv`       | An in-house Rust `.xlsx` engine in its own process; live formulas, charts, pivot tables, slicers, conditional formatting, data validation, formula tracing and sheet protection. |
| **Slides**   | `.pptx` (and `.ppt` to open)          | Masters and layouts, smart guides, non-destructive cropping, transitions and animations, speaker notes, presenter view and PDF export.                                           |
| **PDF**      | `.pdf`                                | Edit text inside the page through PDFium, annotate, fill forms, sign, redact, reorder, split and merge pages; convert to Word, Excel or PowerPoint on-device with system OCR. |
| **Markdown** | `.md`, `.markdown`, `.txt`, `.json`   | A block editor over plain Markdown with tables, task lists, Mermaid diagrams and math, a byte-faithful source view, and export to Word, PDF and images.                          |
| **HTML**     | `.html`, `.htm`                       | A live preview with an element inspector, a CodeMirror source view, full-screen presenting, and export to Word, PDF or a single self-contained HTML file.                        |

### Docs

Docs opens a file the way Word lays it out — multi-column sections,
full-bleed images, shaded tables, headers and footers, pagination on Word's
line metrics. Styles, comments, tracked changes, equations and ink
round-trip untouched, and a save rewrites only the paragraphs you changed.

### Sheets

Calculation runs in a separate Rust engine process, so a crash there never
takes the app down. Formulas stay live formulas, charts and PivotCharts are
real objects in the saved workbook, and protection, defined names and
conditional formats are written back into the `.xlsx`.

### Slides

A PowerPoint-style editor with masters and layouts, smart guides, tables,
charts, transitions and animations. Untouched slides stay byte-identical on
save; notes, masters and annotations persist, and decks export to PDF or one
PNG per slide.

### PDF

Edit mode outlines every text block for in-place retyping; the content stream
is rewritten through PDFium with the original fonts, not a cover-up
annotation. **PDF Converter → PDF to Word** produces an editable `.docx` that
opens in Docs next to the source. Excel and PowerPoint targets work the same
way, and on macOS and Windows scanned pages go through the system OCR.
Redaction physically removes the covered content in a new copy.

### Markdown and HTML

Markdown is a Tiptap block editor written back as plain `.md`, with a
byte-faithful source view for the raw text. The HTML editor previews the page
in the built-in Chromium; click any element to restyle it, double-click to
edit its text, or switch to the source view. **Export as Word** in either app
produces a native, editable `.docx` entirely on-device.

## Why GenOffice

- **Open source**, Apache-2.0, built in the open on GitHub.
- **Yours to run.** Native apps for macOS, Windows and Linux; files stay on your
  disk and every edit, save and conversion happens on your machine.
- **Real Office files.** Native `.docx`, `.xlsx` and `.pptx`, byte-preserving:
  the parts of a file you did not touch are copied exactly as they were.
- **PDF done properly.** Edit text inside the page, and convert PDF to Word,
  Excel or PowerPoint on-device, with system OCR for scans.
- **Markdown and HTML too**, with local export to Word and PDF.
- **No account.** Nothing to sign up for, no credits, no subscription.
- **Free**, for individuals and teams alike.

The whole suite ships light, dark and system themes. Themes only change what
is on screen: exports, prints and saved files always keep the document's own
colors.

## Download

| Platform                             | Requirements                                          | Download                                                                                  |
| ------------------------------------ | ----------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **macOS** — Apple Silicon (arm64)    | macOS 11+                                             | [Latest `.dmg` (arm64)](https://github.com/genspark-ai/genoffice/releases/latest)         |
| **macOS** — Intel (x64)              | macOS 11+                                             | [Latest `.dmg` (x64)](https://github.com/genspark-ai/genoffice/releases/latest)           |
| **Windows** (x64, most PCs)          | Windows 10+, Intel/AMD                                | [Latest `-x64.exe` installer](https://github.com/genspark-ai/genoffice/releases/latest)   |
| **Windows** on Arm (ARM64)           | Windows 11 on Arm (Snapdragon X and similar)          | [Latest `-arm64.exe` installer](https://github.com/genspark-ai/genoffice/releases/latest) |
| **Linux** — Debian / Ubuntu          | x86_64, glibc 2.34+ (Ubuntu 22.04 or newer)           | [Latest `.deb`](https://github.com/genspark-ai/genoffice/releases/latest)                 |
| **Linux** — Fedora / RHEL / openSUSE | x86_64, glibc 2.34+ (Fedora 35+, RHEL 9+, Leap 15.6+) | [Latest `.rpm`](https://github.com/genspark-ai/genoffice/releases/latest)                 |
| **Linux** — other distributions      | x86_64, glibc 2.34+, FUSE 2                           | [Latest `.AppImage`](https://github.com/genspark-ai/genoffice/releases/latest)            |

All builds come from `main`; the macOS and Windows installers are signed.
Older versions are on the [Releases](https://github.com/genspark-ai/genoffice/releases) page.
Flatpak, Nix and a headless Docker batch-conversion image are described in
[packaging/README.md](packaging/README.md).

<details>
<summary><b>Installing on Linux</b></summary>

The deb installs with apt — it pulls in the dependencies and adds GenOffice
to the applications menu:

```bash
sudo apt install ./genoffice_<version>_amd64.deb
```

On Fedora / RHEL-family / openSUSE, install the rpm instead:

```bash
sudo dnf install ./genoffice-<version>.x86_64.rpm     # Fedora / RHEL family
sudo zypper install ./genoffice-<version>.x86_64.rpm  # openSUSE
```

The AppImage runs in place: install the FUSE 2 runtime
(`sudo apt install libfuse2`; on Ubuntu 24.04 the package is `libfuse2t64`),
make the file executable, then run it:

```bash
chmod +x GenOffice-<version>.AppImage
./GenOffice-<version>.AppImage
```

</details>

## How it works

Seven Electron apps — Docs, Sheets, Slides, PDF, Markdown, HTML and the
tabbed shell — share one engine layer of pure TypeScript packages plus a Rust
sidecar for `.xlsx`. The original file is always the source of truth: edits
are applied as narrow patches, and everything the editor did not touch
survives the round trip untouched.

```
open docx ─► archive original by hash (never touched)
          ─► parse word/document.xml into a block tree, each block anchored to its original XML
          ─► Tiptap editor (dirty tracking per block)
save      ─► dirty blocks → OOXML fragments (referencing existing styles only)
          ─► splice into the original document.xml; untouched blocks keep their bytes
          ─► repack the zip; every other entry is copied byte-for-byte
```

The engines live under `packages/` (`docx-engine`, `pptx-engine`,
`pptx-render`, `pptx-ops`, `pdf2docx`, `html2docx`, `xlsx-gateway`,
`file-parse`, `font-metrics`, `i18n`, `ui` and more); the Rust `.xlsx` engine
is in `apps/sheets/native/xlsx-engine`. [CONTRIBUTING.md](CONTRIBUTING.md)
has the package-by-package tour.

## Development

Prerequisites: Node 22+, npm 10+, and a Rust toolchain (`cargo` on PATH) for
the Sheets `.xlsx` sidecar.

```bash
npm install
npm run fixtures     # generate test .docx fixtures
npm run dev          # all six editors + shell against Vite dev servers
npm run dev:docs     # a single app (same pattern works per workspace)
npm run build:all    # build every app and the shell
npm run shell        # build everything, then launch the shell in Electron
npm test             # engine + app unit tests (docs/sheets/slides need no display)
npm run typecheck    # tsc --noEmit across every workspace
npm run lint         # ESLint across the repository
npm run dist:mac     # package macOS dmg (regenerates third-party notices)
npm run dist:win     # package Windows nsis installer
npm run dist:linux   # package Linux AppImage + deb + rpm
```

`npm run build -w @genoffice/sheets` compiles the Rust sidecar automatically.
See [CONTRIBUTING.md](CONTRIBUTING.md) for the checks every change must pass
and how pull requests land.

## Community

- **Report a bug or request a feature** in
  [GitHub Issues](https://github.com/genspark-ai/genoffice/issues).
- **Star the repo** if GenOffice is useful to you — it is the best way to
  support the project.

## FAQ

<details>
<summary><b>Is GenOffice free?</b></summary>

Yes. GenOffice is free and open-source under the Apache-2.0 license — no
trial, no account and no paid tier.

</details>

<details>
<summary><b>Can GenOffice open Microsoft Word, Excel and PowerPoint files?</b></summary>

Yes. GenOffice opens and saves native `.docx`, `.xlsx` and `.pptx` files.
Saving is byte-preserving: parts of the file you didn't touch are written
back byte-for-byte, so documents keep working in Microsoft Office.

</details>

<details>
<summary><b>Does GenOffice work offline?</b></summary>

Yes. Opening, editing, saving and converting documents is entirely local and
needs no network connection. The network is only used for update checks,
optional font downloads and the anonymous usage statistics you can switch off
in Settings → General.

</details>

<details>
<summary><b>Can GenOffice edit PDF files?</b></summary>

Yes — real PDF text and image editing that rewrites the page content stream
with the original fonts preserved, not cover-up annotations.

</details>

<details>
<summary><b>Can GenOffice convert PDF to Word, Excel or PowerPoint?</b></summary>

Yes — entirely on-device: PDFium character-level extraction plus
geometry-based layout analysis, no cloud service, no upload. Scanned pages
are covered too: on macOS and Windows the system OCR reads them, so they
convert to editable text rather than a page image.

</details>

<details>
<summary><b>Can GenOffice convert HTML to Word?</b></summary>

Yes — Export as Word in the HTML app produces a native, editable `.docx`
entirely on-device. The page is rendered in the built-in Chromium and reduced
to real Word structures: headings, paragraphs, lists, tables, cards, KPI rows,
form fields and page backgrounds; only visuals with no Word counterpart
(charts, icons, decorated boxes) are embedded as pictures.

</details>

<details>
<summary><b>Does GenOffice collect any data?</b></summary>

Official packaged builds send limited anonymous usage analytics by default,
and you can disable reporting at any time under Settings → General. Analytics
never sends document content, file names, file paths or email addresses. See
[GenOffice Privacy](PRIVACY.md) for the complete event and data disclosures.

</details>

## Security

See [SECURITY.md](SECURITY.md) for the process security posture (renderer
sandboxing, IPC validation, external-link gating).

## Acknowledgements

GenOffice would not be possible without these open-source projects:

- [Electron](https://www.electronjs.org/) — the desktop runtime for every app.
- [Univer](https://github.com/dream-num/univer) (Apache-2.0) — the spreadsheet
  UI core that Sheets extends.
- [PDFium](https://pdfium.googlesource.com/pdfium/) (BSD-3-Clause, bundled via
  [@embedpdf/pdfium](https://github.com/embedpdf/embed-pdf-viewer)) — the
  content-stream engine behind true PDF text and image editing.
- [pdf.js](https://github.com/mozilla/pdf.js) (Apache-2.0) and
  [pdf-lib](https://github.com/Hopding/pdf-lib) (MIT) — PDF rendering and
  document assembly.
- [Tiptap](https://tiptap.dev/) / [ProseMirror](https://prosemirror.net/) —
  the block editors in Docs and Markdown.
- [CodeMirror](https://codemirror.net/) (MIT) — the source editor in HTML.
- [Konva](https://konvajs.org/) — canvas rendering for Slides and Sheets
  charts.
- [HarfBuzz](https://github.com/harfbuzz/harfbuzz) (wasm) — text-shaping
  metrics for complex scripts.
- [calamine](https://github.com/tafia/calamine) and
  [IronCalc](https://github.com/ironcalc/IronCalc) — the read and calc layers
  of the Rust xlsx sidecar.
- [libeot](https://github.com/umanwizard/libeot) (MPL-2.0) — the MicroType
  Express decoder for embedded PowerPoint fonts, ported to TypeScript.
- [React](https://react.dev/) (MIT) — the UI layer of every app.
- [Mermaid](https://mermaid.js.org/) (MIT) and [KaTeX](https://katex.org/)
  (MIT) — diagrams and math in Markdown and Docs.
- [opentype.js](https://opentype.js.org/) (MIT) — font parsing for metrics
  and glyph lookup.
- [JSZip](https://stuk.github.io/jszip/) (MIT) and
  [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser)
  (MIT) — the OOXML container and XML layers.
- [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons)
  (MIT) — the icon set across the ribbons.
- [electron-updater](https://www.electron.build/) (MIT) — in-app updates.
- Liberation, Carlito, Caladea, and Noto CJK fonts (OFL/Apache-2.0) — bundled
  document fonts.

`npm run notices` regenerates the bundled third-party license summary
(`tools/gen-third-party-notices.mjs`); all runtime dependencies are
MIT/Apache-2.0/BSD-3-Clause/OFL.

## License

GenOffice is licensed under the [Apache License 2.0](LICENSE), with one
exception: the `ee/` directory is reserved for future enterprise modules and
is covered by the [GenOffice Enterprise License](ee/LICENSE).

The GenOffice and Genspark names and logos are trademarks of Mainfunc, Inc.
The Apache-2.0 license does not grant permission to use them (see section 6);
forks should use their own branding.
