<h1 align="center">GenOffice</h1>

<p align="center"><b>一款完全在你本机运行的免费开源办公套件。</b><br>
Word、Excel、PowerPoint、PDF、Markdown 和 HTML 文件，打开、编辑后仍以原生格式保存。</p>

<p align="center">
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/genspark-ai/genoffice" alt="许可证：Apache-2.0"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases/latest"><img src="https://img.shields.io/github/v/release/genspark-ai/genoffice" alt="最新版本"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases"><img src="https://img.shields.io/github/downloads/genspark-ai/genoffice/total" alt="下载量"></a>
  <a href="https://github.com/genspark-ai/genoffice/stargazers"><img src="https://img.shields.io/github/stars/genspark-ai/genoffice?style=flat" alt="GitHub Star 数"></a>
</p>

<p align="center"><a href="../../README.md">English</a> · <a href="README.es.md">Español</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <b>简体中文</b> · <a href="README.zh-TW.md">繁體中文</a> · <a href="README.ko.md">한국어</a> · <a href="README.ja.md">日本語</a> · <a href="README.ar.md">العربية</a> · <a href="README.ru.md">Русский</a> · <a href="README.it.md">Italiano</a> · <a href="README.nl.md">Nederlands</a> · <a href="README.pl.md">Polski</a> · <a href="README.cs.md">Čeština</a> · <a href="README.id.md">Bahasa Indonesia</a> · <a href="README.ms.md">Bahasa Melayu</a> · <a href="README.th.md">ไทย</a> · <a href="README.hi.md">हिन्दी</a> · <a href="README.he.md">עברית</a> · <a href="README.vi.md">Tiếng Việt</a></p>

<p align="center">
  <a href="#download"><b>下载</b></a> ·
  <a href="#development"><b>开发</b></a> ·
  <a href="../../PRIVACY.md"><b>隐私</b></a>
</p>

GenOffice 是一款免费、开源的 Microsoft Office 替代品，支持 macOS、Windows
和 Linux。它可以直接打开并保存原生 `.docx`、`.xlsx` 和 `.pptx` 文件，还能编辑
PDF、Markdown 和 HTML，全部集中在一个多标签窗口里。无需注册账号，也无需登录：
文件的打开、编辑、保存和转换都在你自己的电脑上完成。

- **原生格式，字节级保留。** 只有你编辑过的部分才会被重写，文件中的其他内容
  全部逐字节保留，文档在 Word、Excel 和 PowerPoint 中照常可用。
- **天生本地。** 没有云端，没有上传。PDF → Word / Excel / PowerPoint、
  Markdown → Word、HTML → Word 全部在本机运行。
- **六个编辑器，一个窗口。** Docs、Sheets、Slides、PDF、Markdown 和 HTML
  共用同一排标签页、同一个主屏和同一套设置。
- **按内容查找文件。** 主屏基于本地索引搜索 `.docx`、`.xlsx`、`.pptx`、PDF、
  Markdown 和 HTML 文件的文件名、所在文件夹和全文，包括中日韩文字。
- **21 种界面语言**，浅色、深色和跟随系统三种主题，以及覆盖每种语言的内置
  用户指南（F1）。

**获取：** [macOS](https://github.com/genspark-ai/genoffice/releases/latest)（Apple Silicon 和 Intel）·
[Windows](https://github.com/genspark-ai/genoffice/releases/latest)（x64 和 Arm）·
[Linux](https://github.com/genspark-ai/genoffice/releases/latest)（deb、rpm、AppImage）——
详情与系统要求见[下载](#download)。

## 应用一览

| 应用         | 打开与保存                           | 亮点                                                                                                                                       |
| ------------ | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Docs**     | `.docx`（`.doc` 仅可打开）           | 基于 Word 行度量的真正所见即所得分页；样式、表格、页眉和页脚、脚注、目录、批注、修订、比较、公式和墨迹。                                   |
| **Sheets**   | `.xlsx`、`.xls`、`.csv`、`.tsv`      | 运行在独立进程中的自研 Rust `.xlsx` 引擎；实时公式、图表、数据透视表、切片器、条件格式、数据验证、公式追踪和工作表保护。                   |
| **Slides**   | `.pptx`（`.ppt` 仅可打开）           | 母版与版式、智能参考线、无损裁剪、切换与动画、演讲者备注、演示者视图和 PDF 导出。                                                         |
| **PDF**      | `.pdf`                               | 通过 PDFium 在页面内编辑文字，批注、填写表单、签名、涂黑、重排、拆分与合并页面；借助系统 OCR 在本机转换为 Word、Excel 或 PowerPoint。     |
| **Markdown** | `.md`、`.markdown`、`.txt`、`.json`  | 基于纯 Markdown 的块编辑器，支持表格、任务列表、Mermaid 图表和数学公式，提供字节级忠实的源码视图，可导出为 Word、PDF 和图片。             |
| **HTML**     | `.html`、`.htm`                      | 带元素检查器的实时预览、CodeMirror 源码视图、全屏演示，可导出为 Word、PDF 或单个自包含的 HTML 文件。                                       |

### Docs

Docs 按 Word 的排版方式打开文件 —— 双栏章节、出血图片、底纹表格、页眉页脚，
并按 Word 的行度量分页。样式、批注、修订、公式和墨迹原样往返，不受影响；保存时
只重写你改动过的段落。

### Sheets

计算由一个独立的 Rust 引擎进程承担，因此那里即使崩溃也不会拖垮整个应用。公式
始终是实时公式，图表和数据透视图是保存后工作簿中的真实对象，保护、定义的名称
和条件格式都会写回 `.xlsx`。

### Slides

一款 PowerPoint 风格的编辑器，支持母版与版式、智能参考线、表格、图表、切换和
动画。保存时未改动的幻灯片保持逐字节一致；备注、母版和批注都会保留，演示文稿
可导出为 PDF，或每页一张 PNG。

### PDF

「编辑」模式为每个文本块勾勒边框，可原位重新输入；内容流通过 PDFium 用原始
字体重写，而不是用注释遮盖。**PDF 转换器 → PDF 转 Word** 生成可编辑的
`.docx`，在 Docs 中于源文件旁边打开。转换为 Excel 和 PowerPoint 的方式相同；
在 macOS 和 Windows 上，扫描页会经由系统 OCR 处理。涂黑会在新的副本中把被
遮盖的内容真正删除。

### Markdown 和 HTML

Markdown 采用 Tiptap 块编辑器，写回时仍是纯 `.md`，并提供字节级忠实的源码视图
查看原始文本。HTML 编辑器在内置 Chromium 中预览页面；点击任意元素即可重新设置
样式，双击编辑文字，或切换到源码视图。两个应用中的 **导出为 Word** 都会完全在
本机生成原生、可编辑的 `.docx`。

## 为什么选择 GenOffice

- **开源**，Apache-2.0 协议，在 GitHub 上公开开发。
- **由你掌控。** macOS、Windows 和 Linux 原生应用；文件留在本地磁盘，每一次编辑、
  保存和转换都在你的机器上完成。
- **真正的 Office 文件。** 原生 `.docx`、`.xlsx` 和 `.pptx`，字节级保留：未改动
  的部分原样复制。
- **认真做好 PDF。** 在页面内直接编辑文字，本机将 PDF 转换为 Word、Excel 或
  PowerPoint，扫描件支持系统 OCR。
- **同样支持 Markdown 和 HTML**，并可本机导出为 Word 和 PDF。
- **无需账号。** 不用注册，没有积分，也没有订阅。
- **免费**，个人和团队皆可使用。

整个套件提供浅色、深色和跟随系统三种主题。主题只改变屏幕上的显示：导出、打印
和保存的文件始终保留文档自身的颜色。

<a id="download"></a>

## 下载

| 平台                                  | 系统要求                                               | 下载                                                                                   |
| ------------------------------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| **macOS** —— Apple Silicon (arm64)    | macOS 11+                                              | [最新 `.dmg`（arm64）](https://github.com/genspark-ai/genoffice/releases/latest)       |
| **macOS** —— Intel (x64)              | macOS 11+                                              | [最新 `.dmg`（x64）](https://github.com/genspark-ai/genoffice/releases/latest)         |
| **Windows**（x64，大多数 PC）         | Windows 10+，Intel/AMD                                 | [最新 `-x64.exe` 安装程序](https://github.com/genspark-ai/genoffice/releases/latest)   |
| **Windows** on Arm（ARM64）           | Windows 11 on Arm（Snapdragon X 及同类芯片）           | [最新 `-arm64.exe` 安装程序](https://github.com/genspark-ai/genoffice/releases/latest) |
| **Linux** —— Debian / Ubuntu          | x86_64，glibc 2.34+（Ubuntu 22.04 或更新）             | [最新 `.deb`](https://github.com/genspark-ai/genoffice/releases/latest)                |
| **Linux** —— Fedora / RHEL / openSUSE | x86_64，glibc 2.34+（Fedora 35+、RHEL 9+、Leap 15.6+） | [最新 `.rpm`](https://github.com/genspark-ai/genoffice/releases/latest)                |
| **Linux** —— 其他发行版               | x86_64，glibc 2.34+，FUSE 2                            | [最新 `.AppImage`](https://github.com/genspark-ai/genoffice/releases/latest)           |

所有构建均来自 `main` 分支；macOS 和 Windows 安装程序均已签名。
历史版本见 [Releases](https://github.com/genspark-ai/genoffice/releases) 页面。
Flatpak、Nix 以及一个无头 Docker 批量转换镜像的说明见
[packaging/README.md](../../packaging/README.md)。

<details>
<summary><b>在 Linux 上安装</b></summary>

deb 包通过 apt 安装 —— 会自动拉取依赖并把 GenOffice 添加到应用程序菜单：

```bash
sudo apt install ./genoffice_<version>_amd64.deb
```

在 Fedora / RHEL 系 / openSUSE 上，请改用 rpm 包：

```bash
sudo dnf install ./genoffice-<version>.x86_64.rpm     # Fedora / RHEL family
sudo zypper install ./genoffice-<version>.x86_64.rpm  # openSUSE
```

AppImage 无需安装即可运行：先安装 FUSE 2 运行时
（`sudo apt install libfuse2`；在 Ubuntu 24.04 上软件包名为 `libfuse2t64`），
给文件加上可执行权限，然后运行：

```bash
chmod +x GenOffice-<version>.AppImage
./GenOffice-<version>.AppImage
```

</details>

## 工作原理

七个 Electron 应用 —— Docs、Sheets、Slides、PDF、Markdown、HTML 以及多标签
外壳 —— 共享同一层由纯 TypeScript 包组成的引擎，外加一个处理 `.xlsx` 的 Rust
sidecar。原始文件始终是唯一事实来源：修改以窄范围补丁的形式应用，编辑器未触
碰的一切在往返过程中原样保留。

```
open docx ─► archive original by hash (never touched)
          ─► parse word/document.xml into a block tree, each block anchored to its original XML
          ─► Tiptap editor (dirty tracking per block)
save      ─► dirty blocks → OOXML fragments (referencing existing styles only)
          ─► splice into the original document.xml; untouched blocks keep their bytes
          ─► repack the zip; every other entry is copied byte-for-byte
```

各引擎位于 `packages/` 下（`docx-engine`、`pptx-engine`、`pptx-render`、
`pptx-ops`、`pdf2docx`、`html2docx`、`xlsx-gateway`、`file-parse`、
`font-metrics`、`i18n`、`ui` 等）；Rust `.xlsx` 引擎位于
`apps/sheets/native/xlsx-engine`。逐个包的导览见
[CONTRIBUTING.md](../../CONTRIBUTING.md)。

<a id="development"></a>

## 开发

前置条件：Node 22+、npm 10+，以及供 Sheets 的 `.xlsx` sidecar 使用的 Rust
工具链（`cargo` 在 PATH 中）。

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

`npm run build -w @genoffice/sheets` 会自动编译 Rust sidecar。每项改动必须通过
的检查以及拉取请求的合入流程见 [CONTRIBUTING.md](../../CONTRIBUTING.md)。

## 社区

- **报告 bug 或提出功能需求**，请到
  [GitHub Issues](https://github.com/genspark-ai/genoffice/issues)。
- **给仓库点个 Star** —— 如果 GenOffice 对你有用，这是支持项目最好的方式。

## 常见问题

<details>
<summary><b>GenOffice 是免费的吗？</b></summary>

是的。GenOffice 免费且开源，采用 Apache-2.0 许可证 —— 没有试用期，不需要账号，
也没有付费档。

</details>

<details>
<summary><b>GenOffice 能打开 Microsoft Word、Excel 和 PowerPoint 文件吗？</b></summary>

可以。GenOffice 直接打开并保存原生 `.docx`、`.xlsx` 和 `.pptx` 文件。保存是
字节级保留的：你未改动的部分会逐字节写回，文档在 Microsoft Office 中照常可用。

</details>

<details>
<summary><b>GenOffice 可以离线使用吗？</b></summary>

可以。打开、编辑、保存和转换文档完全在本地进行，不需要网络连接。只有检查更新、
可选的字体下载，以及可在 设置 → 通用 中关闭的匿名使用统计才会用到网络。

</details>

<details>
<summary><b>GenOffice 能编辑 PDF 文件吗？</b></summary>

可以 —— 真正的 PDF 文字和图片编辑，会在保留原始字体的前提下重写页面内容流，
而不是用注释遮盖。

</details>

<details>
<summary><b>GenOffice 能把 PDF 转换为 Word、Excel 或 PowerPoint 吗？</b></summary>

可以 —— 完全在本机完成：PDFium 字符级提取加上基于几何的版面分析，不依赖云
服务，不上传。扫描页同样支持：在 macOS 和 Windows 上由系统 OCR 识别，转换结果
是可编辑的文字，而不是一张页面图片。

</details>

<details>
<summary><b>GenOffice 能把 HTML 转换为 Word 吗？</b></summary>

可以 —— HTML 应用中的「导出为 Word」会完全在本机生成原生、可编辑的 `.docx`。
页面先在内置 Chromium 中渲染，再归约为真正的 Word 结构：标题、段落、列表、
表格、卡片、KPI 行、表单字段和页面背景；只有在 Word 中没有对应结构的视觉元素
（图表、图标、装饰性方框）才会以图片形式嵌入。

</details>

<details>
<summary><b>GenOffice 会收集数据吗？</b></summary>

官方打包版本默认会发送有限的匿名使用统计，你可以随时在 设置 → 通用 中关闭上报。
统计数据绝不包含文档内容、文件名、文件路径或电子邮件地址。完整的事件和数据披露
见 [GenOffice 隐私政策](../../PRIVACY.md)。

</details>

## 安全

进程安全态势（渲染进程沙箱、IPC 校验、外部链接拦截）见
[SECURITY.md](../../SECURITY.md)。

## 致谢

没有以下开源项目，就不会有 GenOffice：

- [Electron](https://www.electronjs.org/) —— 每个应用的桌面运行时。
- [Univer](https://github.com/dream-num/univer)（Apache-2.0）—— Sheets 所扩展的
  电子表格 UI 内核。
- [PDFium](https://pdfium.googlesource.com/pdfium/)（BSD-3-Clause，经
  [@embedpdf/pdfium](https://github.com/embedpdf/embed-pdf-viewer) 打包）——
  真正的 PDF 文字与图片编辑背后的内容流引擎。
- [pdf.js](https://github.com/mozilla/pdf.js)（Apache-2.0）和
  [pdf-lib](https://github.com/Hopding/pdf-lib)（MIT）—— PDF 渲染与文档组装。
- [Tiptap](https://tiptap.dev/) / [ProseMirror](https://prosemirror.net/) ——
  Docs 和 Markdown 中的块编辑器。
- [CodeMirror](https://codemirror.net/)（MIT）—— HTML 中的源码编辑器。
- [Konva](https://konvajs.org/) —— Slides 以及 Sheets 图表的画布渲染。
- [HarfBuzz](https://github.com/harfbuzz/harfbuzz)（wasm）—— 复杂文字的
  文本整形度量。
- [calamine](https://github.com/tafia/calamine) 和
  [IronCalc](https://github.com/ironcalc/IronCalc) —— Rust xlsx sidecar 的
  读取层与计算层。
- [libeot](https://github.com/umanwizard/libeot)（MPL-2.0）—— 面向嵌入式
  PowerPoint 字体的 MicroType Express 解码器，已移植为 TypeScript。
- [React](https://react.dev/)（MIT）—— 各个应用的 UI 层。
- [Mermaid](https://mermaid.js.org/)（MIT）和 [KaTeX](https://katex.org/)
  （MIT）—— Markdown 与 Docs 中的图表与数学公式。
- [opentype.js](https://opentype.js.org/)（MIT）—— 用于度量信息解析与字形
  查找的字体解析库。
- [JSZip](https://stuk.github.io/jszip/)（MIT）和
  [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser)
  （MIT）—— OOXML 容器与 XML 层。
- [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons)
  （MIT）—— 各功能区所用的图标集。
- [electron-updater](https://www.electron.build/)（MIT）—— 应用内更新。
- Liberation、Carlito、Caladea 和 Noto CJK 字体（OFL/Apache-2.0）—— 随应用
  打包的文档字体。

`npm run notices` 会重新生成随应用打包的第三方许可证摘要
（`tools/gen-third-party-notices.mjs`）；所有运行时依赖均为
MIT/Apache-2.0/BSD-3-Clause/OFL 许可。

## 许可证

GenOffice 采用 [Apache License 2.0](../../LICENSE) 许可，仅有一处例外：`ee/`
目录为未来的企业模块预留，受 [GenOffice 企业许可证](../../ee/LICENSE) 约束。

GenOffice 和 Genspark 的名称与标识是 Mainfunc, Inc. 的商标。Apache-2.0 许可证
并不授予使用它们的权利（见第 6 节）；分叉项目请使用自己的品牌。
