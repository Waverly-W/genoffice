<h1 align="center">GenOffice</h1>

<p align="center"><b>모든 작업이 내 컴퓨터에서 실행되는 무료 오픈소스 오피스 스위트.</b><br>
Word, Excel, PowerPoint, PDF, Markdown, HTML 파일을 열고 편집한 뒤 실제 포맷 그대로 저장합니다.</p>

<p align="center">
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/genspark-ai/genoffice" alt="라이선스: Apache-2.0"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases/latest"><img src="https://img.shields.io/github/v/release/genspark-ai/genoffice" alt="최신 릴리스"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases"><img src="https://img.shields.io/github/downloads/genspark-ai/genoffice/total" alt="다운로드 수"></a>
  <a href="https://github.com/genspark-ai/genoffice/stargazers"><img src="https://img.shields.io/github/stars/genspark-ai/genoffice?style=flat" alt="GitHub 스타 수"></a>
</p>

<p align="center"><a href="../../README.md">English</a> · <a href="README.es.md">Español</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.zh-TW.md">繁體中文</a> · <b>한국어</b> · <a href="README.ja.md">日本語</a> · <a href="README.ar.md">العربية</a> · <a href="README.ru.md">Русский</a> · <a href="README.it.md">Italiano</a> · <a href="README.nl.md">Nederlands</a> · <a href="README.pl.md">Polski</a> · <a href="README.cs.md">Čeština</a> · <a href="README.id.md">Bahasa Indonesia</a> · <a href="README.ms.md">Bahasa Melayu</a> · <a href="README.th.md">ไทย</a> · <a href="README.hi.md">हिन्दी</a> · <a href="README.he.md">עברית</a> · <a href="README.vi.md">Tiếng Việt</a></p>

<p align="center">
  <a href="#download"><b>다운로드</b></a> ·
  <a href="#development"><b>개발</b></a> ·
  <a href="../../PRIVACY.md"><b>개인정보</b></a>
</p>

GenOffice는 macOS, Windows, Linux에서 사용할 수 있는 무료 오픈소스
마이크로소프트 오피스 대체 프로그램입니다. 네이티브 `.docx`, `.xlsx`,
`.pptx` 파일을 열고 저장하며, PDF, Markdown, HTML도 편집할 수 있고, 이
모든 것을 탭으로 구성된 하나의 창에서 다룹니다. 만들어야 할 계정도,
로그인할 곳도 없습니다: 파일은 내 컴퓨터에서 열리고, 편집되고, 저장되고,
변환됩니다.

- **실제 포맷을 그대로, 바이트 단위로 보존합니다.** 편집한 부분만 다시
  작성되고, 파일의 나머지는 바이트 단위로 그대로 유지되어 문서가 Word,
  Excel, PowerPoint에서도 계속 정상적으로 열립니다.
- **설계부터 로컬입니다.** 클라우드도, 업로드도 없습니다. PDF → Word /
  Excel / PowerPoint, Markdown → Word, HTML → Word 변환 모두 기기 내에서
  실행됩니다.
- **편집기 여섯 개, 창 하나.** Docs, Sheets, Slides, PDF, Markdown, HTML이
  하나의 탭 막대, 하나의 홈 화면, 하나의 설정을 함께 씁니다.
- **내용으로 파일을 찾습니다.** 홈 화면은 로컬 인덱스를 바탕으로 `.docx`,
  `.xlsx`, `.pptx`, PDF, Markdown, HTML 파일의 이름, 폴더, 전체 텍스트를
  검색하며, 한중일 문자도 지원합니다.
- **21개 인터페이스 언어**, 라이트·다크·시스템 테마, 그리고 모든 언어로
  제공되는 내장 사용자 가이드(F1).

**다운로드:** [macOS](https://github.com/genspark-ai/genoffice/releases/latest) (Apple Silicon 및 Intel) ·
[Windows](https://github.com/genspark-ai/genoffice/releases/latest) (x64 및 Arm) ·
[Linux](https://github.com/genspark-ai/genoffice/releases/latest) (deb, rpm, AppImage) —
자세한 내용과 요구 사항은 [다운로드](#download) 섹션을 참고하세요.

## 앱 소개

| 앱           | 열기 및 저장                          | 주요 기능                                                                                                                                                  |
| ------------ | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Docs**     | `.docx` (`.doc`는 열기만 가능)        | Word의 줄 메트릭을 따르는 진정한 WYSIWYG 페이지 나누기; 스타일, 표, 머리글과 바닥글, 각주, 목차, 메모, 변경 내용 추적, 비교, 수식, 잉크.                    |
| **Sheets**   | `.xlsx`, `.xls`, `.csv`, `.tsv`       | 별도 프로세스에서 동작하는 자체 개발 Rust `.xlsx` 엔진; 실시간 수식, 차트, 피벗 테이블, 슬라이서, 조건부 서식, 데이터 유효성 검사, 수식 추적, 시트 보호.    |
| **Slides**   | `.pptx` (`.ppt`는 열기만 가능)        | 마스터와 레이아웃, 스마트 가이드, 비파괴 자르기, 전환과 애니메이션, 발표자 노트, 발표자 보기, PDF 내보내기.                                                |
| **PDF**      | `.pdf`                                | PDFium을 통한 페이지 내 텍스트 편집, 주석, 양식 작성, 서명, 마스킹, 페이지 재정렬·분할·병합; 시스템 OCR로 기기 내에서 Word, Excel, PowerPoint로 변환. |
| **Markdown** | `.md`, `.markdown`, `.txt`, `.json`   | 순수 Markdown 위의 블록 에디터로 표, 작업 목록, Mermaid 다이어그램, 수식을 지원하며, 바이트 단위로 충실한 소스 보기와 Word, PDF, 이미지 내보내기를 제공. |
| **HTML**     | `.html`, `.htm`                       | 요소 검사기가 있는 실시간 미리보기, CodeMirror 소스 보기, 전체 화면 발표, Word, PDF 또는 단일 자체 포함 HTML 파일로 내보내기.                              |

### Docs

Docs는 Word가 배치하는 방식 그대로 파일을 엽니다 — 다단 구역, 전면 이미지,
음영 표, 머리글과 바닥글, Word의 줄 메트릭에 따른 페이지 나누기까지. 스타일,
메모, 변경 내용 추적, 수식, 잉크는 손상 없이 왕복하며, 저장할 때는 변경한
문단만 다시 작성됩니다.

### Sheets

계산은 별도의 Rust 엔진 프로세스에서 실행되므로, 그쪽에서 충돌이 나도 앱
전체가 멈추지 않습니다. 수식은 실시간 수식으로 유지되고, 차트와 피벗 차트는
저장된 통합 문서 안의 실제 개체이며, 보호, 정의된 이름, 조건부 서식도
`.xlsx`에 그대로 다시 기록됩니다.

### Slides

마스터와 레이아웃, 스마트 가이드, 표, 차트, 전환과 애니메이션을 갖춘
PowerPoint 스타일의 편집기입니다. 손대지 않은 슬라이드는 저장해도 바이트
단위로 동일하게 유지되고, 노트, 마스터, 주석도 보존되며, 덱은 PDF 또는
슬라이드마다 PNG 한 장으로 내보낼 수 있습니다.

### PDF

편집 모드에서는 모든 텍스트 블록에 윤곽선이 표시되어 그 자리에서 다시 입력할
수 있습니다. 콘텐츠 스트림은 위에 덮는 주석이 아니라 PDFium을 통해 원본
폰트로 다시 작성됩니다. **PDF 변환기 → PDF를 Word로**는 편집 가능한 `.docx`를
만들어 원본 옆에서 Docs로 엽니다. Excel과 PowerPoint 변환도 같은 방식이며,
macOS와 Windows에서는 스캔된 페이지가 시스템 OCR을 거칩니다. 마스킹은
가려진 내용을 새 사본에서 실제로 제거합니다.

### Markdown과 HTML

Markdown은 Tiptap 블록 에디터로 편집하고 순수 `.md`로 다시 저장하며, 원본
텍스트를 볼 수 있는 바이트 단위로 충실한 소스 보기도 제공합니다. HTML 편집기는
내장 Chromium에서 페이지를 미리 보여 줍니다. 아무 요소나 클릭해 스타일을 바꾸고,
더블클릭해 글자를 편집하거나, 소스 보기로 전환할 수 있습니다. 두 앱 모두
**Word로 내보내기**를 사용하면 네이티브 편집 가능한 `.docx`가 전적으로 기기
내에서 만들어집니다.

## GenOffice를 선택하는 이유

- **오픈소스**, Apache-2.0 라이선스로 GitHub에서 공개 개발됩니다.
- **내 기기에서 직접 실행.** macOS, Windows, Linux용 네이티브 앱; 파일은 디스크
  에 그대로 남고 모든 편집, 저장, 변환이 내 기기에서 이루어집니다.
- **진짜 Office 파일.** 네이티브 `.docx`, `.xlsx`, `.pptx`, 바이트 단위 보존:
  손대지 않은 부분은 그대로 복사됩니다.
- **PDF도 제대로.** 페이지 안에서 텍스트를 직접 편집하고, 기기 내에서 PDF를
  Word, Excel, PowerPoint로 변환하며, 스캔 문서는 시스템 OCR을 사용합니다.
- **Markdown과 HTML도 지원**하며, 로컬에서 Word와 PDF로 내보낼 수 있습니다.
- **계정이 필요 없습니다.** 가입할 것도, 크레딧도, 구독도 없습니다.
- **무료**로 개인과 팀 모두 사용할 수 있습니다.

스위트 전체에서 라이트, 다크, 시스템 테마를 사용할 수 있습니다. 테마는 화면에
보이는 것만 바꾸며, 내보내기, 인쇄, 저장된 파일은 항상 문서 고유의 색을
유지합니다.

<a id="download"></a>

## 다운로드

| 플랫폼                               | 요구 사항                                             | 다운로드                                                                                |
| ------------------------------------ | ----------------------------------------------------- | --------------------------------------------------------------------------------------- |
| **macOS** — Apple Silicon (arm64)    | macOS 11+                                             | [최신 `.dmg` (arm64)](https://github.com/genspark-ai/genoffice/releases/latest)         |
| **macOS** — Intel (x64)              | macOS 11+                                             | [최신 `.dmg` (x64)](https://github.com/genspark-ai/genoffice/releases/latest)           |
| **Windows** (x64, 대부분의 PC)       | Windows 10+, Intel/AMD                                | [최신 `-x64.exe` 설치 파일](https://github.com/genspark-ai/genoffice/releases/latest)   |
| **Windows** on Arm (ARM64)           | Windows 11 on Arm (Snapdragon X 및 유사 기종)         | [최신 `-arm64.exe` 설치 파일](https://github.com/genspark-ai/genoffice/releases/latest) |
| **Linux** — Debian / Ubuntu          | x86_64, glibc 2.34+ (Ubuntu 22.04 이상)               | [최신 `.deb`](https://github.com/genspark-ai/genoffice/releases/latest)                 |
| **Linux** — Fedora / RHEL / openSUSE | x86_64, glibc 2.34+ (Fedora 35+, RHEL 9+, Leap 15.6+) | [최신 `.rpm`](https://github.com/genspark-ai/genoffice/releases/latest)                 |
| **Linux** — 기타 배포판              | x86_64, glibc 2.34+, FUSE 2                           | [최신 `.AppImage`](https://github.com/genspark-ai/genoffice/releases/latest)            |

모든 빌드는 `main` 브랜치에서 만들어지며, macOS와 Windows 설치 파일에는
서명이 되어 있습니다. 이전 버전은 [릴리스](https://github.com/genspark-ai/genoffice/releases) 페이지에서 확인할 수 있습니다.
Flatpak, Nix, 그리고 헤드리스 Docker 일괄 변환 이미지는
[packaging/README.md](../../packaging/README.md)에 설명되어 있습니다.

<details>
<summary><b>Linux에 설치하기</b></summary>

deb 패키지는 apt로 설치합니다 — 필요한 의존성을 함께 설치하고 GenOffice를
애플리케이션 메뉴에 추가합니다:

```bash
sudo apt install ./genoffice_<version>_amd64.deb
```

Fedora / RHEL 계열 / openSUSE에서는 대신 rpm을 설치합니다:

```bash
sudo dnf install ./genoffice-<version>.x86_64.rpm     # Fedora / RHEL family
sudo zypper install ./genoffice-<version>.x86_64.rpm  # openSUSE
```

AppImage는 별도 설치 없이 그 자리에서 실행됩니다: FUSE 2 런타임을
설치하고(`sudo apt install libfuse2`; Ubuntu 24.04에서는 패키지 이름이
`libfuse2t64`), 파일에 실행 권한을 부여한 뒤 실행하세요:

```bash
chmod +x GenOffice-<version>.AppImage
./GenOffice-<version>.AppImage
```

</details>

## 동작 방식

Docs, Sheets, Slides, PDF, Markdown, HTML, 그리고 탭 기반 셸까지 일곱
개의 Electron 앱은 순수 TypeScript 패키지로 이루어진 하나의 엔진
레이어와 `.xlsx`용 Rust 사이드카를 함께 사용합니다. 원본 파일은 언제나
신뢰할 수 있는 원본(source of truth)이며, 편집은 좁은 범위의 패치로만
적용되어 편집기가 손대지 않은 부분은 왕복 과정에서도 그대로 유지됩니다.

```
open docx ─► archive original by hash (never touched)
          ─► parse word/document.xml into a block tree, each block anchored to its original XML
          ─► Tiptap editor (dirty tracking per block)
save      ─► dirty blocks → OOXML fragments (referencing existing styles only)
          ─► splice into the original document.xml; untouched blocks keep their bytes
          ─► repack the zip; every other entry is copied byte-for-byte
```

엔진은 `packages/` 아래에 있습니다(`docx-engine`, `pptx-engine`, `pptx-render`,
`pptx-ops`, `pdf2docx`, `html2docx`, `xlsx-gateway`, `file-parse`,
`font-metrics`, `i18n`, `ui` 등). Rust `.xlsx` 엔진은
`apps/sheets/native/xlsx-engine`에 있습니다. 패키지별 상세 설명은
[CONTRIBUTING.md](../../CONTRIBUTING.md)에 있습니다.

<a id="development"></a>

## 개발

사전 요구 사항: Node 22+, npm 10+, 그리고 Sheets의 `.xlsx` 사이드카를 위한
Rust 툴체인(`cargo`가 PATH에 있어야 함).

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

`npm run build -w @genoffice/sheets`를 실행하면 Rust 사이드카가 자동으로
컴파일됩니다. 모든 변경 사항이 통과해야 하는 검사와 풀 리퀘스트가 병합되는
과정은 [CONTRIBUTING.md](../../CONTRIBUTING.md)를 참고하세요.

## 커뮤니티

- **버그를 신고하거나 기능을 요청**하려면
  [GitHub Issues](https://github.com/genspark-ai/genoffice/issues)를 이용하세요.
- GenOffice가 유용하다고 느끼셨다면 **저장소에 스타를 눌러주세요** —
  프로젝트를 지원하는 가장 좋은 방법입니다.

## 자주 묻는 질문

<details>
<summary><b>GenOffice는 무료인가요?</b></summary>

네. GenOffice는 Apache-2.0 라이선스 아래 무료로 제공되는 오픈소스
소프트웨어입니다 — 체험판도, 계정도, 유료 등급도 없습니다.

</details>

<details>
<summary><b>GenOffice에서 마이크로소프트 Word, Excel, PowerPoint 파일을 열 수 있나요?</b></summary>

네. GenOffice는 네이티브 `.docx`, `.xlsx`, `.pptx` 파일을 열고 저장할 수
있습니다. 저장은 바이트 단위로 보존되므로, 손대지 않은 부분은 그대로
다시 기록되어 문서가 마이크로소프트 오피스에서도 계속 정상적으로
열립니다.

</details>

<details>
<summary><b>GenOffice는 오프라인에서도 동작하나요?</b></summary>

네. 문서를 열고, 편집하고, 저장하고, 변환하는 작업은 전적으로 로컬에서
이루어지며 네트워크 연결이 필요 없습니다. 네트워크는 업데이트 확인, 선택적
폰트 다운로드, 그리고 설정 → 일반에서 끌 수 있는 익명 사용 통계에만
사용됩니다.

</details>

<details>
<summary><b>GenOffice에서 PDF 파일을 편집할 수 있나요?</b></summary>

네 — 위에 덮어씌우는 주석이 아니라, 원본 폰트를 유지한 채 페이지
콘텐츠 스트림 자체를 다시 작성하는 실제 PDF 텍스트/이미지 편집 기능을
제공합니다.

</details>

<details>
<summary><b>GenOffice에서 PDF를 Word, Excel, PowerPoint로 변환할 수 있나요?</b></summary>

네 — 전적으로 기기 내에서 처리됩니다: PDFium을 이용한 문자 단위 추출과
기하학 기반 레이아웃 분석만 사용하며, 클라우드 서비스나 업로드가 필요
없습니다. 스캔된 페이지도 지원합니다: macOS와 Windows에서는 시스템 OCR이
텍스트를 인식해 페이지 이미지가 아니라 편집 가능한 텍스트로 변환됩니다.

</details>

<details>
<summary><b>GenOffice에서 HTML을 Word로 변환할 수 있나요?</b></summary>

네 — HTML 앱의 Word로 내보내기 기능은 전적으로 기기 내에서 네이티브
편집 가능한 `.docx`를 생성합니다. 페이지는 내장 Chromium에서 렌더링된
뒤 실제 Word 구조로 변환됩니다: 제목, 문단, 목록, 표, 카드, KPI 행,
양식 필드, 페이지 배경까지 포함됩니다. Word에 대응 요소가 없는 시각
요소(차트, 아이콘, 장식된 박스)만 이미지로 삽입됩니다.

</details>

<details>
<summary><b>GenOffice가 데이터를 수집하나요?</b></summary>

공식 패키지 빌드는 기본적으로 제한된 익명 사용 통계를 전송하며, 설정 →
일반에서 언제든지 이 보고를 끌 수 있습니다. 통계에는 문서 내용, 파일
이름, 파일 경로, 이메일 주소가 절대 포함되지 않습니다.
전체 이벤트와 데이터 공개 내용은 [GenOffice Privacy](../../PRIVACY.md)에서 확인할 수 있습니다.

</details>

## 보안

프로세스 보안 방침(렌더러 샌드박싱, IPC 검증, 외부 링크 차단)은
[SECURITY.md](../../SECURITY.md)를 참고하세요.

## 감사의 말

GenOffice는 다음의 오픈소스 프로젝트가 없었다면 만들어질 수 없었습니다:

- [Electron](https://www.electronjs.org/) — 모든 앱의 데스크톱 런타임입니다.
- [Univer](https://github.com/dream-num/univer) (Apache-2.0) — Sheets가
  확장해서 사용하는 스프레드시트 UI 코어입니다.
- [PDFium](https://pdfium.googlesource.com/pdfium/) (BSD-3-Clause,
  [@embedpdf/pdfium](https://github.com/embedpdf/embed-pdf-viewer)을 통해
  포함됨) — 실제 PDF 텍스트 및 이미지 편집을 지원하는 콘텐츠 스트림
  엔진입니다.
- [pdf.js](https://github.com/mozilla/pdf.js) (Apache-2.0)와
  [pdf-lib](https://github.com/Hopding/pdf-lib) (MIT) — PDF 렌더링과
  문서 조합을 담당합니다.
- [Tiptap](https://tiptap.dev/) / [ProseMirror](https://prosemirror.net/) —
  Docs와 Markdown의 블록 에디터입니다.
- [CodeMirror](https://codemirror.net/) (MIT) — HTML 앱의 소스
  에디터입니다.
- [Konva](https://konvajs.org/) — Slides와 Sheets 차트의 캔버스
  렌더링을 담당합니다.
- [HarfBuzz](https://github.com/harfbuzz/harfbuzz) (wasm) — 복잡한
  문자 체계를 위한 텍스트 셰이핑 계량을 제공합니다.
- [calamine](https://github.com/tafia/calamine)과
  [IronCalc](https://github.com/ironcalc/IronCalc) — Rust xlsx
  사이드카의 읽기 및 계산 레이어입니다.
- [libeot](https://github.com/umanwizard/libeot) (MPL-2.0) — 임베디드
  PowerPoint 폰트를 위한 MicroType Express 디코더를 TypeScript로 포팅한
  것입니다.
- [React](https://react.dev/) (MIT) — 모든 앱의 UI 레이어입니다.
- [Mermaid](https://mermaid.js.org/) (MIT)와 [KaTeX](https://katex.org/)
  (MIT) — Markdown과 Docs의 다이어그램과 수식을 담당합니다.
- [opentype.js](https://opentype.js.org/) (MIT) — 메트릭 확인과 글리프
  조회를 위한 폰트 파싱을 담당합니다.
- [JSZip](https://stuk.github.io/jszip/) (MIT)와
  [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser)
  (MIT) — OOXML 컨테이너와 XML 레이어입니다.
- [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons)
  (MIT) — 각 리본에서 사용하는 아이콘 세트입니다.
- [electron-updater](https://www.electron.build/) (MIT) — 앱 내 업데이트를
  담당합니다.
- Liberation, Carlito, Caladea, Noto CJK 폰트(OFL/Apache-2.0) — 함께
  제공되는 문서용 폰트입니다.

`npm run notices`는 함께 제공되는 서드파티 라이선스 요약
(`tools/gen-third-party-notices.mjs`)을 다시 생성합니다. 모든 런타임
의존성은 MIT/Apache-2.0/BSD-3-Clause/OFL 라이선스를 따릅니다.

## 라이선스

GenOffice는 [Apache License 2.0](../../LICENSE)에 따라 라이선스가
부여됩니다. 단, `ee/` 디렉터리는 향후 엔터프라이즈 모듈을 위해
예약되어 있으며 [GenOffice Enterprise License](../../ee/LICENSE)가
적용됩니다.

GenOffice와 Genspark의 이름과 로고는 Mainfunc, Inc.의 상표입니다.
Apache-2.0 라이선스는 이를 사용할 권리를 부여하지 않으며(6항 참고),
포크는 자체 브랜딩을 사용해야 합니다.
