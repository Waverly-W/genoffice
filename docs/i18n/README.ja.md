<h1 align="center">GenOffice</h1>

<p align="center"><b>すべてがあなたのマシン上で動作する、無料のオープンソース オフィススイート。</b><br>
Word、Excel、PowerPoint、PDF、Markdown、HTML ファイルを開いて編集し、実際のファイル形式のまま保存します。</p>

<p align="center">
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/genspark-ai/genoffice" alt="License: Apache-2.0"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases/latest"><img src="https://img.shields.io/github/v/release/genspark-ai/genoffice" alt="Latest release"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases"><img src="https://img.shields.io/github/downloads/genspark-ai/genoffice/total" alt="Downloads"></a>
  <a href="https://github.com/genspark-ai/genoffice/stargazers"><img src="https://img.shields.io/github/stars/genspark-ai/genoffice?style=flat" alt="GitHub stars"></a>
</p>

<p align="center"><a href="../../README.md">English</a> · <a href="README.es.md">Español</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.zh-TW.md">繁體中文</a> · <a href="README.ko.md">한국어</a> · <b>日本語</b> · <a href="README.ar.md">العربية</a> · <a href="README.ru.md">Русский</a> · <a href="README.it.md">Italiano</a> · <a href="README.nl.md">Nederlands</a> · <a href="README.pl.md">Polski</a> · <a href="README.cs.md">Čeština</a> · <a href="README.id.md">Bahasa Indonesia</a> · <a href="README.ms.md">Bahasa Melayu</a> · <a href="README.th.md">ไทย</a> · <a href="README.hi.md">हिन्दी</a> · <a href="README.he.md">עברית</a> · <a href="README.vi.md">Tiếng Việt</a></p>

<p align="center">
  <a href="#download"><b>ダウンロード</b></a> ·
  <a href="#development"><b>開発</b></a> ·
  <a href="../../PRIVACY.md"><b>プライバシー</b></a>
</p>

GenOffice は、macOS・Windows・Linux で動作する、Microsoft Office に代わる無料のオープンソース製品です。ネイティブの `.docx`・`.xlsx`・`.pptx` ファイルを開いて保存できるほか、PDF・Markdown・HTML の編集にも対応し、そのすべてを 1 つのタブ付きウィンドウで扱えます。作成するアカウントも、サインインする先もありません。ファイルを開く・編集する・保存する・変換するのは、すべてお使いのコンピューター上です。

- **実際のファイル形式、バイト単位で保持。** 編集した部分だけが書き換えられます。それ以外の部分はファイル内でバイト単位そのまま保持されるため、ドキュメントは Word・Excel・PowerPoint でも問題なく動作し続けます。
- **設計からローカル動作。** クラウドもアップロードもありません。PDF → Word / Excel / PowerPoint、Markdown → Word、HTML → Word の変換もすべてオンデバイスで実行されます。
- **6 つのエディタを 1 つのウィンドウで。** Docs、Sheets、Slides、PDF、Markdown、HTML が、1 本のタブバー、1 つのホーム画面、1 組の設定を共有します。
- **中身でファイルを探せる。** ホーム画面はローカルのインデックスから、`.docx`・`.xlsx`・`.pptx`・PDF・Markdown・HTML ファイルの名前、フォルダー、全文を検索します。CJK にも対応しています。
- **21 のインターフェース言語**、ライト・ダーク・システム連動のテーマ、そしてすべての言語で読める組み込みユーザーガイド（F1）。

**入手方法：** [macOS](https://github.com/genspark-ai/genoffice/releases/latest)（Apple Silicon および Intel）·
[Windows](https://github.com/genspark-ai/genoffice/releases/latest)（x64 および Arm）·
[Linux](https://github.com/genspark-ai/genoffice/releases/latest)（deb、rpm、AppImage）—
詳細と要件は[ダウンロード](#download)を参照してください。

## アプリ一覧

| アプリ       | 開いて保存できる形式                  | 主な機能                                                                                                                                                         |
| ------------ | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Docs**     | `.docx`（`.doc` は開くのみ）          | Word の行メトリクスに基づく本物の WYSIWYG ページ分割。スタイル、表、ヘッダーとフッター、脚注、目次、コメント、変更履歴、比較、数式、インク。                    |
| **Sheets**   | `.xlsx`、`.xls`、`.csv`、`.tsv`       | 独立したプロセスで動く自社開発の Rust 製 `.xlsx` エンジン。実際に機能する数式、グラフ、ピボットテーブル、スライサー、条件付き書式、データの入力規則、数式のトレース、シートの保護。 |
| **Slides**   | `.pptx`（`.ppt` は開くのみ）          | マスターとレイアウト、スマートガイド、非破壊トリミング、画面切り替えとアニメーション、発表者ノート、発表者ビュー、PDF 書き出し。                                 |
| **PDF**      | `.pdf`                                | PDFium によるページ内テキストの編集、注釈、フォーム入力、署名、墨消し、ページの並べ替え・分割・結合。システム OCR を使い、オンデバイスで Word、Excel、PowerPoint に変換。 |
| **Markdown** | `.md`、`.markdown`、`.txt`、`.json`   | プレーンな Markdown を対象にしたブロックエディタ。表、タスクリスト、Mermaid 図、数式、バイト単位で忠実なソースビュー、Word・PDF・画像への書き出しに対応。        |
| **HTML**     | `.html`、`.htm`                       | 要素インスペクター付きのライブプレビュー、CodeMirror のソースビュー、全画面での発表、Word・PDF・単一の自己完結型 HTML ファイルへの書き出し。                     |

### Docs

Docs は Word と同じレイアウトでファイルを開きます — 段組みのセクション、裁ち落としの
画像、網掛けの表、ヘッダーとフッター、そして Word の行メトリクスに基づくページ分割。
スタイル、コメント、変更履歴、数式、インクはそのまま往復し、保存時に書き換えられるのは
変更した段落だけです。

### Sheets

計算は独立した Rust エンジンのプロセスで行われるため、そこでクラッシュしてもアプリ全体が
落ちることはありません。数式は実際に機能する数式のまま残り、グラフとピボットグラフは保存
されたブックの中で本物のオブジェクトとなり、保護、名前の定義、条件付き書式も `.xlsx` に
書き戻されます。

### Slides

マスターとレイアウト、スマートガイド、表、グラフ、画面切り替え、アニメーションを備えた
PowerPoint スタイルのエディタです。触れていないスライドは保存してもバイト単位で同一のまま。
ノート、マスター、注釈も保持され、デッキは PDF、またはスライドごとに 1 枚の PNG として
書き出せます。

### PDF

編集モードでは、すべてのテキストブロックに枠が表示され、その場で打ち直せます。コンテンツ
ストリームは上から隠す注釈ではなく、PDFium によって元のフォントのまま書き換えられます。
**PDF コンバーター → PDF を Word に** を使うと編集可能な `.docx` が生成され、元のファイル
の隣で Docs に開きます。Excel と PowerPoint への変換も同じ流れで、macOS と Windows では
スキャンされたページがシステムの OCR に通されます。墨消しは、覆われた内容を新しいコピーの
中から物理的に取り除きます。

### Markdown と HTML

Markdown は Tiptap のブロックエディタで、プレーンな `.md` として書き戻され、生のテキストを
確認できるバイト単位で忠実なソースビューも備えています。HTML エディタは内蔵の Chromium で
ページをプレビューします。任意の要素をクリックしてスタイルを変更し、ダブルクリックで文字を
編集し、あるいはソースビューに切り替えられます。どちらのアプリでも **Word として書き出す**
を使えば、ネイティブで編集可能な `.docx` が完全にオンデバイスで生成されます。

## GenOffice を選ぶ理由

- **オープンソース**。Apache-2.0 ライセンスで、GitHub 上で公開開発。
- **自分のマシンで動く。** macOS・Windows・Linux 向けのネイティブアプリ。ファイル
  はディスク上に残り、編集・保存・変換もすべて自分のマシンで行われる。
- **本物の Office ファイル。** ネイティブの `.docx`・`.xlsx`・`.pptx`、バイト単位
  で保持：触れていない部分はそのままコピーされる。
- **PDF もしっかり対応。** ページ内でテキストをその場で編集し、オンデバイスで
  PDF を Word・Excel・PowerPoint に変換。スキャンにはシステム OCR を使用。
- **Markdown と HTML にも対応**。ローカルで Word と PDF に書き出せる。
- **アカウント不要。** 登録するものも、クレジットも、サブスクリプションもない。
- **無料**。個人でもチームでも利用できる。

スイート全体でライト、ダーク、システム連動の各テーマを利用できます。テーマが変えるのは
画面上の表示だけで、書き出し、印刷、保存したファイルは常にドキュメント本来の色を保ちます。

<a id="download"></a>

## ダウンロード

| プラットフォーム                           | 要件                                                                   | ダウンロード                                                                                   |
| ------------------------------------------ | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **macOS** — Apple Silicon（arm64）         | macOS 11 以降                                                          | [最新の `.dmg`（arm64）](https://github.com/genspark-ai/genoffice/releases/latest)             |
| **macOS** — Intel（x64）                   | macOS 11 以降                                                          | [最新の `.dmg`（x64）](https://github.com/genspark-ai/genoffice/releases/latest)               |
| **Windows**（x64、大半の PC）              | Windows 10 以降、Intel/AMD                                             | [最新の `-x64.exe` インストーラー](https://github.com/genspark-ai/genoffice/releases/latest)   |
| **Windows** on Arm（ARM64）                | Windows 11 on Arm（Snapdragon X など）                                 | [最新の `-arm64.exe` インストーラー](https://github.com/genspark-ai/genoffice/releases/latest) |
| **Linux** — Debian / Ubuntu                | x86_64、glibc 2.34 以降（Ubuntu 22.04 以降）                           | [最新の `.deb`](https://github.com/genspark-ai/genoffice/releases/latest)                      |
| **Linux** — Fedora / RHEL / openSUSE       | x86_64、glibc 2.34 以降（Fedora 35 以降、RHEL 9 以降、Leap 15.6 以降） | [最新の `.rpm`](https://github.com/genspark-ai/genoffice/releases/latest)                      |
| **Linux** — その他のディストリビューション | x86_64、glibc 2.34 以降、FUSE 2                                        | [最新の `.AppImage`](https://github.com/genspark-ai/genoffice/releases/latest)                 |

すべてのビルドは `main` ブランチから生成され、macOS・Windows のインストーラーには署名が付いて
います。以前のバージョンは [Releases](https://github.com/genspark-ai/genoffice/releases) ページにあります。
Flatpak、Nix、ヘッドレスの Docker 一括変換イメージについては
[packaging/README.md](../../packaging/README.md) で説明しています。

<details>
<summary><b>Linux へのインストール</b></summary>

deb は apt でインストールできます — 依存関係も自動的に取得され、GenOffice がアプリケーション
メニューに追加されます。

```bash
sudo apt install ./genoffice_<version>_amd64.deb
```

Fedora / RHEL 系 / openSUSE では、代わりに rpm をインストールしてください。

```bash
sudo dnf install ./genoffice-<version>.x86_64.rpm     # Fedora / RHEL family
sudo zypper install ./genoffice-<version>.x86_64.rpm  # openSUSE
```

AppImage はそのまま実行できます：FUSE 2 ランタイムをインストールし
（`sudo apt install libfuse2`。Ubuntu 24.04 ではパッケージ名が `libfuse2t64` です）、ファイル
に実行権限を付けてから実行してください。

```bash
chmod +x GenOffice-<version>.AppImage
./GenOffice-<version>.AppImage
```

</details>

## 内部の仕組み

Docs、Sheets、Slides、PDF、Markdown、HTML、そしてタブ管理を行うシェルという 7 つの Electron
アプリが、純粋な TypeScript パッケージによる 1 つのエンジン層と、`.xlsx` 用の Rust サイド
カーを共有しています。常に元ファイルが正となり、編集は最小限のパッチとして適用されるため、
エディタが触れなかった部分は往復の間もそのまま保持されます。

```
docx を開く ─► 元ファイルをハッシュ付きでアーカイブ（一切変更しない）
          ─► word/document.xml をブロックツリーへ解析、各ブロックは元の XML に紐づく
          ─► Tiptap エディタ（ブロック単位の dirty 追跡）
保存      ─► dirty なブロック → OOXML フラグメント（既存スタイルのみ参照）
          ─► 元の document.xml へ差し込み、触れていないブロックはバイトのまま
          ─► zip を再パック；他のすべてのエントリはバイト単位でそのままコピー
```

エンジンは `packages/` 以下にあります（`docx-engine`、`pptx-engine`、`pptx-render`、
`pptx-ops`、`pdf2docx`、`html2docx`、`xlsx-gateway`、`file-parse`、`font-metrics`、
`i18n`、`ui` など）。Rust 製の `.xlsx` エンジンは `apps/sheets/native/xlsx-engine` に
あります。パッケージ単位の詳しい解説は [CONTRIBUTING.md](../../CONTRIBUTING.md) にあります。

<a id="development"></a>

## 開発

前提条件：Node 22 以降、npm 10 以降、そして Sheets の `.xlsx` サイドカー用の Rust
ツールチェーン（PATH 上に `cargo`）。

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

`npm run build -w @genoffice/sheets` を実行すると、Rust サイドカーが自動的にビルドされます。
すべての変更が満たすべきチェック内容や、プルリクエストの取り込み方については
[CONTRIBUTING.md](../../CONTRIBUTING.md) を参照してください。

## コミュニティ

- **バグの報告や機能のリクエスト**は
  [GitHub Issues](https://github.com/genspark-ai/genoffice/issues) で受け付けています。
- GenOffice が役に立ったら**リポジトリにスターを付けてください** — プロジェクトを支援する
  一番の方法です。

## よくある質問

<details>
<summary><b>GenOffice は無料ですか？</b></summary>

はい。GenOffice は Apache-2.0 ライセンスのもとで無料かつオープンソースで提供されています —
試用期間もアカウントも有料プランもありません。

</details>

<details>
<summary><b>GenOffice で Microsoft の Word、Excel、PowerPoint ファイルを開けますか？</b></summary>

はい。GenOffice はネイティブの `.docx`、`.xlsx`、`.pptx` ファイルを開いて保存できます。保存
はバイト単位で保持されるため、触れなかった部分はそのまま書き戻され、ドキュメントは Microsoft
Office でも問題なく動作し続けます。

</details>

<details>
<summary><b>GenOffice はオフラインで使えますか？</b></summary>

はい。ドキュメントを開く・編集する・保存する・変換する作業は完全にローカルで行われ、ネット
ワーク接続は必要ありません。ネットワークを使うのは、アップデートの確認、任意のフォントの
ダウンロード、そして設定 → 一般でオフにできる匿名の利用統計だけです。

</details>

<details>
<summary><b>GenOffice で PDF ファイルを編集できますか？</b></summary>

はい — 上から隠す注釈ではなく、ページのコンテンツストリーム自体を元のフォントを保ったまま
書き換える、本物の PDF テキスト・画像編集に対応しています。

</details>

<details>
<summary><b>GenOffice で PDF を Word、Excel、PowerPoint に変換できますか？</b></summary>

はい — すべてオンデバイスで行われます：PDFium による文字レベルの抽出と、形状に基づくレイア
ウト解析を使い、クラウドサービスやアップロードは一切発生しません。スキャンされたページにも
対応しており、macOS と Windows ではシステムの OCR が読み取るため、ページ画像ではなく編集可能
なテキストに変換されます。

</details>

<details>
<summary><b>GenOffice で HTML を Word に変換できますか？</b></summary>

はい — HTML アプリの「Word として書き出す」を使うと、完全にオンデバイスでネイティブかつ編
集可能な `.docx` が生成されます。ページは内蔵の Chromium でレンダリングされたうえで、見出
し、段落、リスト、表、カード、KPI 行、フォームフィールド、ページ背景といった本物の Word 構
造に落とし込まれます。Word に対応する表現がないビジュアル（チャート、アイコン、装飾ボックス
など）だけが画像として埋め込まれます。

</details>

<details>
<summary><b>GenOffice はデータを収集しますか？</b></summary>

公式のパッケージ版ビルドは、デフォルトで限定的な匿名の利用状況分析データを送信しますが、
設定 → 一般からいつでも送信を無効にできます。分析データにドキュメントの内容、ファイル名、
ファイルパス、メールアドレスが含まれることはありません。収集されるイベントとデータの詳細は
[GenOffice のプライバシー](../../PRIVACY.md)を参照してください。

</details>

## セキュリティ

プロセスのセキュリティ方針（レンダラーのサンドボックス化、IPC バリデーション、外部リンクの
ゲーティング）については [SECURITY.md](../../SECURITY.md) を参照してください。

## クレジット

GenOffice は、以下のオープンソースプロジェクトなしには実現できませんでした。

- [Electron](https://www.electronjs.org/) — すべてのアプリのデスクトップランタイム。
- [Univer](https://github.com/dream-num/univer)（Apache-2.0）— Sheets が拡張しているスプレッ
  ドシート UI のコア。
- [PDFium](https://pdfium.googlesource.com/pdfium/)（BSD-3-Clause、
  [@embedpdf/pdfium](https://github.com/embedpdf/embed-pdf-viewer) 経由でバンドル）— 本物の
  PDF テキスト・画像編集を支えるコンテンツストリームエンジン。
- [pdf.js](https://github.com/mozilla/pdf.js)（Apache-2.0）と
  [pdf-lib](https://github.com/Hopding/pdf-lib)（MIT）— PDF のレンダリングとドキュメント組み
  立て。
- [Tiptap](https://tiptap.dev/) / [ProseMirror](https://prosemirror.net/) — Docs と Markdown
  のブロックエディタ。
- [CodeMirror](https://codemirror.net/)（MIT）— HTML アプリのソースエディタ。
- [Konva](https://konvajs.org/) — Slides と Sheets のグラフのキャンバスレンダリング。
- [HarfBuzz](https://github.com/harfbuzz/harfbuzz)（wasm）— 複雑な文字体系のテキストシェイピ
  ング計測。
- [calamine](https://github.com/tafia/calamine) と
  [IronCalc](https://github.com/ironcalc/IronCalc) — Rust 製 xlsx サイドカーの読み取り層と計
  算層。
- [libeot](https://github.com/umanwizard/libeot)（MPL-2.0）— 埋め込み
  PowerPoint フォント用の MicroType Express デコーダーを TypeScript に
  移植したもの。
- [React](https://react.dev/)（MIT）— すべてのアプリの UI レイヤー。
- [Mermaid](https://mermaid.js.org/)（MIT）と [KaTeX](https://katex.org/)
  （MIT）— Markdown と Docs における図と数式。
- [opentype.js](https://opentype.js.org/)（MIT）— メトリクス取得とグリフ
  検索のためのフォント解析。
- [JSZip](https://stuk.github.io/jszip/)（MIT）と
  [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser)
  （MIT）— OOXML コンテナと XML レイヤー。
- [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons)
  （MIT）— 各リボンで使われているアイコンセット。
- [electron-updater](https://www.electron.build/)（MIT）— アプリ内
  アップデート。
- Liberation、Carlito、Caladea、Noto CJK フォント（OFL/Apache-2.0）— バンドルされているドキュ
  メント用フォント。

`npm run notices` を実行すると、バンドルされているサードパーティライセンスの概要
（`tools/gen-third-party-notices.mjs`）が再生成されます。すべてのランタイム依存関係は
MIT/Apache-2.0/BSD-3-Clause/OFL のいずれかです。

## ライセンス

GenOffice は [Apache License 2.0](../../LICENSE) のもとでライセンスされていますが、1 つ例外
があります：`ee/` ディレクトリは将来のエンタープライズモジュール用に予約されており、
[GenOffice Enterprise License](../../ee/LICENSE) が適用されます。

GenOffice および Genspark の名称とロゴは Mainfunc, Inc. の商標です。Apache-2.0 ライセンスは
これらの使用を許諾するものではありません（セクション 6 を参照）。フォークする場合は、独自の
ブランディングを使用してください。
