<h1 align="center">GenOffice</h1>

<p align="center"><b>Eine kostenlose Open-Source-Office-Suite, die vollständig auf deinem Rechner läuft.</b><br>
Word-, Excel-, PowerPoint-, PDF-, Markdown- und HTML-Dateien, geöffnet, bearbeitet und in ihren echten Formaten zurückgespeichert.</p>

<p align="center">
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/genspark-ai/genoffice" alt="Lizenz: Apache-2.0"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases/latest"><img src="https://img.shields.io/github/v/release/genspark-ai/genoffice" alt="Neueste Version"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases"><img src="https://img.shields.io/github/downloads/genspark-ai/genoffice/total" alt="Downloads"></a>
  <a href="https://github.com/genspark-ai/genoffice/stargazers"><img src="https://img.shields.io/github/stars/genspark-ai/genoffice?style=flat" alt="GitHub-Sterne"></a>
</p>

<p align="center"><a href="../../README.md">English</a> · <a href="README.es.md">Español</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <b>Deutsch</b> · <a href="README.fr.md">Français</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.zh-TW.md">繁體中文</a> · <a href="README.ko.md">한국어</a> · <a href="README.ja.md">日本語</a> · <a href="README.ar.md">العربية</a> · <a href="README.ru.md">Русский</a> · <a href="README.it.md">Italiano</a> · <a href="README.nl.md">Nederlands</a> · <a href="README.pl.md">Polski</a> · <a href="README.cs.md">Čeština</a> · <a href="README.id.md">Bahasa Indonesia</a> · <a href="README.ms.md">Bahasa Melayu</a> · <a href="README.th.md">ไทย</a> · <a href="README.hi.md">हिन्दी</a> · <a href="README.he.md">עברית</a> · <a href="README.vi.md">Tiếng Việt</a></p>

<p align="center">
  <a href="#download"><b>Download</b></a> ·
  <a href="#development"><b>Entwicklung</b></a> ·
  <a href="../../PRIVACY.md"><b>Datenschutz</b></a>
</p>

GenOffice ist eine kostenlose Open-Source-Alternative zu Microsoft Office für
macOS, Windows und Linux. Es öffnet und speichert native `.docx`-, `.xlsx`-
und `.pptx`-Dateien und bearbeitet PDF, Markdown und HTML – alles in einem
einzigen Fenster mit Tabs. Es gibt kein Konto anzulegen und nichts, wo du
dich anmelden müsstest: Dateien werden auf deinem eigenen Computer geöffnet,
bearbeitet, gespeichert und konvertiert.

- **Echte Formate, byteerhaltend.** Nur das, was du bearbeitest, wird neu
  geschrieben. Alles andere in der Datei bleibt Byte für Byte erhalten,
  sodass Dokumente in Word, Excel und PowerPoint weiter funktionieren.
- **Lokal von Grund auf.** Keine Cloud, kein Upload. PDF → Word / Excel /
  PowerPoint, Markdown → Word und HTML → Word laufen vollständig auf dem
  Gerät.
- **Sechs Editoren, ein Fenster.** Docs, Sheets, Slides, PDF, Markdown und
  HTML teilen sich eine Tab-Leiste, einen Startbildschirm und einen Satz
  Einstellungen.
- **Dateien nach ihrem Inhalt finden.** Der Startbildschirm durchsucht Namen,
  Ordner und den Volltext deiner `.docx`-, `.xlsx`-, `.pptx`-, PDF-,
  Markdown- und HTML-Dateien über einen lokalen Index, CJK eingeschlossen.
- **21 Oberflächensprachen**, helles, dunkles und System-Design sowie ein
  eingebautes Benutzerhandbuch (F1) in jeder Sprache.

**Los geht's:** [macOS](https://github.com/genspark-ai/genoffice/releases/latest) (Apple Silicon und Intel) ·
[Windows](https://github.com/genspark-ai/genoffice/releases/latest) (x64 und Arm) ·
[Linux](https://github.com/genspark-ai/genoffice/releases/latest) (deb, rpm, AppImage) —
Details und Voraussetzungen unter [Download](#download).

## Die Apps

| App          | Öffnet und speichert                    | Highlights                                                                                                                                                                                                         |
| ------------ | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Docs**     | `.docx` (und `.doc` zum Öffnen)         | Echte WYSIWYG-Paginierung nach den Zeilenmetriken von Word; Formatvorlagen, Tabellen, Kopf- und Fußzeilen, Fußnoten, Inhaltsverzeichnis, Kommentare, nachverfolgte Änderungen, Vergleichen, Formeln und Freihand. |
| **Sheets**   | `.xlsx`, `.xls`, `.csv`, `.tsv`         | Eine hauseigene Rust-`.xlsx`-Engine in einem eigenen Prozess; echte Formeln, Diagramme, Pivot-Tabellen, Datenschnitte, bedingte Formatierung, Datenüberprüfung, Formelverfolgung und Blattschutz.                  |
| **Slides**   | `.pptx` (und `.ppt` zum Öffnen)         | Master und Layouts, intelligente Hilfslinien, nicht-destruktives Zuschneiden, Übergänge und Animationen, Sprechernotizen, Referentenansicht und PDF-Export.                                                       |
| **PDF**      | `.pdf`                                  | Text direkt auf der Seite über PDFium bearbeiten, kommentieren, Formulare ausfüllen, signieren, schwärzen, Seiten neu anordnen, teilen und zusammenführen; lokal mit System-OCR in Word, Excel oder PowerPoint konvertieren. |
| **Markdown** | `.md`, `.markdown`, `.txt`, `.json`     | Ein Block-Editor über einfachem Markdown mit Tabellen, Aufgabenlisten, Mermaid-Diagrammen und Mathematik, eine bytegetreue Quelltextansicht und Export nach Word, PDF und Bildern.                                 |
| **HTML**     | `.html`, `.htm`                         | Eine Live-Vorschau mit Element-Inspektor, eine CodeMirror-Quelltextansicht, Vollbild-Präsentation und Export nach Word, PDF oder in eine einzelne, eigenständige HTML-Datei.                                       |

### Docs

Docs öffnet eine Datei so, wie Word sie setzt – mehrspaltige Abschnitte,
randlose Bilder, schattierte Tabellen, Kopf- und Fußzeilen, Paginierung nach
den Zeilenmetriken von Word. Formatvorlagen, Kommentare, nachverfolgte
Änderungen, Formeln und Freihand überstehen den Roundtrip unverändert, und
beim Speichern werden nur die Absätze neu geschrieben, die du geändert hast.

### Sheets

Die Berechnung läuft in einem separaten Rust-Engine-Prozess, sodass ein
Absturz dort nie die App mitreißt. Formeln bleiben echte Formeln, Diagramme
und PivotCharts sind echte Objekte in der gespeicherten Arbeitsmappe, und
Schutz, definierte Namen und bedingte Formate werden in die `.xlsx`
zurückgeschrieben.

### Slides

Ein Editor im Stil von PowerPoint mit Mastern und Layouts, intelligenten
Hilfslinien, Tabellen, Diagrammen, Übergängen und Animationen. Unveränderte
Folien bleiben beim Speichern byteidentisch; Notizen, Master und Anmerkungen
bleiben erhalten, und Präsentationen lassen sich als PDF oder als ein PNG pro
Folie exportieren.

### PDF

Der Bearbeitungsmodus umrandet jeden Textblock, damit du ihn direkt neu
tippen kannst; der Content-Stream wird über PDFium mit den Originalschriften
neu geschrieben, nicht mit einer überdeckenden Anmerkung. **PDF-Konverter →
PDF in Word** erzeugt eine bearbeitbare `.docx`, die neben der Quelle in
Docs geöffnet wird. Excel und PowerPoint als Ziel funktionieren genauso, und
unter macOS und Windows durchlaufen gescannte Seiten die System-OCR. Das
Schwärzen entfernt den abgedeckten Inhalt physisch in einer neuen Kopie.

### Markdown und HTML

Markdown ist ein Tiptap-Block-Editor, der als einfaches `.md`
zurückgeschrieben wird, mit einer bytegetreuen Quelltextansicht für den
Rohtext. Der HTML-Editor zeigt die Seite im eingebauten Chromium an; klicke
auf ein beliebiges Element, um es neu zu gestalten, doppelklicke, um seinen
Text zu bearbeiten, oder wechsle zur Quelltextansicht. **Als Word
exportieren** erzeugt in beiden Apps eine native, bearbeitbare `.docx`,
vollständig auf dem Gerät.

## Warum GenOffice

- **Open Source**, Apache-2.0, offen entwickelt auf GitHub.
- **Läuft auf deinem Rechner.** Native Apps für macOS, Windows und Linux;
  Dateien bleiben auf deiner Festplatte, und jede Bearbeitung, jedes Speichern
  und jede Konvertierung findet auf deinem Rechner statt.
- **Echte Office-Dateien.** Native `.docx`, `.xlsx` und `.pptx`, byteerhaltend:
  Teile der Datei, die du nicht angefasst hast, werden unverändert kopiert.
- **PDF richtig gemacht.** Text direkt auf der Seite bearbeiten und PDF lokal
  in Word, Excel oder PowerPoint konvertieren, mit System-OCR für Scans.
- **Auch Markdown und HTML**, mit lokalem Export nach Word und PDF.
- **Kein Konto.** Keine Registrierung, keine Credits, kein Abo.
- **Kostenlos**, für Einzelpersonen wie für Teams.

Die gesamte Suite bringt ein helles, ein dunkles und einen
Systemdesign-Modus mit. Designs ändern nur, was auf dem Bildschirm zu sehen
ist: Exporte, Ausdrucke und gespeicherte Dateien behalten immer die eigenen
Farben des Dokuments.

<a id="download"></a>

## Download

| Plattform                            | Voraussetzungen                                       | Download                                                                                    |
| ------------------------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **macOS** – Apple Silicon (arm64)    | macOS 11+                                             | [Neueste `.dmg` (arm64)](https://github.com/genspark-ai/genoffice/releases/latest)          |
| **macOS** – Intel (x64)              | macOS 11+                                             | [Neueste `.dmg` (x64)](https://github.com/genspark-ai/genoffice/releases/latest)            |
| **Windows** (x64, die meisten PCs)   | Windows 10+, Intel/AMD                                | [Neuester `-x64.exe`-Installer](https://github.com/genspark-ai/genoffice/releases/latest)   |
| **Windows** auf Arm (ARM64)          | Windows 11 auf Arm (Snapdragon X und Ähnliche)        | [Neuester `-arm64.exe`-Installer](https://github.com/genspark-ai/genoffice/releases/latest) |
| **Linux** – Debian / Ubuntu          | x86_64, glibc 2.34+ (Ubuntu 22.04 oder neuer)         | [Neueste `.deb`](https://github.com/genspark-ai/genoffice/releases/latest)                  |
| **Linux** – Fedora / RHEL / openSUSE | x86_64, glibc 2.34+ (Fedora 35+, RHEL 9+, Leap 15.6+) | [Neueste `.rpm`](https://github.com/genspark-ai/genoffice/releases/latest)                  |
| **Linux** – andere Distributionen    | x86_64, glibc 2.34+, FUSE 2                           | [Neueste `.AppImage`](https://github.com/genspark-ai/genoffice/releases/latest)             |

Alle Builds stammen aus `main`; die macOS- und Windows-Installer sind
signiert. Ältere Versionen findest du auf der Seite
[Releases](https://github.com/genspark-ai/genoffice/releases). Flatpak, Nix
und ein Headless-Docker-Image für die Stapelkonvertierung sind in
[packaging/README.md](../../packaging/README.md) beschrieben.

<details>
<summary><b>Installation unter Linux</b></summary>

Das deb-Paket wird mit apt installiert – es zieht die Abhängigkeiten nach
und fügt GenOffice dem Anwendungsmenü hinzu:

```bash
sudo apt install ./genoffice_<version>_amd64.deb
```

Installiere auf Fedora / RHEL-Familie / openSUSE stattdessen das rpm-Paket:

```bash
sudo dnf install ./genoffice-<version>.x86_64.rpm     # Fedora / RHEL family
sudo zypper install ./genoffice-<version>.x86_64.rpm  # openSUSE
```

Das AppImage läuft direkt: installiere die FUSE-2-Laufzeit
(`sudo apt install libfuse2`; auf Ubuntu 24.04 heißt das Paket
`libfuse2t64`), mache die Datei ausführbar und starte sie dann:

```bash
chmod +x GenOffice-<version>.AppImage
./GenOffice-<version>.AppImage
```

</details>

## Wie es funktioniert

Sieben Electron-Apps — Docs, Sheets, Slides, PDF, Markdown, HTML und die
Tab-Shell — teilen sich eine Engine-Schicht aus reinen TypeScript-Paketen
plus einem Rust-Sidecar für `.xlsx`. Die Originaldatei ist immer die Quelle
der Wahrheit: Änderungen werden als eng begrenzte Patches angewendet, und
alles, was der Editor nicht berührt hat, überlebt den Roundtrip unverändert.

```
open docx ─► archive original by hash (never touched)
          ─► parse word/document.xml into a block tree, each block anchored to its original XML
          ─► Tiptap editor (dirty tracking per block)
save      ─► dirty blocks → OOXML fragments (referencing existing styles only)
          ─► splice into the original document.xml; untouched blocks keep their bytes
          ─► repack the zip; every other entry is copied byte-for-byte
```

Die Engines liegen unter `packages/` (`docx-engine`, `pptx-engine`,
`pptx-render`, `pptx-ops`, `pdf2docx`, `html2docx`, `xlsx-gateway`,
`file-parse`, `font-metrics`, `i18n`, `ui` und weitere); die Rust-`.xlsx`-Engine
liegt in `apps/sheets/native/xlsx-engine`. Die Paket-für-Paket-Tour findest
du in [CONTRIBUTING.md](../../CONTRIBUTING.md).

<a id="development"></a>

## Entwicklung

Voraussetzungen: Node 22+, npm 10+ und eine Rust-Toolchain (`cargo` im PATH)
für den `.xlsx`-Sidecar von Sheets.

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

`npm run build -w @genoffice/sheets` kompiliert den Rust-Sidecar
automatisch. Die Prüfungen, die jede Änderung bestehen muss, und wie Pull
Requests landen, stehen in [CONTRIBUTING.md](../../CONTRIBUTING.md).

## Community

- **Melde einen Bug oder wünsche dir ein Feature** in
  [GitHub Issues](https://github.com/genspark-ai/genoffice/issues).
- **Gib dem Repo einen Stern**, wenn dir GenOffice nützlich ist – das ist
  die beste Art, das Projekt zu unterstützen.

## FAQ

<details>
<summary><b>Ist GenOffice kostenlos?</b></summary>

Ja. GenOffice ist kostenlos und Open Source unter der Apache-2.0-Lizenz –
keine Testversion, kein Konto und keine kostenpflichtige Stufe.

</details>

<details>
<summary><b>Kann GenOffice Microsoft Word-, Excel- und PowerPoint-Dateien öffnen?</b></summary>

Ja. GenOffice öffnet und speichert native `.docx`-, `.xlsx`- und
`.pptx`-Dateien. Das Speichern ist byteerhaltend: Teile der Datei, die du
nicht angefasst hast, werden Byte für Byte zurückgeschrieben, sodass
Dokumente in Microsoft Office weiter funktionieren.

</details>

<details>
<summary><b>Funktioniert GenOffice offline?</b></summary>

Ja. Das Öffnen, Bearbeiten, Speichern und Konvertieren von Dokumenten
geschieht vollständig lokal und braucht keine Netzwerkverbindung. Das
Netzwerk wird nur für die Suche nach Updates, optionale Schriftdownloads und
die anonyme Nutzungsstatistik verwendet, die du unter Einstellungen →
Allgemein abschalten kannst.

</details>

<details>
<summary><b>Kann GenOffice PDF-Dateien bearbeiten?</b></summary>

Ja – echte PDF-Text- und Bildbearbeitung, die den Seiteninhalts-Stream unter
Erhalt der Originalschriften neu schreibt, statt überdeckender Anmerkungen.

</details>

<details>
<summary><b>Kann GenOffice PDF in Word, Excel oder PowerPoint konvertieren?</b></summary>

Ja – vollständig lokal: zeichenweise Extraktion über PDFium plus
geometriebasierte Layoutanalyse, kein Cloud-Dienst, kein Upload. Auch
gescannte Seiten werden abgedeckt: Unter macOS und Windows liest die
System-OCR sie aus, sodass sie zu bearbeitbarem Text statt zu einem
Seitenbild konvertiert werden.

</details>

<details>
<summary><b>Kann GenOffice HTML in Word konvertieren?</b></summary>

Ja – **Als Word exportieren** in der HTML-App erzeugt vollständig lokal
eine native, bearbeitbare `.docx`. Die Seite wird im eingebauten Chromium
gerendert und auf echte Word-Strukturen reduziert: Überschriften, Absätze,
Listen, Tabellen, Karten, KPI-Zeilen, Formularfelder und Seitenhintergründe;
nur visuelle Elemente ohne Word-Entsprechung (Diagramme, Icons, dekorierte
Boxen) werden als Bilder eingebettet.

</details>

<details>
<summary><b>Erfasst GenOffice irgendwelche Daten?</b></summary>

Offizielle gepackte Builds senden standardmäßig begrenzte, anonyme
Nutzungsanalysen, und du kannst die Übermittlung jederzeit unter
Einstellungen → Allgemein deaktivieren. Die Analysen senden niemals
Dokumentinhalte, Dateinamen, Dateipfade oder E-Mail-Adressen. Die
vollständigen Angaben zu Ereignissen und Daten stehen in
[GenOffice-Datenschutz](../../PRIVACY.md).

</details>

## Sicherheit

Die Sicherheitsarchitektur der Prozesse (Renderer-Sandboxing,
IPC-Validierung, Filterung externer Links) steht in
[SECURITY.md](../../SECURITY.md).

## Danksagungen

GenOffice wäre ohne diese Open-Source-Projekte nicht möglich:

- [Electron](https://www.electronjs.org/) – die Desktop-Laufzeitumgebung für jede App.
- [Univer](https://github.com/dream-num/univer) (Apache-2.0) – der
  Tabellenkalkulations-UI-Kern, den Sheets erweitert.
- [PDFium](https://pdfium.googlesource.com/pdfium/) (BSD-3-Clause, gebündelt
  über [@embedpdf/pdfium](https://github.com/embedpdf/embed-pdf-viewer)) –
  die Content-Stream-Engine hinter der echten PDF-Text- und
  Bildbearbeitung.
- [pdf.js](https://github.com/mozilla/pdf.js) (Apache-2.0) und
  [pdf-lib](https://github.com/Hopding/pdf-lib) (MIT) – PDF-Rendering und
  Dokumentenzusammenstellung.
- [Tiptap](https://tiptap.dev/) / [ProseMirror](https://prosemirror.net/) –
  die Block-Editoren in Docs und Markdown.
- [CodeMirror](https://codemirror.net/) (MIT) – der Quelltext-Editor in HTML.
- [Konva](https://konvajs.org/) – Canvas-Rendering für Slides und
  Sheets-Diagramme.
- [HarfBuzz](https://github.com/harfbuzz/harfbuzz) (wasm) –
  Text-Shaping-Metriken für komplexe Schriftsysteme.
- [calamine](https://github.com/tafia/calamine) und
  [IronCalc](https://github.com/ironcalc/IronCalc) – die Lese- und
  Berechnungsschichten des Rust-xlsx-Sidecars.
- [libeot](https://github.com/umanwizard/libeot) (MPL-2.0) – der
  MicroType-Express-Decoder für eingebettete PowerPoint-Schriften, nach
  TypeScript portiert.
- [React](https://react.dev/) (MIT) – die UI-Schicht jeder App.
- [Mermaid](https://mermaid.js.org/) (MIT) und [KaTeX](https://katex.org/)
  (MIT) – Diagramme und Mathematik in Markdown und Docs.
- [opentype.js](https://opentype.js.org/) (MIT) – Font-Parsing für Metriken
  und Glyphen-Lookups.
- [JSZip](https://stuk.github.io/jszip/) (MIT) und
  [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser)
  (MIT) – die OOXML-Container- und XML-Schichten.
- [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons)
  (MIT) – das Icon-Set in den Menübändern.
- [electron-updater](https://www.electron.build/) (MIT) – In-App-Updates.
- Die Schriften Liberation, Carlito, Caladea und Noto CJK (OFL/Apache-2.0) –
  mitgelieferte Dokumentschriften.

`npm run notices` erzeugt die gebündelte Zusammenfassung der
Drittanbieter-Lizenzen neu (`tools/gen-third-party-notices.mjs`); alle
Laufzeitabhängigkeiten stehen unter MIT/Apache-2.0/BSD-3-Clause/OFL.

## Lizenz

GenOffice steht unter der [Apache License 2.0](../../LICENSE), mit einer
Ausnahme: Das Verzeichnis `ee/` ist für zukünftige Enterprise-Module
reserviert und unterliegt der
[GenOffice Enterprise License](../../ee/LICENSE).

Die Namen und Logos GenOffice und Genspark sind Marken von Mainfunc, Inc.
Die Apache-2.0-Lizenz gewährt keine Berechtigung zu ihrer Nutzung (siehe
Abschnitt 6); Forks sollten ihr eigenes Branding verwenden.
