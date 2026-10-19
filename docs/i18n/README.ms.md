<h1 align="center">GenOffice</h1>

<p align="center"><b>Rangkaian Office percuma dan sumber terbuka yang berjalan sepenuhnya pada mesin anda.</b><br>
Fail Word, Excel, PowerPoint, PDF, Markdown dan HTML, dibuka, disunting dan disimpan semula dalam format sebenar.</p>

<p align="center">
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/genspark-ai/genoffice" alt="License: Apache-2.0"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases/latest"><img src="https://img.shields.io/github/v/release/genspark-ai/genoffice" alt="Latest release"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases"><img src="https://img.shields.io/github/downloads/genspark-ai/genoffice/total" alt="Downloads"></a>
  <a href="https://github.com/genspark-ai/genoffice/stargazers"><img src="https://img.shields.io/github/stars/genspark-ai/genoffice?style=flat" alt="GitHub stars"></a>
</p>

<p align="center"><a href="../../README.md">English</a> · <a href="README.es.md">Español</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.zh-TW.md">繁體中文</a> · <a href="README.ko.md">한국어</a> · <a href="README.ja.md">日本語</a> · <a href="README.ar.md">العربية</a> · <a href="README.ru.md">Русский</a> · <a href="README.it.md">Italiano</a> · <a href="README.nl.md">Nederlands</a> · <a href="README.pl.md">Polski</a> · <a href="README.cs.md">Čeština</a> · <a href="README.id.md">Bahasa Indonesia</a> · <b>Bahasa Melayu</b> · <a href="README.th.md">ไทย</a> · <a href="README.hi.md">हिन्दी</a> · <a href="README.he.md">עברית</a> · <a href="README.vi.md">Tiếng Việt</a></p>

<p align="center">
  <a href="#download"><b>Muat Turun</b></a> ·
  <a href="#development"><b>Pembangunan</b></a> ·
  <a href="../../PRIVACY.md"><b>Privasi</b></a>
</p>

GenOffice ialah alternatif percuma dan sumber terbuka kepada Microsoft Office
untuk macOS, Windows dan Linux. Ia membuka dan menyimpan fail asli `.docx`,
`.xlsx` dan `.pptx` serta menyunting PDF, Markdown dan HTML, semuanya dalam
satu tetingkap bertab. Tiada akaun yang perlu dicipta dan tiada apa-apa untuk
log masuk: fail dibuka, disunting, disimpan dan ditukar pada komputer anda
sendiri.

- **Format sebenar, terpelihara bit demi bit.** Hanya bahagian yang anda
  sunting akan ditulis semula. Selebihnya dalam fail terus terpelihara
  bit demi bit, jadi dokumen anda kekal berfungsi dalam Word, Excel dan
  PowerPoint.
- **Setempat mengikut reka bentuk.** Tiada awan, tiada muat naik. PDF → Word /
  Excel / PowerPoint, Markdown → Word dan HTML → Word semuanya berjalan di
  peranti sendiri.
- **Enam editor, satu tetingkap.** Docs, Sheets, Slides, PDF, Markdown dan
  HTML berkongsi satu jalur tab, satu Laman Utama dan satu set tetapan.
- **Cari fail mengikut kandungannya.** Laman Utama mencari nama, folder dan
  teks penuh fail `.docx`, `.xlsx`, `.pptx`, PDF, Markdown dan HTML anda
  daripada indeks setempat, termasuk CJK.
- **21 bahasa antara muka**, tema terang, gelap dan sistem, serta panduan
  pengguna terbina dalam (F1) dalam setiap bahasa.

**Dapatkan:** [macOS](https://github.com/genspark-ai/genoffice/releases/latest) (Apple Silicon dan Intel) ·
[Windows](https://github.com/genspark-ai/genoffice/releases/latest) (x64 dan Arm) ·
[Linux](https://github.com/genspark-ai/genoffice/releases/latest) (deb, rpm, AppImage) —
butiran dan keperluan dalam [Muat Turun](#download).

## Aplikasi

| Aplikasi     | Membuka dan menyimpan               | Sorotan                                                                                                                                                                                       |
| ------------ | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Docs**     | `.docx` (dan `.doc` untuk dibuka)   | Penomboran halaman WYSIWYG sebenar berdasarkan metrik baris Word; gaya, jadual, pengepala dan pengaki, nota kaki, isi kandungan, komen, jejak perubahan, banding, persamaan dan dakwat.       |
| **Sheets**   | `.xlsx`, `.xls`, `.csv`, `.tsv`     | Enjin `.xlsx` Rust buatan sendiri dalam prosesnya sendiri; formula langsung, carta, jadual pangsi, slicer, pemformatan bersyarat, pengesahan data, pengesanan formula dan perlindungan helaian. |
| **Slides**   | `.pptx` (dan `.ppt` untuk dibuka)   | Induk dan tataletak, panduan pintar, pemangkasan tanpa merosakkan, peralihan dan animasi, nota penceramah, paparan penyampai dan eksport PDF.                                                 |
| **PDF**      | `.pdf`                              | Sunting teks terus dalam halaman melalui PDFium, anotasi, isi borang, tandatangan, redaksi, susun semula, pisah dan gabung halaman; tukar kepada Word, Excel atau PowerPoint di peranti sendiri dengan OCR sistem. |
| **Markdown** | `.md`, `.markdown`, `.txt`, `.json` | Editor blok di atas Markdown biasa dengan jadual, senarai tugas, rajah Mermaid dan matematik, paparan sumber yang setia bait demi bait, serta eksport ke Word, PDF dan imej.                  |
| **HTML**     | `.html`, `.htm`                     | Pratonton langsung dengan pemeriksa elemen, paparan sumber CodeMirror, persembahan skrin penuh, serta eksport ke Word, PDF atau satu fail HTML serba lengkap.                                 |

### Docs

Docs membuka fail sama seperti Word menyusun aturnya — seksyen berbilang
lajur, imej selebar halaman, jadual berlorek, pengepala dan pengaki,
penomboran halaman berdasarkan metrik baris Word. Gaya, komen, perubahan yang
dijejak, persamaan dan dakwat kembali tanpa disentuh, dan penyimpanan hanya
menulis semula perenggan yang anda ubah.

### Sheets

Pengiraan berjalan dalam proses enjin Rust yang berasingan, jadi ranap di
situ tidak pernah menjatuhkan aplikasi. Formula kekal sebagai formula
langsung, carta dan PivotChart ialah objek sebenar dalam buku kerja yang
disimpan, dan perlindungan, nama yang ditakrifkan serta format bersyarat
ditulis semula ke dalam `.xlsx`.

### Slides

Editor gaya PowerPoint dengan induk dan tataletak, panduan pintar, jadual,
carta, peralihan dan animasi. Slaid yang tidak disentuh kekal sama bait demi
bait semasa disimpan; nota, induk dan anotasi terpelihara, dan dek boleh
dieksport ke PDF atau satu PNG bagi setiap slaid.

### PDF

Mod sunting membingkai setiap blok teks untuk ditaip semula di tempatnya;
strim kandungan ditulis semula melalui PDFium dengan fon asal, bukan anotasi
yang sekadar menutup. **PDF Converter → PDF to Word** menghasilkan `.docx`
yang boleh disunting dan dibuka dalam Docs di sebelah sumbernya. Sasaran Excel
dan PowerPoint berfungsi dengan cara yang sama, dan pada macOS dan Windows
halaman yang diimbas melalui OCR sistem. Redaksi membuang kandungan yang
ditutup secara fizikal dalam salinan baharu.

### Markdown dan HTML

Markdown ialah editor blok Tiptap yang ditulis semula sebagai `.md` biasa,
dengan paparan sumber yang setia bait demi bait untuk teks mentahnya. Editor
HTML memaparkan pratonton halaman dalam Chromium terbina dalam; klik mana-mana
elemen untuk menukar gayanya, klik dua kali untuk menyunting teksnya, atau
tukar ke paparan sumber. **Export as Word** dalam kedua-dua aplikasi
menghasilkan `.docx` asli yang boleh disunting, sepenuhnya di peranti sendiri.

## Mengapa GenOffice

- **Sumber terbuka**, Apache-2.0, dibangunkan secara terbuka di GitHub.
- **Milik anda untuk dijalankan.** Aplikasi native untuk macOS, Windows dan
  Linux; fail kekal di cakera anda dan setiap suntingan, penyimpanan serta
  penukaran berlaku pada mesin anda sendiri.
- **Fail Office sebenar.** `.docx`, `.xlsx` dan `.pptx` native, terpelihara
  bit demi bit: bahagian fail yang tidak disentuh disalin seadanya.
- **PDF yang diuruskan dengan betul.** Sunting teks terus dalam halaman, dan
  tukar PDF kepada Word, Excel atau PowerPoint di peranti sendiri, dengan OCR
  sistem untuk hasil imbasan.
- **Markdown dan HTML juga**, dengan eksport setempat ke Word dan PDF.
- **Tiada akaun.** Tiada apa-apa untuk didaftar, tiada kredit, tiada
  langganan.
- **Percuma**, untuk individu dan pasukan.

Keseluruhan rangkaian ini disertakan dengan tema terang, gelap dan sistem.
Tema hanya mengubah apa yang dipaparkan pada skrin: eksport, cetakan dan fail
yang disimpan sentiasa mengekalkan warna sebenar dokumen itu.

<a id="download"></a>

## Muat Turun

| Platform                             | Keperluan                                             | Muat Turun                                                                                |
| ------------------------------------ | ----------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **macOS** — Apple Silicon (arm64)    | macOS 11+                                             | [`.dmg` terkini (arm64)](https://github.com/genspark-ai/genoffice/releases/latest)        |
| **macOS** — Intel (x64)              | macOS 11+                                             | [`.dmg` terkini (x64)](https://github.com/genspark-ai/genoffice/releases/latest)          |
| **Windows** (x64, kebanyakan PC)     | Windows 10+, Intel/AMD                                | [Pemasang `-x64.exe` terkini](https://github.com/genspark-ai/genoffice/releases/latest)   |
| **Windows** pada Arm (ARM64)         | Windows 11 on Arm (Snapdragon X dan seumpamanya)      | [Pemasang `-arm64.exe` terkini](https://github.com/genspark-ai/genoffice/releases/latest) |
| **Linux** — Debian / Ubuntu          | x86_64, glibc 2.34+ (Ubuntu 22.04 atau lebih baharu)  | [`.deb` terkini](https://github.com/genspark-ai/genoffice/releases/latest)                |
| **Linux** — Fedora / RHEL / openSUSE | x86_64, glibc 2.34+ (Fedora 35+, RHEL 9+, Leap 15.6+) | [`.rpm` terkini](https://github.com/genspark-ai/genoffice/releases/latest)                |
| **Linux** — pengedaran lain          | x86_64, glibc 2.34+, FUSE 2                           | [`.AppImage` terkini](https://github.com/genspark-ai/genoffice/releases/latest)           |

Semua binaan berasal daripada `main`; pemasang macOS dan Windows telah
ditandatangani. Versi lama boleh didapati di halaman
[Releases](https://github.com/genspark-ai/genoffice/releases). Flatpak, Nix
dan imej Docker tanpa antara muka untuk penukaran pukal diterangkan dalam
[packaging/README.md](../../packaging/README.md).

<details>
<summary><b>Memasang pada Linux</b></summary>

Fail deb dipasang menggunakan apt — ia menarik kebergantungan dan menambah
GenOffice ke menu aplikasi:

```bash
sudo apt install ./genoffice_<version>_amd64.deb
```

Pada Fedora / keluarga RHEL / openSUSE, pasang fail rpm sebaliknya:

```bash
sudo dnf install ./genoffice-<version>.x86_64.rpm     # Fedora / RHEL family
sudo zypper install ./genoffice-<version>.x86_64.rpm  # openSUSE
```

AppImage berjalan di tempatnya: pasang runtime FUSE 2
(`sudo apt install libfuse2`; pada Ubuntu 24.04 paketnya bernama
`libfuse2t64`), jadikan fail itu boleh dilaksanakan, kemudian jalankannya:

```bash
chmod +x GenOffice-<version>.AppImage
./GenOffice-<version>.AppImage
```

</details>

## Cara ia berfungsi

Tujuh aplikasi Electron — Docs, Sheets, Slides, PDF, Markdown, HTML dan shell
bertab — berkongsi satu lapisan enjin pakej TypeScript tulen ditambah sidecar
Rust untuk `.xlsx`. Fail asal sentiasa menjadi sumber kebenaran: suntingan
digunakan sebagai tampung (patch) yang sempit, dan segala yang tidak
disentuh oleh editor itu kekal utuh selepas pergi-balik.

```
open docx ─► archive original by hash (never touched)
          ─► parse word/document.xml into a block tree, each block anchored to its original XML
          ─► Tiptap editor (dirty tracking per block)
save      ─► dirty blocks → OOXML fragments (referencing existing styles only)
          ─► splice into the original document.xml; untouched blocks keep their bytes
          ─► repack the zip; every other entry is copied byte-for-byte
```

Enjin-enjin berada di bawah `packages/` (`docx-engine`, `pptx-engine`,
`pptx-render`, `pptx-ops`, `pdf2docx`, `html2docx`, `xlsx-gateway`,
`file-parse`, `font-metrics`, `i18n`, `ui` dan lain-lain); enjin `.xlsx` Rust
terletak dalam `apps/sheets/native/xlsx-engine`. Lawatan pakej demi pakej
terdapat dalam [CONTRIBUTING.md](../../CONTRIBUTING.md).

<a id="development"></a>

## Pembangunan

Prasyarat: Node 22+, npm 10+, dan toolchain Rust (`cargo` pada PATH) untuk
sidecar `.xlsx` Sheets.

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

`npm run build -w @genoffice/sheets` mengkompil sidecar Rust secara
automatik. Lihat [CONTRIBUTING.md](../../CONTRIBUTING.md) untuk semakan yang
perlu dilalui setiap perubahan dan cara pull request diterima masuk.

## Komuniti

- **Laporkan pepijat atau minta ciri** di
  [GitHub Issues](https://github.com/genspark-ai/genoffice/issues).
- **Berikan bintang pada repo ini** jika GenOffice bermanfaat untuk anda —
  ini cara terbaik untuk menyokong projek ini.

## Soalan Lazim

<details>
<summary><b>Adakah GenOffice percuma?</b></summary>

Ya. GenOffice percuma dan sumber terbuka di bawah lesen Apache-2.0 — tiada
percubaan, tiada akaun dan tiada peringkat berbayar.

</details>

<details>
<summary><b>Bolehkah GenOffice membuka fail Microsoft Word, Excel dan PowerPoint?</b></summary>

Ya. GenOffice membuka dan menyimpan fail asli `.docx`, `.xlsx` dan `.pptx`.
Penyimpanan terpelihara bit demi bit: bahagian fail yang tidak anda sentuh
ditulis semula seadanya, jadi dokumen kekal berfungsi dalam Microsoft Office.

</details>

<details>
<summary><b>Adakah GenOffice berfungsi luar talian?</b></summary>

Ya. Membuka, menyunting, menyimpan dan menukar dokumen dilakukan sepenuhnya
secara setempat dan tidak memerlukan sambungan rangkaian. Rangkaian hanya
digunakan untuk semakan kemas kini, muat turun fon pilihan dan statistik
penggunaan tanpa nama yang boleh anda matikan di Settings → General.

</details>

<details>
<summary><b>Bolehkah GenOffice menyunting fail PDF?</b></summary>

Ya — penyuntingan teks dan imej PDF sebenar yang menulis semula strim
kandungan halaman dengan fon asal terpelihara, bukan anotasi yang sekadar
menutup.

</details>

<details>
<summary><b>Bolehkah GenOffice menukar PDF kepada Word, Excel atau PowerPoint?</b></summary>

Ya — sepenuhnya di peranti sendiri: pengekstrakan aksara PDFium ditambah
analisis susun atur berasaskan geometri, tanpa perkhidmatan awan, tanpa muat
naik. Halaman yang diimbas turut disokong: pada macOS dan Windows, OCR sistem
membacanya, jadi ia ditukar kepada teks yang boleh disunting bukan imej
halaman.

</details>

<details>
<summary><b>Bolehkah GenOffice menukar HTML kepada Word?</b></summary>

Ya — Export as Word dalam aplikasi HTML menghasilkan `.docx` asli yang boleh
disunting, sepenuhnya di peranti sendiri. Halaman itu dipaparkan dalam
Chromium terbina dalam dan dikurangkan kepada struktur Word sebenar: tajuk,
perenggan, senarai, jadual, kad, baris KPI, medan borang dan latar belakang
halaman; hanya visual yang tidak mempunyai persamaan dalam Word (carta, ikon,
kotak berhias) dibenamkan sebagai gambar.

</details>

<details>
<summary><b>Adakah GenOffice mengumpul sebarang data?</b></summary>

Binaan pakej rasmi menghantar analitik penggunaan tanpa nama yang terhad
secara lalai, dan anda boleh melumpuhkan pelaporan itu pada bila-bila masa di
bawah Settings → General. Analitik tidak pernah menghantar kandungan dokumen,
nama fail, laluan fail atau alamat e-mel. Lihat
[GenOffice Privacy](../../PRIVACY.md) untuk pendedahan penuh peristiwa dan
data.

</details>

## Keselamatan

Lihat [SECURITY.md](../../SECURITY.md) untuk kedudukan keselamatan proses
(kotak pasir renderer, pengesahan IPC, kawalan pautan luar).

## Penghargaan

GenOffice tidak akan wujud tanpa projek-projek sumber terbuka ini:

- [Electron](https://www.electronjs.org/) — runtime desktop untuk setiap
  aplikasi.
- [Univer](https://github.com/dream-num/univer) (Apache-2.0) — teras UI
  hamparan yang dilanjutkan oleh Sheets.
- [PDFium](https://pdfium.googlesource.com/pdfium/) (BSD-3-Clause, disertakan
  melalui [@embedpdf/pdfium](https://github.com/embedpdf/embed-pdf-viewer)) —
  enjin strim kandungan di sebalik penyuntingan teks dan imej PDF sebenar.
- [pdf.js](https://github.com/mozilla/pdf.js) (Apache-2.0) dan
  [pdf-lib](https://github.com/Hopding/pdf-lib) (MIT) — pemaparan PDF dan
  penyusunan dokumen.
- [Tiptap](https://tiptap.dev/) / [ProseMirror](https://prosemirror.net/) —
  editor blok dalam Docs dan Markdown.
- [CodeMirror](https://codemirror.net/) (MIT) — editor sumber dalam HTML.
- [Konva](https://konvajs.org/) — pemaparan kanvas untuk Slides dan carta
  Sheets.
- [HarfBuzz](https://github.com/harfbuzz/harfbuzz) (wasm) — metrik pembentukan
  teks untuk skrip kompleks.
- [calamine](https://github.com/tafia/calamine) dan
  [IronCalc](https://github.com/ironcalc/IronCalc) — lapisan baca dan kira
  bagi sidecar xlsx Rust.
- [libeot](https://github.com/umanwizard/libeot) (MPL-2.0) — penyahkod
  MicroType Express untuk fon PowerPoint terbenam, yang diport ke TypeScript.
- [React](https://react.dev/) (MIT) — lapisan UI setiap aplikasi.
- [Mermaid](https://mermaid.js.org/) (MIT) dan [KaTeX](https://katex.org/)
  (MIT) — rajah dan matematik dalam Markdown dan Docs.
- [opentype.js](https://opentype.js.org/) (MIT) — penghuraian fon untuk
  metrik dan carian glif.
- [JSZip](https://stuk.github.io/jszip/) (MIT) dan
  [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser)
  (MIT) — lapisan bekas OOXML dan XML.
- [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons)
  (MIT) — set ikon merentasi semua ribbon.
- [electron-updater](https://www.electron.build/) (MIT) — kemas kini dalam
  aplikasi.
- Fon Liberation, Carlito, Caladea, dan Noto CJK (OFL/Apache-2.0) — fon
  dokumen yang disertakan.

`npm run notices` menjana semula ringkasan lesen pihak ketiga yang disertakan
(`tools/gen-third-party-notices.mjs`); semua kebergantungan masa jalan adalah
MIT/Apache-2.0/BSD-3-Clause/OFL.

## Lesen

GenOffice dilesenkan di bawah [Apache License 2.0](../../LICENSE), dengan
satu kekecualian: direktori `ee/` dikhususkan untuk modul perusahaan pada
masa hadapan dan dilindungi oleh
[Lesen Perusahaan GenOffice](../../ee/LICENSE).

Nama dan logo GenOffice serta Genspark adalah tanda dagangan Mainfunc, Inc.
Lesen Apache-2.0 tidak memberikan kebenaran untuk menggunakannya (lihat
seksyen 6); fork perlulah menggunakan penjenamaan mereka sendiri.
