<h1 align="center">GenOffice</h1>

<p align="center"><b>Une suite bureautique gratuite et open source qui fonctionne entièrement sur votre machine.</b><br>
Fichiers Word, Excel, PowerPoint, PDF, Markdown et HTML, ouverts, modifiés et enregistrés dans leurs formats natifs.</p>

<p align="center">
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/genspark-ai/genoffice" alt="License: Apache-2.0"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases/latest"><img src="https://img.shields.io/github/v/release/genspark-ai/genoffice" alt="Latest release"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases"><img src="https://img.shields.io/github/downloads/genspark-ai/genoffice/total" alt="Downloads"></a>
  <a href="https://github.com/genspark-ai/genoffice/stargazers"><img src="https://img.shields.io/github/stars/genspark-ai/genoffice?style=flat" alt="GitHub stars"></a>
</p>

<p align="center"><a href="../../README.md">English</a> · <a href="README.es.md">Español</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.de.md">Deutsch</a> · <b>Français</b> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.zh-TW.md">繁體中文</a> · <a href="README.ko.md">한국어</a> · <a href="README.ja.md">日本語</a> · <a href="README.ar.md">العربية</a> · <a href="README.ru.md">Русский</a> · <a href="README.it.md">Italiano</a> · <a href="README.nl.md">Nederlands</a> · <a href="README.pl.md">Polski</a> · <a href="README.cs.md">Čeština</a> · <a href="README.id.md">Bahasa Indonesia</a> · <a href="README.ms.md">Bahasa Melayu</a> · <a href="README.th.md">ไทย</a> · <a href="README.hi.md">हिन्दी</a> · <a href="README.he.md">עברית</a> · <a href="README.vi.md">Tiếng Việt</a></p>

<p align="center">
  <a href="#download"><b>Télécharger</b></a> ·
  <a href="#development"><b>Développement</b></a> ·
  <a href="../../PRIVACY.md"><b>Confidentialité</b></a>
</p>

GenOffice est une alternative gratuite et open source à Microsoft Office pour
macOS, Windows et Linux. Elle ouvre et enregistre des fichiers natifs
`.docx`, `.xlsx` et `.pptx` et permet d'éditer des PDF, du Markdown et du
HTML, le tout dans une seule fenêtre à onglets. Aucun compte à créer, aucune
connexion : les fichiers sont ouverts, modifiés, enregistrés et convertis sur
votre propre ordinateur.

- **Formats natifs, préservation au bit près.** Seul ce que vous modifiez est
  réécrit. Le reste du fichier est conservé octet pour octet, si bien que vos
  documents continuent de fonctionner dans Word, Excel et PowerPoint.
- **Local par conception.** Pas de cloud, pas d'envoi. Les conversions
  PDF → Word / Excel / PowerPoint, Markdown → Word et HTML → Word s'exécutent
  toutes en local.
- **Six éditeurs, une seule fenêtre.** Docs, Sheets, Slides, PDF, Markdown et
  HTML partagent une même barre d'onglets, un même écran d'accueil et un même
  ensemble de réglages.
- **Retrouvez vos fichiers par leur contenu.** L'écran d'accueil recherche
  dans les noms, les dossiers et le texte intégral de vos fichiers `.docx`,
  `.xlsx`, `.pptx`, PDF, Markdown et HTML à partir d'un index local, CJK
  compris.
- **21 langues d'interface**, les thèmes clair, sombre et système, et un
  guide de l'utilisateur intégré (F1) dans chaque langue.

**À télécharger :** [macOS](https://github.com/genspark-ai/genoffice/releases/latest) (Apple Silicon et Intel) ·
[Windows](https://github.com/genspark-ai/genoffice/releases/latest) (x64 et Arm) ·
[Linux](https://github.com/genspark-ai/genoffice/releases/latest) (deb, rpm, AppImage) —
détails et prérequis dans la section [Télécharger](#download).

## Les applications

| Application  | Ouvre et enregistre                     | Points forts                                                                                                                                                                                                      |
| ------------ | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Docs**     | `.docx` (et `.doc` en ouverture)        | Véritable pagination WYSIWYG fondée sur les métriques de ligne de Word ; styles, tableaux, en-têtes et pieds de page, notes de bas de page, table des matières, commentaires, suivi des modifications, comparaison, équations et annotations manuscrites. |
| **Sheets**   | `.xlsx`, `.xls`, `.csv`, `.tsv`         | Un moteur `.xlsx` Rust maison dans son propre processus ; formules vivantes, graphiques, tableaux croisés dynamiques, segments, mise en forme conditionnelle, validation des données, traçage des formules et protection des feuilles. |
| **Slides**   | `.pptx` (et `.ppt` en ouverture)        | Masques et mises en page, guides intelligents, recadrage non destructif, transitions et animations, notes de l'orateur, mode Présentateur et export PDF.                                                          |
| **PDF**      | `.pdf`                                  | Modifiez le texte à l'intérieur de la page via PDFium, annotez, remplissez des formulaires, signez, caviardez, réorganisez, scindez et fusionnez des pages ; convertissez en Word, Excel ou PowerPoint en local avec l'OCR du système. |
| **Markdown** | `.md`, `.markdown`, `.txt`, `.json`     | Un éditeur par blocs sur du Markdown brut avec tableaux, listes de tâches, diagrammes Mermaid et formules mathématiques, une vue source fidèle à l'octet près, et un export vers Word, PDF et images.               |
| **HTML**     | `.html`, `.htm`                         | Un aperçu en direct avec un inspecteur d'éléments, une vue source CodeMirror, la présentation en plein écran, et un export vers Word, PDF ou un fichier HTML unique et autonome.                                  |

### Docs

Docs ouvre le fichier comme Word le met en page — sections à plusieurs
colonnes, images pleine page, tableaux ombrés, en-têtes et pieds de page,
pagination fondée sur les métriques de ligne de Word. Styles, commentaires,
suivi des modifications, équations et annotations manuscrites font
l'aller-retour sans être altérés, et un enregistrement ne réécrit que les
paragraphes que vous avez modifiés.

### Sheets

Le calcul s'exécute dans un processus de moteur Rust distinct : un plantage
de ce côté ne fait jamais tomber l'application. Les formules restent des
formules vivantes, les graphiques et graphiques croisés dynamiques sont de
vrais objets dans le classeur enregistré, et la protection, les noms définis
et les mises en forme conditionnelles sont réécrits dans le `.xlsx`.

### Slides

Un éditeur dans le style de PowerPoint avec masques et mises en page, guides
intelligents, tableaux, graphiques, transitions et animations. Les
diapositives non modifiées restent identiques à l'octet près à
l'enregistrement ; les notes, les masques et les annotations sont conservés,
et les présentations s'exportent en PDF ou en un PNG par diapositive.

### PDF

Le mode Modifier délimite chaque bloc de texte pour une nouvelle saisie sur
place ; le flux de contenu est réécrit via PDFium avec les polices d'origine,
et non par une annotation de recouvrement. **Convertisseur PDF → PDF vers
Word** produit un `.docx` modifiable qui s'ouvre dans Docs à côté de la
source. Les cibles Excel et PowerPoint fonctionnent de la même façon, et sur
macOS et Windows les pages scannées passent par l'OCR du système. Le
caviardage supprime physiquement le contenu masqué dans une nouvelle copie.

### Markdown et HTML

Markdown est un éditeur par blocs Tiptap réécrit en `.md` brut, avec une vue
source fidèle à l'octet près pour le texte brut. L'éditeur HTML affiche
l'aperçu de la page dans le Chromium intégré ; cliquez sur n'importe quel
élément pour le restyliser, double-cliquez pour modifier son texte, ou passez
à la vue source. **Exporter en Word**, dans l'une ou l'autre application,
produit un `.docx` natif et modifiable, entièrement en local.

## Pourquoi GenOffice

- **Open source**, licence Apache-2.0, développé au grand jour sur GitHub.
- **À vous de l'exécuter.** Applications natives pour macOS, Windows et
  Linux ; les fichiers restent sur votre disque et chaque modification,
  enregistrement et conversion s'effectue sur votre machine.
- **De vrais fichiers Office.** `.docx`, `.xlsx` et `.pptx` natifs, préservés
  au bit près : les parties du fichier non modifiées sont copiées telles
  quelles.
- **Le PDF fait sérieusement.** Modifiez le texte directement dans la page,
  et convertissez le PDF en Word, Excel ou PowerPoint en local, avec OCR
  système pour les scans.
- **Markdown et HTML aussi**, avec un export local vers Word et PDF.
- **Aucun compte.** Rien à souscrire, pas de crédits, pas d'abonnement.
- **Gratuit**, pour les particuliers comme pour les équipes.

Toute la suite propose les thèmes clair, sombre et système. Les thèmes ne
changent que ce qui est affiché à l'écran : les exports, les impressions et
les fichiers enregistrés conservent toujours les couleurs propres au
document.

<a id="download"></a>

## Télécharger

| Plateforme                           | Prérequis                                             | Téléchargement                                                                                |
| ------------------------------------ | ----------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| **macOS** — Apple Silicon (arm64)    | macOS 11+                                             | [Dernier `.dmg` (arm64)](https://github.com/genspark-ai/genoffice/releases/latest)            |
| **macOS** — Intel (x64)              | macOS 11+                                             | [Dernier `.dmg` (x64)](https://github.com/genspark-ai/genoffice/releases/latest)              |
| **Windows** (x64, la plupart des PC) | Windows 10+, Intel/AMD                                | [Dernier installateur `-x64.exe`](https://github.com/genspark-ai/genoffice/releases/latest)   |
| **Windows** sur Arm (ARM64)          | Windows 11 sur Arm (Snapdragon X et similaires)       | [Dernier installateur `-arm64.exe`](https://github.com/genspark-ai/genoffice/releases/latest) |
| **Linux** — Debian / Ubuntu          | x86_64, glibc 2.34+ (Ubuntu 22.04 ou plus récent)     | [Dernier `.deb`](https://github.com/genspark-ai/genoffice/releases/latest)                    |
| **Linux** — Fedora / RHEL / openSUSE | x86_64, glibc 2.34+ (Fedora 35+, RHEL 9+, Leap 15.6+) | [Dernier `.rpm`](https://github.com/genspark-ai/genoffice/releases/latest)                    |
| **Linux** — autres distributions     | x86_64, glibc 2.34+, FUSE 2                           | [Dernier `.AppImage`](https://github.com/genspark-ai/genoffice/releases/latest)               |

Toutes les versions proviennent de `main` ; les installateurs macOS et
Windows sont signés. Les versions plus anciennes se trouvent sur la page des
[Releases](https://github.com/genspark-ai/genoffice/releases). Flatpak, Nix et
une image Docker de conversion par lots sans interface sont décrits dans
[packaging/README.md](../../packaging/README.md).

<details>
<summary><b>Installation sur Linux</b></summary>

Le paquet deb s'installe avec apt — il récupère les dépendances et ajoute
GenOffice au menu des applications :

```bash
sudo apt install ./genoffice_<version>_amd64.deb
```

Sur Fedora / la famille RHEL / openSUSE, installez plutôt le paquet rpm :

```bash
sudo dnf install ./genoffice-<version>.x86_64.rpm     # Fedora / famille RHEL
sudo zypper install ./genoffice-<version>.x86_64.rpm  # openSUSE
```

L'AppImage s'exécute sur place : installez le runtime FUSE 2
(`sudo apt install libfuse2` ; sur Ubuntu 24.04 le paquet se nomme
`libfuse2t64`), rendez le fichier exécutable, puis lancez-le :

```bash
chmod +x GenOffice-<version>.AppImage
./GenOffice-<version>.AppImage
```

</details>

## Fonctionnement

Sept applications Electron — Docs, Sheets, Slides, PDF, Markdown, HTML et la
coquille à onglets — partagent une même couche moteur composée de paquets
TypeScript purs, ainsi qu'un sidecar Rust pour le `.xlsx`. Le fichier
d'origine est toujours la source de vérité : les modifications sont
appliquées sous forme de correctifs ciblés, et tout ce que l'éditeur n'a pas
touché survit à l'aller-retour sans altération.

```
open docx ─► archive l'original par hachage (jamais touché)
          ─► analyse word/document.xml en un arbre de blocs, chaque bloc ancré à son XML d'origine
          ─► éditeur Tiptap (suivi des modifications non enregistrées bloc par bloc)
save      ─► blocs modifiés → fragments OOXML (référençant uniquement les styles existants)
          ─► insertion dans le document.xml d'origine ; les blocs non touchés conservent leurs octets
          ─► reconstruction du zip ; chaque autre entrée est copiée octet pour octet
```

Les moteurs se trouvent sous `packages/` (`docx-engine`, `pptx-engine`,
`pptx-render`, `pptx-ops`, `pdf2docx`, `html2docx`, `xlsx-gateway`,
`file-parse`, `font-metrics`, `i18n`, `ui` et d'autres) ; le moteur `.xlsx`
en Rust se trouve dans `apps/sheets/native/xlsx-engine`.
[CONTRIBUTING.md](../../CONTRIBUTING.md) propose la visite guidée paquet par
paquet.

<a id="development"></a>

## Développement

Prérequis : Node 22+, npm 10+ et une chaîne d'outils Rust (`cargo` dans le
PATH) pour le sidecar `.xlsx` de Sheets.

```bash
npm install
npm run fixtures     # génère les fixtures .docx de test
npm run dev          # les six éditeurs + la coquille avec les serveurs de dev Vite
npm run dev:docs     # une seule application (le même schéma fonctionne par workspace)
npm run build:all    # compile toutes les applications et la coquille
npm run shell        # compile tout, puis lance la coquille dans Electron
npm test             # tests unitaires moteur + applications (docs/sheets/slides n'ont pas besoin d'affichage)
npm run typecheck    # tsc --noEmit sur tout le workspace
npm run lint         # ESLint sur l'ensemble du dépôt
npm run dist:mac     # empaquette le dmg macOS (régénère les mentions tierces)
npm run dist:win     # empaquette l'installateur nsis Windows
npm run dist:linux   # empaquette l'AppImage + deb + rpm Linux
```

`npm run build -w @genoffice/sheets` compile automatiquement le sidecar Rust.
Consultez [CONTRIBUTING.md](../../CONTRIBUTING.md) pour les vérifications que
chaque modification doit passer et la façon dont les pull requests sont
intégrées.

## Communauté

- **Signalez un bug ou proposez une fonctionnalité** sur
  [GitHub Issues](https://github.com/genspark-ai/genoffice/issues).
- **Mettez une étoile au dépôt** si GenOffice vous est utile — c'est la
  meilleure façon de soutenir le projet.

## FAQ

<details>
<summary><b>GenOffice est-il gratuit ?</b></summary>

Oui. GenOffice est gratuit et open source sous licence Apache-2.0 — pas
d'essai, pas de compte et pas de palier payant.

</details>

<details>
<summary><b>GenOffice peut-il ouvrir des fichiers Microsoft Word, Excel et PowerPoint ?</b></summary>

Oui. GenOffice ouvre et enregistre des fichiers natifs `.docx`, `.xlsx` et
`.pptx`. L'enregistrement préserve les octets : les parties du fichier que
vous n'avez pas modifiées sont réécrites telles quelles, si bien que vos
documents continuent de fonctionner dans Microsoft Office.

</details>

<details>
<summary><b>GenOffice fonctionne-t-il hors ligne ?</b></summary>

Oui. L'ouverture, l'édition, l'enregistrement et la conversion des documents
se font entièrement en local et ne nécessitent aucune connexion réseau. Le
réseau ne sert qu'à la vérification des mises à jour, aux téléchargements
facultatifs de polices et aux statistiques d'utilisation anonymes, que vous
pouvez désactiver dans Paramètres → Général.

</details>

<details>
<summary><b>GenOffice peut-il modifier des fichiers PDF ?</b></summary>

Oui — une véritable édition du texte et des images du PDF, qui réécrit le
flux de contenu de la page en préservant les polices d'origine, et non de
simples annotations de recouvrement.

</details>

<details>
<summary><b>GenOffice peut-il convertir un PDF en Word, Excel ou PowerPoint ?</b></summary>

Oui — entièrement en local : extraction au niveau des caractères via PDFium
combinée à une analyse de mise en page fondée sur la géométrie, sans service
cloud, sans envoi. Les pages scannées sont également prises en charge : sur
macOS et Windows, l'OCR du système les lit, si bien qu'elles sont converties
en texte modifiable plutôt qu'en image de page.

</details>

<details>
<summary><b>GenOffice peut-il convertir du HTML en Word ?</b></summary>

Oui — Exporter en Word dans l'application HTML produit un `.docx` natif et
modifiable, entièrement en local. La page est rendue dans le moteur Chromium
intégré puis réduite à de véritables structures Word : titres, paragraphes,
listes, tableaux, cartes, lignes de KPI, champs de formulaire et arrière-plans
de page ; seuls les éléments visuels sans équivalent Word (graphiques,
icônes, encadrés décorés) sont intégrés sous forme d'images.

</details>

<details>
<summary><b>GenOffice collecte-t-il des données ?</b></summary>

Les versions officielles empaquetées envoient par défaut des analyses
d'usage anonymes limitées, et vous pouvez désactiver ce signalement à tout
moment sous Paramètres → Général. Les analyses n'envoient jamais le contenu
des documents, les noms de fichiers, les chemins de fichiers ou les adresses
e-mail. Consultez [GenOffice Privacy](../../PRIVACY.md) pour la liste
complète des événements et des données divulguées.

</details>

## Sécurité

Consultez [SECURITY.md](../../SECURITY.md) pour la posture de sécurité des
processus (isolation du renderer, validation IPC, contrôle des liens
externes).

## Remerciements

GenOffice ne serait pas possible sans ces projets open source :

- [Electron](https://www.electronjs.org/) — le runtime de bureau pour chaque
  application.
- [Univer](https://github.com/dream-num/univer) (Apache-2.0) — le cœur
  d'interface de feuille de calcul que Sheets étend.
- [PDFium](https://pdfium.googlesource.com/pdfium/) (BSD-3-Clause, intégré
  via [@embedpdf/pdfium](https://github.com/embedpdf/embed-pdf-viewer)) — le
  moteur de flux de contenu derrière la véritable édition de texte et
  d'images des PDF.
- [pdf.js](https://github.com/mozilla/pdf.js) (Apache-2.0) et
  [pdf-lib](https://github.com/Hopding/pdf-lib) (MIT) — le rendu PDF et
  l'assemblage de documents.
- [Tiptap](https://tiptap.dev/) / [ProseMirror](https://prosemirror.net/) —
  les éditeurs par blocs de Docs et Markdown.
- [CodeMirror](https://codemirror.net/) (MIT) — l'éditeur de source dans
  HTML.
- [Konva](https://konvajs.org/) — le rendu canevas pour Slides et les
  graphiques de Sheets.
- [HarfBuzz](https://github.com/harfbuzz/harfbuzz) (wasm) — les métriques de
  mise en forme de texte pour les écritures complexes.
- [calamine](https://github.com/tafia/calamine) et
  [IronCalc](https://github.com/ironcalc/IronCalc) — les couches de lecture
  et de calcul du sidecar xlsx en Rust.
- [libeot](https://github.com/umanwizard/libeot) (MPL-2.0) — le décodeur
  MicroType Express pour les polices PowerPoint intégrées, porté en
  TypeScript.
- [React](https://react.dev/) (MIT) — la couche d'interface utilisateur de
  chaque application.
- [Mermaid](https://mermaid.js.org/) (MIT) et [KaTeX](https://katex.org/)
  (MIT) — les diagrammes et les formules mathématiques dans Markdown et
  Docs.
- [opentype.js](https://opentype.js.org/) (MIT) — l'analyse des polices pour
  les métriques et la recherche de glyphes.
- [JSZip](https://stuk.github.io/jszip/) (MIT) et
  [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser)
  (MIT) — les couches de conteneur OOXML et de XML.
- [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons)
  (MIT) — le jeu d'icônes des rubans.
- [electron-updater](https://www.electron.build/) (MIT) — les mises à jour
  intégrées à l'application.
- Les polices Liberation, Carlito, Caladea et Noto CJK (OFL/Apache-2.0) — les
  polices de document intégrées.

`npm run notices` régénère le résumé des licences tierces intégrées
(`tools/gen-third-party-notices.mjs`) ; toutes les dépendances d'exécution
sont sous licence MIT/Apache-2.0/BSD-3-Clause/OFL.

## Licence

GenOffice est distribué sous [licence Apache 2.0](../../LICENSE), avec une
exception : le répertoire `ee/` est réservé aux futurs modules d'entreprise
et est couvert par la [GenOffice Enterprise License](../../ee/LICENSE).

Les noms et logos GenOffice et Genspark sont des marques déposées de
Mainfunc, Inc. La licence Apache-2.0 n'accorde pas la permission de les
utiliser (voir la section 6) ; les forks doivent utiliser leur propre
identité visuelle.
