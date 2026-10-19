<h1 align="center">GenOffice</h1>

<p align="center"><b>一套完全在你的電腦上執行的免費開源辦公套件。</b><br>
Word、Excel、PowerPoint、PDF、Markdown 與 HTML 檔案，開啟、編輯後依然以原生格式存回。</p>

<p align="center">
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/genspark-ai/genoffice" alt="License: Apache-2.0"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases/latest"><img src="https://img.shields.io/github/v/release/genspark-ai/genoffice" alt="Latest release"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases"><img src="https://img.shields.io/github/downloads/genspark-ai/genoffice/total" alt="Downloads"></a>
  <a href="https://github.com/genspark-ai/genoffice/stargazers"><img src="https://img.shields.io/github/stars/genspark-ai/genoffice?style=flat" alt="GitHub stars"></a>
</p>

<p align="center"><a href="../../README.md">English</a> · <a href="README.es.md">Español</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.zh-CN.md">简体中文</a> · <b>繁體中文</b> · <a href="README.ko.md">한국어</a> · <a href="README.ja.md">日本語</a> · <a href="README.ar.md">العربية</a> · <a href="README.ru.md">Русский</a> · <a href="README.it.md">Italiano</a> · <a href="README.nl.md">Nederlands</a> · <a href="README.pl.md">Polski</a> · <a href="README.cs.md">Čeština</a> · <a href="README.id.md">Bahasa Indonesia</a> · <a href="README.ms.md">Bahasa Melayu</a> · <a href="README.th.md">ไทย</a> · <a href="README.hi.md">हिन्दी</a> · <a href="README.he.md">עברית</a> · <a href="README.vi.md">Tiếng Việt</a></p>

<p align="center">
  <a href="#download"><b>下載</b></a> ·
  <a href="#development"><b>開發</b></a> ·
  <a href="../../PRIVACY.md"><b>隱私權</b></a>
</p>

GenOffice 是一套免費、開源的 Microsoft Office 替代方案，支援 macOS、
Windows 與 Linux。它能開啟並儲存原生的 `.docx`、`.xlsx` 與 `.pptx`
檔案，也能編輯 PDF、Markdown 與 HTML，全部集中在同一個分頁式視窗裡。
不需要建立帳號，也不需要登入：檔案的開啟、編輯、儲存與轉換都在你自己
的電腦上完成。

- **原生格式，位元級保留。** 只有你編輯的部分會被重寫，檔案裡其他
  內容都會原樣保留，文件在 Word、Excel 與 PowerPoint 中依然能正常運作。
- **從設計上就在本機。** 不經雲端，不需上傳。PDF → Word / Excel /
  PowerPoint、Markdown → Word 與 HTML → Word 全部在本機執行。
- **六個編輯器，一個視窗。** Docs、Sheets、Slides、PDF、Markdown 與 HTML
  共用同一排分頁、同一個主畫面與同一套設定。
- **依內容找檔案。** 主畫面會透過本機索引，搜尋 `.docx`、`.xlsx`、`.pptx`、
  PDF、Markdown 與 HTML 檔案的名稱、所在資料夾與全文，也支援中日韓文字。
- **21 種介面語言**，亮色、深色與跟隨系統三種主題，以及涵蓋每種語言的
  內建使用指南（F1）。

**立即取得：** [macOS](https://github.com/genspark-ai/genoffice/releases/latest)（Apple Silicon 與 Intel）·
[Windows](https://github.com/genspark-ai/genoffice/releases/latest)（x64 與 Arm）·
[Linux](https://github.com/genspark-ai/genoffice/releases/latest)（deb、rpm、AppImage）——
詳細內容與系統需求請見[下載](#download)。

## 應用程式一覽

| 應用程式     | 開啟與儲存                           | 特色                                                                                                                                       |
| ------------ | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Docs**     | `.docx`（`.doc` 僅能開啟）           | 依 Word 行距度量進行真正所見即所得的分頁；樣式、表格、頁首與頁尾、註腳、目錄、註解、追蹤修訂、比較、方程式與筆跡。                         |
| **Sheets**   | `.xlsx`、`.xls`、`.csv`、`.tsv`      | 在獨立行程中執行的自研 Rust `.xlsx` 引擎；即時公式、圖表、樞紐分析表、交叉分析篩選器、設定格式化的條件、資料驗證、公式追蹤與工作表保護。   |
| **Slides**   | `.pptx`（`.ppt` 僅能開啟）           | 母片與版面配置、智慧參考線、非破壞性裁剪、轉場與動畫、演講者備忘稿、簡報者檢視畫面與 PDF 匯出。                                           |
| **PDF**      | `.pdf`                               | 透過 PDFium 在頁面內編輯文字、加上註解、填寫表單、簽署、塗黑、重新排序、分割與合併頁面；搭配系統 OCR 在本機轉換為 Word、Excel 或 PowerPoint。 |
| **Markdown** | `.md`、`.markdown`、`.txt`、`.json`  | 以純 Markdown 為基礎的區塊編輯器，支援表格、待辦清單、Mermaid 圖表與數學公式，提供位元級忠實的原始碼檢視，並可匯出為 Word、PDF 與圖片。   |
| **HTML**     | `.html`、`.htm`                      | 附元素檢查器的即時預覽、CodeMirror 原始碼檢視、全螢幕簡報，並可匯出為 Word、PDF 或單一自足式 HTML 檔案。                                   |

### Docs

Docs 以 Word 的排版方式開啟檔案——多欄章節、滿版圖片、網底表格、頁首與頁尾，
並依 Word 的行距度量分頁。樣式、註解、追蹤修訂、方程式與筆跡都能原封不動地
往返，儲存時只會重寫你改過的段落。

### Sheets

計算在獨立的 Rust 引擎行程中執行，因此那裡就算當掉也不會拖垮整個應用程式。
公式始終是即時公式，圖表與樞紐分析圖是儲存後活頁簿中的真實物件，保護設定、
已定義名稱與設定格式化的條件都會寫回 `.xlsx`。

### Slides

一套 PowerPoint 風格的編輯器，支援母片與版面配置、智慧參考線、表格、圖表、
轉場與動畫。儲存時未變更的投影片會保持位元組完全一致；備忘稿、母片與註解都會
保留，簡報可匯出為 PDF，或每張投影片一張 PNG。

### PDF

編輯模式會為每個文字區塊加上外框，讓你就地重新輸入；內容串流會透過 PDFium
以原始字體重寫，而不是用覆蓋式注解遮蓋。**PDF 轉換器 → PDF 轉 Word** 會產生
可編輯的 `.docx`，並在 Docs 中於原始檔旁開啟。轉成 Excel 與 PowerPoint 的方式
相同；在 macOS 與 Windows 上，掃描頁面會交由系統 OCR 處理。塗黑會在新的副本
中真正移除被遮住的內容。

### Markdown 與 HTML

Markdown 採用 Tiptap 區塊編輯器，寫回時仍是純 `.md`，並提供位元級忠實的原始碼
檢視來查看原始文字。HTML 編輯器會在內建的 Chromium 中預覽頁面；按一下任何元素
即可重新設定樣式，按兩下即可編輯文字，也可以切換到原始碼檢視。兩個應用程式中
的 **匯出為 Word** 都會完全在本機產生原生、可編輯的 `.docx`。

## 為什麼選 GenOffice

- **開源**，採用 Apache-2.0 授權，在 GitHub 上公開開發。
- **由你掌控。** macOS、Windows 與 Linux 原生應用程式；檔案留在本機硬碟，每一次
  編輯、儲存與轉換都在你的裝置上完成。
- **真正的 Office 檔案。** 原生 `.docx`、`.xlsx` 與 `.pptx`，位元級保留：未變更
  的部分會原樣複製。
- **認真做好 PDF。** 直接在頁面內編輯文字，並在本機將 PDF 轉換為 Word、Excel 或
  PowerPoint，掃描檔案支援系統 OCR。
- **同樣支援 Markdown 與 HTML**，並可在本機匯出為 Word 與 PDF。
- **不需帳號。** 不用註冊，沒有點數，也沒有訂閱。
- **免費**，個人與團隊皆可使用。

整套軟體支援亮色、深色與跟隨系統三種主題。主題只會改變畫面顯示：
匯出、列印與儲存的檔案永遠保留文件本身的原始色彩。

<a id="download"></a>

## 下載

| 平台                                 | 系統需求                                               | 下載                                                                                     |
| ------------------------------------ | ------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| **macOS** — Apple Silicon（arm64）   | macOS 11 以上                                          | [最新版 `.dmg`（arm64）](https://github.com/genspark-ai/genoffice/releases/latest)       |
| **macOS** — Intel（x64）             | macOS 11 以上                                          | [最新版 `.dmg`（x64）](https://github.com/genspark-ai/genoffice/releases/latest)         |
| **Windows**（x64，一般 PC）          | Windows 10 以上，Intel/AMD                             | [最新版 `-x64.exe` 安裝程式](https://github.com/genspark-ai/genoffice/releases/latest)   |
| **Windows** on Arm（ARM64）          | Windows 11 on Arm（Snapdragon X 及同類機型）           | [最新版 `-arm64.exe` 安裝程式](https://github.com/genspark-ai/genoffice/releases/latest) |
| **Linux** — Debian / Ubuntu          | x86_64，glibc 2.34+（Ubuntu 22.04 或以上）             | [最新版 `.deb`](https://github.com/genspark-ai/genoffice/releases/latest)                |
| **Linux** — Fedora / RHEL / openSUSE | x86_64，glibc 2.34+（Fedora 35+、RHEL 9+、Leap 15.6+） | [最新版 `.rpm`](https://github.com/genspark-ai/genoffice/releases/latest)                |
| **Linux** — 其他發行版               | x86_64，glibc 2.34+，FUSE 2                            | [最新版 `.AppImage`](https://github.com/genspark-ai/genoffice/releases/latest)           |

所有版本皆由 `main` 分支建置，macOS 與 Windows 安裝程式皆有簽署。
較舊版本可在[發行頁面](https://github.com/genspark-ai/genoffice/releases)找到。
Flatpak、Nix 以及無頭的 Docker 批次轉換映像，說明請見
[packaging/README.md](../../packaging/README.md)。

<details>
<summary><b>在 Linux 上安裝</b></summary>

deb 套件可用 apt 安裝——會自動處理相依套件，並將 GenOffice 加入
應用程式選單：

```bash
sudo apt install ./genoffice_<version>_amd64.deb
```

在 Fedora / RHEL 家族 / openSUSE 上，改安裝 rpm 套件：

```bash
sudo dnf install ./genoffice-<version>.x86_64.rpm     # Fedora / RHEL 家族
sudo zypper install ./genoffice-<version>.x86_64.rpm  # openSUSE
```

AppImage 可直接就地執行：先安裝 FUSE 2 執行環境
（`sudo apt install libfuse2`；Ubuntu 24.04 上的套件名稱是
`libfuse2t64`），再將檔案設為可執行，然後執行它：

```bash
chmod +x GenOffice-<version>.AppImage
./GenOffice-<version>.AppImage
```

</details>

## 運作原理

七個 Electron 應用程式——Docs、Sheets、Slides、PDF、Markdown、HTML
與分頁式外殼——共用一層純 TypeScript 套件所構成的引擎，再加上一個
處理 `.xlsx` 的 Rust sidecar。原始檔案永遠是唯一的真相來源：編輯以
局部差異的方式套用，編輯器沒動過的內容在往返過程中完全不受影響。

```
open docx ─► 依雜湊封存原始檔案（永遠不動它）
          ─► 解析 word/document.xml 成區塊樹，每個區塊都對應到原始 XML
          ─► Tiptap 編輯器（逐區塊追蹤已變更內容）
save      ─► 已變更的區塊 → OOXML 片段（只參照既有樣式）
          ─► 拼接回原始 document.xml；未變更的區塊保留原有位元組
          ─► 重新打包 zip；其他每個項目皆逐位元組複製
```

各引擎位於 `packages/` 底下（`docx-engine`、`pptx-engine`、`pptx-render`、
`pptx-ops`、`pdf2docx`、`html2docx`、`xlsx-gateway`、`file-parse`、
`font-metrics`、`i18n`、`ui` 等）；Rust `.xlsx` 引擎位於
`apps/sheets/native/xlsx-engine`。各套件的逐一介紹收錄在
[CONTRIBUTING.md](../../CONTRIBUTING.md)。

<a id="development"></a>

## 開發

前置需求：Node 22+、npm 10+，以及供 Sheets 的 `.xlsx` sidecar 使用的 Rust
工具鏈（`cargo` 需在 PATH 中）。

```bash
npm install
npm run fixtures     # 產生測試用的 .docx fixture
npm run dev          # 六個編輯器 + 外殼，皆跑在 Vite 開發伺服器上
npm run dev:docs     # 只跑單一應用程式（其他 workspace 也是同樣模式）
npm run build:all    # 建置所有應用程式與外殼
npm run shell        # 建置全部，然後在 Electron 中啟動外殼
npm test             # 引擎 + 應用程式單元測試（docs/sheets/slides 不需要顯示器）
npm run typecheck    # 對整個 workspace 執行 tsc --noEmit
npm run lint         # 對整個儲存庫執行 ESLint
npm run dist:mac     # 打包 macOS dmg（會重新產生第三方授權聲明）
npm run dist:win     # 打包 Windows nsis 安裝程式
npm run dist:linux   # 打包 Linux AppImage + deb + rpm
```

執行 `npm run build -w @genoffice/sheets` 會自動編譯 Rust sidecar。每次變更
需要通過哪些檢查、PR 如何合併，詳見 [CONTRIBUTING.md](../../CONTRIBUTING.md)。

## 社群

- 在 [GitHub Issues](https://github.com/genspark-ai/genoffice/issues)
  **回報問題或提出功能需求**。
- 如果 GenOffice 對你有幫助，**幫這個專案按個星星**——這是支持這個
  專案最好的方式。

## 常見問題

<details>
<summary><b>GenOffice 是免費的嗎？</b></summary>

是的。GenOffice 以 Apache-2.0 授權免費開源——沒有試用期、不需要帳號，
也沒有付費方案。

</details>

<details>
<summary><b>GenOffice 能開啟 Microsoft Word、Excel 與 PowerPoint 檔案嗎？</b></summary>

可以。GenOffice 能開啟並儲存原生的 `.docx`、`.xlsx` 與 `.pptx` 檔案。
儲存時採位元級保留：你沒動過的部分會原樣寫回，文件在 Microsoft
Office 中依然能正常使用。

</details>

<details>
<summary><b>GenOffice 能離線使用嗎？</b></summary>

可以。開啟、編輯、儲存與轉換文件完全在本機進行，不需要網路連線。只有
檢查更新、選用的字型下載，以及可在「設定 → 一般」中關閉的匿名使用統計
才會用到網路。

</details>

<details>
<summary><b>GenOffice 能編輯 PDF 檔案嗎？</b></summary>

可以——這是真正的 PDF 文字與圖片編輯，會重寫頁面內容串流並保留
原始字體，而不是用覆蓋式的注解來遮蓋。

</details>

<details>
<summary><b>GenOffice 能把 PDF 轉換成 Word、Excel 或 PowerPoint 嗎？</b></summary>

可以——完全在本機完成：透過 PDFium 進行字元層級擷取，再搭配以幾何
資訊為基礎的版面分析，不經雲端服務，也不需要上傳檔案。掃描頁面
同樣支援：在 macOS 與 Windows 上會由系統 OCR 讀取內容，因此轉出的
是可編輯文字，而不是頁面圖片。

</details>

<details>
<summary><b>GenOffice 能把 HTML 轉換成 Word 嗎？</b></summary>

可以——HTML 應用程式中的「匯出為 Word」會完全在本機產生原生、
可編輯的 `.docx`。頁面會在內建的 Chromium 中渲染，再轉換成真正的
Word 結構：標題、段落、清單、表格、卡片、KPI 列、表單欄位與頁面
背景；只有沒有對應 Word 結構的視覺元素（圖表、圖示、裝飾方塊）
才會以圖片形式嵌入。

</details>

<details>
<summary><b>GenOffice 會收集任何資料嗎？</b></summary>

官方打包版本預設會傳送有限的匿名使用分析資料，你隨時可以在「設定 → 一般」
中關閉這項回報。分析資料絕不會包含文件內容、檔案名稱、檔案路徑或電子郵件
地址。完整的事件與資料揭露內容請見
[GenOffice 隱私權政策](../../PRIVACY.md)。

</details>

## 安全性

行程層級的安全防護措施（渲染器沙箱化、IPC 驗證、外部連結攔截），
詳見 [SECURITY.md](../../SECURITY.md)。

## 致謝

沒有以下這些開源專案，就不會有 GenOffice：

- [Electron](https://www.electronjs.org/) — 每個應用程式所使用的桌面
  執行環境。
- [Univer](https://github.com/dream-num/univer)（Apache-2.0）— Sheets
  延伸使用的試算表 UI 核心。
- [PDFium](https://pdfium.googlesource.com/pdfium/)（BSD-3-Clause，
  透過 [@embedpdf/pdfium](https://github.com/embedpdf/embed-pdf-viewer)
  引入）— 支撐真正的 PDF 文字與圖片編輯的內容串流引擎。
- [pdf.js](https://github.com/mozilla/pdf.js)（Apache-2.0）與
  [pdf-lib](https://github.com/Hopding/pdf-lib)（MIT）— PDF 渲染與
  文件組裝。
- [Tiptap](https://tiptap.dev/) / [ProseMirror](https://prosemirror.net/)
  — Docs 與 Markdown 所使用的區塊編輯器。
- [CodeMirror](https://codemirror.net/)（MIT）— HTML 應用程式中的
  原始碼編輯器。
- [Konva](https://konvajs.org/) — Slides 與 Sheets 圖表所使用的畫布
  渲染引擎。
- [HarfBuzz](https://github.com/harfbuzz/harfbuzz)（wasm）— 複雜文字
  系統的文字排版度量。
- [calamine](https://github.com/tafia/calamine) 與
  [IronCalc](https://github.com/ironcalc/IronCalc) — Rust xlsx sidecar
  的讀取與計算層。
- [libeot](https://github.com/umanwizard/libeot)（MPL-2.0）— 用於內嵌
  PowerPoint 字型的 MicroType Express 解碼器，已移植為 TypeScript。
- [React](https://react.dev/)（MIT）— 每個應用程式的 UI 層。
- [Mermaid](https://mermaid.js.org/)（MIT）與 [KaTeX](https://katex.org/)
  （MIT）— Markdown 與 Docs 中的圖表與數學公式。
- [opentype.js](https://opentype.js.org/)（MIT）— 用於度量資訊解析與字形
  查詢的字型解析程式庫。
- [JSZip](https://stuk.github.io/jszip/)（MIT）與
  [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser)
  （MIT）— OOXML 容器與 XML 層。
- [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons)
  （MIT）— 各功能區所使用的圖示集。
- [electron-updater](https://www.electron.build/)（MIT）— 應用程式內更新。
- Liberation、Carlito、Caladea 與 Noto CJK 字型（OFL/Apache-2.0）—
  隨附的文件字型。

執行 `npm run notices` 會重新產生內建的第三方授權摘要
（`tools/gen-third-party-notices.mjs`）；所有執行期相依套件皆採用
MIT/Apache-2.0/BSD-3-Clause/OFL 授權。

## 授權

GenOffice 採用 [Apache License 2.0](../../LICENSE) 授權，唯一例外是
`ee/` 目錄，該目錄保留給未來的企業模組，適用
[GenOffice 企業授權](../../ee/LICENSE)。

GenOffice 與 Genspark 的名稱與標誌皆為 Mainfunc, Inc. 的商標。
Apache-2.0 授權並未授予使用這些商標的權利（詳見第 6 節）；
基於本專案的分支請使用自己的品牌識別。
