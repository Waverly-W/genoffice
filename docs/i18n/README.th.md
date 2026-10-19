<h1 align="center">GenOffice</h1>

<p align="center"><b>ชุดโปรแกรม Office ฟรีแบบโอเพนซอร์สที่ทำงานบนเครื่องของคุณทั้งหมด</b><br>
ไฟล์ Word, Excel, PowerPoint, PDF, Markdown และ HTML เปิด แก้ไข และบันทึกกลับเป็นฟอร์แมตจริง</p>

<p align="center">
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/genspark-ai/genoffice" alt="License: Apache-2.0"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases/latest"><img src="https://img.shields.io/github/v/release/genspark-ai/genoffice" alt="Latest release"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases"><img src="https://img.shields.io/github/downloads/genspark-ai/genoffice/total" alt="Downloads"></a>
  <a href="https://github.com/genspark-ai/genoffice/stargazers"><img src="https://img.shields.io/github/stars/genspark-ai/genoffice?style=flat" alt="GitHub stars"></a>
</p>

<p align="center"><a href="../../README.md">English</a> · <a href="README.es.md">Español</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.zh-TW.md">繁體中文</a> · <a href="README.ko.md">한국어</a> · <a href="README.ja.md">日本語</a> · <a href="README.ar.md">العربية</a> · <a href="README.ru.md">Русский</a> · <a href="README.it.md">Italiano</a> · <a href="README.nl.md">Nederlands</a> · <a href="README.pl.md">Polski</a> · <a href="README.cs.md">Čeština</a> · <a href="README.id.md">Bahasa Indonesia</a> · <a href="README.ms.md">Bahasa Melayu</a> · <b>ไทย</b> · <a href="README.hi.md">हिन्दी</a> · <a href="README.he.md">עברית</a> · <a href="README.vi.md">Tiếng Việt</a></p>

<p align="center">
  <a href="#download"><b>ดาวน์โหลด</b></a> ·
  <a href="#development"><b>การพัฒนา</b></a> ·
  <a href="../../PRIVACY.md"><b>ความเป็นส่วนตัว</b></a>
</p>

GenOffice คือทางเลือกฟรีและโอเพนซอร์สของ Microsoft Office สำหรับ macOS,
Windows และ Linux เปิดและบันทึกไฟล์ `.docx`, `.xlsx` และ `.pptx` แบบดั้งเดิม
และแก้ไข PDF, Markdown และ HTML ได้ ทั้งหมดในหน้าต่างแบบแท็บเดียว ไม่ต้องสร้าง
บัญชีและไม่ต้องลงชื่อเข้าใช้: ไฟล์เปิด แก้ไข บันทึก และแปลงบนคอมพิวเตอร์ของคุณเอง

- **ฟอร์แมตจริง คงบิตต่อบิต** เฉพาะส่วนที่คุณแก้ไขเท่านั้นที่จะถูกเขียนใหม่
  ส่วนอื่นๆ ของไฟล์จะยังคงเดิมทุกไบต์ เอกสารจึงใช้งานได้ต่อใน Word,
  Excel และ PowerPoint
- **ทำงานในเครื่องโดยออกแบบมาแบบนั้น** ไม่มีคลาวด์ ไม่มีการอัปโหลด
  PDF → Word / Excel / PowerPoint, Markdown → Word และ HTML → Word
  ทั้งหมดทำงานในเครื่อง
- **หกเอดิเตอร์ หน้าต่างเดียว** Docs, Sheets, Slides, PDF, Markdown และ HTML
  ใช้แถบแท็บเดียวกัน หน้าแรกเดียวกัน และการตั้งค่าชุดเดียวกัน
- **ค้นหาไฟล์จากเนื้อหาข้างใน** หน้าแรกค้นหาชื่อ โฟลเดอร์ และข้อความทั้งหมด
  ของไฟล์ `.docx`, `.xlsx`, `.pptx`, PDF, Markdown และ HTML ของคุณจากดัชนี
  ในเครื่อง รองรับภาษา CJK ด้วย
- **อินเทอร์เฟซ 21 ภาษา** ธีมสว่าง มืด และตามระบบ พร้อมคู่มือผู้ใช้ในตัว (F1)
  ในทุกภาษา

**ดาวน์โหลด:** [macOS](https://github.com/genspark-ai/genoffice/releases/latest) (Apple Silicon และ Intel) ·
[Windows](https://github.com/genspark-ai/genoffice/releases/latest) (x64 และ Arm) ·
[Linux](https://github.com/genspark-ai/genoffice/releases/latest) (deb, rpm, AppImage) —
รายละเอียดและความต้องการของระบบดูได้ในหัวข้อ [ดาวน์โหลด](#download)

## แอปต่างๆ

| แอป          | เปิดและบันทึก                         | จุดเด่น                                                                                                                                                                    |
| ------------ | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Docs**     | `.docx` (และเปิด `.doc` ได้)          | การแบ่งหน้าแบบ WYSIWYG แท้ตามมาตรวัดบรรทัดของ Word สไตล์ ตาราง หัวกระดาษและท้ายกระดาษ เชิงอรรถ สารบัญ ข้อคิดเห็น tracked changes การเปรียบเทียบ สมการ และงานเขียนด้วยลายมือ |
| **Sheets**   | `.xlsx`, `.xls`, `.csv`, `.tsv`       | เอนจิน `.xlsx` ของ Rust ที่พัฒนาขึ้นเองซึ่งรันในโปรเซสของตัวเอง สูตรที่คำนวณสด กราฟ ตาราง pivot, slicer การจัดรูปแบบตามเงื่อนไข การตรวจสอบข้อมูล การตรวจสอบที่มาของสูตร และการป้องกันแผ่นงาน |
| **Slides**   | `.pptx` (และเปิด `.ppt` ได้)          | master และ layout, smart guide, การครอปแบบไม่ทำลายต้นฉบับ ทรานซิชันและแอนิเมชัน บันทึกของผู้บรรยาย มุมมองผู้นำเสนอ และการส่งออกเป็น PDF                                   |
| **PDF**      | `.pdf`                                | แก้ไขข้อความในหน้าผ่าน PDFium ใส่คำอธิบายประกอบ กรอกฟอร์ม ลงนาม ปิดทับข้อมูล จัดลำดับ แยก และรวมหน้า แปลงเป็น Word, Excel หรือ PowerPoint ในเครื่องพร้อม OCR ของระบบ       |
| **Markdown** | `.md`, `.markdown`, `.txt`, `.json`   | บล็อกเอดิเตอร์เหนือ Markdown ล้วน พร้อมตาราง รายการงาน ไดอะแกรม Mermaid และสมการ มุมมองซอร์สที่รักษาไฟล์ทุกไบต์ และการส่งออกเป็น Word, PDF และภาพ                         |
| **HTML**     | `.html`, `.htm`                       | พรีวิวสดพร้อมตัวตรวจสอบอีลิเมนต์ มุมมองซอร์สผ่าน CodeMirror การนำเสนอแบบเต็มจอ และการส่งออกเป็น Word, PDF หรือไฟล์ HTML เดียวแบบครบในตัว                                   |

### Docs

Docs เปิดไฟล์ตามที่ Word จัดวาง — ส่วนหลายคอลัมน์ ภาพเต็มหน้า ตารางแบบมีเงา
หัวกระดาษและท้ายกระดาษ การแบ่งหน้าตามมาตรวัดบรรทัดของ Word สไตล์ ข้อคิดเห็น
tracked changes สมการ และงานเขียนด้วยลายมือคงเดิมทุกรอบการเปิด-บันทึก
และการบันทึกจะเขียนใหม่เฉพาะพารากราฟที่คุณเปลี่ยนเท่านั้น

### Sheets

การคำนวณรันในโปรเซสเอนจิน Rust แยกต่างหาก หากเอนจินล่มก็ไม่ทำให้แอปล่มตาม
สูตรยังคงเป็นสูตรที่คำนวณสด กราฟและ PivotChart เป็นออบเจ็กต์จริงในเวิร์กบุ๊ก
ที่บันทึก และการป้องกัน ชื่อที่กำหนด และการจัดรูปแบบตามเงื่อนไขจะถูกเขียนกลับ
ลงใน `.xlsx`

### Slides

เอดิเตอร์สไตล์ PowerPoint พร้อม master และ layout, smart guide ตาราง กราฟ
ทรานซิชัน และแอนิเมชัน สไลด์ที่ไม่ได้แตะจะคงเดิมทุกไบต์เมื่อบันทึก บันทึกของ
ผู้บรรยาย master และคำอธิบายประกอบยังคงอยู่ และเดคส่งออกเป็น PDF หรือ PNG
หนึ่งภาพต่อสไลด์ได้

### PDF

โหมดแก้ไขขีดกรอบทุกบล็อกข้อความเพื่อพิมพ์ทับในตำแหน่งเดิม โดย content stream
ถูกเขียนใหม่ผ่าน PDFium ด้วยฟอนต์เดิม ไม่ใช่การแปะ annotation ทับ
**PDF Converter → PDF to Word** สร้าง `.docx` ที่แก้ไขได้ ซึ่งเปิดใน Docs
ข้างไฟล์ต้นฉบับ ปลายทาง Excel และ PowerPoint ก็ทำงานแบบเดียวกัน และบน macOS
และ Windows หน้าที่สแกนมาจะผ่านระบบ OCR ของเครื่อง การปิดทับข้อมูลจะลบเนื้อหา
ที่ถูกปิดออกจริงในสำเนาใหม่

### Markdown และ HTML

Markdown คือบล็อกเอดิเตอร์ Tiptap ที่เขียนกลับเป็นไฟล์ `.md` ล้วน พร้อมมุมมอง
ซอร์สที่รักษาไฟล์ทุกไบต์สำหรับข้อความดิบ เอดิเตอร์ HTML พรีวิวหน้าเว็บใน
Chromium ที่มีในตัว คลิกที่อีลิเมนต์ใดก็ได้เพื่อปรับสไตล์ ดับเบิลคลิกเพื่อแก้ไข
ข้อความ หรือสลับไปยังมุมมองซอร์ส **Export as Word** ในทั้งสองแอปสร้าง `.docx`
ที่แก้ไขได้แบบเนทิฟในเครื่องทั้งหมด

## ทำไมต้อง GenOffice

- **โอเพนซอร์ส** Apache-2.0 พัฒนาแบบเปิดบน GitHub
- **เป็นของคุณให้รันเอง** แอปเนทิฟสำหรับ macOS, Windows และ Linux ไฟล์อยู่บนดิสก์
  ของคุณ และการแก้ไข บันทึก และแปลงไฟล์ทุกครั้งเกิดขึ้นบนเครื่องของคุณเอง
- **ไฟล์ Office ตัวจริง** `.docx`, `.xlsx` และ `.pptx` แบบเนทิฟ คงบิตต่อบิต:
  ส่วนของไฟล์ที่คุณไม่ได้แก้ไขจะถูกคัดลอกไว้เหมือนเดิม
- **PDF ที่ทำได้อย่างถูกต้อง** แก้ไขข้อความในตำแหน่งเดิมบนหน้า และแปลง PDF เป็น
  Word, Excel หรือ PowerPoint ในเครื่อง พร้อม OCR ของระบบสำหรับไฟล์สแกน
- **Markdown และ HTML ด้วย** พร้อมการส่งออกเป็น Word และ PDF ในเครื่อง
- **ไม่ต้องมีบัญชี** ไม่ต้องสมัคร ไม่มีเครดิต ไม่มีค่าสมาชิก
- **ฟรี** สำหรับบุคคลทั่วไปและทีมเช่นเดียวกัน

สวีททั้งชุดมาพร้อมธีมสว่าง มืด และตามระบบ ธีมจะเปลี่ยนแค่สิ่งที่แสดง
บนหน้าจอเท่านั้น: การส่งออก การพิมพ์ และไฟล์ที่บันทึกจะคงสีของเอกสาร
เดิมไว้เสมอ

<a id="download"></a>

## ดาวน์โหลด

| แพลตฟอร์ม                            | ความต้องการของระบบ                                    | ดาวน์โหลด                                                                                  |
| ------------------------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **macOS** — Apple Silicon (arm64)    | macOS 11+                                             | [`.dmg` ล่าสุด (arm64)](https://github.com/genspark-ai/genoffice/releases/latest)          |
| **macOS** — Intel (x64)              | macOS 11+                                             | [`.dmg` ล่าสุด (x64)](https://github.com/genspark-ai/genoffice/releases/latest)            |
| **Windows** (x64, พีซีทั่วไป)        | Windows 10+, Intel/AMD                                | [ตัวติดตั้ง `-x64.exe` ล่าสุด](https://github.com/genspark-ai/genoffice/releases/latest)   |
| **Windows** บน Arm (ARM64)           | Windows 11 on Arm (Snapdragon X และรุ่นใกล้เคียง)     | [ตัวติดตั้ง `-arm64.exe` ล่าสุด](https://github.com/genspark-ai/genoffice/releases/latest) |
| **Linux** — Debian / Ubuntu          | x86_64, glibc 2.34+ (Ubuntu 22.04 ขึ้นไป)             | [`.deb` ล่าสุด](https://github.com/genspark-ai/genoffice/releases/latest)                  |
| **Linux** — Fedora / RHEL / openSUSE | x86_64, glibc 2.34+ (Fedora 35+, RHEL 9+, Leap 15.6+) | [`.rpm` ล่าสุด](https://github.com/genspark-ai/genoffice/releases/latest)                  |
| **Linux** — ดิสโทรอื่นๆ              | x86_64, glibc 2.34+, FUSE 2                           | [`.AppImage` ล่าสุด](https://github.com/genspark-ai/genoffice/releases/latest)             |

บิลด์ทั้งหมดมาจาก `main` ตัวติดตั้ง macOS และ Windows ผ่านการลงนามแล้ว
เวอร์ชันเก่ากว่านี้ดูได้ที่หน้า [Releases](https://github.com/genspark-ai/genoffice/releases)
Flatpak, Nix และอิมเมจ Docker สำหรับแปลงไฟล์เป็นชุดแบบไม่มีหน้าต่างมีคำอธิบายอยู่ใน
[packaging/README.md](../../packaging/README.md)

<details>
<summary><b>การติดตั้งบน Linux</b></summary>

ไฟล์ deb ติดตั้งด้วย apt — จะดึงดีเพนเดนซีที่ต้องใช้และเพิ่ม GenOffice
ลงในเมนูแอปพลิเคชันให้อัตโนมัติ:

```bash
sudo apt install ./genoffice_<version>_amd64.deb
```

บน Fedora / ตระกูล RHEL / openSUSE ให้ติดตั้งไฟล์ rpm แทน:

```bash
sudo dnf install ./genoffice-<version>.x86_64.rpm     # Fedora / RHEL family
sudo zypper install ./genoffice-<version>.x86_64.rpm  # openSUSE
```

ไฟล์ AppImage รันได้ทันทีในตำแหน่งที่อยู่: ติดตั้งรันไทม์ FUSE 2
(`sudo apt install libfuse2`; บน Ubuntu 24.04 แพ็กเกจคือ `libfuse2t64`)
กำหนดสิทธิ์ให้ไฟล์รันได้ แล้วรัน:

```bash
chmod +x GenOffice-<version>.AppImage
./GenOffice-<version>.AppImage
```

</details>

## หลักการทำงาน

แอป Electron เจ็ดตัว — Docs, Sheets, Slides, PDF, Markdown, HTML และเชลล์
แบบแท็บ — ใช้เอนจินร่วมกันเป็นชุดแพ็กเกจ TypeScript แท้ๆ บวก sidecar Rust
สำหรับ `.xlsx` ไฟล์ต้นฉบับคือแหล่งข้อมูลจริงเสมอ: การแก้ไขจะถูกใช้เป็นแพตช์
เฉพาะจุด และทุกอย่างที่เอดิเตอร์ไม่ได้แตะจะคงเดิมทุกรอบการเปิด-บันทึก

```
open docx ─► archive original by hash (never touched)
          ─► parse word/document.xml into a block tree, each block anchored to its original XML
          ─► Tiptap editor (dirty tracking per block)
save      ─► dirty blocks → OOXML fragments (referencing existing styles only)
          ─► splice into the original document.xml; untouched blocks keep their bytes
          ─► repack the zip; every other entry is copied byte-for-byte
```

เอนจินอยู่ภายใต้ `packages/` (`docx-engine`, `pptx-engine`,
`pptx-render`, `pptx-ops`, `pdf2docx`, `html2docx`, `xlsx-gateway`,
`file-parse`, `font-metrics`, `i18n`, `ui` และอื่นๆ) ส่วนเอนจิน `.xlsx` ของ Rust
อยู่ใน `apps/sheets/native/xlsx-engine` ทัวร์แพ็กเกจแต่ละตัวอยู่ใน
[CONTRIBUTING.md](../../CONTRIBUTING.md)

<a id="development"></a>

## การพัฒนา

สิ่งที่ต้องมี: Node 22+, npm 10+ และ Rust toolchain (`cargo` ต้องอยู่ใน PATH)
สำหรับ sidecar `.xlsx` ของ Sheets

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

`npm run build -w @genoffice/sheets` จะคอมไพล์ Rust sidecar ให้อัตโนมัติ
ดู [CONTRIBUTING.md](../../CONTRIBUTING.md) สำหรับการตรวจสอบที่การเปลี่ยนแปลง
ทุกครั้งต้องผ่าน และวิธีที่ pull request จะถูกรวมเข้าโปรเจกต์

## คอมมูนิตี้

- **รายงานบั๊กหรือขอฟีเจอร์ใหม่** ได้ที่
  [GitHub Issues](https://github.com/genspark-ai/genoffice/issues)
- **ให้ดาว repo นี้** หาก GenOffice มีประโยชน์กับคุณ — เป็นวิธีที่ดีที่สุด
  ในการสนับสนุนโปรเจกต์นี้

## คำถามที่พบบ่อย

<details>
<summary><b>GenOffice ฟรีหรือไม่</b></summary>

ใช่ GenOffice ฟรีและโอเพนซอร์สภายใต้สัญญาอนุญาต Apache-2.0 — ไม่มีช่วง
ทดลองใช้ ไม่ต้องมีบัญชี และไม่มีระดับที่ต้องเสียเงิน

</details>

<details>
<summary><b>GenOffice เปิดไฟล์ Microsoft Word, Excel และ PowerPoint ได้หรือไม่</b></summary>

ได้ GenOffice เปิดและบันทึกไฟล์ `.docx`, `.xlsx` และ `.pptx` แบบดั้งเดิม
การบันทึกคงบิตต่อบิต: ส่วนของไฟล์ที่คุณไม่ได้แตะจะถูกเขียนกลับเหมือนเดิม
ทุกไบต์ เอกสารจึงยังใช้งานได้ต่อใน Microsoft Office

</details>

<details>
<summary><b>GenOffice ใช้งานแบบออฟไลน์ได้หรือไม่</b></summary>

ได้ การเปิด แก้ไข บันทึก และแปลงเอกสารทำงานในเครื่องทั้งหมดและไม่ต้องใช้
การเชื่อมต่อเครือข่าย เครือข่ายถูกใช้เฉพาะสำหรับการตรวจหาอัปเดต การดาวน์โหลด
ฟอนต์ที่เป็นตัวเลือกเสริม และสถิติการใช้งานแบบไม่ระบุตัวตนที่คุณปิดได้ใน
Settings → General

</details>

<details>
<summary><b>GenOffice แก้ไขไฟล์ PDF ได้หรือไม่</b></summary>

ได้ — การแก้ไขข้อความและภาพใน PDF จริง ที่เขียน content stream ของหน้า
ใหม่โดยคงฟอนต์เดิมไว้ ไม่ใช่การแปะ annotation ทับ

</details>

<details>
<summary><b>GenOffice แปลง PDF เป็น Word, Excel หรือ PowerPoint ได้หรือไม่</b></summary>

ได้ — ทำงานในเครื่องทั้งหมด: การดึงข้อมูลระดับตัวอักษรด้วย PDFium
ร่วมกับการวิเคราะห์เลย์เอาต์แบบตามเรขาคณิต ไม่ต้องใช้บริการคลาวด์
ไม่ต้องอัปโหลด หน้าที่สแกนมาก็รองรับด้วย: บน macOS และ Windows ระบบ OCR
จะอ่านให้ จึงแปลงเป็นข้อความที่แก้ไขได้ ไม่ใช่ภาพของหน้ากระดาษ

</details>

<details>
<summary><b>GenOffice แปลง HTML เป็น Word ได้หรือไม่</b></summary>

ได้ — Export as Word ในแอป HTML สร้าง `.docx` ที่แก้ไขได้แบบเนทิฟทั้งหมด
ในเครื่อง หน้าเว็บถูกเรนเดอร์ใน Chromium ที่มีในตัวและลดรูปลงเป็นโครงสร้าง
Word จริง: หัวเรื่อง พารากราฟ รายการ ตาราง การ์ด แถวข้อมูล KPI ฟิลด์ฟอร์ม
และพื้นหลังของหน้า มีเพียงองค์ประกอบภาพที่ไม่มีสิ่งเทียบเท่าใน Word
(กราฟ ไอคอน กล่องที่ตกแต่ง) เท่านั้นที่จะถูกฝังเป็นภาพ

</details>

<details>
<summary><b>GenOffice เก็บข้อมูลอะไรบ้างหรือไม่</b></summary>

บิลด์ที่แพ็กเกจอย่างเป็นทางการส่งข้อมูลวิเคราะห์การใช้งานแบบไม่ระบุตัวตน
ในขอบเขตจำกัดเป็นค่าเริ่มต้น และคุณสามารถปิดการรายงานได้ทุกเมื่อที่
Settings → General ข้อมูลวิเคราะห์จะไม่ส่งเนื้อหาเอกสาร ชื่อไฟล์ พาธไฟล์
หรือที่อยู่อีเมล ดู [GenOffice Privacy](../../PRIVACY.md) สำหรับรายละเอียด
เหตุการณ์และข้อมูลทั้งหมดที่เปิดเผย

</details>

## ความปลอดภัย

ดู [SECURITY.md](../../SECURITY.md) สำหรับสถานะความปลอดภัยของโปรเซส
(การแซนด์บ็อกซ์ renderer, การตรวจสอบ IPC, การกั้นลิงก์ภายนอก)

## คำขอบคุณ

GenOffice จะไม่สามารถเกิดขึ้นได้หากไม่มีโครงการโอเพนซอร์สเหล่านี้:

- [Electron](https://www.electronjs.org/) — รันไทม์เดสก์ท็อปสำหรับทุกแอป
- [Univer](https://github.com/dream-num/univer) (Apache-2.0) — คอร์ของ UI
  สเปรดชีตที่ Sheets ต่อยอดมา
- [PDFium](https://pdfium.googlesource.com/pdfium/) (BSD-3-Clause, ฝังผ่าน
  [@embedpdf/pdfium](https://github.com/embedpdf/embed-pdf-viewer)) — เอนจิน
  content-stream ที่อยู่เบื้องหลังการแก้ไขข้อความและภาพ PDF ของจริง
- [pdf.js](https://github.com/mozilla/pdf.js) (Apache-2.0) และ
  [pdf-lib](https://github.com/Hopding/pdf-lib) (MIT) — การเรนเดอร์ PDF
  และการประกอบเอกสาร
- [Tiptap](https://tiptap.dev/) / [ProseMirror](https://prosemirror.net/) —
  บล็อกเอดิเตอร์ใน Docs และ Markdown
- [CodeMirror](https://codemirror.net/) (MIT) — ซอร์สเอดิเตอร์ใน HTML
- [Konva](https://konvajs.org/) — การเรนเดอร์บนแคนวาสสำหรับ Slides และกราฟ
  ใน Sheets
- [HarfBuzz](https://github.com/harfbuzz/harfbuzz) (wasm) — มาตรวัดการ
  shaping ข้อความสำหรับสคริปต์ที่ซับซ้อน
- [calamine](https://github.com/tafia/calamine) และ
  [IronCalc](https://github.com/ironcalc/IronCalc) — เลเยอร์การอ่านและ
  การคำนวณของ xlsx sidecar ที่เขียนด้วย Rust
- [libeot](https://github.com/umanwizard/libeot) (MPL-2.0) — ตัวถอดรหัส
  MicroType Express สำหรับฟอนต์ PowerPoint ที่ฝังมา ซึ่งพอร์ตมาเป็น
  TypeScript
- [React](https://react.dev/) (MIT) — เลเยอร์ UI ของทุกแอป
- [Mermaid](https://mermaid.js.org/) (MIT) และ [KaTeX](https://katex.org/)
  (MIT) — แผนภาพและสมการคณิตศาสตร์ใน Markdown และ Docs
- [opentype.js](https://opentype.js.org/) (MIT) — การแยกวิเคราะห์ฟอนต์สำหรับ
  มาตรวัดและการค้นหา glyph
- [JSZip](https://stuk.github.io/jszip/) (MIT) และ
  [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser)
  (MIT) — เลเยอร์คอนเทนเนอร์ OOXML และ XML
- [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons)
  (MIT) — ชุดไอคอนทั่วทั้งริบบอน
- [electron-updater](https://www.electron.build/) (MIT) — การอัปเดตในแอป
- ฟอนต์ Liberation, Carlito, Caladea และ Noto CJK (OFL/Apache-2.0) —
  ฟอนต์เอกสารที่รวมมาให้

`npm run notices` จะสร้างสรุปสัญญาอนุญาตของบุคคลที่สามที่รวมมาให้ใหม่
(`tools/gen-third-party-notices.mjs`); ดีเพนเดนซีรันไทม์ทั้งหมดอยู่ภายใต้
MIT/Apache-2.0/BSD-3-Clause/OFL

## สัญญาอนุญาต

GenOffice อยู่ภายใต้สัญญาอนุญาต [Apache License 2.0](../../LICENSE)
โดยมีข้อยกเว้นหนึ่งข้อ: ไดเรกทอรี `ee/` สงวนไว้สำหรับโมดูลระดับองค์กร
ในอนาคต และอยู่ภายใต้ [GenOffice Enterprise License](../../ee/LICENSE)

ชื่อและโลโก้ของ GenOffice และ Genspark เป็นเครื่องหมายการค้าของ
Mainfunc, Inc. สัญญาอนุญาต Apache-2.0 ไม่ได้ให้สิทธิ์ในการใช้เครื่องหมาย
เหล่านี้ (ดูข้อ 6) โปรเจกต์ที่ fork ไปควรใช้แบรนด์ของตัวเอง
