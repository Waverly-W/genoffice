<h1 align="center">GenOffice</h1>

<p align="center"><b>Een gratis, open-source kantoorpakket dat volledig op je eigen computer draait.</b><br>
Word-, Excel-, PowerPoint-, PDF-, Markdown- en HTML-bestanden, geopend, bewerkt en weer opgeslagen in hun echte formaten.</p>

<p align="center">
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/genspark-ai/genoffice" alt="Licentie: Apache-2.0"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases/latest"><img src="https://img.shields.io/github/v/release/genspark-ai/genoffice" alt="Nieuwste release"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases"><img src="https://img.shields.io/github/downloads/genspark-ai/genoffice/total" alt="Downloads"></a>
  <a href="https://github.com/genspark-ai/genoffice/stargazers"><img src="https://img.shields.io/github/stars/genspark-ai/genoffice?style=flat" alt="GitHub-sterren"></a>
</p>

<p align="center"><a href="../../README.md">English</a> · <a href="README.es.md">Español</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.zh-TW.md">繁體中文</a> · <a href="README.ko.md">한국어</a> · <a href="README.ja.md">日本語</a> · <a href="README.ar.md">العربية</a> · <a href="README.ru.md">Русский</a> · <a href="README.it.md">Italiano</a> · <b>Nederlands</b> · <a href="README.pl.md">Polski</a> · <a href="README.cs.md">Čeština</a> · <a href="README.id.md">Bahasa Indonesia</a> · <a href="README.ms.md">Bahasa Melayu</a> · <a href="README.th.md">ไทย</a> · <a href="README.hi.md">हिन्दी</a> · <a href="README.he.md">עברית</a> · <a href="README.vi.md">Tiếng Việt</a></p>

<p align="center">
  <a href="#download"><b>Download</b></a> ·
  <a href="#development"><b>Ontwikkeling</b></a> ·
  <a href="../../PRIVACY.md"><b>Privacy</b></a>
</p>

GenOffice is een gratis, open-source alternatief voor Microsoft Office voor
macOS, Windows en Linux. Het opent en bewaart native `.docx`-, `.xlsx`- en
`.pptx`-bestanden en bewerkt PDF, Markdown en HTML, allemaal in één venster
met tabbladen. Er is geen account aan te maken en nergens hoef je in te
loggen: bestanden worden op je eigen computer geopend, bewerkt, opgeslagen en
geconverteerd.

- **Echte formaten, byte-behoudend.** Alleen wat je bewerkt, wordt herschreven.
  Al het overige in het bestand blijft byte-voor-byte behouden, zodat
  documenten gewoon blijven werken in Word, Excel en PowerPoint.
- **Lokaal by design.** Geen cloud, geen upload. PDF → Word / Excel /
  PowerPoint, Markdown → Word en HTML → Word draaien allemaal on-device.
- **Zes editors, één venster.** Docs, Sheets, Slides, PDF, Markdown en HTML
  delen één tabbladrij, één startscherm en één set instellingen.
- **Vind bestanden op wat erin staat.** Het startscherm doorzoekt de namen,
  mappen en volledige tekst van je `.docx`-, `.xlsx`-, `.pptx`-, PDF-,
  Markdown- en HTML-bestanden vanuit een lokale index, CJK inbegrepen.
- **21 interfacetalen**, een licht, donker en systeemthema, en een ingebouwde
  gebruikershandleiding (F1) in elke taal.

**Haal het hier:** [macOS](https://github.com/genspark-ai/genoffice/releases/latest) (Apple Silicon en Intel) ·
[Windows](https://github.com/genspark-ai/genoffice/releases/latest) (x64 en Arm) ·
[Linux](https://github.com/genspark-ai/genoffice/releases/latest) (deb, rpm, AppImage) —
details en vereisten in [Download](#download).

## De apps

| App          | Opent en bewaart                    | Hoogtepunten                                                                                                                                                                                            |
| ------------ | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Docs**     | `.docx` (en `.doc` om te openen)    | Echte WYSIWYG-paginering op basis van Words regelmetriek; stijlen, tabellen, kop- en voetteksten, voetnoten, inhoudsopgave, opmerkingen, wijzigingen bijhouden, vergelijken, vergelijkingen en inkt.     |
| **Sheets**   | `.xlsx`, `.xls`, `.csv`, `.tsv`     | Een eigen Rust-`.xlsx`-engine in een eigen proces; live formules, grafieken, draaitabellen, slicers, voorwaardelijke opmaak, gegevensvalidatie, formules traceren en bladbeveiliging.                  |
| **Slides**   | `.pptx` (en `.ppt` om te openen)    | Masters en indelingen, slimme hulplijnen, niet-destructief bijsnijden, overgangen en animaties, sprekersnotities, presentatorweergave en PDF-export.                                                    |
| **PDF**      | `.pdf`                              | Tekst direct op de pagina bewerken via PDFium, annoteren, formulieren invullen, ondertekenen, zwart maken, pagina's herschikken, splitsen en samenvoegen; on-device naar Word, Excel of PowerPoint converteren met systeem-OCR. |
| **Markdown** | `.md`, `.markdown`, `.txt`, `.json` | Een blokeditor over platte Markdown met tabellen, takenlijsten, Mermaid-diagrammen en wiskunde, een byte-getrouwe bronweergave, en export naar Word, PDF en afbeeldingen.                              |
| **HTML**     | `.html`, `.htm`                     | Een live voorbeeld met een elementinspecteur, een CodeMirror-bronweergave, presenteren in volledig scherm, en export naar Word, PDF of één zelfstandig HTML-bestand.                                    |

### Docs

Docs opent een bestand precies zoals Word het opmaakt — secties met meerdere
kolommen, beeldvullende afbeeldingen, tabellen met arcering, kop- en
voetteksten, paginering op basis van Words regelmetriek. Stijlen,
opmerkingen, bijgehouden wijzigingen, vergelijkingen en inkt komen
ongewijzigd terug, en bij het opslaan worden alleen de alinea's herschreven
die je hebt aangepast.

### Sheets

Berekeningen draaien in een apart Rust-engineproces, dus een crash daar
haalt nooit de app onderuit. Formules blijven live formules, grafieken en
draaigrafieken zijn echte objecten in de opgeslagen werkmap, en beveiliging,
gedefinieerde namen en voorwaardelijke opmaak worden teruggeschreven in de
`.xlsx`.

### Slides

Een editor in PowerPoint-stijl met masters en indelingen, slimme hulplijnen,
tabellen, grafieken, overgangen en animaties. Slides die je niet aanraakt,
blijven bij het opslaan byte-identiek; notities, masters en annotaties
blijven bewaard, en decks worden geëxporteerd naar PDF of één PNG per slide.

### PDF

De bewerkmodus omkadert elk tekstblok zodat je het ter plekke kunt
herschrijven; de content stream wordt via PDFium herschreven met de originele
fonts, geen overplaknotitie. **PDF Converter → PDF to Word** levert een
bewerkbare `.docx` op die naast de bron in Docs opent. Excel- en
PowerPoint-doelen werken op dezelfde manier, en op macOS en Windows gaan
gescande pagina's door de systeem-OCR. Zwart maken verwijdert de afgedekte
inhoud fysiek in een nieuwe kopie.

### Markdown en HTML

Markdown is een Tiptap-blokeditor die terugschrijft als platte `.md`, met een
byte-getrouwe bronweergave voor de ruwe tekst. De HTML-editor toont een
voorbeeld van de pagina in de ingebouwde Chromium; klik op een element om de
stijl aan te passen, dubbelklik om de tekst te bewerken, of schakel over naar
de bronweergave. **Exporteren als Word** levert in beide apps volledig
on-device een native, bewerkbare `.docx` op.

## Waarom GenOffice

- **Open source**, Apache-2.0, in het openbaar ontwikkeld op GitHub.
- **Van jou om te draaien.** Native apps voor macOS, Windows en Linux;
  bestanden blijven op je eigen schijf en elke bewerking, opslag en conversie
  gebeurt op je eigen machine.
- **Echte Office-bestanden.** Native `.docx`, `.xlsx` en `.pptx`,
  byte-behoudend: de delen van een bestand die je niet hebt aangeraakt, worden
  precies zo gekopieerd als ze waren.
- **PDF goed gedaan.** Bewerk tekst direct op de pagina en converteer PDF
  naar Word, Excel of PowerPoint on-device, met systeem-OCR voor scans.
- **Ook Markdown en HTML**, met lokale export naar Word en PDF.
- **Geen account.** Nergens voor aanmelden, geen credits, geen abonnement.
- **Gratis**, voor individuen en teams.

De hele suite wordt geleverd met een licht, donker en systeemthema. Thema's
veranderen alleen wat er op je scherm te zien is: exports, afdrukken en
opgeslagen bestanden behouden altijd de eigen kleuren van het document.

<a id="download"></a>

## Download

| Platform                             | Vereisten                                               | Download                                                                                    |
| ------------------------------------ | ------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **macOS** — Apple Silicon (arm64)    | macOS 11+                                               | [Nieuwste `.dmg` (arm64)](https://github.com/genspark-ai/genoffice/releases/latest)         |
| **macOS** — Intel (x64)              | macOS 11+                                               | [Nieuwste `.dmg` (x64)](https://github.com/genspark-ai/genoffice/releases/latest)           |
| **Windows** (x64, de meeste pc's)    | Windows 10+, Intel/AMD                                  | [Nieuwste `-x64.exe`-installer](https://github.com/genspark-ai/genoffice/releases/latest)   |
| **Windows** op Arm (ARM64)           | Windows 11 op Arm (Snapdragon X en vergelijkbare chips) | [Nieuwste `-arm64.exe`-installer](https://github.com/genspark-ai/genoffice/releases/latest) |
| **Linux** — Debian / Ubuntu          | x86_64, glibc 2.34+ (Ubuntu 22.04 of nieuwer)           | [Nieuwste `.deb`](https://github.com/genspark-ai/genoffice/releases/latest)                 |
| **Linux** — Fedora / RHEL / openSUSE | x86_64, glibc 2.34+ (Fedora 35+, RHEL 9+, Leap 15.6+)   | [Nieuwste `.rpm`](https://github.com/genspark-ai/genoffice/releases/latest)                 |
| **Linux** — overige distributies     | x86_64, glibc 2.34+, FUSE 2                             | [Nieuwste `.AppImage`](https://github.com/genspark-ai/genoffice/releases/latest)            |

Alle builds komen van `main`; de macOS- en Windows-installers zijn gesigneerd.
Oudere versies staan op de pagina [Releases](https://github.com/genspark-ai/genoffice/releases).
Flatpak, Nix en een headless Docker-image voor batchconversie worden
beschreven in [packaging/README.md](../../packaging/README.md).

<details>
<summary><b>Installeren op Linux</b></summary>

De deb installeer je met apt — dat haalt de afhankelijkheden op en voegt
GenOffice toe aan het toepassingenmenu:

```bash
sudo apt install ./genoffice_<version>_amd64.deb
```

Op Fedora, de RHEL-familie of openSUSE installeer je in plaats daarvan de rpm:

```bash
sudo dnf install ./genoffice-<version>.x86_64.rpm     # Fedora / RHEL family
sudo zypper install ./genoffice-<version>.x86_64.rpm  # openSUSE
```

De AppImage draait direct: installeer de FUSE 2-runtime
(`sudo apt install libfuse2`; op Ubuntu 24.04 heet het pakket `libfuse2t64`),
maak het bestand uitvoerbaar en start het:

```bash
chmod +x GenOffice-<version>.AppImage
./GenOffice-<version>.AppImage
```

</details>

## Hoe het werkt

Zeven Electron-apps — Docs, Sheets, Slides, PDF, Markdown, HTML en de shell
met tabbladen — delen één engine-laag van pure TypeScript-packages plus een
Rust-sidecar voor `.xlsx`. Het originele bestand is altijd de source of
truth: wijzigingen worden toegepast als gerichte patches, en alles wat de
editor niet heeft aangeraakt, komt ongewijzigd terug uit de rondgang.

```
open docx ─► archive original by hash (never touched)
          ─► parse word/document.xml into a block tree, each block anchored to its original XML
          ─► Tiptap editor (dirty tracking per block)
save      ─► dirty blocks → OOXML fragments (referencing existing styles only)
          ─► splice into the original document.xml; untouched blocks keep their bytes
          ─► repack the zip; every other entry is copied byte-for-byte
```

De engines staan onder `packages/` (`docx-engine`, `pptx-engine`,
`pptx-render`, `pptx-ops`, `pdf2docx`, `html2docx`, `xlsx-gateway`,
`file-parse`, `font-metrics`, `i18n`, `ui` en meer); de Rust-`.xlsx`-engine
staat in `apps/sheets/native/xlsx-engine`. [CONTRIBUTING.md](../../CONTRIBUTING.md)
bevat de pakket-voor-pakket-rondleiding.

<a id="development"></a>

## Ontwikkeling

Vereisten: Node 22+, npm 10+ en een Rust-toolchain (`cargo` op je PATH) voor
de `.xlsx`-sidecar van Sheets.

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

`npm run build -w @genoffice/sheets` compileert de Rust-sidecar automatisch.
Zie [CONTRIBUTING.md](../../CONTRIBUTING.md) voor de checks die elke wijziging
moet doorstaan en hoe pull requests worden gemerged.

## Community

- **Meld een bug of vraag een functie aan** via
  [GitHub Issues](https://github.com/genspark-ai/genoffice/issues).
- **Geef de repo een ster** als je iets aan GenOffice hebt — dat is de beste
  manier om het project te steunen.

## Veelgestelde vragen

<details>
<summary><b>Is GenOffice gratis?</b></summary>

Ja. GenOffice is gratis en open source onder de Apache-2.0-licentie — geen
proefperiode, geen account en geen betaalde laag.

</details>

<details>
<summary><b>Kan GenOffice bestanden van Microsoft Word, Excel en PowerPoint openen?</b></summary>

Ja. GenOffice opent en bewaart native `.docx`-, `.xlsx`- en `.pptx`-bestanden.
Opslaan is byte-behoudend: delen van het bestand die je niet hebt aangeraakt,
worden byte-voor-byte terugweggeschreven, zodat documenten gewoon blijven
werken in Microsoft Office.

</details>

<details>
<summary><b>Werkt GenOffice offline?</b></summary>

Ja. Documenten openen, bewerken, opslaan en converteren gebeurt volledig
lokaal en vereist geen netwerkverbinding. Het netwerk wordt alleen gebruikt
voor updatecontroles, optionele lettertypedownloads en de anonieme
gebruiksstatistieken die je kunt uitschakelen onder Instellingen → Algemeen.

</details>

<details>
<summary><b>Kan GenOffice PDF-bestanden bewerken?</b></summary>

Ja — echte bewerking van PDF-tekst en -afbeeldingen, waarbij de content
stream van de pagina wordt herschreven met behoud van de originele fonts,
niet met overplaknotities.

</details>

<details>
<summary><b>Kan GenOffice PDF converteren naar Word, Excel of PowerPoint?</b></summary>

Ja — volledig on-device: tekenniveau-extractie met PDFium plus
geometrie-gebaseerde layout-analyse, geen cloudservice, geen upload. Gescande
pagina's worden ook ondersteund: op macOS en Windows leest de systeem-OCR ze,
zodat ze worden omgezet naar bewerkbare tekst in plaats van een
pagina-afbeelding.

</details>

<details>
<summary><b>Kan GenOffice HTML converteren naar Word?</b></summary>

Ja — Exporteren als Word in de HTML-app levert volledig on-device een native,
bewerkbare `.docx` op. De pagina wordt gerenderd in de ingebouwde Chromium en
teruggebracht tot echte Word-structuren: koppen, alinea's, lijsten, tabellen,
kaarten, KPI-rijen, formuliervelden en paginaachtergronden; alleen visuals
zonder Word-equivalent (grafieken, iconen, gestileerde vakken) worden als
afbeelding ingevoegd.

</details>

<details>
<summary><b>Verzamelt GenOffice gegevens?</b></summary>

De officiële, kant-en-klare builds versturen standaard beperkte anonieme
gebruiksanalyse, en je kunt rapportage op elk moment uitschakelen onder
Instellingen → Algemeen. Analytics verstuurt nooit documentinhoud,
bestandsnamen, bestandspaden of e-mailadressen. Zie
[GenOffice Privacy](../../PRIVACY.md) voor de volledige lijst van events en
gegevens die worden gedeeld.

</details>

## Beveiliging

Zie [SECURITY.md](../../SECURITY.md) voor de beveiligingsaanpak van de
processen (renderer-sandboxing, IPC-validatie, external-link gating).

## Met dank aan

GenOffice zou niet mogelijk zijn zonder deze open-source projecten:

- [Electron](https://www.electronjs.org/) — de desktop-runtime voor elke app.
- [Univer](https://github.com/dream-num/univer) (Apache-2.0) — de
  spreadsheet-UI-kern waarop Sheets is gebouwd.
- [PDFium](https://pdfium.googlesource.com/pdfium/) (BSD-3-Clause, gebundeld
  via [@embedpdf/pdfium](https://github.com/embedpdf/embed-pdf-viewer)) — de
  content-stream-engine achter echte bewerking van PDF-tekst en
  -afbeeldingen.
- [pdf.js](https://github.com/mozilla/pdf.js) (Apache-2.0) en
  [pdf-lib](https://github.com/Hopding/pdf-lib) (MIT) — PDF-rendering en het
  samenstellen van documenten.
- [Tiptap](https://tiptap.dev/) / [ProseMirror](https://prosemirror.net/) —
  de blokeditors in Docs en Markdown.
- [CodeMirror](https://codemirror.net/) (MIT) — de broncode-editor in HTML.
- [Konva](https://konvajs.org/) — canvas-rendering voor Slides en
  Sheets-grafieken.
- [HarfBuzz](https://github.com/harfbuzz/harfbuzz) (wasm) —
  text-shaping-metrieken voor complexe schriftsystemen.
- [calamine](https://github.com/tafia/calamine) en
  [IronCalc](https://github.com/ironcalc/IronCalc) — de read- en calc-laag
  van de Rust-xlsx-sidecar.
- [libeot](https://github.com/umanwizard/libeot) (MPL-2.0) — de MicroType
  Express-decoder voor ingesloten PowerPoint-lettertypen, overgezet naar
  TypeScript.
- [React](https://react.dev/) (MIT) — de UI-laag van elke app.
- [Mermaid](https://mermaid.js.org/) (MIT) en [KaTeX](https://katex.org/)
  (MIT) — diagrammen en wiskunde in Markdown en Docs.
- [opentype.js](https://opentype.js.org/) (MIT) — lettertype-parsing voor
  metrieken en glyph-opzoeking.
- [JSZip](https://stuk.github.io/jszip/) (MIT) en
  [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser)
  (MIT) — de OOXML-container- en XML-laag.
- [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons)
  (MIT) — de icoonset in de linten.
- [electron-updater](https://www.electron.build/) (MIT) — updates binnen
  de app.
- Liberation, Carlito, Caladea en Noto CJK-fonts (OFL/Apache-2.0) —
  meegeleverde documentfonts.

`npm run notices` genereert het gebundelde overzicht van licenties van derden
opnieuw (`tools/gen-third-party-notices.mjs`); alle runtime-dependencies zijn
MIT/Apache-2.0/BSD-3-Clause/OFL.

## Licentie

GenOffice wordt uitgebracht onder de [Apache License 2.0](../../LICENSE), met
één uitzondering: de map `ee/` is gereserveerd voor toekomstige
enterprise-modules en valt onder de
[GenOffice Enterprise License](../../ee/LICENSE).

De namen en logo's van GenOffice en Genspark zijn handelsmerken van Mainfunc,
Inc. De Apache-2.0-licentie geeft geen toestemming om deze te gebruiken (zie
sectie 6); forks moeten hun eigen branding gebruiken.
