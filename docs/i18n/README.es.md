<h1 align="center">GenOffice</h1>

<p align="center"><b>Una suite ofimática gratuita y de código abierto que se ejecuta íntegramente en tu equipo.</b><br>
Archivos Word, Excel, PowerPoint, PDF, Markdown y HTML, abiertos, editados y guardados de nuevo en sus formatos reales.</p>

<p align="center">
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/genspark-ai/genoffice" alt="Licencia: Apache-2.0"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases/latest"><img src="https://img.shields.io/github/v/release/genspark-ai/genoffice" alt="Última versión"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases"><img src="https://img.shields.io/github/downloads/genspark-ai/genoffice/total" alt="Descargas"></a>
  <a href="https://github.com/genspark-ai/genoffice/stargazers"><img src="https://img.shields.io/github/stars/genspark-ai/genoffice?style=flat" alt="Estrellas de GitHub"></a>
</p>

<p align="center"><a href="../../README.md">English</a> · <b>Español</b> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.zh-TW.md">繁體中文</a> · <a href="README.ko.md">한국어</a> · <a href="README.ja.md">日本語</a> · <a href="README.ar.md">العربية</a> · <a href="README.ru.md">Русский</a> · <a href="README.it.md">Italiano</a> · <a href="README.nl.md">Nederlands</a> · <a href="README.pl.md">Polski</a> · <a href="README.cs.md">Čeština</a> · <a href="README.id.md">Bahasa Indonesia</a> · <a href="README.ms.md">Bahasa Melayu</a> · <a href="README.th.md">ไทย</a> · <a href="README.hi.md">हिन्दी</a> · <a href="README.he.md">עברית</a> · <a href="README.vi.md">Tiếng Việt</a></p>

<p align="center">
  <a href="#download"><b>Descargar</b></a> ·
  <a href="#development"><b>Desarrollo</b></a> ·
  <a href="../../PRIVACY.md"><b>Privacidad</b></a>
</p>

GenOffice es una alternativa gratuita y de código abierto a Microsoft Office
para macOS, Windows y Linux. Abre y guarda archivos nativos `.docx`, `.xlsx`
y `.pptx` y edita PDF, Markdown y HTML, todo en una sola ventana con
pestañas. No hay que crear ninguna cuenta ni iniciar sesión en nada: los
archivos se abren, editan, guardan y convierten en tu propio equipo.

- **Formatos reales, con preservación de bytes.** Solo se reescribe lo que
  editas. Todo lo demás en el archivo se conserva byte por byte, así que los
  documentos siguen funcionando en Word, Excel y PowerPoint.
- **Local por diseño.** Sin nube, sin subidas. PDF → Word / Excel /
  PowerPoint, Markdown → Word y HTML → Word se ejecutan todos en el
  dispositivo.
- **Seis editores, una ventana.** Docs, Sheets, Slides, PDF, Markdown y HTML
  comparten una misma barra de pestañas, una misma pantalla de Inicio y un
  mismo conjunto de ajustes.
- **Encuentra archivos por lo que dicen.** La pantalla de Inicio busca en los
  nombres, las carpetas y el texto completo de tus archivos `.docx`, `.xlsx`,
  `.pptx`, PDF, Markdown y HTML a partir de un índice local, CJK incluido.
- **21 idiomas de interfaz**, temas claro, oscuro y del sistema, y una guía
  del usuario integrada (F1) en todos los idiomas.

**Consíguelo:** [macOS](https://github.com/genspark-ai/genoffice/releases/latest) (Apple Silicon e Intel) ·
[Windows](https://github.com/genspark-ai/genoffice/releases/latest) (x64 y Arm) ·
[Linux](https://github.com/genspark-ai/genoffice/releases/latest) (deb, rpm, AppImage) —
detalles y requisitos en [Descargar](#download).

## Las apps

| App          | Abre y guarda                           | Lo más destacado                                                                                                                                                                                                  |
| ------------ | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Docs**     | `.docx` (y `.doc` para abrir)           | Paginación WYSIWYG real basada en las métricas de línea de Word; estilos, tablas, encabezados y pies de página, notas al pie, tabla de contenido, comentarios, control de cambios, comparación, ecuaciones y entrada manuscrita. |
| **Sheets**   | `.xlsx`, `.xls`, `.csv`, `.tsv`         | Un motor `.xlsx` propio en Rust en su propio proceso; fórmulas en vivo, gráficos, tablas dinámicas, segmentaciones, formato condicional, validación de datos, rastreo de fórmulas y protección de hojas.          |
| **Slides**   | `.pptx` (y `.ppt` para abrir)           | Patrones y diseños, guías inteligentes, recorte no destructivo, transiciones y animaciones, notas del orador, Vista Moderador y exportación a PDF.                                                                 |
| **PDF**      | `.pdf`                                  | Edita el texto dentro de la página mediante PDFium, anota, rellena formularios, firma, censura, reordena, divide y combina páginas; convierte a Word, Excel o PowerPoint en el dispositivo con el OCR del sistema. |
| **Markdown** | `.md`, `.markdown`, `.txt`, `.json`     | Un editor de bloques sobre Markdown plano con tablas, listas de tareas, diagramas Mermaid y matemáticas, una vista de código fuente fiel a los bytes y exportación a Word, PDF e imágenes.                         |
| **HTML**     | `.html`, `.htm`                         | Una vista previa en vivo con inspector de elementos, una vista de código fuente CodeMirror, presentación a pantalla completa y exportación a Word, PDF o un único archivo HTML autocontenido.                      |

### Docs

Docs abre un archivo tal como Word lo maqueta: secciones de varias columnas,
imágenes a sangre, tablas sombreadas, encabezados y pies de página,
paginación basada en las métricas de línea de Word. Los estilos, los
comentarios, el control de cambios, las ecuaciones y la entrada manuscrita
hacen el ida y vuelta intactos, y al guardar solo se reescriben los párrafos
que has cambiado.

### Sheets

El cálculo se ejecuta en un proceso de motor en Rust aparte, así que un
fallo ahí nunca tumba la app. Las fórmulas siguen siendo fórmulas en vivo,
los gráficos y gráficos dinámicos son objetos reales en el libro guardado, y
la protección, los nombres definidos y los formatos condicionales se
escriben de vuelta en el `.xlsx`.

### Slides

Un editor al estilo de PowerPoint con patrones y diseños, guías
inteligentes, tablas, gráficos, transiciones y animaciones. Las diapositivas
que no se tocan quedan idénticas byte a byte al guardar; las notas, los
patrones y las anotaciones se conservan, y las presentaciones se exportan a
PDF o a un PNG por diapositiva.

### PDF

El modo de edición resalta cada bloque de texto para volver a escribirlo en
el sitio; el flujo de contenido se reescribe mediante PDFium con las fuentes
originales, no con una anotación que lo tapa. **Convertidor de PDF → PDF a
Word** produce un `.docx` editable que se abre en Docs junto al original.
Los destinos Excel y PowerPoint funcionan igual, y en macOS y Windows las
páginas escaneadas pasan por el OCR del sistema. La censura elimina
físicamente el contenido cubierto en una copia nueva.

### Markdown y HTML

Markdown es un editor de bloques Tiptap que se guarda como `.md` plano, con
una vista de código fuente fiel a los bytes para el texto sin formato. El
editor HTML muestra la página en el Chromium integrado; haz clic en
cualquier elemento para cambiar su estilo, doble clic para editar su texto,
o cambia a la vista de código fuente. **Exportar como Word**, en cualquiera
de las dos apps, produce un `.docx` nativo y editable íntegramente en el
dispositivo.

## Por qué GenOffice

- **Código abierto**, Apache-2.0, desarrollado abiertamente en GitHub.
- **Se ejecuta en tu equipo.** Apps nativas para macOS, Windows y Linux; los
  archivos se quedan en tu disco y cada edición, guardado y conversión ocurre
  en tu máquina.
- **Archivos Office reales.** `.docx`, `.xlsx` y `.pptx` nativos, con
  preservación de bytes: las partes del archivo que no tocas se copian
  exactamente igual.
- **PDF hecho como debe ser.** Edita el texto directamente en la página y
  convierte PDF a Word, Excel o PowerPoint en el dispositivo, con OCR del
  sistema para escaneos.
- **También Markdown y HTML**, con exportación local a Word y PDF.
- **Sin cuenta.** Nada a lo que suscribirse, sin créditos, sin suscripción.
- **Gratis**, tanto para personas individuales como para equipos.

Toda la suite incluye temas claro, oscuro y del sistema. Los temas solo
cambian lo que se ve en pantalla: las exportaciones, las impresiones y los
archivos guardados siempre conservan los colores propios del documento.

<a id="download"></a>

## Descargar

| Plataforma                              | Requisitos                                            | Descarga                                                                                         |
| --------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **macOS** — Apple Silicon (arm64)       | macOS 11+                                             | [Última versión `.dmg` (arm64)](https://github.com/genspark-ai/genoffice/releases/latest)        |
| **macOS** — Intel (x64)                 | macOS 11+                                             | [Última versión `.dmg` (x64)](https://github.com/genspark-ai/genoffice/releases/latest)          |
| **Windows** (x64, la mayoría de los PC) | Windows 10+, Intel/AMD                                | [Instalador `-x64.exe` más reciente](https://github.com/genspark-ai/genoffice/releases/latest)   |
| **Windows** en Arm (ARM64)              | Windows 11 en Arm (Snapdragon X y similares)          | [Instalador `-arm64.exe` más reciente](https://github.com/genspark-ai/genoffice/releases/latest) |
| **Linux** — Debian / Ubuntu             | x86_64, glibc 2.34+ (Ubuntu 22.04 o posterior)        | [Última versión `.deb`](https://github.com/genspark-ai/genoffice/releases/latest)                |
| **Linux** — Fedora / RHEL / openSUSE    | x86_64, glibc 2.34+ (Fedora 35+, RHEL 9+, Leap 15.6+) | [Última versión `.rpm`](https://github.com/genspark-ai/genoffice/releases/latest)                |
| **Linux** — otras distribuciones        | x86_64, glibc 2.34+, FUSE 2                           | [Última versión `.AppImage`](https://github.com/genspark-ai/genoffice/releases/latest)           |

Todas las compilaciones provienen de `main`; los instaladores de macOS y
Windows están firmados. Las versiones anteriores están en la página de
[Releases](https://github.com/genspark-ai/genoffice/releases). Flatpak, Nix y
una imagen Docker de conversión por lotes sin interfaz se describen en
[packaging/README.md](../../packaging/README.md).

<details>
<summary><b>Instalación en Linux</b></summary>

El paquete deb se instala con apt: descarga las dependencias y añade
GenOffice al menú de aplicaciones:

```bash
sudo apt install ./genoffice_<version>_amd64.deb
```

En Fedora, la familia RHEL u openSUSE, instala el rpm en su lugar:

```bash
sudo dnf install ./genoffice-<version>.x86_64.rpm     # Fedora / RHEL family
sudo zypper install ./genoffice-<version>.x86_64.rpm  # openSUSE
```

El AppImage se ejecuta directamente: instala el runtime de FUSE 2
(`sudo apt install libfuse2`; en Ubuntu 24.04 el paquete es `libfuse2t64`),
haz que el archivo sea ejecutable y luego ejecútalo:

```bash
chmod +x GenOffice-<version>.AppImage
./GenOffice-<version>.AppImage
```

</details>

## Cómo funciona

Siete apps de Electron — Docs, Sheets, Slides, PDF, Markdown, HTML y el
shell con pestañas — comparten una única capa de motor formada por paquetes
puros de TypeScript, más un sidecar en Rust para `.xlsx`. El archivo original
siempre es la fuente de verdad: los cambios se aplican como parches
acotados, y todo lo que el editor no tocó sobrevive intacto el ida y vuelta.

```
open docx ─► archive original by hash (never touched)
          ─► parse word/document.xml into a block tree, each block anchored to its original XML
          ─► Tiptap editor (dirty tracking per block)
save      ─► dirty blocks → OOXML fragments (referencing existing styles only)
          ─► splice into the original document.xml; untouched blocks keep their bytes
          ─► repack the zip; every other entry is copied byte-for-byte
```

Los motores están en `packages/` (`docx-engine`, `pptx-engine`,
`pptx-render`, `pptx-ops`, `pdf2docx`, `html2docx`, `xlsx-gateway`,
`file-parse`, `font-metrics`, `i18n`, `ui` y más); el motor `.xlsx` en Rust
está en `apps/sheets/native/xlsx-engine`.
[CONTRIBUTING.md](../../CONTRIBUTING.md) tiene el recorrido paquete por
paquete.

<a id="development"></a>

## Desarrollo

Requisitos previos: Node 22+, npm 10+ y un toolchain de Rust (`cargo` en el
PATH) para el sidecar `.xlsx` de Sheets.

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

`npm run build -w @genoffice/sheets` compila el sidecar de Rust
automáticamente. Consulta [CONTRIBUTING.md](../../CONTRIBUTING.md) para ver
las comprobaciones que debe pasar cada cambio y cómo se integran las pull
requests.

## Comunidad

- **Reporta un error o solicita una función** en
  [GitHub Issues](https://github.com/genspark-ai/genoffice/issues).
- **Dale una estrella al repositorio** si GenOffice te resulta útil: es la
  mejor forma de apoyar el proyecto.

## Preguntas frecuentes

<details>
<summary><b>¿Es GenOffice gratuito?</b></summary>

Sí. GenOffice es gratuito y de código abierto bajo la licencia Apache-2.0:
sin prueba gratuita, sin cuenta y sin nivel de pago.

</details>

<details>
<summary><b>¿Puede GenOffice abrir archivos de Microsoft Word, Excel y PowerPoint?</b></summary>

Sí. GenOffice abre y guarda archivos nativos `.docx`, `.xlsx` y `.pptx`. Al
guardar se preservan los bytes: las partes del archivo que no tocaste se
escriben de nuevo byte por byte, así que los documentos siguen funcionando
en Microsoft Office.

</details>

<details>
<summary><b>¿Funciona GenOffice sin conexión?</b></summary>

Sí. Abrir, editar, guardar y convertir documentos es completamente local y
no necesita conexión a la red. La red solo se usa para comprobar
actualizaciones, para las descargas opcionales de fuentes y para las
estadísticas de uso anónimas, que puedes desactivar en Settings → General.

</details>

<details>
<summary><b>¿Puede GenOffice editar archivos PDF?</b></summary>

Sí: una edición real de texto e imágenes en PDF que reescribe el flujo de
contenido de la página conservando las fuentes originales, sin recurrir a
anotaciones que tapan el contenido.

</details>

<details>
<summary><b>¿Puede GenOffice convertir PDF a Word, Excel o PowerPoint?</b></summary>

Sí, íntegramente en el dispositivo: extracción a nivel de carácter con
PDFium más análisis de diseño basado en geometría, sin servicios en la nube
ni subidas. Las páginas escaneadas también quedan cubiertas: en macOS y
Windows el OCR del sistema las lee, así que se convierten en texto editable
en lugar de una imagen de página.

</details>

<details>
<summary><b>¿Puede GenOffice convertir HTML a Word?</b></summary>

Sí: Export as Word en la app de HTML produce un `.docx` nativo y editable,
íntegramente en el dispositivo. La página se renderiza en el Chromium
integrado y se reduce a estructuras reales de Word: encabezados, párrafos,
listas, tablas, tarjetas, filas de KPI, campos de formulario y fondos de
página; solo los elementos visuales sin equivalente en Word (gráficos,
iconos, cajas decoradas) se incrustan como imágenes.

</details>

<details>
<summary><b>¿GenOffice recopila algún dato?</b></summary>

Las compilaciones oficiales empaquetadas envían por defecto un análisis de
uso anónimo y limitado, y puedes desactivar este reporte en cualquier
momento en Settings → General. El análisis nunca envía el contenido de los
documentos, nombres de archivo, rutas de archivo ni direcciones de correo
electrónico. Consulta [GenOffice Privacy](../../PRIVACY.md) para ver la
lista completa de eventos y datos.

</details>

## Seguridad

Consulta [SECURITY.md](../../SECURITY.md) para conocer la postura de
seguridad del proceso (sandboxing del renderer, validación de IPC, control
de enlaces externos).

## Agradecimientos

GenOffice no sería posible sin estos proyectos de código abierto:

- [Electron](https://www.electronjs.org/): el runtime de escritorio de
  todas las apps.
- [Univer](https://github.com/dream-num/univer) (Apache-2.0): el núcleo de
  interfaz de hoja de cálculo que Sheets extiende.
- [PDFium](https://pdfium.googlesource.com/pdfium/) (BSD-3-Clause, incluido
  mediante [@embedpdf/pdfium](https://github.com/embedpdf/embed-pdf-viewer)):
  el motor de flujo de contenido detrás de la edición real de texto e
  imágenes en PDF.
- [pdf.js](https://github.com/mozilla/pdf.js) (Apache-2.0) y
  [pdf-lib](https://github.com/Hopding/pdf-lib) (MIT): renderizado de PDF y
  ensamblaje de documentos.
- [Tiptap](https://tiptap.dev/) / [ProseMirror](https://prosemirror.net/):
  los editores de bloques de Docs y Markdown.
- [CodeMirror](https://codemirror.net/) (MIT): el editor de código fuente en
  HTML.
- [Konva](https://konvajs.org/): renderizado en canvas para Slides y los
  gráficos de Sheets.
- [HarfBuzz](https://github.com/harfbuzz/harfbuzz) (wasm): métricas de
  composición de texto (text-shaping) para escrituras complejas.
- [calamine](https://github.com/tafia/calamine) e
  [IronCalc](https://github.com/ironcalc/IronCalc): las capas de lectura y
  cálculo del sidecar de xlsx en Rust.
- [libeot](https://github.com/umanwizard/libeot) (MPL-2.0): el decodificador
  MicroType Express para las fuentes de PowerPoint incrustadas, portado a
  TypeScript.
- [React](https://react.dev/) (MIT): la capa de interfaz de usuario de cada
  app.
- [Mermaid](https://mermaid.js.org/) (MIT) y [KaTeX](https://katex.org/)
  (MIT): diagramas y matemáticas en Markdown y Docs.
- [opentype.js](https://opentype.js.org/) (MIT): análisis de fuentes para
  métricas y búsqueda de glifos.
- [JSZip](https://stuk.github.io/jszip/) (MIT) y
  [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser)
  (MIT): las capas de contenedor OOXML y XML.
- [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons)
  (MIT): el conjunto de iconos de las cintas de opciones.
- [electron-updater](https://www.electron.build/) (MIT): las actualizaciones
  dentro de la app.
- Las fuentes Liberation, Carlito, Caladea y Noto CJK (OFL/Apache-2.0): las
  fuentes de documento incluidas.

`npm run notices` regenera el resumen de licencias de terceros incluido
(`tools/gen-third-party-notices.mjs`); todas las dependencias en tiempo de
ejecución son MIT/Apache-2.0/BSD-3-Clause/OFL.

## Licencia

GenOffice tiene licencia [Apache License 2.0](../../LICENSE), con una
excepción: el directorio `ee/` está reservado para futuros módulos
empresariales y está cubierto por la
[GenOffice Enterprise License](../../ee/LICENSE).

Los nombres y logotipos de GenOffice y Genspark son marcas registradas de
Mainfunc, Inc. La licencia Apache-2.0 no otorga permiso para usarlos
(consulta la sección 6); los forks deben usar su propia identidad de marca.
