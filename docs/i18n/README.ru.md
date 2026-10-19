<h1 align="center">GenOffice</h1>

<p align="center"><b>Бесплатный офисный пакет с открытым исходным кодом, который целиком работает на вашем компьютере.</b><br>
Файлы Word, Excel, PowerPoint, PDF, Markdown и HTML открываются, редактируются и сохраняются обратно в своих настоящих форматах.</p>

<p align="center">
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/genspark-ai/genoffice" alt="Лицензия: Apache-2.0"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases/latest"><img src="https://img.shields.io/github/v/release/genspark-ai/genoffice" alt="Последний релиз"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases"><img src="https://img.shields.io/github/downloads/genspark-ai/genoffice/total" alt="Загрузки"></a>
  <a href="https://github.com/genspark-ai/genoffice/stargazers"><img src="https://img.shields.io/github/stars/genspark-ai/genoffice?style=flat" alt="Звёзды на GitHub"></a>
</p>

<p align="center"><a href="../../README.md">English</a> · <a href="README.es.md">Español</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.zh-TW.md">繁體中文</a> · <a href="README.ko.md">한국어</a> · <a href="README.ja.md">日本語</a> · <a href="README.ar.md">العربية</a> · <b>Русский</b> · <a href="README.it.md">Italiano</a> · <a href="README.nl.md">Nederlands</a> · <a href="README.pl.md">Polski</a> · <a href="README.cs.md">Čeština</a> · <a href="README.id.md">Bahasa Indonesia</a> · <a href="README.ms.md">Bahasa Melayu</a> · <a href="README.th.md">ไทย</a> · <a href="README.hi.md">हिन्दी</a> · <a href="README.he.md">עברית</a> · <a href="README.vi.md">Tiếng Việt</a></p>

<p align="center">
  <a href="#download"><b>Скачать</b></a> ·
  <a href="#development"><b>Разработка</b></a> ·
  <a href="../../PRIVACY.md"><b>Конфиденциальность</b></a>
</p>

GenOffice — бесплатная альтернатива Microsoft Office с открытым исходным
кодом для macOS, Windows и Linux. Она открывает и сохраняет нативные файлы
`.docx`, `.xlsx` и `.pptx` и редактирует PDF, Markdown и HTML — всё в одном
окне с вкладками. Не нужно ни создавать учётную запись, ни куда-либо
входить: файлы открываются, редактируются, сохраняются и конвертируются на
вашем собственном компьютере.

- **Настоящие форматы, побайтовое сохранение.** Переписывается только то, что
  вы редактируете. Всё остальное в файле сохраняется байт в байт, поэтому
  документы продолжают открываться в Word, Excel и PowerPoint.
- **Всё работает локально.** Никакого облака, никакой загрузки файлов.
  Преобразования PDF → Word / Excel / PowerPoint, Markdown → Word и
  HTML → Word выполняются прямо на устройстве.
- **Шесть редакторов, одно окно.** Docs, Sheets, Slides, PDF, Markdown и HTML
  используют общую строку вкладок, общий главный экран и общие настройки.
- **Поиск файлов по содержимому.** Главный экран ищет по именам, папкам и
  полному тексту ваших файлов `.docx`, `.xlsx`, `.pptx`, PDF, Markdown и HTML
  с помощью локального индекса, включая тексты на CJK.
- **21 язык интерфейса**, светлая, тёмная и системная темы, а также
  встроенное руководство пользователя (F1) на каждом языке.

**Скачать:** [macOS](https://github.com/genspark-ai/genoffice/releases/latest) (Apple Silicon и Intel) ·
[Windows](https://github.com/genspark-ai/genoffice/releases/latest) (x64 и Arm) ·
[Linux](https://github.com/genspark-ai/genoffice/releases/latest) (deb, rpm, AppImage) —
подробности и системные требования в разделе [Скачать](#download).

## Приложения

| Приложение   | Открывает и сохраняет               | Особенности                                                                                                                                                                                                                      |
| ------------ | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Docs**     | `.docx` (и `.doc` для открытия)     | Настоящая WYSIWYG-разбивка на страницы по метрикам строк Word; стили, таблицы, колонтитулы, сноски, оглавление, примечания, исправления, сравнение, формулы и рукописный ввод.                                                   |
| **Sheets**   | `.xlsx`, `.xls`, `.csv`, `.tsv`     | Собственный движок `.xlsx` на Rust в отдельном процессе; живые формулы, диаграммы, сводные таблицы, срезы, условное форматирование, проверка данных, трассировка формул и защита листов.                                         |
| **Slides**   | `.pptx` (и `.ppt` для открытия)     | Образцы и макеты слайдов, умные направляющие, неразрушающая обрезка, переходы и анимации, заметки докладчика, режим докладчика и экспорт в PDF.                                                                                  |
| **PDF**      | `.pdf`                              | Правка текста прямо на странице через PDFium, аннотации, заполнение форм, подпись, закрытие содержимого, перестановка, разделение и объединение страниц; конвертация в Word, Excel или PowerPoint на устройстве с системным OCR. |
| **Markdown** | `.md`, `.markdown`, `.txt`, `.json` | Блочный редактор поверх обычного Markdown с таблицами, списками задач, диаграммами Mermaid и формулами, побайтово точный режим исходника и экспорт в Word, PDF и изображения.                                                    |
| **HTML**     | `.html`, `.htm`                     | Живой предпросмотр с инспектором элементов, режим исходного кода на CodeMirror, полноэкранный показ и экспорт в Word, PDF или один самодостаточный HTML-файл.                                                                    |

### Docs

Docs открывает файл так, как его раскладывает Word, — многоколоночные
разделы, изображения в край страницы, таблицы с заливкой, колонтитулы,
разбивка на страницы по метрикам строк Word. Стили, примечания,
исправления, формулы и рукописные пометки проходят цикл открытия и
сохранения нетронутыми, а при сохранении переписываются только те абзацы,
которые вы изменили.

### Sheets

Вычисления выполняются в отдельном процессе движка на Rust, поэтому его сбой
никогда не роняет приложение. Формулы остаются живыми формулами, диаграммы и
сводные диаграммы — настоящими объектами в сохранённой книге, а защита,
определённые имена и условное форматирование записываются обратно в
`.xlsx`.

### Slides

Редактор в стиле PowerPoint с образцами и макетами, умными направляющими,
таблицами, диаграммами, переходами и анимациями. Нетронутые слайды при
сохранении остаются побайтово идентичными; заметки, образцы и аннотации
сохраняются, а презентации экспортируются в PDF или в PNG — по одному файлу
на слайд.

### PDF

Режим правки обводит каждый текстовый блок, чтобы его можно было
перепечатать на месте; поток содержимого переписывается через PDFium с
исходными шрифтами, а не маскируется аннотацией поверх. **PDF Converter →
PDF to Word** создаёт редактируемый `.docx`, который открывается в Docs рядом
с исходным файлом. Excel и PowerPoint работают так же, а на macOS и Windows
отсканированные страницы проходят через системный OCR. Закрытие содержимого
физически удаляет закрытый фрагмент в новой копии.

### Markdown и HTML

Markdown — блочный редактор Tiptap, который записывает результат обратно в
обычный `.md`, с побайтово точным режимом исходника для сырого текста.
Редактор HTML показывает страницу во встроенном Chromium; щёлкните любой
элемент, чтобы изменить его стиль, дважды щёлкните, чтобы отредактировать
текст, или переключитесь в режим исходного кода. **Export as Word** в любом
из двух приложений создаёт нативный редактируемый `.docx` полностью на
устройстве.

## Почему GenOffice

- **Открытый исходный код**, Apache-2.0, разрабатывается открыто на GitHub.
- **Всё под вашим контролем.** Нативные приложения для macOS, Windows и Linux; файлы
  остаются на вашем диске, а каждое редактирование, сохранение и конвертация
  происходят на вашем устройстве.
- **Настоящие файлы Office.** Нативные `.docx`, `.xlsx` и `.pptx` с побайтовым
  сохранением: нетронутые части файла копируются в точности как были.
- **PDF как надо.** Редактируйте текст прямо на странице и
  конвертируйте PDF в Word, Excel или PowerPoint на устройстве, со встроенным
  в систему OCR для сканов.
- **А также Markdown и HTML**, с локальным экспортом в Word и PDF.
- **Без учётной записи.** Не нужно регистрироваться, никаких платных лимитов
  и подписок.
- **Бесплатно**, как для отдельных пользователей, так и для команд.

Весь пакет поддерживает светлую, тёмную и системную темы. Темы меняют только
то, что видно на экране: экспорт, печать и сохранённые файлы всегда сохраняют
собственные цвета документа.

<a id="download"></a>

## Скачать

| Платформа                            | Требования                                            | Скачать                                                                                       |
| ------------------------------------ | ----------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| **macOS** — Apple Silicon (arm64)    | macOS 11+                                             | [Последний `.dmg` (arm64)](https://github.com/genspark-ai/genoffice/releases/latest)          |
| **macOS** — Intel (x64)              | macOS 11+                                             | [Последний `.dmg` (x64)](https://github.com/genspark-ai/genoffice/releases/latest)            |
| **Windows** (x64, большинство ПК)    | Windows 10+, Intel/AMD                                | [Последний установщик `-x64.exe`](https://github.com/genspark-ai/genoffice/releases/latest)   |
| **Windows** на Arm (ARM64)           | Windows 11 на Arm (Snapdragon X и аналогичные)        | [Последний установщик `-arm64.exe`](https://github.com/genspark-ai/genoffice/releases/latest) |
| **Linux** — Debian / Ubuntu          | x86_64, glibc 2.34+ (Ubuntu 22.04 или новее)          | [Последний `.deb`](https://github.com/genspark-ai/genoffice/releases/latest)                  |
| **Linux** — Fedora / RHEL / openSUSE | x86_64, glibc 2.34+ (Fedora 35+, RHEL 9+, Leap 15.6+) | [Последний `.rpm`](https://github.com/genspark-ai/genoffice/releases/latest)                  |
| **Linux** — другие дистрибутивы      | x86_64, glibc 2.34+, FUSE 2                           | [Последний `.AppImage`](https://github.com/genspark-ai/genoffice/releases/latest)             |

Все сборки собираются из ветки `main`; установщики для macOS и Windows
подписаны. Более старые версии доступны на странице
[Releases](https://github.com/genspark-ai/genoffice/releases).
Flatpak, Nix и headless-образ Docker для пакетной конвертации описаны в
[packaging/README.md](../../packaging/README.md).

<details>
<summary><b>Установка на Linux</b></summary>

Deb-пакет устанавливается через apt — он подтягивает зависимости и
добавляет GenOffice в меню приложений:

```bash
sudo apt install ./genoffice_<version>_amd64.deb
```

На Fedora / в семействе RHEL / openSUSE вместо этого установите rpm-пакет:

```bash
sudo dnf install ./genoffice-<version>.x86_64.rpm     # Fedora / RHEL family
sudo zypper install ./genoffice-<version>.x86_64.rpm  # openSUSE
```

AppImage запускается прямо на месте: установите runtime FUSE 2
(`sudo apt install libfuse2`; на Ubuntu 24.04 пакет называется
`libfuse2t64`), сделайте файл исполняемым и запустите его:

```bash
chmod +x GenOffice-<version>.AppImage
./GenOffice-<version>.AppImage
```

</details>

## Как это работает

Семь Electron-приложений — Docs, Sheets, Slides, PDF, Markdown, HTML и
общая оболочка с вкладками — используют один слой чистых TypeScript-пакетов
плюс Rust-компонент (sidecar) для `.xlsx`. Исходный файл всегда остаётся
источником истины: изменения применяются как узкие патчи, а всё, что
редактор не трогал, переживает цикл сохранения без изменений.

```
open docx ─► архивируем оригинал по хэшу (никогда не трогаем)
          ─► разбираем word/document.xml в дерево блоков, каждый блок привязан к исходному XML
          ─► редактор Tiptap (отслеживание изменённых блоков)
save      ─► изменённые блоки → фрагменты OOXML (со ссылками только на существующие стили)
          ─► вклеиваем их в исходный document.xml; нетронутые блоки сохраняют свои байты
          ─► пересобираем zip-архив; все остальные записи копируются побайтово
```

Движки находятся в `packages/` (`docx-engine`, `pptx-engine`,
`pptx-render`, `pptx-ops`, `pdf2docx`, `html2docx`, `xlsx-gateway`,
`file-parse`, `font-metrics`, `i18n`, `ui` и другие); Rust-движок `.xlsx`
лежит в `apps/sheets/native/xlsx-engine`. Обзор пакетов по отдельности — в
[CONTRIBUTING.md](../../CONTRIBUTING.md).

<a id="development"></a>

## Разработка

Требования: Node 22+, npm 10+ и инструментарий Rust (`cargo` в PATH) для
xlsx sidecar приложения Sheets.

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

Команда `npm run build -w @genoffice/sheets` собирает Rust sidecar
автоматически. Список проверок, которые должно проходить каждое изменение, и
порядок принятия pull request-ов — в [CONTRIBUTING.md](../../CONTRIBUTING.md).

## Сообщество

- **Сообщите об ошибке или предложите функцию** в
  [GitHub Issues](https://github.com/genspark-ai/genoffice/issues).
- **Поставьте звезду репозиторию**, если GenOffice вам полезен — это лучший
  способ поддержать проект.

## Часто задаваемые вопросы

<details>
<summary><b>GenOffice бесплатен?</b></summary>

Да. GenOffice бесплатен и распространяется с открытым исходным кодом по
лицензии Apache-2.0 — ни пробного периода, ни учётной записи, ни платного
тарифа.

</details>

<details>
<summary><b>Может ли GenOffice открывать файлы Microsoft Word, Excel и PowerPoint?</b></summary>

Да. GenOffice открывает и сохраняет нативные файлы `.docx`, `.xlsx` и
`.pptx`. Сохранение выполняется побайтово: части файла, которые вы не
трогали, записываются обратно байт в байт, поэтому документы продолжают
работать в Microsoft Office.

</details>

<details>
<summary><b>Работает ли GenOffice офлайн?</b></summary>

Да. Открытие, редактирование, сохранение и конвертация документов
выполняются полностью локально и не требуют подключения к сети. Сеть
используется только для проверки обновлений, необязательной загрузки шрифтов
и анонимной статистики использования, которую можно отключить в разделе
«Настройки → Общие».

</details>

<details>
<summary><b>Может ли GenOffice редактировать файлы PDF?</b></summary>

Да — это настоящее редактирование текста и изображений PDF, которое
переписывает поток содержимого страницы с сохранением исходных шрифтов, а не
накладывает маскирующие аннотации.

</details>

<details>
<summary><b>Может ли GenOffice конвертировать PDF в Word, Excel или PowerPoint?</b></summary>

Да — полностью на устройстве: посимвольное извлечение через PDFium плюс
анализ вёрстки на основе геометрии, без облачных сервисов и без загрузки
файлов куда-либо. Отсканированные страницы тоже поддерживаются: на macOS и
Windows их читает системный OCR, поэтому они конвертируются в редактируемый
текст, а не в изображение страницы.

</details>

<details>
<summary><b>Может ли GenOffice конвертировать HTML в Word?</b></summary>

Да — функция Export as Word в приложении HTML создаёт нативный редактируемый
файл `.docx` полностью на устройстве. Страница отрисовывается во встроенном
Chromium и сводится к настоящим структурам Word: заголовкам, абзацам,
спискам, таблицам, карточкам, строкам KPI, полям форм и фонам страниц; в виде
изображений встраивается только то, что не имеет аналога в Word (диаграммы,
иконки, декорированные блоки).

</details>

<details>
<summary><b>Собирает ли GenOffice какие-либо данные?</b></summary>

Официальные сборки по умолчанию отправляют ограниченную анонимную
аналитику использования, и вы можете отключить её в любой момент в разделе
«Настройки → Общие». Аналитика никогда не передаёт содержимое документов,
имена и пути файлов или адреса электронной почты. Полный перечень событий и
раскрытие данных — в [GenOffice Privacy](../../PRIVACY.md).

</details>

## Безопасность

Описание модели безопасности процессов (изоляция renderer-процесса,
проверка IPC, ограничение внешних ссылок) — в [SECURITY.md](../../SECURITY.md).

## Благодарности

GenOffice был бы невозможен без этих проектов с открытым исходным кодом:

- [Electron](https://www.electronjs.org/) — среда выполнения для каждого
  приложения.
- [Univer](https://github.com/dream-num/univer) (Apache-2.0) — основа
  интерфейса таблиц, на которой строится Sheets.
- [PDFium](https://pdfium.googlesource.com/pdfium/) (BSD-3-Clause,
  поставляется через [@embedpdf/pdfium](https://github.com/embedpdf/embed-pdf-viewer))
  — движок потока содержимого, стоящий за настоящим редактированием текста и
  изображений в PDF.
- [pdf.js](https://github.com/mozilla/pdf.js) (Apache-2.0) и
  [pdf-lib](https://github.com/Hopding/pdf-lib) (MIT) — рендеринг PDF и
  сборка документов.
- [Tiptap](https://tiptap.dev/) / [ProseMirror](https://prosemirror.net/) —
  блочные редакторы в Docs и Markdown.
- [CodeMirror](https://codemirror.net/) (MIT) — редактор исходного кода в
  HTML.
- [Konva](https://konvajs.org/) — рендеринг на канвасе для Slides и диаграмм
  Sheets.
- [HarfBuzz](https://github.com/harfbuzz/harfbuzz) (wasm) — метрики
  шейпинга текста для сложных систем письма.
- [calamine](https://github.com/tafia/calamine) и
  [IronCalc](https://github.com/ironcalc/IronCalc) — слои чтения и расчёта в
  Rust-компоненте xlsx.
- [libeot](https://github.com/umanwizard/libeot) (MPL-2.0) — декодер
  MicroType Express для встроенных шрифтов PowerPoint, портированный на
  TypeScript.
- [React](https://react.dev/) (MIT) — слой пользовательского интерфейса
  каждого приложения.
- [Mermaid](https://mermaid.js.org/) (MIT) и [KaTeX](https://katex.org/)
  (MIT) — диаграммы и математические формулы в Markdown и Docs.
- [opentype.js](https://opentype.js.org/) (MIT) — разбор шрифтов для
  метрик и поиска глифов.
- [JSZip](https://stuk.github.io/jszip/) (MIT) и
  [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser)
  (MIT) — слои контейнера OOXML и XML.
- [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons)
  (MIT) — набор значков в лентах команд.
- [electron-updater](https://www.electron.build/) (MIT) — обновления
  внутри приложения.
- Шрифты Liberation, Carlito, Caladea и Noto CJK (OFL/Apache-2.0) —
  встроенные шрифты документов.

Команда `npm run notices` пересобирает сводку сторонних лицензий,
поставляемых с приложением (`tools/gen-third-party-notices.mjs`); все
рантайм-зависимости распространяются по лицензиям
MIT/Apache-2.0/BSD-3-Clause/OFL.

## Лицензия

GenOffice распространяется по лицензии [Apache License 2.0](../../LICENSE),
с одним исключением: каталог `ee/` зарезервирован для будущих корпоративных
модулей и покрывается [GenOffice Enterprise License](../../ee/LICENSE).

Названия и логотипы GenOffice и Genspark являются товарными знаками Mainfunc,
Inc. Лицензия Apache-2.0 не даёт права использовать их (см. раздел 6);
форки должны использовать собственный брендинг.
