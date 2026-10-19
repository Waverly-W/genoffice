<h1 align="center">GenOffice</h1>

<p align="center"><b>Una suite office gratuita e open source che funziona interamente sul tuo computer.</b><br>
File Word, Excel, PowerPoint, PDF, Markdown e HTML, aperti, modificati e salvati nei loro formati reali.</p>

<p align="center">
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/genspark-ai/genoffice" alt="License: Apache-2.0"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases/latest"><img src="https://img.shields.io/github/v/release/genspark-ai/genoffice" alt="Latest release"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases"><img src="https://img.shields.io/github/downloads/genspark-ai/genoffice/total" alt="Downloads"></a>
  <a href="https://github.com/genspark-ai/genoffice/stargazers"><img src="https://img.shields.io/github/stars/genspark-ai/genoffice?style=flat" alt="GitHub stars"></a>
</p>

<p align="center"><a href="../../README.md">English</a> · <a href="README.es.md">Español</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.zh-TW.md">繁體中文</a> · <a href="README.ko.md">한국어</a> · <a href="README.ja.md">日本語</a> · <a href="README.ar.md">العربية</a> · <a href="README.ru.md">Русский</a> · <b>Italiano</b> · <a href="README.nl.md">Nederlands</a> · <a href="README.pl.md">Polski</a> · <a href="README.cs.md">Čeština</a> · <a href="README.id.md">Bahasa Indonesia</a> · <a href="README.ms.md">Bahasa Melayu</a> · <a href="README.th.md">ไทย</a> · <a href="README.hi.md">हिन्दी</a> · <a href="README.he.md">עברית</a> · <a href="README.vi.md">Tiếng Việt</a></p>

<p align="center">
  <a href="#download"><b>Download</b></a> ·
  <a href="#development"><b>Sviluppo</b></a> ·
  <a href="../../PRIVACY.md"><b>Privacy</b></a>
</p>

GenOffice è un'alternativa gratuita e open source a Microsoft Office per
macOS, Windows e Linux. Apre e salva file nativi `.docx`, `.xlsx` e `.pptx`
e permette di modificare PDF, Markdown e HTML, tutto in un'unica finestra a
schede. Non c'è nessun account da creare e nessun accesso da effettuare: i
file si aprono, si modificano, si salvano e si convertono sul tuo computer.

- **Formati reali, preservati byte per byte.** Viene riscritto solo ciò che
  modifichi. Tutto il resto del file resta identico byte per byte, così i
  documenti continuano a funzionare in Word, Excel e PowerPoint.
- **Locale per progettazione.** Niente cloud, niente upload. Le conversioni
  PDF → Word / Excel / PowerPoint, Markdown → Word e HTML → Word avvengono
  tutte in locale.
- **Sei editor, una finestra.** Docs, Sheets, Slides, PDF, Markdown e HTML
  condividono un'unica barra delle schede, un'unica schermata Home e un unico
  insieme di impostazioni.
- **Trova i file in base a ciò che contengono.** La schermata Home cerca nei
  nomi, nelle cartelle e nel testo completo dei tuoi file `.docx`, `.xlsx`,
  `.pptx`, PDF, Markdown e HTML grazie a un indice locale, CJK compreso.
- **21 lingue dell'interfaccia**, temi chiaro, scuro e di sistema, e una
  guida utente integrata (F1) in ogni lingua.

**Scaricalo:** [macOS](https://github.com/genspark-ai/genoffice/releases/latest) (Apple Silicon e Intel) ·
[Windows](https://github.com/genspark-ai/genoffice/releases/latest) (x64 e Arm) ·
[Linux](https://github.com/genspark-ai/genoffice/releases/latest) (deb, rpm, AppImage) —
dettagli e requisiti nella sezione [Download](#download).

## Le app

| App          | Apre e salva                            | In evidenza                                                                                                                                                                                                       |
| ------------ | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Docs**     | `.docx` (e `.doc` in apertura)          | Vera impaginazione WYSIWYG basata sulle metriche di riga di Word; stili, tabelle, intestazioni e piè di pagina, note a piè di pagina, sommario, commenti, revisioni tracciate, confronto, equazioni e input penna. |
| **Sheets**   | `.xlsx`, `.xls`, `.csv`, `.tsv`         | Un motore `.xlsx` in Rust sviluppato internamente, in un processo dedicato; formule live, grafici, tabelle pivot, filtri dati, formattazione condizionale, convalida dei dati, tracciamento delle formule e protezione dei fogli. |
| **Slides**   | `.pptx` (e `.ppt` in apertura)          | Schemi e layout, guide smart, ritaglio non distruttivo, transizioni e animazioni, note del relatore, visualizzazione Relatore ed esportazione in PDF.                                                             |
| **PDF**      | `.pdf`                                  | Modifica il testo all'interno della pagina tramite PDFium, annota, compila moduli, firma, oscura, riordina, dividi e unisci pagine; converti in Word, Excel o PowerPoint in locale con l'OCR di sistema.          |
| **Markdown** | `.md`, `.markdown`, `.txt`, `.json`     | Un block editor su Markdown semplice con tabelle, elenchi di attività, diagrammi Mermaid e formule matematiche, una vista sorgente fedele byte per byte ed esportazione in Word, PDF e immagini.                   |
| **HTML**     | `.html`, `.htm`                         | Un'anteprima live con ispettore degli elementi, una vista sorgente CodeMirror, presentazione a schermo intero ed esportazione in Word, PDF o un unico file HTML autonomo.                                          |

### Docs

Docs apre un file così come Word lo impagina — sezioni a più colonne,
immagini al vivo, tabelle ombreggiate, intestazioni e piè di pagina,
impaginazione basata sulle metriche di riga di Word. Stili, commenti,
revisioni tracciate, equazioni e input penna superano intatti il ciclo di
apertura e salvataggio, e un salvataggio riscrive solo i paragrafi che hai
modificato.

### Sheets

Il calcolo avviene in un processo separato del motore Rust, così un crash lì
non fa mai cadere l'app. Le formule restano formule live, i grafici e i
grafici pivot sono oggetti reali nella cartella di lavoro salvata, e
protezione, nomi definiti e formati condizionali vengono riscritti nel
`.xlsx`.

### Slides

Un editor in stile PowerPoint con schemi e layout, guide smart, tabelle,
grafici, transizioni e animazioni. Le slide non toccate restano identiche
byte per byte al salvataggio; note, schemi e annotazioni vengono conservati,
e le presentazioni si esportano in PDF o in un PNG per slide.

### PDF

La modalità Modifica evidenzia ogni blocco di testo per riscriverlo sul
posto; il content stream viene riscritto tramite PDFium con i font originali,
non con un'annotazione che copre il testo. **Convertitore PDF → PDF in Word**
produce un `.docx` modificabile che si apre in Docs accanto all'originale.
Le destinazioni Excel e PowerPoint funzionano allo stesso modo, e su macOS e
Windows le pagine scansionate passano per l'OCR di sistema. L'oscuramento
rimuove fisicamente il contenuto coperto in una nuova copia.

### Markdown e HTML

Markdown è un block editor Tiptap che salva in `.md` semplice, con una vista
sorgente fedele byte per byte per il testo grezzo. L'editor HTML mostra
l'anteprima della pagina nel Chromium integrato; fai clic su un elemento per
cambiarne lo stile, doppio clic per modificarne il testo, oppure passa alla
vista sorgente. **Esporta come Word**, in entrambe le app, produce un `.docx`
nativo e modificabile interamente in locale.

## Perché GenOffice

- **Open source**, Apache-2.0, sviluppato in modo aperto su GitHub.
- **Tuo da eseguire.** App native per macOS, Windows e Linux; i file restano
  sul tuo disco e ogni modifica, salvataggio e conversione avviene sul tuo
  computer.
- **File Office reali.** `.docx`, `.xlsx` e `.pptx` nativi, con preservazione
  byte per byte: le parti del file che non hai toccato vengono copiate
  esattamente come erano.
- **PDF fatto bene.** Modifica il testo direttamente nella pagina e converti
  PDF in Word, Excel o PowerPoint in locale, con OCR di sistema per le
  scansioni.
- **Anche Markdown e HTML**, con l'esportazione locale in Word e PDF.
- **Nessun account.** Niente da sottoscrivere, nessun credito, nessun
  abbonamento.
- **Gratuito**, per singoli utenti e team.

L'intera suite include i temi chiaro, scuro e di sistema. I temi cambiano
solo ciò che vedi a schermo: esportazioni, stampe e file salvati mantengono
sempre i colori originali del documento.

<a id="download"></a>

## Download

| Piattaforma                                | Requisiti                                             | Download                                                                                   |
| ------------------------------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **macOS** — Apple Silicon (arm64)          | macOS 11+                                             | [Ultima versione `.dmg` (arm64)](https://github.com/genspark-ai/genoffice/releases/latest) |
| **macOS** — Intel (x64)                    | macOS 11+                                             | [Ultima versione `.dmg` (x64)](https://github.com/genspark-ai/genoffice/releases/latest)   |
| **Windows** (x64, la maggior parte dei PC) | Windows 10+, Intel/AMD                                | [Ultimo installer `-x64.exe`](https://github.com/genspark-ai/genoffice/releases/latest)    |
| **Windows** su Arm (ARM64)                 | Windows 11 su Arm (Snapdragon X e simili)             | [Ultimo installer `-arm64.exe`](https://github.com/genspark-ai/genoffice/releases/latest)  |
| **Linux** — Debian / Ubuntu                | x86_64, glibc 2.34+ (Ubuntu 22.04 o successivo)       | [Ultimo `.deb`](https://github.com/genspark-ai/genoffice/releases/latest)                  |
| **Linux** — Fedora / RHEL / openSUSE       | x86_64, glibc 2.34+ (Fedora 35+, RHEL 9+, Leap 15.6+) | [Ultimo `.rpm`](https://github.com/genspark-ai/genoffice/releases/latest)                  |
| **Linux** — altre distribuzioni            | x86_64, glibc 2.34+, FUSE 2                           | [Ultimo `.AppImage`](https://github.com/genspark-ai/genoffice/releases/latest)             |

Tutte le build provengono da `main`; gli installer per macOS e Windows sono
firmati. Le versioni precedenti sono disponibili nella pagina
[Releases](https://github.com/genspark-ai/genoffice/releases). Flatpak, Nix e
un'immagine Docker headless per la conversione in blocco sono descritti in
[packaging/README.md](../../packaging/README.md).

<details>
<summary><b>Installazione su Linux</b></summary>

Il deb si installa con apt — scarica le dipendenze e aggiunge GenOffice al
menu delle applicazioni:

```bash
sudo apt install ./genoffice_<version>_amd64.deb
```

Su Fedora / famiglia RHEL / openSUSE, installa invece l'rpm:

```bash
sudo dnf install ./genoffice-<version>.x86_64.rpm     # Fedora / RHEL family
sudo zypper install ./genoffice-<version>.x86_64.rpm  # openSUSE
```

L'AppImage viene eseguito così com'è: installa il runtime FUSE 2
(`sudo apt install libfuse2`; su Ubuntu 24.04 il pacchetto è `libfuse2t64`),
rendi il file eseguibile, poi eseguilo:

```bash
chmod +x GenOffice-<version>.AppImage
./GenOffice-<version>.AppImage
```

</details>

## Come funziona

Sette app Electron — Docs, Sheets, Slides, PDF, Markdown, HTML e la shell a
schede — condividono un unico livello motore fatto di package TypeScript
puri più un sidecar Rust per `.xlsx`. Il file originale è sempre la fonte di
verità: le modifiche vengono applicate come patch mirate, e tutto ciò che
l'editor non ha toccato sopravvive intatto al ciclo di apertura e
salvataggio.

```
open docx ─► archive original by hash (never touched)
          ─► parse word/document.xml into a block tree, each block anchored to its original XML
          ─► Tiptap editor (dirty tracking per block)
save      ─► dirty blocks → OOXML fragments (referencing existing styles only)
          ─► splice into the original document.xml; untouched blocks keep their bytes
          ─► repack the zip; every other entry is copied byte-for-byte
```

I motori si trovano in `packages/` (`docx-engine`, `pptx-engine`,
`pptx-render`, `pptx-ops`, `pdf2docx`, `html2docx`, `xlsx-gateway`,
`file-parse`, `font-metrics`, `i18n`, `ui` e altri); il motore `.xlsx` in
Rust è in `apps/sheets/native/xlsx-engine`. Il tour package per package si
trova in [CONTRIBUTING.md](../../CONTRIBUTING.md).

<a id="development"></a>

## Sviluppo

Prerequisiti: Node 22+, npm 10+ e una toolchain Rust (`cargo` nel PATH) per
il sidecar `.xlsx` di Sheets.

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

`npm run build -w @genoffice/sheets` compila automaticamente il sidecar
Rust. Consulta [CONTRIBUTING.md](../../CONTRIBUTING.md) per i controlli che
ogni modifica deve superare e per come vengono accettate le pull request.

## Community

- **Segnala un bug o richiedi una funzionalità** su
  [GitHub Issues](https://github.com/genspark-ai/genoffice/issues).
- **Metti una stella al repo** se GenOffice ti è utile — è il modo migliore
  per supportare il progetto.

## FAQ

<details>
<summary><b>GenOffice è gratuito?</b></summary>

Sì. GenOffice è gratuito e open source sotto licenza Apache-2.0 — nessuna
prova, nessun account e nessun piano a pagamento.

</details>

<details>
<summary><b>GenOffice può aprire file Microsoft Word, Excel e PowerPoint?</b></summary>

Sì. GenOffice apre e salva file nativi `.docx`, `.xlsx` e `.pptx`. Il
salvataggio preserva i byte: le parti del file che non hai toccato vengono
riscritte byte per byte, così i documenti continuano a funzionare in
Microsoft Office.

</details>

<details>
<summary><b>GenOffice funziona offline?</b></summary>

Sì. Aprire, modificare, salvare e convertire documenti avviene interamente
in locale e non richiede alcuna connessione di rete. La rete viene usata
solo per il controllo degli aggiornamenti, i download facoltativi dei font e
le statistiche d'uso anonime, che puoi disattivare in Settings → General.

</details>

<details>
<summary><b>GenOffice può modificare file PDF?</b></summary>

Sì — una vera modifica di testo e immagini nel PDF, che riscrive il content
stream della pagina preservando i font originali, non con annotazioni che
coprono il testo.

</details>

<details>
<summary><b>GenOffice può convertire PDF in Word, Excel o PowerPoint?</b></summary>

Sì — completamente in locale: estrazione a livello di carattere con PDFium
più un'analisi del layout basata sulla geometria, nessun servizio cloud,
nessun upload. Sono coperte anche le pagine scansionate: su macOS e Windows
l'OCR di sistema le legge, così vengono convertite in testo modificabile
invece che in un'immagine di pagina.

</details>

<details>
<summary><b>GenOffice può convertire HTML in Word?</b></summary>

Sì — Export as Word nell'app HTML produce un `.docx` nativo e modificabile,
interamente in locale. La pagina viene renderizzata nel Chromium integrato e
ridotta a vere strutture Word: titoli, paragrafi, elenchi, tabelle, card,
righe KPI, campi modulo e sfondi di pagina; solo gli elementi visivi senza
un equivalente in Word (grafici, icone, box decorati) vengono incorporati
come immagini.

</details>

<details>
<summary><b>GenOffice raccoglie dati?</b></summary>

Le build ufficiali inviano per impostazione predefinita analytics d'uso
anonime e limitate, e puoi disattivare l'invio in qualsiasi momento in
Settings → General. Le analytics non inviano mai il contenuto dei documenti,
i nomi dei file, i percorsi dei file o gli indirizzi email. Consulta
[GenOffice Privacy](../../PRIVACY.md) per l'elenco completo di eventi e dati
raccolti.

</details>

## Sicurezza

Consulta [SECURITY.md](../../SECURITY.md) per la postura di sicurezza dei
processi (sandboxing del renderer, validazione IPC, filtro dei link
esterni).

## Ringraziamenti

GenOffice non sarebbe possibile senza questi progetti open source:

- [Electron](https://www.electronjs.org/) — il runtime desktop per ogni app.
- [Univer](https://github.com/dream-num/univer) (Apache-2.0) — il core
  dell'interfaccia per fogli di calcolo che Sheets estende.
- [PDFium](https://pdfium.googlesource.com/pdfium/) (BSD-3-Clause, incluso
  tramite [@embedpdf/pdfium](https://github.com/embedpdf/embed-pdf-viewer))
  — il motore del content stream dietro la vera modifica di testo e immagini
  nei PDF.
- [pdf.js](https://github.com/mozilla/pdf.js) (Apache-2.0) e
  [pdf-lib](https://github.com/Hopding/pdf-lib) (MIT) — rendering PDF e
  assemblaggio dei documenti.
- [Tiptap](https://tiptap.dev/) / [ProseMirror](https://prosemirror.net/) —
  i block editor di Docs e Markdown.
- [CodeMirror](https://codemirror.net/) (MIT) — l'editor sorgente nell'app
  HTML.
- [Konva](https://konvajs.org/) — rendering su canvas per Slides e per i
  grafici di Sheets.
- [HarfBuzz](https://github.com/harfbuzz/harfbuzz) (wasm) — metriche di
  text-shaping per le scritture complesse.
- [calamine](https://github.com/tafia/calamine) e
  [IronCalc](https://github.com/ironcalc/IronCalc) — i livelli di lettura e
  calcolo del sidecar Rust per xlsx.
- [libeot](https://github.com/umanwizard/libeot) (MPL-2.0) — il decoder
  MicroType Express per i font PowerPoint incorporati, portato in
  TypeScript.
- [React](https://react.dev/) (MIT) — il livello dell'interfaccia utente di
  ogni app.
- [Mermaid](https://mermaid.js.org/) (MIT) e [KaTeX](https://katex.org/)
  (MIT) — diagrammi e formule matematiche in Markdown e Docs.
- [opentype.js](https://opentype.js.org/) (MIT) — l'analisi dei font per le
  metriche e la ricerca dei glifi.
- [JSZip](https://stuk.github.io/jszip/) (MIT) e
  [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser)
  (MIT) — i livelli del contenitore OOXML e XML.
- [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons)
  (MIT) — il set di icone usato nelle barre multifunzione.
- [electron-updater](https://www.electron.build/) (MIT) — gli aggiornamenti
  all'interno dell'app.
- I font Liberation, Carlito, Caladea e Noto CJK (OFL/Apache-2.0) — font per
  documenti inclusi nel bundle.

`npm run notices` rigenera il riepilogo delle licenze di terze parti incluse
(`tools/gen-third-party-notices.mjs`); tutte le dipendenze a runtime sono
MIT/Apache-2.0/BSD-3-Clause/OFL.

## Licenza

GenOffice è distribuito con licenza [Apache License 2.0](../../LICENSE), con
un'unica eccezione: la directory `ee/` è riservata a futuri moduli
enterprise ed è coperta dalla
[GenOffice Enterprise License](../../ee/LICENSE).

I nomi e i loghi GenOffice e Genspark sono marchi di Mainfunc, Inc. La
licenza Apache-2.0 non concede il permesso di utilizzarli (vedi la sezione
6); i fork dovrebbero usare un proprio branding.
