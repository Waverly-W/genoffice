<h1 align="center">GenOffice</h1>

<p align="center"><b>Uma suíte de escritório gratuita e de código aberto que roda inteiramente na sua máquina.</b><br>
Arquivos do Word, Excel, PowerPoint, PDF, Markdown e HTML, abertos, editados e salvos de volta nos formatos reais.</p>

<p align="center">
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/genspark-ai/genoffice" alt="Licença: Apache-2.0"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases/latest"><img src="https://img.shields.io/github/v/release/genspark-ai/genoffice" alt="Versão mais recente"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases"><img src="https://img.shields.io/github/downloads/genspark-ai/genoffice/total" alt="Downloads"></a>
  <a href="https://github.com/genspark-ai/genoffice/stargazers"><img src="https://img.shields.io/github/stars/genspark-ai/genoffice?style=flat" alt="Estrelas no GitHub"></a>
</p>

<p align="center"><a href="../../README.md">English</a> · <a href="README.es.md">Español</a> · <b>Português (Brasil)</b> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.zh-TW.md">繁體中文</a> · <a href="README.ko.md">한국어</a> · <a href="README.ja.md">日本語</a> · <a href="README.ar.md">العربية</a> · <a href="README.ru.md">Русский</a> · <a href="README.it.md">Italiano</a> · <a href="README.nl.md">Nederlands</a> · <a href="README.pl.md">Polski</a> · <a href="README.cs.md">Čeština</a> · <a href="README.id.md">Bahasa Indonesia</a> · <a href="README.ms.md">Bahasa Melayu</a> · <a href="README.th.md">ไทย</a> · <a href="README.hi.md">हिन्दी</a> · <a href="README.he.md">עברית</a> · <a href="README.vi.md">Tiếng Việt</a></p>

<p align="center">
  <a href="#download"><b>Download</b></a> ·
  <a href="#development"><b>Desenvolvimento</b></a> ·
  <a href="../../PRIVACY.md"><b>Privacidade</b></a>
</p>

O GenOffice é uma alternativa gratuita e de código aberto ao Microsoft Office
para macOS, Windows e Linux. Ele abre e salva arquivos nativos `.docx`,
`.xlsx` e `.pptx` e edita PDF, Markdown e HTML, tudo em uma única janela com
abas. Não há conta para criar nem login para fazer: os arquivos são abertos,
editados, salvos e convertidos no seu próprio computador.

- **Formatos reais, preservando cada byte.** Só o que você edita é reescrito.
  Todo o restante do arquivo permanece intacto byte a byte, então os
  documentos continuam funcionando no Word, no Excel e no PowerPoint.
- **Local por design.** Sem nuvem, sem upload. PDF → Word / Excel /
  PowerPoint, Markdown → Word e HTML → Word rodam todos no dispositivo.
- **Seis editores, uma janela.** Docs, Sheets, Slides, PDF, Markdown e HTML
  compartilham uma faixa de abas, uma tela inicial e um conjunto de
  configurações.
- **Encontre arquivos pelo que eles dizem.** A tela inicial pesquisa os nomes,
  as pastas e o texto completo dos seus arquivos `.docx`, `.xlsx`, `.pptx`,
  PDF, Markdown e HTML a partir de um índice local, incluindo CJK.
- **21 idiomas de interface**, temas claro, escuro e do sistema, e um guia do
  usuário integrado (F1) em todos os idiomas.

**Baixe:** [macOS](https://github.com/genspark-ai/genoffice/releases/latest) (Apple Silicon e Intel) ·
[Windows](https://github.com/genspark-ai/genoffice/releases/latest) (x64 e Arm) ·
[Linux](https://github.com/genspark-ai/genoffice/releases/latest) (deb, rpm, AppImage) —
detalhes e requisitos em [Download](#download).

## Os aplicativos

| Aplicativo   | Abre e salva                        | Destaques                                                                                                                                                                                                                            |
| ------------ | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Docs**     | `.docx` (e `.doc` para abrir)       | Paginação WYSIWYG fiel, com as métricas de linha do Word; estilos, tabelas, cabeçalhos e rodapés, notas de rodapé, sumário, comentários, alterações rastreadas, comparação, equações e tinta digital.                                |
| **Sheets**   | `.xlsx`, `.xls`, `.csv`, `.tsv`     | Um mecanismo `.xlsx` próprio em Rust, em um processo separado; fórmulas ao vivo, gráficos, tabelas dinâmicas, segmentações de dados, formatação condicional, validação de dados, rastreamento de fórmulas e proteção de planilha.    |
| **Slides**   | `.pptx` (e `.ppt` para abrir)       | Slides mestres e layouts, guias inteligentes, recorte não destrutivo, transições e animações, anotações do orador, modo de apresentador e exportação para PDF.                                                                       |
| **PDF**      | `.pdf`                              | Edite o texto dentro da página via PDFium, faça anotações, preencha formulários, assine, oculte conteúdo com tarjas, reordene, divida e mescle páginas; converta para Word, Excel ou PowerPoint no dispositivo com o OCR do sistema. |
| **Markdown** | `.md`, `.markdown`, `.txt`, `.json` | Um editor em blocos sobre Markdown puro, com tabelas, listas de tarefas, diagramas Mermaid e fórmulas matemáticas, uma visualização de código fiel byte a byte e exportação para Word, PDF e imagens.                                |
| **HTML**     | `.html`, `.htm`                     | Uma prévia em tempo real com inspetor de elementos, uma visualização de código no CodeMirror, apresentação em tela cheia e exportação para Word, PDF ou um único arquivo HTML autocontido.                                           |

### Docs

O Docs abre um arquivo como o Word o organiza — seções em várias colunas,
imagens de sangria total, tabelas sombreadas, cabeçalhos e rodapés,
paginação seguindo as métricas de linha do Word. Estilos, comentários,
alterações rastreadas, equações e tinta digital vão e voltam intactos, e
salvar reescreve apenas os parágrafos que você alterou.

### Sheets

O cálculo roda em um processo separado, com um mecanismo em Rust, então uma
falha ali nunca derruba o aplicativo. As fórmulas continuam sendo fórmulas ao
vivo, gráficos e gráficos dinâmicos são objetos reais na pasta de trabalho
salva, e a proteção, os nomes definidos e os formatos condicionais são
gravados de volta no `.xlsx`.

### Slides

Um editor no estilo do PowerPoint com slides mestres e layouts, guias
inteligentes, tabelas, gráficos, transições e animações. Os slides que você
não tocou continuam idênticos byte a byte ao salvar; anotações do orador,
mestres e marcações são preservados, e as apresentações podem ser exportadas
para PDF ou como um PNG por slide.

### PDF

O modo de edição contorna cada bloco de texto para redigitação no lugar; o
content stream é reescrito via PDFium com as fontes originais, não uma
anotação de encobrimento. **Conversor de PDF → PDF para Word** produz um
`.docx` editável que abre no Docs ao lado do original. Os destinos Excel e
PowerPoint funcionam da mesma forma, e no macOS e no Windows as páginas
escaneadas passam pelo OCR do sistema. A ocultação com tarjas remove
fisicamente o conteúdo coberto em uma nova cópia.

### Markdown e HTML

O Markdown é um editor em blocos Tiptap gravado de volta como `.md` puro,
com uma visualização de código fiel byte a byte para o texto bruto. O editor
HTML mostra a prévia da página no Chromium integrado; clique em qualquer
elemento para restilizá-lo, dê duplo clique para editar o texto, ou alterne
para a visualização de código. **Exportar como Word**, em qualquer um dos
dois aplicativos, produz um `.docx` nativo e editável, totalmente no
dispositivo.

## Por que o GenOffice

- **Código aberto**, Apache-2.0, desenvolvido abertamente no GitHub.
- **Seu para executar.** Apps nativos para macOS, Windows e Linux; os arquivos
  ficam no seu disco e cada edição, salvamento e conversão acontece na sua
  máquina.
- **Arquivos reais do Office.** `.docx`, `.xlsx` e `.pptx` nativos, preservando
  cada byte: as partes de um arquivo que você não tocou são copiadas
  exatamente como estavam.
- **PDF feito como deve ser.** Edite o texto dentro da página e converta PDF
  para Word, Excel ou PowerPoint no dispositivo, com OCR do sistema para
  digitalizações.
- **Markdown e HTML também**, com exportação local para Word e PDF.
- **Sem conta.** Nenhum cadastro, sem créditos, sem assinatura.
- **Gratuito**, para indivíduos e equipes.

A suíte completa vem com temas claro, escuro e do sistema. Os temas só
mudam o que aparece na tela: exportações, impressões e arquivos salvos
sempre mantêm as cores originais do documento.

<a id="download"></a>

## Download

| Plataforma                           | Requisitos                                            | Download                                                                                         |
| ------------------------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **macOS** — Apple Silicon (arm64)    | macOS 11+                                             | [`.dmg` mais recente (arm64)](https://github.com/genspark-ai/genoffice/releases/latest)          |
| **macOS** — Intel (x64)              | macOS 11+                                             | [`.dmg` mais recente (x64)](https://github.com/genspark-ai/genoffice/releases/latest)            |
| **Windows** (x64, maioria dos PCs)   | Windows 10+, Intel/AMD                                | [Instalador `-x64.exe` mais recente](https://github.com/genspark-ai/genoffice/releases/latest)   |
| **Windows** no Arm (ARM64)           | Windows 11 no Arm (Snapdragon X e similares)          | [Instalador `-arm64.exe` mais recente](https://github.com/genspark-ai/genoffice/releases/latest) |
| **Linux** — Debian / Ubuntu          | x86_64, glibc 2.34+ (Ubuntu 22.04 ou mais recente)    | [`.deb` mais recente](https://github.com/genspark-ai/genoffice/releases/latest)                  |
| **Linux** — Fedora / RHEL / openSUSE | x86_64, glibc 2.34+ (Fedora 35+, RHEL 9+, Leap 15.6+) | [`.rpm` mais recente](https://github.com/genspark-ai/genoffice/releases/latest)                  |
| **Linux** — outras distribuições     | x86_64, glibc 2.34+, FUSE 2                           | [`.AppImage` mais recente](https://github.com/genspark-ai/genoffice/releases/latest)             |

Todas as builds vêm da `main`; os instaladores de macOS e Windows são
assinados. Versões mais antigas estão na página de
[Releases](https://github.com/genspark-ai/genoffice/releases).
Flatpak, Nix e uma imagem Docker sem interface para conversão em lote estão
descritos em [packaging/README.md](../../packaging/README.md).

<details>
<summary><b>Instalando no Linux</b></summary>

O deb instala com o apt — ele traz as dependências e adiciona o GenOffice
ao menu de aplicativos:

```bash
sudo apt install ./genoffice_<version>_amd64.deb
```

No Fedora / família RHEL / openSUSE, instale o rpm em vez disso:

```bash
sudo dnf install ./genoffice-<version>.x86_64.rpm     # Fedora / RHEL family
sudo zypper install ./genoffice-<version>.x86_64.rpm  # openSUSE
```

O AppImage roda no lugar: instale o runtime FUSE 2
(`sudo apt install libfuse2`; no Ubuntu 24.04 o pacote é `libfuse2t64`),
torne o arquivo executável e então execute-o:

```bash
chmod +x GenOffice-<version>.AppImage
./GenOffice-<version>.AppImage
```

</details>

## Como funciona

Sete aplicativos Electron — Docs, Sheets, Slides, PDF, Markdown, HTML e o
shell com abas — compartilham uma camada de mecanismo de pacotes TypeScript
puro, além de um sidecar em Rust para `.xlsx`. O arquivo original é sempre a
fonte da verdade: as edições são aplicadas como patches estreitos, e tudo o
que o editor não tocou sobrevive intacto à ida e volta.

```
open docx ─► archive original by hash (never touched)
          ─► parse word/document.xml into a block tree, each block anchored to its original XML
          ─► Tiptap editor (dirty tracking per block)
save      ─► dirty blocks → OOXML fragments (referencing existing styles only)
          ─► splice into the original document.xml; untouched blocks keep their bytes
          ─► repack the zip; every other entry is copied byte-for-byte
```

Os mecanismos ficam em `packages/` (`docx-engine`, `pptx-engine`,
`pptx-render`, `pptx-ops`, `pdf2docx`, `html2docx`, `xlsx-gateway`,
`file-parse`, `font-metrics`, `i18n`, `ui` e outros); o mecanismo `.xlsx` em
Rust fica em `apps/sheets/native/xlsx-engine`. O tour pacote a pacote está
em [CONTRIBUTING.md](../../CONTRIBUTING.md).

<a id="development"></a>

## Desenvolvimento

Pré-requisitos: Node 22+, npm 10+ e um toolchain Rust (`cargo` no PATH) para
o sidecar `.xlsx` do Sheets.

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

`npm run build -w @genoffice/sheets` compila o sidecar em Rust
automaticamente. Veja [CONTRIBUTING.md](../../CONTRIBUTING.md) para as
verificações que toda alteração precisa passar e como os pull requests são
integrados.

## Comunidade

- **Relate um bug ou peça um recurso** em
  [GitHub Issues](https://github.com/genspark-ai/genoffice/issues).
- **Dê uma estrela no repositório** se o GenOffice for útil para você — é a
  melhor forma de apoiar o projeto.

## Perguntas frequentes

<details>
<summary><b>O GenOffice é gratuito?</b></summary>

Sim. O GenOffice é gratuito e de código aberto sob a licença Apache-2.0 —
sem período de teste, sem conta e sem plano pago.

</details>

<details>
<summary><b>O GenOffice pode abrir arquivos do Microsoft Word, Excel e PowerPoint?</b></summary>

Sim. O GenOffice abre e salva arquivos nativos `.docx`, `.xlsx` e `.pptx`.
O salvamento preserva cada byte: as partes do arquivo que você não tocou são
gravadas de volta byte a byte, então os documentos continuam funcionando no
Microsoft Office.

</details>

<details>
<summary><b>O GenOffice funciona offline?</b></summary>

Sim. Abrir, editar, salvar e converter documentos é algo totalmente local e
não precisa de conexão de rede. A rede só é usada para verificar
atualizações, para downloads opcionais de fontes e para as estatísticas de
uso anônimas, que você pode desativar em Configurações → Geral.

</details>

<details>
<summary><b>O GenOffice pode editar arquivos PDF?</b></summary>

Sim — edição real de texto e imagem em PDF, que reescreve o content stream
da página preservando as fontes originais, em vez de anotações de
encobrimento.

</details>

<details>
<summary><b>O GenOffice pode converter PDF para Word, Excel ou PowerPoint?</b></summary>

Sim — totalmente no dispositivo: extração de caracteres via PDFium mais
análise de layout baseada em geometria, sem serviço na nuvem, sem upload.
Páginas escaneadas também são cobertas: no macOS e no Windows o OCR do
sistema as lê, então elas são convertidas em texto editável em vez de uma
imagem da página.

</details>

<details>
<summary><b>O GenOffice pode converter HTML para Word?</b></summary>

Sim — Exportar como Word no aplicativo HTML produz um `.docx` nativo e
editável, totalmente no dispositivo. A página é renderizada no Chromium
integrado e reduzida a estruturas reais do Word: títulos, parágrafos,
listas, tabelas, cartões, linhas de KPIs, campos de formulário e fundos de
página; apenas elementos visuais sem equivalente no Word (gráficos, ícones,
caixas decoradas) são incorporados como imagens.

</details>

<details>
<summary><b>O GenOffice coleta algum dado?</b></summary>

As builds empacotadas oficiais enviam análises de uso anônimas e limitadas
por padrão, e você pode desativar esse envio a qualquer momento em
Configurações → Geral. As análises nunca enviam conteúdo de documentos,
nomes de arquivos, caminhos de arquivos ou endereços de e-mail. Veja
[GenOffice Privacy](../../PRIVACY.md) para a lista completa de eventos e
divulgações de dados.

</details>

## Segurança

Veja [SECURITY.md](../../SECURITY.md) para a postura de segurança do
processo (sandboxing do renderer, validação de IPC, controle de links
externos).

## Agradecimentos

O GenOffice não seria possível sem estes projetos de código aberto:

- [Electron](https://www.electronjs.org/) — o runtime de desktop de todos os aplicativos.
- [Univer](https://github.com/dream-num/univer) (Apache-2.0) — o núcleo de
  interface de planilhas que o Sheets estende.
- [PDFium](https://pdfium.googlesource.com/pdfium/) (BSD-3-Clause,
  empacotado via [@embedpdf/pdfium](https://github.com/embedpdf/embed-pdf-viewer))
  — o mecanismo de content stream por trás da edição real de texto e imagem
  em PDF.
- [pdf.js](https://github.com/mozilla/pdf.js) (Apache-2.0) e
  [pdf-lib](https://github.com/Hopding/pdf-lib) (MIT) — renderização de PDF
  e montagem de documentos.
- [Tiptap](https://tiptap.dev/) / [ProseMirror](https://prosemirror.net/) —
  os editores em blocos do Docs e do Markdown.
- [CodeMirror](https://codemirror.net/) (MIT) — o editor de código-fonte do HTML.
- [Konva](https://konvajs.org/) — renderização em canvas para os gráficos do
  Slides e do Sheets.
- [HarfBuzz](https://github.com/harfbuzz/harfbuzz) (wasm) — métricas de
  text-shaping para escritas complexas.
- [calamine](https://github.com/tafia/calamine) e
  [IronCalc](https://github.com/ironcalc/IronCalc) — as camadas de leitura e
  cálculo do sidecar xlsx em Rust.
- [libeot](https://github.com/umanwizard/libeot) (MPL-2.0) — o decodificador
  MicroType Express para fontes do PowerPoint incorporadas, portado para
  TypeScript.
- [React](https://react.dev/) (MIT) — a camada de interface de todos os
  aplicativos.
- [Mermaid](https://mermaid.js.org/) (MIT) e [KaTeX](https://katex.org/)
  (MIT) — diagramas e fórmulas matemáticas no Markdown e no Docs.
- [opentype.js](https://opentype.js.org/) (MIT) — análise de fontes para
  métricas e busca de glifos.
- [JSZip](https://stuk.github.io/jszip/) (MIT) e
  [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser)
  (MIT) — as camadas de contêiner OOXML e XML.
- [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons)
  (MIT) — o conjunto de ícones usado nas faixas de opções.
- [electron-updater](https://www.electron.build/) (MIT) — atualizações
  dentro do próprio aplicativo.
- Fontes Liberation, Carlito, Caladea e Noto CJK (OFL/Apache-2.0) — fontes
  de documento incluídas.

`npm run notices` regenera o resumo de licenças de terceiros incluído
(`tools/gen-third-party-notices.mjs`); todas as dependências de runtime são
MIT/Apache-2.0/BSD-3-Clause/OFL.

## Licença

O GenOffice é licenciado sob a [Apache License 2.0](../../LICENSE), com uma
exceção: o diretório `ee/` é reservado para futuros módulos empresariais e
é coberto pela [GenOffice Enterprise License](../../ee/LICENSE).

Os nomes e logotipos GenOffice e Genspark são marcas registradas da
Mainfunc, Inc. A licença Apache-2.0 não concede permissão para usá-los (veja
a seção 6); forks devem usar sua própria marca.
