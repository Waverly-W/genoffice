<h1 align="center" dir="rtl">GenOffice</h1>

<p align="center" dir="rtl"><b>חבילה משרדית חינמית בקוד פתוח שרצה כולה על המחשב שלכם.</b><br>
קבצי Word,‏ Excel,‏ PowerPoint,‏ PDF,‏ Markdown ו-HTML — נפתחים, נערכים ונשמרים בחזרה בפורמטים המקוריים שלהם.</p>

<p align="center">
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/genspark-ai/genoffice" alt="License: Apache-2.0"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases/latest"><img src="https://img.shields.io/github/v/release/genspark-ai/genoffice" alt="Latest release"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases"><img src="https://img.shields.io/github/downloads/genspark-ai/genoffice/total" alt="Downloads"></a>
  <a href="https://github.com/genspark-ai/genoffice/stargazers"><img src="https://img.shields.io/github/stars/genspark-ai/genoffice?style=flat" alt="GitHub stars"></a>
</p>

<p align="center"><a href="../../README.md">English</a> · <a href="README.es.md">Español</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.zh-TW.md">繁體中文</a> · <a href="README.ko.md">한국어</a> · <a href="README.ja.md">日本語</a> · <a href="README.ar.md">العربية</a> · <a href="README.ru.md">Русский</a> · <a href="README.it.md">Italiano</a> · <a href="README.nl.md">Nederlands</a> · <a href="README.pl.md">Polski</a> · <a href="README.cs.md">Čeština</a> · <a href="README.id.md">Bahasa Indonesia</a> · <a href="README.ms.md">Bahasa Melayu</a> · <a href="README.th.md">ไทย</a> · <a href="README.hi.md">हिन्दी</a> · <b>עברית</b> · <a href="README.vi.md">Tiếng Việt</a></p>

<p align="center" dir="rtl">
  <a href="#download"><b>הורדה</b></a> ·
  <a href="#development"><b>פיתוח</b></a> ·
  <a href="../../PRIVACY.md"><b>פרטיות</b></a>
</p>

GenOffice היא חלופה חינמית ובקוד פתוח ל-Microsoft Office עבור macOS,‏
Windows ו-Linux. היא פותחת ושומרת קבצי `.docx`,‏ `.xlsx` ו-`.pptx` מקוריים
ומאפשרת לערוך PDF,‏ Markdown ו-HTML, הכול בחלון אחד עם כרטיסיות. אין חשבון
ליצור ואין צורך להתחבר לשום דבר: הקבצים נפתחים, נערכים, נשמרים ומומרים על
המחשב שלכם.

- **פורמטים אמיתיים, בשמירה מדויקת על הבייטים.** רק מה שאתם עורכים נכתב
  מחדש. כל השאר בקובץ נשמר בדיוק כפי שהיה, בית לבית, כך שהמסמכים ממשיכים
  לעבוד ב-Word,‏ Excel וב-PowerPoint.
- **מקומי מטבעו.** בלי ענן ובלי העלאה. ההמרות PDF → Word / Excel / PowerPoint,‏
  Markdown → Word ו-HTML → Word — כולן רצות באופן מקומי במכשיר.
- **שישה עורכים, חלון אחד.** Docs,‏ Sheets,‏ Slides,‏ PDF,‏ Markdown ו-HTML
  חולקים שורת כרטיסיות אחת, מסך בית אחד ומערכת הגדרות אחת.
- **מצאו קבצים לפי מה שכתוב בהם.** מסך הבית מחפש בשמות, בתיקיות ובטקסט המלא
  של קובצי `.docx`,‏ `.xlsx`,‏ `.pptx`,‏ PDF,‏ Markdown ו-HTML שלכם מתוך אינדקס
  מקומי, כולל סינית, יפנית וקוריאנית (CJK).
- **21 שפות ממשק**, ערכות עיצוב בהירה, כהה ולפי המערכת, ומדריך משתמש מובנה
  (F1) בכל שפה.

**להורדה:** [macOS](https://github.com/genspark-ai/genoffice/releases/latest) ‏(Apple Silicon ו-Intel) ·
[Windows](https://github.com/genspark-ai/genoffice/releases/latest) ‏(x64 ו-Arm) ·
[Linux](https://github.com/genspark-ai/genoffice/releases/latest) ‏(deb,‏ rpm,‏ AppImage) —
פרטים ודרישות בסעיף [הורדה](#download).

## האפליקציות

| אפליקציה     | פותחת ושומרת                          | עיקרי היכולות                                                                                                                                                         |
| ------------ | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Docs**     | `.docx` (ו-`.doc` לפתיחה)             | עימוד WYSIWYG אמיתי לפי מדדי השורות של Word; סגנונות, טבלאות, כותרות עליונות ותחתונות, הערות שוליים, תוכן עניינים, הערות, מעקב שינויים, השוואה, נוסחאות ודיו.      |
| **Sheets**   | `.xlsx`,‏ `.xls`,‏ `.csv`,‏ `.tsv`    | מנוע `.xlsx` פנימי ב-Rust שרץ בתהליך משלו; נוסחאות חיות, תרשימים, טבלאות ציר, כלי פריסה (slicers), עיצוב מותנה, אימות נתונים, מעקב אחר נוסחאות והגנה על גיליונות. |
| **Slides**   | `.pptx` (ו-`.ppt` לפתיחה)             | תבניות אב ופריסות, קווי עזר חכמים, חיתוך לא הרסני, מעברים והנפשות, הערות דובר, תצוגת מציג וייצוא ל-PDF.                                                            |
| **PDF**      | `.pdf`                                | עריכת טקסט בתוך העמוד באמצעות PDFium, הוספת הערות, מילוי טפסים, חתימה, השחרה (redaction), סידור מחדש, פיצול ומיזוג עמודים; המרה ל-Word,‏ Excel או PowerPoint במכשיר עם ה-OCR של המערכת. |
| **Markdown** | `.md`,‏ `.markdown`,‏ `.txt`,‏ `.json` | עורך בלוקים מעל Markdown רגיל עם טבלאות, רשימות משימות, דיאגרמות Mermaid ומתמטיקה, תצוגת מקור השומרת על הבייטים, וייצוא ל-Word,‏ PDF ולתמונות.                     |
| **HTML**     | `.html`,‏ `.htm`                      | תצוגה מקדימה חיה עם בוחן רכיבים, תצוגת מקור ב-CodeMirror, הצגה במסך מלא, וייצוא ל-Word,‏ PDF או לקובץ HTML יחיד ועצמאי.                                             |

### Docs

Docs פותחת את הקובץ בדיוק כפי ש-Word מעצב אותו — קטעים מרובי טורים, תמונות עד
לשולי העמוד, טבלאות מוצללות, כותרות עליונות ותחתונות, ועימוד המבוסס על מדדי
השורות של Word. סגנונות, הערות, מעקב שינויים, נוסחאות ודיו עוברים הלוך ושוב
ללא כל שינוי, ושמירה כותבת מחדש רק את הפסקאות ששיניתם.

### Sheets

החישוב רץ בתהליך נפרד של מנוע Rust, כך שקריסה שם לעולם לא מפילה את
האפליקציה. נוסחאות נשארות נוסחאות חיות, תרשימים ו-PivotCharts הם אובייקטים
אמיתיים בחוברת העבודה השמורה, והגנות, שמות מוגדרים ועיצובים מותנים נכתבים
בחזרה לתוך קובץ ה-`.xlsx`.

### Slides

עורך מצגות בסגנון PowerPoint עם תבניות אב ופריסות, קווי עזר חכמים, טבלאות,
תרשימים, מעברים והנפשות. שקופיות שלא נגעתם בהן נשארות זהות בית לבית בשמירה;
הערות, תבניות אב והערות שוליים נשמרות, ואת המצגות אפשר לייצא ל-PDF או לקובץ
PNG אחד לכל שקופית.

### PDF

מצב העריכה מתאר בקו כל בלוק טקסט להקלדה חוזרת במקום; זרם התוכן נכתב מחדש
באמצעות PDFium עם הגופנים המקוריים, ולא באמצעות הערת כיסוי.
**PDF Converter → PDF to Word** מייצר קובץ `.docx` הניתן לעריכה, שנפתח ב-Docs
לצד המקור. יעדי Excel ו-PowerPoint עובדים באותו האופן, וב-macOS וב-Windows
עמודים סרוקים עוברים דרך ה-OCR של המערכת. השחרה מסירה פיזית את התוכן המכוסה
בעותק חדש.

### Markdown ו-HTML

Markdown הוא עורך בלוקים מבוסס Tiptap שנכתב בחזרה כקובץ `.md` רגיל, עם
תצוגת מקור השומרת על הבייטים עבור הטקסט הגולמי. עורך ה-HTML מציג את העמוד
ב-Chromium המובנה; לחצו על כל רכיב כדי לשנות את העיצוב שלו, לחיצה כפולה
כדי לערוך את הטקסט שלו, או עברו לתצוגת המקור. **Export as Word** בשתי
האפליקציות מייצר קובץ `.docx` מקורי הניתן לעריכה, כולו באופן מקומי במכשיר.

## למה GenOffice

- **קוד פתוח**, ברישיון Apache-2.0, מפותח בפומבי ב-GitHub.
- **שלך להרצה.** אפליקציות מקוריות ל-macOS, Windows ו-Linux; הקבצים נשארים
  על הדיסק שלך וכל פעולת עריכה, שמירה והמרה מתבצעת על המחשב שלך.
- **קבצי Office אמיתיים.** קבצי `.docx`, `.xlsx` ו-`.pptx` מקוריים, בשמירה על
  הבייטים: החלקים בקובץ שלא נגעת בהם מועתקים כמו שהם בדיוק.
- **PDF שמטופל כמו שצריך.** ערכו טקסט ישירות בתוך העמוד, והמירו PDF ל-Word,
  Excel או PowerPoint במכשיר עצמו, עם ה-OCR של המערכת למסמכים סרוקים.
- **גם Markdown ו-HTML**, עם ייצוא מקומי ל-Word ול-PDF.
- **בלי חשבון.** אין למה להירשם, אין קרדיטים ואין מנוי.
- **חינם**, גם ליחידים וגם לצוותים.

כל החבילה מגיעה עם ערכות עיצוב בהיר, כהה ומצב מערכת. ערכות העיצוב משנות רק
את מה שמוצג על המסך: קבצים מיוצאים, מודפסים ונשמרים תמיד שומרים על הצבעים
המקוריים של המסמך.

<a id="download"></a>

## הורדה

| פלטפורמה                             | דרישות                                                    | הורדה                                                                                           |
| ------------------------------------ | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| **macOS** — Apple Silicon (arm64)    | macOS 11+                                                 | [הגרסה האחרונה של `.dmg` (arm64)](https://github.com/genspark-ai/genoffice/releases/latest)     |
| **macOS** — Intel (x64)              | macOS 11+                                                 | [הגרסה האחרונה של `.dmg` (x64)](https://github.com/genspark-ai/genoffice/releases/latest)       |
| **Windows** (x64, רוב המחשבים)       | Windows 10+, Intel/AMD                                    | [הגרסה האחרונה של מתקין `-x64.exe`](https://github.com/genspark-ai/genoffice/releases/latest)   |
| **Windows** על Arm (ARM64)           | Windows 11 על Arm (Snapdragon X ומעבדים דומים)            | [הגרסה האחרונה של מתקין `-arm64.exe`](https://github.com/genspark-ai/genoffice/releases/latest) |
| **Linux** — Debian / Ubuntu          | x86_64,‏ glibc 2.34+‎ (Ubuntu 22.04 ואילך)                | [הגרסה האחרונה של `.deb`](https://github.com/genspark-ai/genoffice/releases/latest)             |
| **Linux** — Fedora / RHEL / openSUSE | x86_64,‏ glibc 2.34+‎ (Fedora 35+,‏ RHEL 9+,‏ Leap 15.6+) | [הגרסה האחרונה של `.rpm`](https://github.com/genspark-ai/genoffice/releases/latest)             |
| **Linux** — הפצות אחרות              | x86_64,‏ glibc 2.34+‎, FUSE 2                             | [הגרסה האחרונה של `.AppImage`](https://github.com/genspark-ai/genoffice/releases/latest)        |

כל הבנייות (builds) מגיעות מ-`main`; מתקיני macOS ו-Windows חתומים
דיגיטלית. גרסאות ישנות יותר נמצאות בעמוד
[Releases](https://github.com/genspark-ai/genoffice/releases).
Flatpak,‏ Nix ותמונת Docker להמרה באצווה ללא ממשק משתמש מתוארים ב-
[packaging/README.md](../../packaging/README.md).

<details>
<summary><b>התקנה ב-Linux</b></summary>

קובץ ה-deb מותקן באמצעות apt — הוא מוריד את יחסי התלות ומוסיף את GenOffice
לתפריט האפליקציות:

```bash
sudo apt install ./genoffice_<version>_amd64.deb
```

ב-Fedora, במשפחת RHEL או ב-openSUSE, התקינו במקום זאת את קובץ ה-rpm:

```bash
sudo dnf install ./genoffice-<version>.x86_64.rpm     # Fedora / משפחת RHEL
sudo zypper install ./genoffice-<version>.x86_64.rpm  # openSUSE
```

ה-AppImage רץ במקומו: התקינו את סביבת ההרצה FUSE 2
(`sudo apt install libfuse2`; ב-Ubuntu 24.04 שם החבילה הוא `libfuse2t64`),
הפכו את הקובץ להרצה (executable), ואז הריצו אותו:

```bash
chmod +x GenOffice-<version>.AppImage
./GenOffice-<version>.AppImage
```

</details>

## איך זה עובד

שבע אפליקציות Electron — Docs,‏ Sheets,‏ Slides,‏ PDF,‏ Markdown,‏ HTML
ומעטפת הכרטיסיות (shell) — חולקות שכבת מנוע אחת של חבילות TypeScript
טהורות, בתוספת sidecar ב-Rust לקובצי `.xlsx`. הקובץ המקורי הוא תמיד מקור
האמת: שינויים מוחלים כתיקונים (patches) מדויקים וממוקדים, וכל מה שהעורך לא
נגע בו שורד את המסע הלוך ושוב ללא כל שינוי.

```
open docx ─► שמירה בארכיון של המקור לפי hash (לא נוגעים בו לעולם)
          ─► פירוק word/document.xml לעץ בלוקים, כל בלוק מעוגן ל-XML המקורי שלו
          ─► עורך Tiptap (מעקב אחר שינויים לכל בלוק)
save      ─► בלוקים שהשתנו → קטעי OOXML (מפנים רק לסטיילים קיימים)
          ─► שזירה בחזרה לתוך document.xml המקורי; בלוקים שלא נגעו בהם שומרים על הבייטים שלהם
          ─► אריזה מחדש של ה-zip; כל רשומה אחרת מועתקת בית לבית
```

המנועים נמצאים תחת `packages/` ‏(`docx-engine`,‏ `pptx-engine`,‏
`pptx-render`,‏ `pptx-ops`,‏ `pdf2docx`,‏ `html2docx`,‏ `xlsx-gateway`,‏
`file-parse`,‏ `font-metrics`,‏ `i18n`,‏ `ui` ועוד); מנוע ה-`.xlsx` ב-Rust
נמצא ב-`apps/sheets/native/xlsx-engine`. ב-[CONTRIBUTING.md](../../CONTRIBUTING.md)
יש סיור חבילה-אחר-חבילה.

<a id="development"></a>

## פיתוח

דרישות מוקדמות: Node 22+‎, npm 10+‎ ו-toolchain של Rust ‏(`cargo` נגיש ב-PATH)
עבור ה-sidecar של `.xlsx` ב-Sheets.

```bash
npm install
npm run fixtures     # ייצור קבצי fixture לבדיקות .docx
npm run dev          # כל שש האפליקציות + ה-shell מול שרתי הפיתוח של Vite
npm run dev:docs     # אפליקציה בודדת (אותה תבנית עובדת לכל workspace)
npm run build:all    # בניית כל האפליקציות וה-shell
npm run shell        # בניית הכול, ואז הפעלת ה-shell ב-Electron
npm test             # בדיקות יחידה של המנוע והאפליקציות (docs/sheets/slides לא דורשות תצוגה)
npm run typecheck    # tsc --noEmit על כל ה-workspace
npm run lint         # ESLint על כל המאגר
npm run dist:mac     # אריזת ה-dmg עבור macOS (מייצר מחדש את הודעות הצדדים השלישיים)
npm run dist:win     # אריזת מתקין ה-nsis עבור Windows
npm run dist:linux   # אריזת AppImage + deb + rpm עבור Linux
```

`npm run build -w @genoffice/sheets` מקמפל את ה-sidecar ב-Rust אוטומטית.
ראו [CONTRIBUTING.md](../../CONTRIBUTING.md) לבדיקות שכל שינוי חייב לעבור
ולאופן שבו pull requests מתקבלים.

## קהילה

- **דווחו על באג או בקשו פיצ'ר** ב-
  [GitHub Issues](https://github.com/genspark-ai/genoffice/issues).
- **תנו כוכב (star) למאגר** אם GenOffice שימושית לכם — זו הדרך הטובה ביותר
  לתמוך בפרויקט.

## שאלות נפוצות

<details>
<summary><b>האם GenOffice חינמית?</b></summary>

כן. GenOffice חינמית ובקוד פתוח, בהתאם לרישיון Apache-2.0 — אין תקופת
ניסיון, אין חשבון ואין מסלול בתשלום.

</details>

<details>
<summary><b>האם GenOffice יכולה לפתוח קבצי Microsoft Word,‏ Excel ו-PowerPoint?</b></summary>

כן. GenOffice פותחת ושומרת קבצי `.docx`,‏ `.xlsx` ו-`.pptx` מקוריים.
השמירה נעשית בשמירה על הבייטים: חלקים בקובץ שלא נגעתם בהם נכתבים בחזרה בית
לבית, כך שהמסמכים ממשיכים לעבוד ב-Microsoft Office.

</details>

<details>
<summary><b>האם GenOffice עובדת באופן לא מקוון?</b></summary>

כן. פתיחה, עריכה, שמירה והמרה של מסמכים מתבצעות באופן מקומי לגמרי ואינן
דורשות חיבור לרשת. הרשת משמשת רק לבדיקת עדכונים, להורדת גופנים אופציונליים
ולסטטיסטיקות שימוש אנונימיות שאפשר לכבות ב-Settings → General.

</details>

<details>
<summary><b>האם GenOffice יכולה לערוך קבצי PDF?</b></summary>

כן — עריכה אמיתית של טקסט ותמונות ב-PDF, שכותבת מחדש את זרם התוכן של העמוד
עם שימור הגופנים המקוריים, ולא באמצעות הערות כיסוי.

</details>

<details>
<summary><b>האם GenOffice יכולה להמיר PDF ל-Word,‏ Excel או PowerPoint?</b></summary>

כן — הכול באופן מקומי במכשיר: חילוץ תווים באמצעות PDFium, בשילוב ניתוח
פריסה מבוסס גאומטריה, בלי שירות ענן ובלי העלאה. גם עמודים סרוקים מכוסים:
ב-macOS וב-Windows ה-OCR של המערכת קורא אותם, כך שהם מומרים לטקסט הניתן
לעריכה במקום לתמונת עמוד.

</details>

<details>
<summary><b>האם GenOffice יכולה להמיר HTML ל-Word?</b></summary>

כן — פעולת Export as Word באפליקציית ה-HTML מייצרת קובץ `.docx` מקורי
הניתן לעריכה, הכול באופן מקומי במכשיר. העמוד מוצג באמצעות Chromium המובנה
ומצטמצם למבני Word אמיתיים: כותרות, פסקאות, רשימות, טבלאות, כרטיסים, שורות
KPI, שדות טופס ורקעי עמוד; רק אלמנטים ויזואליים שאין להם מקביל ב-Word
(תרשימים, אייקונים, תיבות מעוצבות) מוטבעים כתמונות.

</details>

<details>
<summary><b>האם GenOffice אוספת מידע?</b></summary>

בגרסאות הרשמיות הארוזות נשלח כברירת מחדל מידע אנליטי אנונימי ומוגבל על
השימוש, ואפשר לבטל את הדיווח בכל עת תחת Settings → General. הנתונים
האנליטיים לעולם לא כוללים תוכן מסמכים, שמות קבצים, נתיבי קבצים או כתובות
אימייל. לפירוט המלא של האירועים והנתונים המדווחים ראו
[GenOffice Privacy](../../PRIVACY.md).

</details>

## אבטחה

ראו את [SECURITY.md](../../SECURITY.md) למדיניות האבטחה של התהליכים (בידוד
ה-renderer בסביבת sandbox, אימות IPC, חסימת קישורים חיצוניים).

## תודות

GenOffice לא הייתה יכולה להתקיים בלי הפרויקטים הבאים בקוד פתוח:

- [Electron](https://www.electronjs.org/) — סביבת ההרצה לדסקטופ של כל
  האפליקציות.
- [Univer](https://github.com/dream-num/univer) (Apache-2.0) — ליבת
  ממשק הגיליונות האלקטרוניים ש-Sheets מבוססת עליה ומרחיבה.
- [PDFium](https://pdfium.googlesource.com/pdfium/) (BSD-3-Clause, מגיע
  ארוז באמצעות [@embedpdf/pdfium](https://github.com/embedpdf/embed-pdf-viewer)) —
  מנוע זרם התוכן שמאחורי עריכת הטקסט והתמונות האמיתית ב-PDF.
- [pdf.js](https://github.com/mozilla/pdf.js) (Apache-2.0) ו-
  [pdf-lib](https://github.com/Hopding/pdf-lib) (MIT) — הצגת PDF
  (rendering) והרכבת מסמכים.
- [Tiptap](https://tiptap.dev/) / [ProseMirror](https://prosemirror.net/) —
  עורכי הבלוקים ב-Docs וב-Markdown.
- [CodeMirror](https://codemirror.net/) (MIT) — עורך קוד המקור
  באפליקציית ה-HTML.
- [Konva](https://konvajs.org/) — הצגת הקנבס עבור Slides ועבור
  התרשימים ב-Sheets.
- [HarfBuzz](https://github.com/harfbuzz/harfbuzz) (wasm) — מדדי עיצוב
  טקסט (text shaping) עבור כתבים מורכבים.
- [calamine](https://github.com/tafia/calamine) ו-
  [IronCalc](https://github.com/ironcalc/IronCalc) — שכבות הקריאה
  והחישוב של ה-sidecar ב-Rust לקובצי xlsx.
- [libeot](https://github.com/umanwizard/libeot) (MPL-2.0) — מפענח
  ה-MicroType Express לגופנים מוטבעים של PowerPoint, שהועבר ל-TypeScript.
- [React](https://react.dev/) (MIT) — שכבת ה-UI של כל האפליקציות.
- [Mermaid](https://mermaid.js.org/) (MIT) ו-[KaTeX](https://katex.org/)
  (MIT) — דיאגרמות ומתמטיקה ב-Markdown וב-Docs.
- [opentype.js](https://opentype.js.org/) (MIT) — ניתוח גופנים לצורכי מדדים
  וחיפוש גליפים.
- [JSZip](https://stuk.github.io/jszip/) (MIT) ו-
  [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser)
  (MIT) — שכבות מארז ה-OOXML וה-XML.
- [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons)
  (MIT) — סט האיקונים בכל הרצועות (ribbons).
- [electron-updater](https://www.electron.build/) (MIT) — עדכונים בתוך
  האפליקציה.
- הגופנים Liberation,‏ Carlito,‏ Caladea ו-Noto CJK (OFL/Apache-2.0) —
  גופנים המצורפים למסמכים.

`npm run notices` מייצר מחדש את סיכום רישיונות הצדדים השלישיים המצורף
(`tools/gen-third-party-notices.mjs`); כל יחסי התלות בזמן הרצה הם ברישיונות
MIT/Apache-2.0/BSD-3-Clause/OFL.

## רישיון

GenOffice מופצת ברישיון [Apache License 2.0](../../LICENSE), עם חריג אחד:
התיקייה `ee/` שמורה למודולים עסקיים (enterprise) עתידיים, והיא כפופה
ל-[GenOffice Enterprise License](../../ee/LICENSE).

השמות והלוגואים GenOffice ו-Genspark הם סימנים מסחריים של Mainfunc, Inc.
רישיון Apache-2.0 אינו מעניק הרשאה לשימוש בהם (ראו סעיף 6); על forks
להשתמש במיתוג משלהם.
