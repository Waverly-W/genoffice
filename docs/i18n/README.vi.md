<h1 align="center">GenOffice</h1>

<p align="center"><b>Bộ ứng dụng văn phòng miễn phí, mã nguồn mở, chạy hoàn toàn trên máy của bạn.</b><br>
Tệp Word, Excel, PowerPoint, PDF, Markdown và HTML được mở, chỉnh sửa và lưu lại đúng định dạng gốc.</p>

<p align="center">
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/genspark-ai/genoffice" alt="License: Apache-2.0"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases/latest"><img src="https://img.shields.io/github/v/release/genspark-ai/genoffice" alt="Latest release"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases"><img src="https://img.shields.io/github/downloads/genspark-ai/genoffice/total" alt="Downloads"></a>
  <a href="https://github.com/genspark-ai/genoffice/stargazers"><img src="https://img.shields.io/github/stars/genspark-ai/genoffice?style=flat" alt="GitHub stars"></a>
</p>

<p align="center"><a href="../../README.md">English</a> · <a href="README.es.md">Español</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.zh-TW.md">繁體中文</a> · <a href="README.ko.md">한국어</a> · <a href="README.ja.md">日本語</a> · <a href="README.ar.md">العربية</a> · <a href="README.ru.md">Русский</a> · <a href="README.it.md">Italiano</a> · <a href="README.nl.md">Nederlands</a> · <a href="README.pl.md">Polski</a> · <a href="README.cs.md">Čeština</a> · <a href="README.id.md">Bahasa Indonesia</a> · <a href="README.ms.md">Bahasa Melayu</a> · <a href="README.th.md">ไทย</a> · <a href="README.hi.md">हिन्दी</a> · <a href="README.he.md">עברית</a> · <b>Tiếng Việt</b></p>

<p align="center">
  <a href="#download"><b>Tải xuống</b></a> ·
  <a href="#development"><b>Phát triển</b></a> ·
  <a href="../../PRIVACY.md"><b>Quyền riêng tư</b></a>
</p>

GenOffice là lựa chọn thay thế Microsoft Office miễn phí, mã nguồn mở cho
macOS, Windows và Linux. Ứng dụng mở và lưu các tệp `.docx`, `.xlsx` và
`.pptx` gốc, đồng thời chỉnh sửa PDF, Markdown và HTML, tất cả trong một cửa
sổ đa thẻ. Không cần tạo tài khoản và không phải đăng nhập vào đâu cả: tệp
được mở, chỉnh sửa, lưu và chuyển đổi ngay trên máy tính của bạn.

- **Định dạng gốc, giữ nguyên từng byte.** Chỉ những phần bạn chỉnh sửa mới
  được ghi lại. Mọi thứ khác trong tệp được giữ nguyên từng byte, nên tài
  liệu vẫn mở và hoạt động bình thường trong Word, Excel và PowerPoint.
- **Cục bộ ngay từ thiết kế.** Không đám mây, không tải lên. PDF → Word /
  Excel / PowerPoint, Markdown → Word và HTML → Word đều chạy trên máy.
- **Sáu trình soạn thảo, một cửa sổ.** Docs, Sheets, Slides, PDF, Markdown và
  HTML dùng chung một dải thẻ, một màn hình chính và một bộ cài đặt.
- **Tìm tệp theo nội dung của nó.** Màn hình chính tìm kiếm theo tên, thư
  mục và toàn văn của các tệp `.docx`, `.xlsx`, `.pptx`, PDF, Markdown và
  HTML qua một chỉ mục cục bộ, có hỗ trợ CJK.
- **21 ngôn ngữ giao diện**, giao diện sáng, tối và theo hệ thống, cùng sổ
  tay hướng dẫn tích hợp sẵn (F1) bằng mọi ngôn ngữ.

**Tải ngay:** [macOS](https://github.com/genspark-ai/genoffice/releases/latest) (Apple Silicon và Intel) ·
[Windows](https://github.com/genspark-ai/genoffice/releases/latest) (x64 và Arm) ·
[Linux](https://github.com/genspark-ai/genoffice/releases/latest) (deb, rpm, AppImage) —
chi tiết và yêu cầu hệ thống xem mục [Tải xuống](#download).

## Các ứng dụng

| Ứng dụng     | Mở và lưu                           | Điểm nổi bật                                                                                                                                                                                     |
| ------------ | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Docs**     | `.docx` (và mở được `.doc`)         | Phân trang WYSIWYG thật theo số đo dòng của Word; kiểu, bảng, đầu trang và chân trang, chú thích cuối trang, mục lục, nhận xét, theo dõi thay đổi, so sánh, phương trình và mực vẽ.               |
| **Sheets**   | `.xlsx`, `.xls`, `.csv`, `.tsv`     | Engine `.xlsx` viết bằng Rust chạy trong tiến trình riêng; công thức sống, biểu đồ, PivotTable, slicer, định dạng có điều kiện, xác thực dữ liệu, truy vết công thức và bảo vệ trang tính.        |
| **Slides**   | `.pptx` (và mở được `.ppt`)         | Bản cái và bố cục, đường gióng thông minh, cắt ảnh không phá hủy, chuyển tiếp và hoạt ảnh, ghi chú diễn giả, chế độ người trình bày và xuất PDF.                                                 |
| **PDF**      | `.pdf`                              | Sửa chữ ngay trong trang qua PDFium, chú thích, điền biểu mẫu, ký, bôi đen nội dung, sắp xếp lại, tách và gộp trang; chuyển sang Word, Excel hoặc PowerPoint ngay trên máy với OCR của hệ điều hành. |
| **Markdown** | `.md`, `.markdown`, `.txt`, `.json` | Trình soạn thảo khối trên Markdown thuần với bảng, danh sách việc, sơ đồ Mermaid và công thức toán, chế độ xem mã nguồn giữ nguyên từng byte, cùng xuất ra Word, PDF và ảnh.                      |
| **HTML**     | `.html`, `.htm`                     | Xem trước trực tiếp với trình kiểm tra phần tử, chế độ xem mã nguồn CodeMirror, trình chiếu toàn màn hình, cùng xuất ra Word, PDF hoặc một tệp HTML độc lập.                                     |

### Docs

Docs mở tệp đúng như cách Word dàn trang — các phần nhiều cột, ảnh tràn lề,
bảng tô nền, đầu trang và chân trang, phân trang theo số đo dòng của Word.
Kiểu, nhận xét, theo dõi thay đổi, phương trình và mực vẽ đi qua vòng lưu
nguyên vẹn, và mỗi lần lưu chỉ ghi lại những đoạn văn bạn đã sửa.

### Sheets

Việc tính toán chạy trong một tiến trình engine Rust riêng, nên nếu nó gặp sự
cố thì ứng dụng không bao giờ sập theo. Công thức vẫn là công thức sống, biểu
đồ và PivotChart là đối tượng thật trong sổ làm việc đã lưu, còn bảo vệ, tên
được định nghĩa và định dạng có điều kiện được ghi lại vào `.xlsx`.

### Slides

Một trình soạn thảo kiểu PowerPoint với bản cái và bố cục, đường gióng thông
minh, bảng, biểu đồ, chuyển tiếp và hoạt ảnh. Những slide không bị đụng tới
vẫn giống hệt từng byte khi lưu; ghi chú, bản cái và chú thích được giữ lại,
và bộ slide xuất được ra PDF hoặc mỗi slide một tệp PNG.

### PDF

Chế độ sửa đóng khung từng khối chữ để gõ lại tại chỗ; content stream được
viết lại qua PDFium với phông gốc, không phải một chú thích che đậy.
**PDF Converter → PDF to Word** tạo ra một `.docx` chỉnh sửa được, mở trong
Docs ngay cạnh tệp nguồn. Đích Excel và PowerPoint hoạt động theo cùng cách,
và trên macOS và Windows các trang scan đi qua OCR của hệ điều hành. Tính năng
bôi đen xóa hẳn nội dung bị che trong một bản sao mới.

### Markdown và HTML

Markdown là một trình soạn thảo khối Tiptap, ghi lại dưới dạng `.md` thuần,
với chế độ xem mã nguồn giữ nguyên từng byte cho văn bản gốc. Trình soạn thảo
HTML xem trước trang trong Chromium tích hợp; nhấp vào bất kỳ phần tử nào để
đổi kiểu, nhấp đúp để sửa chữ, hoặc chuyển sang chế độ xem mã nguồn.
**Export as Word** trong cả hai ứng dụng đều tạo ra một `.docx` gốc chỉnh sửa
được, hoàn toàn trên máy.

## Vì sao chọn GenOffice

- **Mã nguồn mở**, Apache-2.0, xây công khai trên GitHub.
- **Thuộc về bạn để chạy.** Ứng dụng gốc cho macOS, Windows và Linux; tệp
  nằm trên đĩa của bạn và mọi lần chỉnh, lưu hay chuyển đổi đều xảy ra trên
  máy của bạn.
- **Tệp Office thật.** `.docx`, `.xlsx` và `.pptx` gốc, giữ nguyên từng
  byte: những phần của tệp bạn không đụng tới được sao chép chính xác như
  chúng vốn có.
- **PDF được làm đúng kiểu.** Sửa chữ bên trong trang, và chuyển PDF sang
  Word, Excel hay PowerPoint ngay trên máy, với OCR hệ điều hành cho trang scan.
- **Markdown và HTML cũng thế**, với xuất cục bộ ra Word và PDF.
- **Không cần tài khoản.** Không phải đăng ký, không tín dụng, không thuê bao.
- **Miễn phí**, cho cả cá nhân lẫn nhóm.

Toàn bộ bộ ứng dụng có giao diện sáng, tối và theo hệ thống. Giao diện chỉ
thay đổi những gì trên màn hình: xuất, in và tệp đã lưu luôn giữ màu riêng
của tài liệu.

<a id="download"></a>

## Tải xuống

| Nền tảng                             | Yêu cầu                                               | Tải xuống                                                                                   |
| ------------------------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **macOS** — Apple Silicon (arm64)    | macOS 11+                                             | [`.dmg` mới nhất (arm64)](https://github.com/genspark-ai/genoffice/releases/latest)         |
| **macOS** — Intel (x64)              | macOS 11+                                             | [`.dmg` mới nhất (x64)](https://github.com/genspark-ai/genoffice/releases/latest)           |
| **Windows** (x64, đa số máy tính)    | Windows 10+, Intel/AMD                                | [Trình cài `-x64.exe` mới nhất](https://github.com/genspark-ai/genoffice/releases/latest)   |
| **Windows** on Arm (ARM64)           | Windows 11 on Arm (Snapdragon X và tương tự)          | [Trình cài `-arm64.exe` mới nhất](https://github.com/genspark-ai/genoffice/releases/latest) |
| **Linux** — Debian / Ubuntu          | x86_64, glibc 2.34+ (Ubuntu 22.04 trở lên)            | [`.deb` mới nhất](https://github.com/genspark-ai/genoffice/releases/latest)                 |
| **Linux** — Fedora / RHEL / openSUSE | x86_64, glibc 2.34+ (Fedora 35+, RHEL 9+, Leap 15.6+) | [`.rpm` mới nhất](https://github.com/genspark-ai/genoffice/releases/latest)                 |
| **Linux** — các bản phân phối khác   | x86_64, glibc 2.34+, FUSE 2                           | [`.AppImage` mới nhất](https://github.com/genspark-ai/genoffice/releases/latest)            |

Mọi bản dựng đều đến từ `main`; trình cài macOS và Windows có ký số. Các
phiên bản cũ nằm trên trang
[Releases](https://github.com/genspark-ai/genoffice/releases). Flatpak, Nix và
một ảnh Docker không giao diện để chuyển đổi hàng loạt được mô tả trong
[packaging/README.md](../../packaging/README.md).

<details>
<summary><b>Cài trên Linux</b></summary>

Bản deb cài bằng apt — nó kéo các phụ thuộc và thêm GenOffice vào menu
ứng dụng:

```bash
sudo apt install ./genoffice_<version>_amd64.deb
```

Trên Fedora / họ RHEL / openSUSE, cài bản rpm:

```bash
sudo dnf install ./genoffice-<version>.x86_64.rpm     # Fedora / RHEL family
sudo zypper install ./genoffice-<version>.x86_64.rpm  # openSUSE
```

AppImage chạy tại chỗ: cài runtime FUSE 2
(`sudo apt install libfuse2`; trên Ubuntu 24.04 gói tên là `libfuse2t64`),
đặt bit thực thi rồi chạy:

```bash
chmod +x GenOffice-<version>.AppImage
./GenOffice-<version>.AppImage
```

</details>

## Kiến trúc hoạt động

Bảy ứng dụng Electron — Docs, Sheets, Slides, PDF, Markdown, HTML và shell
đa tab — dùng chung một tầng engine gồm các package TypeScript thuần cộng
với một sidecar Rust cho `.xlsx`. Tệp gốc luôn là nguồn chân lý: chỉnh sửa
được áp dụng như các bản vá hẹp, và mọi thứ trình soạn thảo không đụng tới
sống sót qua vòng lưu-gỡ nguyên vẹn.

```
open docx ─► archive original by hash (never touched)
          ─► parse word/document.xml into a block tree, each block anchored to its original XML
          ─► Tiptap editor (dirty tracking per block)
save      ─► dirty blocks → OOXML fragments (referencing existing styles only)
          ─► splice into the original document.xml; untouched blocks keep their bytes
          ─► repack the zip; every other entry is copied byte-for-byte
```

Các engine nằm dưới `packages/` (`docx-engine`, `pptx-engine`,
`pptx-render`, `pptx-ops`, `pdf2docx`, `html2docx`, `xlsx-gateway`,
`file-parse`, `font-metrics`, `i18n`, `ui` và nhiều nữa); engine `.xlsx` bằng
Rust nằm ở `apps/sheets/native/xlsx-engine`. Chuyến tham quan từng package
nằm ở [CONTRIBUTING.md](../../CONTRIBUTING.md).

<a id="development"></a>

## Phát triển

Điều kiện tiên quyết: Node 22+, npm 10+ và một toolchain Rust (`cargo` trên
PATH) cho sidecar `.xlsx` của Sheets.

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

`npm run build -w @genoffice/sheets` tự biên dịch sidecar Rust. Xem
[CONTRIBUTING.md](../../CONTRIBUTING.md) để biết các kiểm tra mọi thay đổi
phải qua và cách pull request được hợp nhất.

## Cộng đồng

- **Báo lỗi hoặc đề xuất tính năng** trong
  [GitHub Issues](https://github.com/genspark-ai/genoffice/issues).
- **Gắn sao cho kho mã** nếu GenOffice hữu ích với bạn — đó là cách tốt nhất
  để ủng hộ dự án.

## Câu hỏi thường gặp

<details>
<summary><b>GenOffice có miễn phí không?</b></summary>

Có. GenOffice miễn phí và mã nguồn mở theo giấy phép Apache-2.0 — không
dùng thử, không tài khoản và không bậc trả phí.

</details>

<details>
<summary><b>GenOffice có mở được tệp Microsoft Word, Excel và PowerPoint không?</b></summary>

Có. GenOffice mở và lưu các tệp `.docx`, `.xlsx` và `.pptx` gốc. Việc lưu
giữ nguyên từng byte: những phần của tệp bạn không đụng tới được ghi lại
nguyên vẹn từng byte, nên tài liệu vẫn hoạt động bình thường trong
Microsoft Office.

</details>

<details>
<summary><b>GenOffice có chạy ngoại tuyến không?</b></summary>

Có. Mở, chỉnh sửa, lưu và chuyển đổi tài liệu hoàn toàn diễn ra cục bộ và
không cần kết nối mạng. Mạng chỉ được dùng để kiểm tra bản cập nhật, tải
phông chữ tùy chọn và gửi số liệu thống kê sử dụng ẩn danh mà bạn có thể tắt
trong Settings → General.

</details>

<details>
<summary><b>GenOffice có chỉnh được tệp PDF không?</b></summary>

Có — chỉnh sửa chữ và ảnh PDF thật sự, viết lại content stream của trang
với phông gốc được giữ, không phải các chú thích che đậy.

</details>

<details>
<summary><b>GenOffice có chuyển PDF sang Word, Excel hay PowerPoint được không?</b></summary>

Có — hoàn toàn trên máy: trích xuất ký tự mức PDFium cộng phân tích bố cục
theo hình học, không dịch vụ đám mây, không tải lên. Trang scan cũng được
lo: trên macOS và Windows, OCR của hệ điều hành đọc chúng, nên chúng chuyển
thành chữ chỉnh sửa được thay vì một ảnh trang.

</details>

<details>
<summary><b>GenOffice có chuyển HTML sang Word được không?</b></summary>

Có — Export as Word trong ứng dụng HTML tạo ra một `.docx` gốc chỉnh sửa
được hoàn toàn trên máy. Trang được kết xuất trong Chromium tích hợp và
thu gọn thành các cấu trúc Word thật: tiêu đề, đoạn văn, danh sách, bảng,
thẻ, hàng KPI, trường form và nền trang; chỉ những phần hiển thị không có
đối tác Word (biểu đồ, icon, hộp trang trí) được nhúng dưới dạng ảnh.

</details>

<details>
<summary><b>GenOffice có thu thập dữ liệu nào không?</b></summary>

Các bản dựng đóng gói chính thức gửi phân tích sử dụng ẩn danh giới hạn theo
mặc định, và bạn có thể tắt báo cáo bất cứ lúc nào dưới Settings → General.
Phân tích không bao giờ gửi nội dung tài liệu, tên tệp, đường dẫn tệp hay
địa chỉ email. Xem [GenOffice Privacy](../../PRIVACY.md) để biết đầy đủ các
kê khai sự kiện và dữ liệu.

</details>

## Bảo mật

Xem [SECURITY.md](../../SECURITY.md) để biết tư thế bảo mật của quy trình
(cô lập renderer, kiểm định IPC, kiểm soát liên kết ngoài).

## Lời cảm ơn

GenOffice sẽ không thể có được nếu thiếu các dự án mã nguồn mở này:

- [Electron](https://www.electronjs.org/) — runtime desktop cho mọi ứng dụng.
- [Univer](https://github.com/dream-num/univer) (Apache-2.0) — lõi giao
  diện bảng tính mà Sheets mở rộng.
- [PDFium](https://pdfium.googlesource.com/pdfium/) (BSD-3-Clause, đóng gói
  qua [@embedpdf/pdfium](https://github.com/embedpdf/embed-pdf-viewer)) —
  engine content-stream đằng sau việc chỉnh sửa chữ và ảnh PDF thật sự.
- [pdf.js](https://github.com/mozilla/pdf.js) (Apache-2.0) và
  [pdf-lib](https://github.com/Hopding/pdf-lib) (MIT) — kết xuất PDF và lắp
  ráp tài liệu.
- [Tiptap](https://tiptap.dev/) / [ProseMirror](https://prosemirror.net/) —
  các trình soạn thảo khối trong Docs và Markdown.
- [CodeMirror](https://codemirror.net/) (MIT) — trình soạn thảo mã trong HTML.
- [Konva](https://konvajs.org/) — kết xuất canvas cho biểu đồ Slides và Sheets.
- [HarfBuzz](https://github.com/harfbuzz/harfbuzz) (wasm) — số liệu định
  hình chữ cho các hệ chữ phức tạp.
- [calamine](https://github.com/tafia/calamine) và
  [IronCalc](https://github.com/ironcalc/IronCalc) — tầng đọc và tầng tính
  của sidecar xlsx Rust.
- [libeot](https://github.com/umanwizard/libeot) (MPL-2.0) — bộ giải mã
  MicroType Express cho phông nhúng PowerPoint, được chuyển sang TypeScript.
- [React](https://react.dev/) (MIT) — tầng giao diện của mọi ứng dụng.
- [Mermaid](https://mermaid.js.org/) (MIT) và [KaTeX](https://katex.org/)
  (MIT) — sơ đồ và công thức toán trong Markdown và Docs.
- [opentype.js](https://opentype.js.org/) (MIT) — phân tích phông cho số
  liệu bố cục và tra glyph.
- [JSZip](https://stuk.github.io/jszip/) (MIT) và
  [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser)
  (MIT) — các tầng container OOXML và XML.
- [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons)
  (MIT) — bộ icon trên các ribbon.
- [electron-updater](https://www.electron.build/) (MIT) — cập nhật ngay
  trong ứng dụng.
- Các phông Liberation, Carlito, Caladea và Noto CJK (OFL/Apache-2.0) —
  phông tài liệu đóng gói sẵn.

`npm run notices` tái tạo bản tóm tắt giấy phép bên thứ ba đóng gói
(`tools/gen-third-party-notices.mjs`); mọi phụ thuộc thời gian chạy đều là
MIT/Apache-2.0/BSD-3-Clause/OFL.

## Giấy phép

GenOffice được cấp phép theo [Giấy phép Apache
2.0](../../LICENSE), với một ngoại lệ: thư mục `ee/` được dành cho các mô
đun doanh nghiệp tương lai và chịu sự điều chỉnh của [GenOffice Enterprise
License](../../ee/LICENSE).

Tên và logo GenOffice và Genspark là nhãn hiệu của Mainfunc, Inc. Giấy phép
Apache-2.0 không cấp quyền sử dụng chúng (xem mục 6); các fork nên dùng
thương hiệu riêng của mình.
