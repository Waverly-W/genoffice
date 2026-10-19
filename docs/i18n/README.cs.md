<h1 align="center">GenOffice</h1>

<p align="center"><b>Bezplatný open-source kancelářský balík, který celý běží na vašem počítači.</b><br>
Soubory Word, Excel, PowerPoint, PDF, Markdown a HTML otevírané, upravované a ukládané zpět ve skutečných formátech.</p>

<p align="center">
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/genspark-ai/genoffice" alt="Licence: Apache-2.0"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases/latest"><img src="https://img.shields.io/github/v/release/genspark-ai/genoffice" alt="Nejnovější verze"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases"><img src="https://img.shields.io/github/downloads/genspark-ai/genoffice/total" alt="Stažení"></a>
  <a href="https://github.com/genspark-ai/genoffice/stargazers"><img src="https://img.shields.io/github/stars/genspark-ai/genoffice?style=flat" alt="Hvězdy na GitHubu"></a>
</p>

<p align="center"><a href="../../README.md">English</a> · <a href="README.es.md">Español</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.zh-TW.md">繁體中文</a> · <a href="README.ko.md">한국어</a> · <a href="README.ja.md">日本語</a> · <a href="README.ar.md">العربية</a> · <a href="README.ru.md">Русский</a> · <a href="README.it.md">Italiano</a> · <a href="README.nl.md">Nederlands</a> · <a href="README.pl.md">Polski</a> · <b>Čeština</b> · <a href="README.id.md">Bahasa Indonesia</a> · <a href="README.ms.md">Bahasa Melayu</a> · <a href="README.th.md">ไทย</a> · <a href="README.hi.md">हिन्दी</a> · <a href="README.he.md">עברית</a> · <a href="README.vi.md">Tiếng Việt</a></p>

<p align="center">
  <a href="#download"><b>Stažení</b></a> ·
  <a href="#development"><b>Vývoj</b></a> ·
  <a href="../../PRIVACY.md"><b>Soukromí</b></a>
</p>

GenOffice je bezplatná open-source alternativa k Microsoft Office pro macOS,
Windows a Linux. Otevírá a ukládá nativní soubory `.docx`, `.xlsx` a `.pptx`
a upravuje PDF, Markdown a HTML, vše v jednom okně s kartami. Nemusíte
zakládat účet ani se nikam přihlašovat: soubory se otevírají, upravují,
ukládají a převádějí na vašem vlastním počítači.

- **Skutečné formáty, zachování na úrovni bajtů.** Přepíše se jen to, co
  upravíte. Vše ostatní v souboru zůstává bajtově identické, takže dokumenty
  dál bezproblémově fungují ve Wordu, Excelu a PowerPointu.
- **Lokální už z principu.** Žádný cloud, žádné nahrávání. PDF → Word /
  Excel / PowerPoint, Markdown → Word i HTML → Word běží celé na zařízení.
- **Šest editorů, jedno okno.** Docs, Sheets, Slides, PDF, Markdown a HTML
  sdílejí jeden pruh karet, jednu domovskou obrazovku a jednu sadu
  nastavení.
- **Hledejte soubory podle toho, co obsahují.** Domovská obrazovka
  prohledává názvy, složky a plný text vašich souborů `.docx`, `.xlsx`,
  `.pptx`, PDF, Markdown a HTML z lokálního indexu, včetně CJK.
- **21 jazyků rozhraní**, světlý, tmavý a systémový vzhled a vestavěná
  uživatelská příručka (F1) v každém jazyce.

**Stáhnout:** [macOS](https://github.com/genspark-ai/genoffice/releases/latest) (Apple Silicon a Intel) ·
[Windows](https://github.com/genspark-ai/genoffice/releases/latest) (x64 a Arm) ·
[Linux](https://github.com/genspark-ai/genoffice/releases/latest) (deb, rpm, AppImage) —
podrobnosti a požadavky najdete v sekci [Stažení](#download).

## Aplikace

| Aplikace     | Otevírá a ukládá                    | Hlavní přednosti                                                                                                                                                                                                            |
| ------------ | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Docs**     | `.docx` (a `.doc` k otevření)       | Skutečné WYSIWYG stránkování podle řádkových metrik Wordu; styly, tabulky, záhlaví a zápatí, poznámky pod čarou, obsah, komentáře, sledované změny, porovnání, rovnice a inkoust.                                           |
| **Sheets**   | `.xlsx`, `.xls`, `.csv`, `.tsv`     | Vlastní engine `.xlsx` v Rustu ve vlastním procesu; živé vzorce, grafy, kontingenční tabulky, průřezy, podmíněné formátování, ověřování dat, sledování vzorců a zámek listu.                                                |
| **Slides**   | `.pptx` (a `.ppt` k otevření)       | Předlohy a rozvržení, inteligentní vodítka, nedestruktivní ořez, přechody a animace, poznámky řečníka, zobrazení přednášejícího a export do PDF.                                                                            |
| **PDF**      | `.pdf`                              | Úpravy textu přímo na stránce přes PDFium, anotace, vyplňování formulářů, podepisování, začerňování, změna pořadí, rozdělování a slučování stránek; převod do Wordu, Excelu nebo PowerPointu na zařízení se systémovým OCR. |
| **Markdown** | `.md`, `.markdown`, `.txt`, `.json` | Blokový editor nad čistým Markdownem s tabulkami, seznamy úkolů, diagramy Mermaid a matematikou, bajtově věrné zobrazení zdroje a export do Wordu, PDF a obrázků.                                                           |
| **HTML**     | `.html`, `.htm`                     | Živý náhled s inspektorem prvků, zobrazení zdroje v CodeMirror, prezentace na celou obrazovku a export do Wordu, PDF nebo jediného soběstačného souboru HTML.                                                               |

### Docs

Docs otevře soubor tak, jak ho rozvrhuje Word — vícesloupcové oddíly,
obrázky na spadávku, stínované tabulky, záhlaví a zápatí, stránkování podle
řádkových metrik Wordu. Styly, komentáře, sledované změny, rovnice a inkoust
projdou otevřením i uložením beze změny a uložení přepíše jen ty odstavce,
které jste změnili.

### Sheets

Výpočty běží v samostatném procesu enginu v Rustu, takže jeho pád nikdy
neshodí aplikaci. Vzorce zůstávají živými vzorci, grafy a kontingenční grafy
jsou skutečnými objekty v uloženém sešitu a ochrana, definované názvy
i podmíněné formáty se zapisují zpět do `.xlsx`.

### Slides

Editor ve stylu PowerPointu s předlohami a rozvrženími, inteligentními
vodítky, tabulkami, grafy, přechody a animacemi. Nedotčené snímky zůstávají
při uložení bajtově identické; poznámky, předlohy a anotace se zachovávají
a prezentace lze exportovat do PDF nebo jako jeden PNG na snímek.

### PDF

Režim úprav ohraničí každý textový blok, abyste ho mohli přepsat přímo na
místě; obsahový proud se přepisuje přes PDFium s původními fonty, nejde
o zakrývací anotaci. **PDF Converter → PDF to Word** vytvoří editovatelný
`.docx`, který se otevře v Docs vedle zdrojového souboru. Cíle Excel
a PowerPoint fungují stejně a na macOS a Windows procházejí naskenované
stránky systémovým OCR. Začerňování fyzicky odstraní zakrytý obsah v nové
kopii.

### Markdown a HTML

Markdown je blokový editor Tiptap, který ukládá zpět čisté `.md`, s bajtově
věrným zobrazením zdroje pro surový text. Editor HTML zobrazuje náhled
stránky ve vestavěném Chromiu; kliknutím na libovolný prvek změníte jeho
styl, dvojklikem upravíte jeho text, nebo se přepnete do zobrazení zdroje.
**Export as Word** v obou aplikacích vytvoří nativní, editovatelný `.docx`
zcela na zařízení.

## Proč GenOffice

- **Open source**, Apache-2.0, vyvíjený otevřeně na GitHubu.
- **Váš k provozování.** Nativní aplikace pro macOS, Windows a Linux; soubory
  zůstávají na vašem disku a každá úprava, uložení i konverze probíhá na
  vašem počítači.
- **Skutečné soubory Office.** Nativní `.docx`, `.xlsx` a `.pptx` se
  zachováním na úrovni bajtů: nedotčené části souboru se kopírují přesně tak,
  jak byly.
- **PDF udělané správně.** Upravujte text přímo na stránce a převádějte PDF
  do Word, Excel nebo PowerPoint na zařízení, se systémovým OCR pro skeny.
- **Také Markdown a HTML**, s místním exportem do Wordu a PDF.
- **Žádný účet.** Žádná registrace, žádné kredity, žádné předplatné.
- **Zdarma**, pro jednotlivce i týmy.

Celý balík nabízí světlý, tmavý a systémový vzhled. Vzhledy mění pouze to,
co je vidět na obrazovce: exporty, tisky a uložené soubory si vždy zachovávají
vlastní barvy dokumentu.

<a id="download"></a>

## Stažení

| Platforma                            | Požadavky                                             | Stažení                                                                                        |
| ------------------------------------ | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **macOS** — Apple Silicon (arm64)    | macOS 11+                                             | [Nejnovější `.dmg` (arm64)](https://github.com/genspark-ai/genoffice/releases/latest)          |
| **macOS** — Intel (x64)              | macOS 11+                                             | [Nejnovější `.dmg` (x64)](https://github.com/genspark-ai/genoffice/releases/latest)            |
| **Windows** (x64, většina PC)        | Windows 10+, Intel/AMD                                | [Nejnovější instalátor `-x64.exe`](https://github.com/genspark-ai/genoffice/releases/latest)   |
| **Windows** na Arm (ARM64)           | Windows 11 na Arm (Snapdragon X a podobné)            | [Nejnovější instalátor `-arm64.exe`](https://github.com/genspark-ai/genoffice/releases/latest) |
| **Linux** — Debian / Ubuntu          | x86_64, glibc 2.34+ (Ubuntu 22.04 nebo novější)       | [Nejnovější `.deb`](https://github.com/genspark-ai/genoffice/releases/latest)                  |
| **Linux** — Fedora / RHEL / openSUSE | x86_64, glibc 2.34+ (Fedora 35+, RHEL 9+, Leap 15.6+) | [Nejnovější `.rpm`](https://github.com/genspark-ai/genoffice/releases/latest)                  |
| **Linux** — ostatní distribuce       | x86_64, glibc 2.34+, FUSE 2                           | [Nejnovější `.AppImage`](https://github.com/genspark-ai/genoffice/releases/latest)             |

Všechna sestavení pocházejí z `main`; instalátory pro macOS a Windows jsou
podepsané. Starší verze jsou na stránce [Releases](https://github.com/genspark-ai/genoffice/releases).
Flatpak, Nix a headless obraz Docker pro dávkový převod popisuje
[packaging/README.md](../../packaging/README.md).

<details>
<summary><b>Instalace na Linuxu</b></summary>

Balíček deb se instaluje pomocí apt — stáhne závislosti a přidá GenOffice
do nabídky aplikací:

```bash
sudo apt install ./genoffice_<version>_amd64.deb
```

Na Fedoře / v rodině RHEL / na openSUSE nainstalujte místo toho rpm balíček:

```bash
sudo dnf install ./genoffice-<version>.x86_64.rpm     # Fedora / RHEL family
sudo zypper install ./genoffice-<version>.x86_64.rpm  # openSUSE
```

AppImage běží na místě: nainstalujte runtime FUSE 2
(`sudo apt install libfuse2`; na Ubuntu 24.04 se balíček jmenuje `libfuse2t64`),
udělejte soubor spustitelným a spusťte jej:

```bash
chmod +x GenOffice-<version>.AppImage
./GenOffice-<version>.AppImage
```

</details>

## Jak to funguje

Sedm aplikací Electron — Docs, Sheets, Slides, PDF, Markdown, HTML
a záložková shell aplikace — sdílí jednu vrstvu enginu z čistých TypeScript
balíčků plus Rust sidecar pro `.xlsx`. Původní soubor je vždy zdrojem pravdy:
úpravy se aplikují jako úzké patche a vše, čeho se editor nedotkl, přežije
zpětné uložení beze změny.

```
open docx ─► archive original by hash (never touched)
          ─► parse word/document.xml into a block tree, each block anchored to its original XML
          ─► Tiptap editor (dirty tracking per block)
save      ─► dirty blocks → OOXML fragments (referencing existing styles only)
          ─► splice into the original document.xml; untouched blocks keep their bytes
          ─► repack the zip; every other entry is copied byte-for-byte
```

Enginy jsou v `packages/` (`docx-engine`, `pptx-engine`, `pptx-render`,
`pptx-ops`, `pdf2docx`, `html2docx`, `xlsx-gateway`, `file-parse`,
`font-metrics`, `i18n`, `ui` a další); engine `.xlsx` v Rustu je
v `apps/sheets/native/xlsx-engine`. Prohlídku balíček po balíčku najdete
v [CONTRIBUTING.md](../../CONTRIBUTING.md).

<a id="development"></a>

## Vývoj

Předpoklady: Node 22+, npm 10+ a Rust toolchain (`cargo` na PATH) pro
`.xlsx` sidecar aplikace Sheets.

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

`npm run build -w @genoffice/sheets` zkompiluje Rust sidecar automaticky.
Kontroly, které musí projít každá změna, a postup přijímání pull requestů
najdete v [CONTRIBUTING.md](../../CONTRIBUTING.md).

## Komunita

- **Nahlaste chybu nebo navrhněte funkci** v
  [GitHub Issues](https://github.com/genspark-ai/genoffice/issues).
- **Ohvězdičkujte repozitář**, pokud je pro vás GenOffice užitečný — je to
  nejlepší způsob, jak projekt podpořit.

## Často kladené otázky

<details>
<summary><b>Je GenOffice zdarma?</b></summary>

Ano. GenOffice je bezplatný a open-source pod licencí Apache-2.0 — žádná
zkušební verze, žádný účet a žádný placený tarif.

</details>

<details>
<summary><b>Umí GenOffice otevírat soubory Microsoft Word, Excel a PowerPoint?</b></summary>

Ano. GenOffice otevírá a ukládá nativní soubory `.docx`, `.xlsx` a `.pptx`.
Ukládání zachovává bajty: části souboru, kterých jste se nedotkli, se zapíší
zpět beze změny, takže dokumenty dál fungují v Microsoft Office.

</details>

<details>
<summary><b>Funguje GenOffice offline?</b></summary>

Ano. Otevírání, úpravy, ukládání i převod dokumentů probíhají zcela lokálně
a nepotřebují síťové připojení. Síť se používá jen ke kontrole aktualizací,
k volitelnému stahování fontů a pro anonymní statistiky používání, které
můžete vypnout v Nastavení → Obecné.

</details>

<details>
<summary><b>Umí GenOffice upravovat soubory PDF?</b></summary>

Ano — skutečná úprava textu a obrázků v PDF, která přepisuje obsahový proud
stránky se zachováním původních fontů, ne pomocí zakrývacích anotací.

</details>

<details>
<summary><b>Umí GenOffice převádět PDF do Wordu, Excelu nebo PowerPointu?</b></summary>

Ano — zcela na zařízení: extrakce na úrovni znaků přes PDFium plus analýza
rozvržení na základě geometrie, žádná cloudová služba, žádné nahrávání.
Skenované stránky jsou také podporovány: na macOS a Windows je čte systémové
OCR, takže se převedou na editovatelný text, ne na obrázek stránky.

</details>

<details>
<summary><b>Umí GenOffice převádět HTML do Wordu?</b></summary>

Ano — Export as Word v aplikaci HTML vytvoří nativní, editovatelný soubor
`.docx` zcela na zařízení. Stránka se vykreslí ve vestavěném Chromiu
a zredukuje na skutečné struktury Wordu: nadpisy, odstavce, seznamy, tabulky,
karty, řádky KPI, pole formulářů a pozadí stránky; pouze vizuály bez
odpovídajícího prvku ve Wordu (grafy, ikony, ozdobné rámečky) se vloží jako
obrázky.

</details>

<details>
<summary><b>Sbírá GenOffice nějaká data?</b></summary>

Oficiální balíčkované verze standardně odesílají omezenou anonymní analytiku
používání a hlášení lze kdykoli vypnout v Nastavení → Obecné. Analytika
nikdy neodesílá obsah dokumentu, názvy souborů, cesty k souborům ani
e-mailové adresy. Úplný výčet událostí a zveřejnění dat najdete
v dokumentu [GenOffice Privacy](../../PRIVACY.md).

</details>

## Zabezpečení

Postoj k zabezpečení procesů (sandboxing rendereru, validace IPC, filtrování
externích odkazů) najdete v [SECURITY.md](../../SECURITY.md).

## Poděkování

GenOffice by nebyl možný bez těchto open-source projektů:

- [Electron](https://www.electronjs.org/) — desktopový runtime pro každou aplikaci.
- [Univer](https://github.com/dream-num/univer) (Apache-2.0) — jádro
  uživatelského rozhraní tabulek, které Sheets rozšiřuje.
- [PDFium](https://pdfium.googlesource.com/pdfium/) (BSD-3-Clause, součástí
  balíčku přes [@embedpdf/pdfium](https://github.com/embedpdf/embed-pdf-viewer)) —
  engine obsahového proudu za skutečnou úpravou textu a obrázků v PDF.
- [pdf.js](https://github.com/mozilla/pdf.js) (Apache-2.0) a
  [pdf-lib](https://github.com/Hopding/pdf-lib) (MIT) — vykreslování PDF
  a sestavování dokumentů.
- [Tiptap](https://tiptap.dev/) / [ProseMirror](https://prosemirror.net/) —
  blokové editory v Docs a Markdown.
- [CodeMirror](https://codemirror.net/) (MIT) — zdrojový editor v HTML.
- [Konva](https://konvajs.org/) — vykreslování plátna pro Slides a grafy v Sheets.
- [HarfBuzz](https://github.com/harfbuzz/harfbuzz) (wasm) — metriky
  text-shapingu pro složitá písma.
- [calamine](https://github.com/tafia/calamine) a
  [IronCalc](https://github.com/ironcalc/IronCalc) — vrstvy pro čtení a výpočty
  v Rust xlsx sidecaru.
- [libeot](https://github.com/umanwizard/libeot) (MPL-2.0) — dekodér
  MicroType Express pro vložená písma PowerPointu, přenesený do
  TypeScriptu.
- [React](https://react.dev/) (MIT) — vrstva uživatelského rozhraní každé
  aplikace.
- [Mermaid](https://mermaid.js.org/) (MIT) a [KaTeX](https://katex.org/)
  (MIT) — diagramy a matematika v Markdownu a Docs.
- [opentype.js](https://opentype.js.org/) (MIT) — parsování písem pro
  metriky a vyhledávání glyfů.
- [JSZip](https://stuk.github.io/jszip/) (MIT) a
  [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser)
  (MIT) — vrstvy kontejneru OOXML a XML.
- [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons)
  (MIT) — sada ikon použitá na pásech nástrojů.
- [electron-updater](https://www.electron.build/) (MIT) — aktualizace v
  rámci aplikace.
- Fonty Liberation, Carlito, Caladea a Noto CJK (OFL/Apache-2.0) — dodávané
  fonty dokumentů.

`npm run notices` znovu vygeneruje souhrn licencí dodávaných třetích stran
(`tools/gen-third-party-notices.mjs`); všechny runtime závislosti jsou
MIT/Apache-2.0/BSD-3-Clause/OFL.

## Licence

GenOffice je licencován pod [Apache License 2.0](../../LICENSE), s jednou
výjimkou: adresář `ee/` je vyhrazen pro budoucí podnikové moduly a je kryt
[GenOffice Enterprise License](../../ee/LICENSE).

Názvy a loga GenOffice a Genspark jsou ochranné známky společnosti Mainfunc,
Inc. Licence Apache-2.0 neuděluje oprávnění je používat (viz oddíl 6); forky
by měly používat vlastní branding.
