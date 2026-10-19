<h1 align="center">GenOffice</h1>

<p align="center"><b>Darmowy, otwarty pakiet biurowy, który działa w całości na Twoim komputerze.</b><br>
Pliki Word, Excel, PowerPoint, PDF, Markdown i HTML otwierane, edytowane i zapisywane z powrotem w ich prawdziwych formatach.</p>

<p align="center">
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/genspark-ai/genoffice" alt="Licencja: Apache-2.0"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases/latest"><img src="https://img.shields.io/github/v/release/genspark-ai/genoffice" alt="Najnowsze wydanie"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases"><img src="https://img.shields.io/github/downloads/genspark-ai/genoffice/total" alt="Liczba pobrań"></a>
  <a href="https://github.com/genspark-ai/genoffice/stargazers"><img src="https://img.shields.io/github/stars/genspark-ai/genoffice?style=flat" alt="Gwiazdki na GitHubie"></a>
</p>

<p align="center"><a href="../../README.md">English</a> · <a href="README.es.md">Español</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.zh-TW.md">繁體中文</a> · <a href="README.ko.md">한국어</a> · <a href="README.ja.md">日本語</a> · <a href="README.ar.md">العربية</a> · <a href="README.ru.md">Русский</a> · <a href="README.it.md">Italiano</a> · <a href="README.nl.md">Nederlands</a> · <b>Polski</b> · <a href="README.cs.md">Čeština</a> · <a href="README.id.md">Bahasa Indonesia</a> · <a href="README.ms.md">Bahasa Melayu</a> · <a href="README.th.md">ไทย</a> · <a href="README.hi.md">हिन्दी</a> · <a href="README.he.md">עברית</a> · <a href="README.vi.md">Tiếng Việt</a></p>

<p align="center">
  <a href="#download"><b>Pobierz</b></a> ·
  <a href="#development"><b>Rozwój</b></a> ·
  <a href="../../PRIVACY.md"><b>Prywatność</b></a>
</p>

GenOffice to darmowa, otwarta alternatywa dla Microsoft Office na macOS,
Windows i Linux. Otwiera i zapisuje natywne pliki `.docx`, `.xlsx` i `.pptx`
oraz edytuje PDF, Markdown i HTML — wszystko w jednym oknie z kartami. Nie
trzeba zakładać konta ani się logować: pliki są otwierane, edytowane,
zapisywane i konwertowane na Twoim własnym komputerze.

- **Prawdziwe formaty, zachowane bit po bicie.** Przepisywane jest tylko to,
  co edytujesz. Cała pozostała treść pliku pozostaje nienaruszona bit po
  bicie, dzięki czemu dokumenty wciąż działają w Word, Excel i PowerPoint.
- **Lokalność jako zasada projektowa.** Bez chmury, bez wysyłania plików.
  Konwersje PDF → Word / Excel / PowerPoint, Markdown → Word i HTML → Word
  działają w całości lokalnie.
- **Sześć edytorów, jedno okno.** Docs, Sheets, Slides, PDF, Markdown i HTML
  dzielą jeden pasek kart, jeden ekran główny i jeden zestaw ustawień.
- **Szukaj plików po tym, co zawierają.** Ekran główny przeszukuje nazwy,
  foldery i pełny tekst Twoich plików `.docx`, `.xlsx`, `.pptx`, PDF,
  Markdown i HTML w lokalnym indeksie, także w językach CJK.
- **21 języków interfejsu**, motywy jasny, ciemny i systemowy oraz wbudowany
  podręcznik użytkownika (F1) w każdym języku.

**Pobierz:** [macOS](https://github.com/genspark-ai/genoffice/releases/latest) (Apple Silicon i Intel) ·
[Windows](https://github.com/genspark-ai/genoffice/releases/latest) (x64 i Arm) ·
[Linux](https://github.com/genspark-ai/genoffice/releases/latest) (deb, rpm, AppImage) —
szczegóły i wymagania w sekcji [Pobierz](#download).

## Aplikacje

| Aplikacja    | Otwiera i zapisuje                  | Najważniejsze cechy                                                                                                                                                                                                         |
| ------------ | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Docs**     | `.docx` (i `.doc` do otwierania)    | Prawdziwe stronicowanie WYSIWYG oparte na metrykach wierszy Worda; style, tabele, nagłówki i stopki, przypisy, spis treści, komentarze, śledzenie zmian, porównywanie, równania i pismo odręczne.                           |
| **Sheets**   | `.xlsx`, `.xls`, `.csv`, `.tsv`     | Własny silnik `.xlsx` w Rust działający w osobnym procesie; żywe formuły, wykresy, tabele przestawne, fragmentatory, formatowanie warunkowe, poprawność danych, śledzenie formuł i ochrona arkusza.                         |
| **Slides**   | `.pptx` (i `.ppt` do otwierania)    | Wzorce i układy, inteligentne prowadnice, nieniszczące przycinanie, przejścia i animacje, notatki prelegenta, widok prezentera i eksport do PDF.                                                                            |
| **PDF**      | `.pdf`                              | Edycja tekstu wewnątrz strony przez PDFium, adnotacje, wypełnianie formularzy, podpisywanie, zaciemnianie, zmiana kolejności, dzielenie i scalanie stron; lokalna konwersja do Word, Excel lub PowerPoint z systemowym OCR. |
| **Markdown** | `.md`, `.markdown`, `.txt`, `.json` | Edytor blokowy nad zwykłym Markdownem z tabelami, listami zadań, diagramami Mermaid i matematyką, widok źródła wierny bit po bicie oraz eksport do Word, PDF i obrazów.                                                     |
| **HTML**     | `.html`, `.htm`                     | Podgląd na żywo z inspektorem elementów, widok źródła w CodeMirror, prezentacja na pełnym ekranie oraz eksport do Word, PDF lub jednego samodzielnego pliku HTML.                                                           |

### Docs

Docs otwiera plik tak, jak układa go Word — sekcje wielokolumnowe, obrazy
na spad, cieniowane tabele, nagłówki i stopki, stronicowanie oparte na
metrykach wierszy Worda. Style, komentarze, śledzone zmiany, równania i
pismo odręczne przechodzą przez otwarcie i zapis nietknięte, a zapis
przepisuje tylko te akapity, które zmieniłeś.

### Sheets

Obliczenia działają w osobnym procesie silnika w Rust, więc jego awaria
nigdy nie zamyka aplikacji. Formuły pozostają żywymi formułami, wykresy i
wykresy przestawne są prawdziwymi obiektami w zapisanym skoroszycie, a
ochrona, nazwy zdefiniowane i formatowanie warunkowe są zapisywane z
powrotem w pliku `.xlsx`.

### Slides

Edytor w stylu PowerPointa ze wzorcami i układami, inteligentnymi
prowadnicami, tabelami, wykresami, przejściami i animacjami. Nietknięte
slajdy pozostają przy zapisie identyczne bit po bicie; notatki, wzorce i
adnotacje są zachowywane, a prezentacje można eksportować do PDF lub jako
jeden plik PNG na slajd.

### PDF

Tryb edycji obrysowuje każdy blok tekstu, aby można go było przepisać w
miejscu; strumień treści jest przepisywany przez PDFium z oryginalnymi
czcionkami, a nie zasłaniany adnotacją. **PDF Converter → PDF to Word**
tworzy edytowalny plik `.docx`, który otwiera się w Docs obok źródła.
Konwersje do Excel i PowerPoint działają tak samo, a na macOS i Windows
zeskanowane strony przechodzą przez systemowe OCR. Zaciemnianie fizycznie
usuwa zakrytą treść w nowej kopii.

### Markdown i HTML

Markdown to blokowy edytor Tiptap zapisujący wynik z powrotem jako zwykły
plik `.md`, z widokiem źródła wiernym bit po bicie dla surowego tekstu.
Edytor HTML wyświetla podgląd strony we wbudowanym Chromium; kliknij
dowolny element, aby zmienić jego styl, kliknij dwukrotnie, aby edytować
tekst, albo przełącz się na widok źródła. **Export as Word** w obu
aplikacjach tworzy natywny, edytowalny plik `.docx` całkowicie lokalnie.

## Dlaczego GenOffice

- **Otwarty kod źródłowy**, Apache-2.0, tworzony w pełni otwarcie na GitHubie.
- **Twój do uruchomienia.** Natywne aplikacje na macOS, Windows i Linux; pliki
  zostają na Twoim dysku, a każda edycja, zapis i konwersja odbywają się na
  Twoim urządzeniu.
- **Prawdziwe pliki Office.** Natywne `.docx`, `.xlsx` i `.pptx`, z
  zachowaniem bit po bicie: nietknięte części pliku są kopiowane w
  niezmienionej formie.
- **PDF zrobiony właściwie.** Edytuj tekst wewnątrz strony i konwertuj PDF do
  Word, Excel lub PowerPoint lokalnie, z systemowym OCR dla skanów.
- **Także Markdown i HTML**, z lokalnym eksportem do Word i PDF.
- **Bez konta.** Nie trzeba się nigdzie rejestrować, żadnych płatnych
  limitów, żadnej subskrypcji.
- **Bezpłatne**, dla pojedynczych osób i zespołów.

Cały pakiet obsługuje motywy jasny, ciemny i systemowy. Motywy zmieniają
tylko to, co widać na ekranie: eksporty, wydruki i zapisane pliki zawsze
zachowują oryginalne kolory dokumentu.

<a id="download"></a>

## Pobierz

| Platforma                               | Wymagania                                             | Pobierz                                                                                       |
| --------------------------------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| **macOS** — Apple Silicon (arm64)       | macOS 11+                                             | [Najnowszy plik `.dmg` (arm64)](https://github.com/genspark-ai/genoffice/releases/latest)     |
| **macOS** — Intel (x64)                 | macOS 11+                                             | [Najnowszy plik `.dmg` (x64)](https://github.com/genspark-ai/genoffice/releases/latest)       |
| **Windows** (x64, większość komputerów) | Windows 10+, Intel/AMD                                | [Najnowszy instalator `-x64.exe`](https://github.com/genspark-ai/genoffice/releases/latest)   |
| **Windows** na Arm (ARM64)              | Windows 11 na Arm (Snapdragon X i podobne)            | [Najnowszy instalator `-arm64.exe`](https://github.com/genspark-ai/genoffice/releases/latest) |
| **Linux** — Debian / Ubuntu             | x86_64, glibc 2.34+ (Ubuntu 22.04 lub nowszy)         | [Najnowszy plik `.deb`](https://github.com/genspark-ai/genoffice/releases/latest)             |
| **Linux** — Fedora / RHEL / openSUSE    | x86_64, glibc 2.34+ (Fedora 35+, RHEL 9+, Leap 15.6+) | [Najnowszy plik `.rpm`](https://github.com/genspark-ai/genoffice/releases/latest)             |
| **Linux** — inne dystrybucje            | x86_64, glibc 2.34+, FUSE 2                           | [Najnowszy plik `.AppImage`](https://github.com/genspark-ai/genoffice/releases/latest)        |

Wszystkie kompilacje pochodzą z `main`; instalatory na macOS i Windows są
podpisane. Starsze wersje znajdują się na stronie
[Releases](https://github.com/genspark-ai/genoffice/releases).
Flatpak, Nix oraz obraz Docker headless do konwersji wsadowej są opisane w
[packaging/README.md](../../packaging/README.md).

<details>
<summary><b>Instalacja na Linuksie</b></summary>

Plik deb instaluje się przez apt — ściąga zależności i dodaje GenOffice do
menu aplikacji:

```bash
sudo apt install ./genoffice_<version>_amd64.deb
```

Na Fedorze / rodzinie RHEL / openSUSE zainstaluj pakiet rpm:

```bash
sudo dnf install ./genoffice-<version>.x86_64.rpm     # Fedora / rodzina RHEL
sudo zypper install ./genoffice-<version>.x86_64.rpm  # openSUSE
```

AppImage działa bez instalacji: zainstaluj środowisko FUSE 2
(`sudo apt install libfuse2`; na Ubuntu 24.04 pakiet nazywa się
`libfuse2t64`), nadaj plikowi prawo wykonywania, a potem go uruchom:

```bash
chmod +x GenOffice-<version>.AppImage
./GenOffice-<version>.AppImage
```

</details>

## Jak to działa

Siedem aplikacji Electron — Docs, Sheets, Slides, PDF, Markdown, HTML i
powłoka z kartami — współdzieli jedną warstwę silnika złożoną z czystych
pakietów TypeScript oraz sidecara w Rust dla `.xlsx`. Oryginalny plik jest
zawsze jedynym źródłem prawdy: zmiany są nakładane jako wąskie łatki, a
wszystko, czego edytor nie dotknął, wraca bez zmian.

```
open docx ─► archive original by hash (never touched)
          ─► parse word/document.xml into a block tree, each block anchored to its original XML
          ─► Tiptap editor (dirty tracking per block)
save      ─► dirty blocks → OOXML fragments (referencing existing styles only)
          ─► splice into the original document.xml; untouched blocks keep their bytes
          ─► repack the zip; every other entry is copied byte-for-byte
```

Silniki znajdują się w `packages/` (`docx-engine`, `pptx-engine`,
`pptx-render`, `pptx-ops`, `pdf2docx`, `html2docx`, `xlsx-gateway`,
`file-parse`, `font-metrics`, `i18n`, `ui` i inne); silnik `.xlsx` w Rust
jest w `apps/sheets/native/xlsx-engine`. Przegląd poszczególnych pakietów
znajduje się w [CONTRIBUTING.md](../../CONTRIBUTING.md).

<a id="development"></a>

## Rozwój

Wymagania wstępne: Node 22+, npm 10+ oraz zestaw narzędzi Rust (`cargo` w
PATH) dla sidecara `.xlsx` aplikacji Sheets.

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

`npm run build -w @genoffice/sheets` automatycznie kompiluje sidecar w Rust.
Zobacz [CONTRIBUTING.md](../../CONTRIBUTING.md), aby poznać kontrole, które
musi przejść każda zmiana, oraz sposób scalania pull requestów.

## Społeczność

- **Zgłoś błąd lub poproś o funkcję** w
  [GitHub Issues](https://github.com/genspark-ai/genoffice/issues).
- **Oznacz repozytorium gwiazdką**, jeśli GenOffice jest dla Ciebie
  przydatne — to najlepszy sposób wsparcia projektu.

## FAQ

<details>
<summary><b>Czy GenOffice jest darmowe?</b></summary>

Tak. GenOffice jest darmowe i otwarte na licencji Apache-2.0 — bez okresu
próbnego, bez konta i bez płatnego planu.

</details>

<details>
<summary><b>Czy GenOffice może otwierać pliki Microsoft Word, Excel i PowerPoint?</b></summary>

Tak. GenOffice otwiera i zapisuje natywne pliki `.docx`, `.xlsx` i `.pptx`.
Zapis zachowuje treść bit po bicie: części pliku, których nie dotknięto, są
zapisywane z powrotem bez zmian, dzięki czemu dokumenty wciąż działają w
Microsoft Office.

</details>

<details>
<summary><b>Czy GenOffice działa offline?</b></summary>

Tak. Otwieranie, edycja, zapisywanie i konwertowanie dokumentów odbywa się
całkowicie lokalnie i nie wymaga połączenia z siecią. Sieć jest używana
wyłącznie do sprawdzania aktualizacji, opcjonalnego pobierania czcionek oraz
anonimowych statystyk użytkowania, które można wyłączyć w Ustawienia →
Ogólne.

</details>

<details>
<summary><b>Czy GenOffice może edytować pliki PDF?</b></summary>

Tak — to prawdziwa edycja tekstu i obrazów w PDF, która przepisuje strumień
treści strony z zachowaniem oryginalnych czcionek, a nie zasłania go
anotacjami.

</details>

<details>
<summary><b>Czy GenOffice może konwertować PDF do Word, Excel lub PowerPoint?</b></summary>

Tak — całkowicie lokalnie: ekstrakcja znaków na poziomie PDFium wraz z
analizą układu opartą na geometrii, bez usługi w chmurze, bez wysyłania
plików. Zeskanowane strony są również obsługiwane: na macOS i Windows
odczytuje je systemowe OCR, dzięki czemu są konwertowane do edytowalnego
tekstu, a nie obrazu strony.

</details>

<details>
<summary><b>Czy GenOffice może konwertować HTML do Worda?</b></summary>

Tak — opcja Export as Word w aplikacji HTML tworzy natywny, edytowalny plik
`.docx` całkowicie lokalnie. Strona jest renderowana we wbudowanym Chromium
i redukowana do prawdziwych struktur Worda: nagłówków, akapitów, list,
tabel, kart, wierszy KPI, pól formularzy i tła stron; jedynie elementy
wizualne bez odpowiednika w Wordzie (wykresy, ikony, ozdobne pola) są
osadzane jako obrazy.

</details>

<details>
<summary><b>Czy GenOffice zbiera jakieś dane?</b></summary>

Oficjalne pakowane wersje domyślnie wysyłają ograniczoną, anonimową
telemetrię użytkowania, a raportowanie można wyłączyć w każdej chwili w
Ustawienia → Ogólne. Telemetria nigdy nie wysyła treści dokumentów, nazw
plików, ścieżek plików ani adresów e-mail. Zobacz
[GenOffice Privacy](../../PRIVACY.md), aby poznać pełny wykaz zdarzeń i
ujawnianych danych.

</details>

## Bezpieczeństwo

Zobacz [SECURITY.md](../../SECURITY.md), aby poznać podejście do
bezpieczeństwa procesu (sandboxing renderera, walidacja IPC, ograniczanie
linków zewnętrznych).

## Podziękowania

GenOffice nie byłoby możliwe bez tych projektów open source:

- [Electron](https://www.electronjs.org/) — środowisko desktopowe dla każdej
  aplikacji.
- [Univer](https://github.com/dream-num/univer) (Apache-2.0) — jądro
  interfejsu arkusza kalkulacyjnego, które rozwija Sheets.
- [PDFium](https://pdfium.googlesource.com/pdfium/) (BSD-3-Clause,
  dołączane przez
  [@embedpdf/pdfium](https://github.com/embedpdf/embed-pdf-viewer)) —
  silnik strumienia treści stojący za prawdziwą edycją tekstu i obrazów w
  PDF.
- [pdf.js](https://github.com/mozilla/pdf.js) (Apache-2.0) i
  [pdf-lib](https://github.com/Hopding/pdf-lib) (MIT) — renderowanie PDF i
  składanie dokumentów.
- [Tiptap](https://tiptap.dev/) / [ProseMirror](https://prosemirror.net/) —
  edytory blokowe w Docs i Markdown.
- [CodeMirror](https://codemirror.net/) (MIT) — edytor źródła w HTML.
- [Konva](https://konvajs.org/) — renderowanie canvas dla Slides i wykresów
  Sheets.
- [HarfBuzz](https://github.com/harfbuzz/harfbuzz) (wasm) — metryki
  składu tekstu dla złożonych systemów pisma.
- [calamine](https://github.com/tafia/calamine) i
  [IronCalc](https://github.com/ironcalc/IronCalc) — warstwy odczytu i
  obliczeń sidecara xlsx w Rust.
- [libeot](https://github.com/umanwizard/libeot) (MPL-2.0) — dekoder
  MicroType Express dla osadzonych czcionek PowerPoint, przeniesiony na
  TypeScript.
- [React](https://react.dev/) (MIT) — warstwa interfejsu użytkownika
  każdej aplikacji.
- [Mermaid](https://mermaid.js.org/) (MIT) i [KaTeX](https://katex.org/)
  (MIT) — diagramy i matematyka w Markdown i Docs.
- [opentype.js](https://opentype.js.org/) (MIT) — parsowanie czcionek do
  metryk i wyszukiwania glifów.
- [JSZip](https://stuk.github.io/jszip/) (MIT) i
  [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser)
  (MIT) — warstwy kontenera OOXML i XML.
- [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons)
  (MIT) — zestaw ikon używany na wstążkach.
- [electron-updater](https://www.electron.build/) (MIT) — aktualizacje w
  aplikacji.
- Czcionki Liberation, Carlito, Caladea i Noto CJK (OFL/Apache-2.0) —
  dołączone czcionki dokumentów.

`npm run notices` regeneruje dołączone podsumowanie licencji stron trzecich
(`tools/gen-third-party-notices.mjs`); wszystkie zależności środowiska
wykonawczego są na licencjach MIT/Apache-2.0/BSD-3-Clause/OFL.

## Licencja

GenOffice jest licencjonowane na warunkach [Apache License 2.0](../../LICENSE), z
jednym wyjątkiem: katalog `ee/` jest zarezerwowany dla przyszłych modułów
enterprise i jest objęty [GenOffice Enterprise License](../../ee/LICENSE).

Nazwy i logo GenOffice oraz Genspark są znakami towarowymi Mainfunc, Inc.
Licencja Apache-2.0 nie daje prawa do ich używania (patrz sekcja 6); forki
powinny korzystać z własnej marki.
