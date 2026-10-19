<h1 align="center">GenOffice</h1>

<p align="center"><b>Suite Office gratis dan open-source yang sepenuhnya berjalan di perangkat Anda sendiri.</b><br>
File Word, Excel, PowerPoint, PDF, Markdown, dan HTML, dibuka, diedit, dan disimpan kembali dalam format aslinya.</p>

<p align="center">
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/genspark-ai/genoffice" alt="License: Apache-2.0"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases/latest"><img src="https://img.shields.io/github/v/release/genspark-ai/genoffice" alt="Latest release"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases"><img src="https://img.shields.io/github/downloads/genspark-ai/genoffice/total" alt="Downloads"></a>
  <a href="https://github.com/genspark-ai/genoffice/stargazers"><img src="https://img.shields.io/github/stars/genspark-ai/genoffice?style=flat" alt="GitHub stars"></a>
</p>

<p align="center"><a href="../../README.md">English</a> · <a href="README.es.md">Español</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.zh-TW.md">繁體中文</a> · <a href="README.ko.md">한국어</a> · <a href="README.ja.md">日本語</a> · <a href="README.ar.md">العربية</a> · <a href="README.ru.md">Русский</a> · <a href="README.it.md">Italiano</a> · <a href="README.nl.md">Nederlands</a> · <a href="README.pl.md">Polski</a> · <a href="README.cs.md">Čeština</a> · <b>Bahasa Indonesia</b> · <a href="README.ms.md">Bahasa Melayu</a> · <a href="README.th.md">ไทย</a> · <a href="README.hi.md">हिन्दी</a> · <a href="README.he.md">עברית</a> · <a href="README.vi.md">Tiếng Việt</a></p>

<p align="center">
  <a href="#download"><b>Unduh</b></a> ·
  <a href="#development"><b>Pengembangan</b></a> ·
  <a href="../../PRIVACY.md"><b>Privasi</b></a>
</p>

GenOffice adalah alternatif Microsoft Office yang gratis dan open-source
untuk macOS, Windows, dan Linux. Aplikasi ini membuka dan menyimpan file
`.docx`, `.xlsx`, dan `.pptx` asli serta mengedit PDF, Markdown, dan HTML,
semuanya dalam satu jendela bertab. Tidak ada akun yang perlu dibuat dan
tidak perlu masuk ke mana pun: file dibuka, diedit, disimpan, dan dikonversi
di komputer Anda sendiri.

- **Format asli, byte-preserving.** Hanya bagian yang Anda edit yang ditulis
  ulang. Bagian lain dari file tetap sama persis, byte demi byte, sehingga
  dokumen tetap berfungsi normal di Word, Excel, dan PowerPoint.
- **Lokal secara desain.** Tanpa cloud, tanpa unggah. Konversi PDF → Word /
  Excel / PowerPoint, Markdown → Word, dan HTML → Word semuanya berjalan
  on-device.
- **Enam editor, satu jendela.** Docs, Sheets, Slides, PDF, Markdown, dan
  HTML berbagi satu baris tab, satu layar Beranda, dan satu set pengaturan.
- **Temukan file berdasarkan isinya.** Layar Beranda mencari nama, folder,
  dan teks lengkap file `.docx`, `.xlsx`, `.pptx`, PDF, Markdown, dan HTML
  Anda dari indeks lokal, termasuk CJK.
- **21 bahasa antarmuka**, tema terang, gelap, dan sistem, serta panduan
  pengguna bawaan (F1) dalam setiap bahasa.

**Unduh di sini:** [macOS](https://github.com/genspark-ai/genoffice/releases/latest) (Apple Silicon dan Intel) ·
[Windows](https://github.com/genspark-ai/genoffice/releases/latest) (x64 dan Arm) ·
[Linux](https://github.com/genspark-ai/genoffice/releases/latest) (deb, rpm, AppImage) —
detail dan persyaratan ada di bagian [Download](#download).

## Aplikasinya

| Aplikasi     | Membuka dan menyimpan               | Sorotan                                                                                                                                                                                         |
| ------------ | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Docs**     | `.docx` (dan `.doc` untuk dibuka)   | Paginasi WYSIWYG sejati berdasarkan metrik baris Word; gaya, tabel, header dan footer, catatan kaki, daftar isi, komentar, lacak perubahan, bandingkan, persamaan, dan tinta.                   |
| **Sheets**   | `.xlsx`, `.xls`, `.csv`, `.tsv`     | Engine `.xlsx` Rust buatan sendiri dalam prosesnya sendiri; rumus hidup, grafik, tabel pivot, slicer, format bersyarat, validasi data, pelacakan rumus, dan proteksi lembar.                    |
| **Slides**   | `.pptx` (dan `.ppt` untuk dibuka)   | Master dan tata letak, panduan cerdas, pemangkasan non-destruktif, transisi dan animasi, catatan pembicara, tampilan penyaji, dan ekspor PDF.                                                    |
| **PDF**      | `.pdf`                              | Edit teks langsung di halaman lewat PDFium, anotasi, isi formulir, tanda tangan, redaksi, susun ulang, pisahkan dan gabungkan halaman; konversi ke Word, Excel, atau PowerPoint on-device dengan OCR sistem. |
| **Markdown** | `.md`, `.markdown`, `.txt`, `.json` | Block editor di atas Markdown biasa dengan tabel, daftar tugas, diagram Mermaid, dan matematika, tampilan sumber yang setia byte demi byte, serta ekspor ke Word, PDF, dan gambar.              |
| **HTML**     | `.html`, `.htm`                     | Pratinjau langsung dengan inspektur elemen, tampilan sumber CodeMirror, presentasi layar penuh, serta ekspor ke Word, PDF, atau satu file HTML mandiri.                                         |

### Docs

Docs membuka file persis seperti Word menata letaknya — bagian multikolom,
gambar selebar halaman, tabel berarsir, header dan footer, paginasi
berdasarkan metrik baris Word. Gaya, komentar, lacak perubahan, persamaan,
dan tinta kembali tanpa tersentuh, dan penyimpanan hanya menulis ulang
paragraf yang Anda ubah.

### Sheets

Kalkulasi berjalan di proses engine Rust yang terpisah, sehingga crash di
sana tidak pernah menjatuhkan aplikasi. Rumus tetap menjadi rumus hidup,
grafik dan PivotChart adalah objek sungguhan di buku kerja yang disimpan, dan
proteksi, nama yang didefinisikan, serta format bersyarat ditulis kembali ke
dalam `.xlsx`.

### Slides

Editor bergaya PowerPoint dengan master dan tata letak, panduan cerdas,
tabel, grafik, transisi, dan animasi. Slide yang tidak disentuh tetap
identik byte demi byte saat disimpan; catatan, master, dan anotasi tetap
tersimpan, dan deck bisa diekspor ke PDF atau satu PNG per slide.

### PDF

Mode edit membingkai setiap blok teks untuk diketik ulang di tempat; content
stream ditulis ulang lewat PDFium dengan font aslinya, bukan anotasi penutup.
**PDF Converter → PDF to Word** menghasilkan `.docx` yang bisa diedit dan
terbuka di Docs di samping sumbernya. Target Excel dan PowerPoint bekerja
dengan cara yang sama, dan di macOS serta Windows halaman hasil pindaian
diproses oleh OCR sistem. Redaksi benar-benar menghapus konten yang ditutup
dalam salinan baru.

### Markdown dan HTML

Markdown adalah block editor Tiptap yang ditulis kembali sebagai `.md` biasa,
dengan tampilan sumber yang setia byte demi byte untuk teks mentahnya. Editor
HTML menampilkan pratinjau halaman di Chromium bawaan; klik elemen apa pun
untuk mengubah gayanya, klik dua kali untuk mengedit teksnya, atau beralih ke
tampilan sumber. **Export as Word** di kedua aplikasi menghasilkan `.docx`
asli yang bisa diedit, seluruhnya on-device.

## Mengapa GenOffice

- **Open source**, Apache-2.0, dikembangkan secara terbuka di GitHub.
- **Milik Anda untuk dijalankan.** Aplikasi native untuk macOS, Windows, dan
  Linux; file tetap di disk Anda dan setiap pengeditan, penyimpanan, dan
  konversi terjadi di perangkat Anda sendiri.
- **File Office asli.** `.docx`, `.xlsx`, dan `.pptx` native, byte-preserving:
  bagian file yang tidak Anda sentuh disalin apa adanya.
- **PDF yang ditangani dengan benar.** Edit teks langsung di halaman, dan
  konversi PDF ke Word, Excel, atau PowerPoint secara on-device, dengan OCR
  sistem untuk hasil pindaian.
- **Markdown dan HTML juga**, dengan ekspor lokal ke Word dan PDF.
- **Tanpa akun.** Tidak perlu mendaftar, tanpa kredit, tanpa langganan.
- **Gratis**, untuk individu maupun tim.

Seluruh suite mendukung tema terang, gelap, dan sistem. Tema hanya mengubah
tampilan di layar: ekspor, cetakan, dan file yang disimpan selalu
mempertahankan warna asli dokumen.

<a id="download"></a>

## Download

| Platform                             | Persyaratan                                           | Unduh                                                                                      |
| ------------------------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **macOS** — Apple Silicon (arm64)    | macOS 11+                                             | [`.dmg` terbaru (arm64)](https://github.com/genspark-ai/genoffice/releases/latest)         |
| **macOS** — Intel (x64)              | macOS 11+                                             | [`.dmg` terbaru (x64)](https://github.com/genspark-ai/genoffice/releases/latest)           |
| **Windows** (x64, kebanyakan PC)     | Windows 10+, Intel/AMD                                | [Installer `-x64.exe` terbaru](https://github.com/genspark-ai/genoffice/releases/latest)   |
| **Windows** di Arm (ARM64)           | Windows 11 on Arm (Snapdragon X dan sejenisnya)       | [Installer `-arm64.exe` terbaru](https://github.com/genspark-ai/genoffice/releases/latest) |
| **Linux** — Debian / Ubuntu          | x86_64, glibc 2.34+ (Ubuntu 22.04 atau lebih baru)    | [`.deb` terbaru](https://github.com/genspark-ai/genoffice/releases/latest)                 |
| **Linux** — Fedora / RHEL / openSUSE | x86_64, glibc 2.34+ (Fedora 35+, RHEL 9+, Leap 15.6+) | [`.rpm` terbaru](https://github.com/genspark-ai/genoffice/releases/latest)                 |
| **Linux** — distribusi lainnya       | x86_64, glibc 2.34+, FUSE 2                           | [`.AppImage` terbaru](https://github.com/genspark-ai/genoffice/releases/latest)            |

Semua build berasal dari `main`; installer macOS dan Windows sudah
ditandatangani (signed). Versi lama ada di halaman
[Releases](https://github.com/genspark-ai/genoffice/releases). Flatpak, Nix,
dan citra Docker headless untuk konversi massal dijelaskan di
[packaging/README.md](../../packaging/README.md).

<details>
<summary><b>Instalasi di Linux</b></summary>

File deb dipasang dengan apt — perintah ini menarik semua dependensi dan
menambahkan GenOffice ke menu aplikasi:

```bash
sudo apt install ./genoffice_<version>_amd64.deb
```

Di Fedora / keluarga RHEL / openSUSE, pasang rpm sebagai gantinya:

```bash
sudo dnf install ./genoffice-<version>.x86_64.rpm     # Fedora / RHEL family
sudo zypper install ./genoffice-<version>.x86_64.rpm  # openSUSE
```

AppImage berjalan langsung di tempat: pasang runtime FUSE 2
(`sudo apt install libfuse2`; di Ubuntu 24.04 paketnya bernama
`libfuse2t64`), jadikan file tersebut executable, lalu jalankan:

```bash
chmod +x GenOffice-<version>.AppImage
./GenOffice-<version>.AppImage
```

</details>

## Cara kerjanya

Tujuh aplikasi Electron — Docs, Sheets, Slides, PDF, Markdown, HTML, dan
shell bertab — berbagi satu lapisan engine berupa paket TypeScript murni,
ditambah sidecar Rust untuk `.xlsx`. File asli selalu menjadi sumber
kebenaran (source of truth): perubahan diterapkan sebagai patch yang sempit,
dan semua bagian yang tidak disentuh editor tetap utuh saat file dibuka
kembali.

```
open docx ─► archive original by hash (never touched)
          ─► parse word/document.xml into a block tree, each block anchored to its original XML
          ─► Tiptap editor (dirty tracking per block)
save      ─► dirty blocks → OOXML fragments (referencing existing styles only)
          ─► splice into the original document.xml; untouched blocks keep their bytes
          ─► repack the zip; every other entry is copied byte-for-byte
```

Engine-enginenya berada di bawah `packages/` (`docx-engine`, `pptx-engine`,
`pptx-render`, `pptx-ops`, `pdf2docx`, `html2docx`, `xlsx-gateway`,
`file-parse`, `font-metrics`, `i18n`, `ui`, dan lainnya); engine `.xlsx` Rust
ada di `apps/sheets/native/xlsx-engine`. Tur paket demi paket ada di
[CONTRIBUTING.md](../../CONTRIBUTING.md).

<a id="development"></a>

## Pengembangan

Prasyarat: Node 22+, npm 10+, dan toolchain Rust (`cargo` di PATH) untuk
sidecar `.xlsx` milik Sheets.

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

`npm run build -w @genoffice/sheets` mengompilasi sidecar Rust secara
otomatis. Lihat [CONTRIBUTING.md](../../CONTRIBUTING.md) untuk pemeriksaan
yang harus dilalui setiap perubahan dan cara pull request diterima.

## Komunitas

- **Laporkan bug atau ajukan permintaan fitur** di
  [GitHub Issues](https://github.com/genspark-ai/genoffice/issues).
- **Beri bintang (star) pada repo ini** jika GenOffice bermanfaat bagi Anda —
  ini cara terbaik untuk mendukung proyek ini.

## FAQ

<details>
<summary><b>Apakah GenOffice gratis?</b></summary>

Ya. GenOffice gratis dan open-source di bawah lisensi Apache-2.0 — tidak ada
masa coba, tidak perlu akun, dan tidak ada tingkatan berbayar.

</details>

<details>
<summary><b>Apakah GenOffice bisa membuka file Microsoft Word, Excel, dan PowerPoint?</b></summary>

Ya. GenOffice membuka dan menyimpan file `.docx`, `.xlsx`, dan `.pptx` asli.
Penyimpanan bersifat byte-preserving: bagian file yang tidak Anda sentuh
ditulis kembali byte demi byte, sehingga dokumen tetap berfungsi normal di
Microsoft Office.

</details>

<details>
<summary><b>Apakah GenOffice bisa digunakan secara offline?</b></summary>

Ya. Membuka, mengedit, menyimpan, dan mengonversi dokumen sepenuhnya lokal
dan tidak membutuhkan koneksi jaringan. Jaringan hanya dipakai untuk
pemeriksaan pembaruan, unduhan font opsional, dan statistik penggunaan
anonim yang bisa Anda matikan di Settings → General.

</details>

<details>
<summary><b>Apakah GenOffice bisa mengedit file PDF?</b></summary>

Ya — pengeditan teks dan gambar PDF yang sesungguhnya, yang menulis ulang
content stream halaman dengan font aslinya tetap dipertahankan, bukan
anotasi penutup.

</details>

<details>
<summary><b>Apakah GenOffice bisa mengonversi PDF ke Word, Excel, atau PowerPoint?</b></summary>

Ya — seluruhnya di perangkat Anda sendiri: ekstraksi karakter level PDFium
ditambah analisis layout berbasis geometri, tanpa layanan cloud, tanpa
unggah. Halaman hasil pindai (scan) juga didukung: di macOS dan Windows, OCR
sistem membacanya, sehingga hasilnya berupa teks yang bisa diedit, bukan
gambar halaman.

</details>

<details>
<summary><b>Apakah GenOffice bisa mengonversi HTML ke Word?</b></summary>

Ya — Export as Word di aplikasi HTML menghasilkan `.docx` asli yang bisa
diedit, seluruhnya di perangkat Anda sendiri. Halaman dirender di Chromium
bawaan dan diubah menjadi struktur Word yang sesungguhnya: heading,
paragraf, daftar, tabel, kartu, baris KPI, form field, dan latar halaman;
hanya elemen visual yang tidak punya kesetaraan di Word (chart, ikon, kotak
bergaya dekoratif) yang disematkan sebagai gambar.

</details>

<details>
<summary><b>Apakah GenOffice mengumpulkan data?</b></summary>

Build resmi yang dipaketkan mengirim data analitik penggunaan anonim yang
terbatas secara default, dan Anda bisa menonaktifkan pelaporan ini kapan saja
lewat Settings → General. Analitik ini tidak pernah mengirim isi dokumen,
nama file, path file, atau alamat email. Lihat
[GenOffice Privacy](../../PRIVACY.md) untuk daftar lengkap event dan
pengungkapan data.

</details>

## Keamanan

Lihat [SECURITY.md](../../SECURITY.md) untuk postur keamanan proses
(sandboxing renderer, validasi IPC, gating tautan eksternal).

## Ucapan terima kasih

GenOffice tidak akan mungkin ada tanpa proyek-proyek open-source berikut:

- [Electron](https://www.electronjs.org/) — runtime desktop untuk setiap
  aplikasi.
- [Univer](https://github.com/dream-num/univer) (Apache-2.0) — inti UI
  spreadsheet yang diperluas oleh Sheets.
- [PDFium](https://pdfium.googlesource.com/pdfium/) (BSD-3-Clause, disertakan
  lewat [@embedpdf/pdfium](https://github.com/embedpdf/embed-pdf-viewer)) —
  engine content-stream di balik pengeditan teks dan gambar PDF yang
  sesungguhnya.
- [pdf.js](https://github.com/mozilla/pdf.js) (Apache-2.0) dan
  [pdf-lib](https://github.com/Hopding/pdf-lib) (MIT) — rendering PDF dan
  penyusunan dokumen.
- [Tiptap](https://tiptap.dev/) / [ProseMirror](https://prosemirror.net/) —
  block editor di Docs dan Markdown.
- [CodeMirror](https://codemirror.net/) (MIT) — editor sumber di HTML.
- [Konva](https://konvajs.org/) — rendering kanvas untuk Slides dan chart
  Sheets.
- [HarfBuzz](https://github.com/harfbuzz/harfbuzz) (wasm) — metrik
  text-shaping untuk skrip kompleks.
- [calamine](https://github.com/tafia/calamine) dan
  [IronCalc](https://github.com/ironcalc/IronCalc) — lapisan baca dan
  kalkulasi dari sidecar xlsx Rust.
- [libeot](https://github.com/umanwizard/libeot) (MPL-2.0) — decoder
  MicroType Express untuk font PowerPoint yang disematkan, diporting ke
  TypeScript.
- [React](https://react.dev/) (MIT) — lapisan UI setiap aplikasi.
- [Mermaid](https://mermaid.js.org/) (MIT) dan [KaTeX](https://katex.org/)
  (MIT) — diagram dan matematika di Markdown dan Docs.
- [opentype.js](https://opentype.js.org/) (MIT) — parsing font untuk metrik
  dan pencarian glyph.
- [JSZip](https://stuk.github.io/jszip/) (MIT) dan
  [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser)
  (MIT) — lapisan container OOXML dan XML.
- [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons)
  (MIT) — set ikon di seluruh ribbon.
- [electron-updater](https://www.electron.build/) (MIT) — update dalam
  aplikasi.
- Font Liberation, Carlito, Caladea, dan Noto CJK (OFL/Apache-2.0) — font
  dokumen yang disertakan.

`npm run notices` meregenerasi ringkasan lisensi pihak ketiga yang disertakan
(`tools/gen-third-party-notices.mjs`); semua dependensi runtime berlisensi
MIT/Apache-2.0/BSD-3-Clause/OFL.

## Lisensi

GenOffice dilisensikan di bawah [Apache License 2.0](../../LICENSE), dengan
satu pengecualian: direktori `ee/` dicadangkan untuk modul enterprise di masa
depan dan tercakup oleh [GenOffice Enterprise License](../../ee/LICENSE).

Nama dan logo GenOffice serta Genspark adalah merek dagang milik Mainfunc,
Inc. Lisensi Apache-2.0 tidak memberikan izin untuk menggunakannya (lihat
bagian 6); fork sebaiknya menggunakan branding sendiri.
