<h1 align="center" dir="rtl">GenOffice</h1>

<p align="center" dir="rtl"><b>حزمة Office مجانية ومفتوحة المصدر تعمل بالكامل على جهازك.</b><br>
ملفات Word و Excel و PowerPoint و PDF و Markdown و HTML، تُفتح وتُحرَّر وتُحفظ بصيغها الأصلية نفسها.</p>

<p align="center">
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/genspark-ai/genoffice" alt="الترخيص: Apache-2.0"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases/latest"><img src="https://img.shields.io/github/v/release/genspark-ai/genoffice" alt="أحدث إصدار"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases"><img src="https://img.shields.io/github/downloads/genspark-ai/genoffice/total" alt="عدد التنزيلات"></a>
  <a href="https://github.com/genspark-ai/genoffice/stargazers"><img src="https://img.shields.io/github/stars/genspark-ai/genoffice?style=flat" alt="نجوم GitHub"></a>
</p>

<p align="center"><a href="../../README.md">English</a> · <a href="README.es.md">Español</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.zh-TW.md">繁體中文</a> · <a href="README.ko.md">한국어</a> · <a href="README.ja.md">日本語</a> · <b>العربية</b> · <a href="README.ru.md">Русский</a> · <a href="README.it.md">Italiano</a> · <a href="README.nl.md">Nederlands</a> · <a href="README.pl.md">Polski</a> · <a href="README.cs.md">Čeština</a> · <a href="README.id.md">Bahasa Indonesia</a> · <a href="README.ms.md">Bahasa Melayu</a> · <a href="README.th.md">ไทย</a> · <a href="README.hi.md">हिन्दी</a> · <a href="README.he.md">עברית</a> · <a href="README.vi.md">Tiếng Việt</a></p>

<p align="center" dir="rtl">
  <a href="#download"><b>التنزيل</b></a> ·
  <a href="#development"><b>التطوير</b></a> ·
  <a href="../../PRIVACY.md"><b>الخصوصية</b></a>
</p>

GenOffice بديل مجاني ومفتوح المصدر لـ Microsoft Office على macOS و Windows
و Linux. يفتح البرنامج ويحفظ مباشرة ملفات `.docx` و `.xlsx` و `.pptx` الأصلية،
ويحرّر ملفات PDF و Markdown و HTML، وكل ذلك في نافذة واحدة ذات تبويبات. لا حساب
تنشئه ولا شيء تسجّل الدخول إليه: تُفتح الملفات وتُحرَّر وتُحفَظ وتُحوَّل على
حاسوبك أنت.

- **صِيَغ أصلية، حفظ يحافظ على البايتات.** يُعاد كتابة الجزء الذي تحرّره فقط،
  وتبقى بقية الملف كما هي حرفيًا بايتًا ببايت، فتستمر المستندات في العمل
  بسلاسة في Word و Excel و PowerPoint.
- **محلي بالتصميم.** لا سحابة ولا رفع للملفات. جميع عمليات التحويل — PDF إلى
  Word / Excel / PowerPoint، وMarkdown إلى Word، وHTML إلى Word — تعمل على
  الجهاز نفسه.
- **ستة محرّرات في نافذة واحدة.** تتشارك Docs و Sheets و Slides و PDF و Markdown
  و HTML شريط تبويبات واحدًا وشاشة رئيسية واحدة ومجموعة إعدادات واحدة.
- **ابحث عن الملفات بما تحتويه.** تبحث الشاشة الرئيسية في أسماء ملفات `.docx`
  و `.xlsx` و `.pptx` و PDF و Markdown و HTML ومجلداتها ونصّها الكامل من فهرس
  محلي، بما في ذلك اللغات الصينية واليابانية والكورية (CJK).
- **واجهة بـ 21 لغة**، ومظاهر فاتحة وداكنة ومظهر النظام، ودليل مستخدم مدمج
  (F1) بكل اللغات.

**الحصول عليه:** [macOS](https://github.com/genspark-ai/genoffice/releases/latest) (Apple Silicon و Intel) ·
[Windows](https://github.com/genspark-ai/genoffice/releases/latest) (x64 و Arm) ·
[Linux](https://github.com/genspark-ai/genoffice/releases/latest) (deb، rpm، AppImage) —
التفاصيل والمتطلبات في [التنزيل](#download).

## التطبيقات

| التطبيق      | يفتح ويحفظ                            | أبرز المزايا                                                                                                                                                                   |
| ------------ | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Docs**     | `.docx` (و `.doc` للفتح)              | تقسيم حقيقي للصفحات بنمط WYSIWYG وفق مقاييس أسطر Word؛ أنماط وجداول وترويسات وتذييلات وحواشٍ سفلية وجدول محتويات وتعليقات وتتبّع للتغييرات ومقارنة ومعادلات وكتابة بالحبر. |
| **Sheets**   | `.xlsx`، `.xls`، `.csv`، `.tsv`       | محرّك `.xlsx` داخلي مكتوب بلغة Rust يعمل في عمليته الخاصة؛ صِيَغ حيّة ورسوم بيانية وجداول محورية ومقسّمات طرق العرض وتنسيق شرطي والتحقق من البيانات وتتبّع الصِّيَغ وحماية الأوراق. |
| **Slides**   | `.pptx` (و `.ppt` للفتح)              | قوالب رئيسية وتخطيطات، وأدلة ذكية، واقتصاص غير إتلافي، وانتقالات وحركات، وملاحظات المتحدث، وطريقة عرض مقدّم العرض، والتصدير إلى PDF.                                       |
| **PDF**      | `.pdf`                                | حرّر النص داخل الصفحة عبر PDFium، وأضف تعليقات توضيحية، واملأ النماذج، ووقّع، وأخفِ المحتوى (redaction)، وأعد ترتيب الصفحات وقسّمها ودمجها؛ وحوّل إلى Word أو Excel أو PowerPoint على الجهاز مع OCR النظام. |
| **Markdown** | `.md`، `.markdown`، `.txt`، `.json`   | محرّر كُتل فوق Markdown نصي صِرف مع جداول وقوائم مهام ومخططات Mermaid ومعادلات رياضية، وعرض للمصدر يحافظ على البايتات، وتصدير إلى Word و PDF وصور.                          |
| **HTML**     | `.html`، `.htm`                       | معاينة حيّة مع فاحص للعناصر، وعرض للمصدر عبر CodeMirror، وعرض تقديمي بملء الشاشة، وتصدير إلى Word أو PDF أو ملف HTML واحد مستقل بذاته.                                     |

### Docs

يفتح Docs الملف كما يعرضه Word تمامًا — أقسام متعددة الأعمدة، وصور بعرض الصفحة
كاملة، وجداول مظلّلة، وترويسات وتذييلات، وتقسيم إلى صفحات بحسب مقاييس أسطر Word.
الأنماط والتعليقات وتتبّع التغييرات والمعادلات والكتابة بالحبر تبقى سليمة دون
تغيير عند الحفظ، ولا يعيد الحفظ كتابة سوى الفقرات التي غيّرتها.

### Sheets

تجري الحسابات في عملية محرّك Rust منفصلة، فلا يُسقط أي انهيار فيها التطبيق.
تبقى الصِّيَغ صيغًا حيّة، والرسوم البيانية و PivotCharts كائنات حقيقية في المصنف
المحفوظ، وتُكتب الحماية والأسماء المعرَّفة والتنسيقات الشرطية مجددًا داخل ملف
`.xlsx`.

### Slides

محرّر عروض تقديمية على طراز PowerPoint مع قوالب رئيسية وتخطيطات وأدلة ذكية
وجداول ورسوم بيانية وانتقالات وحركات. تبقى الشرائح التي لم تلمسها مطابقة بايتًا
ببايت عند الحفظ؛ وتُحفَظ الملاحظات والقوالب الرئيسية والتعليقات التوضيحية،
وتُصدَّر العروض إلى PDF أو إلى صورة PNG لكل شريحة.

### PDF

يحدّد وضع التحرير كل كتلة نصية لإعادة الكتابة في مكانها؛ ويُعاد كتابة تدفّق
المحتوى عبر PDFium بالخطوط الأصلية نفسها، لا بتعليق تغطية فوق النص. تُنتج ميزة
**PDF Converter → PDF to Word** ملف `.docx` قابلًا للتحرير يُفتح في Docs إلى
جانب المصدر. تعمل صيغتا الوجهة Excel و PowerPoint بالطريقة نفسها، وعلى macOS
و Windows تمرّ الصفحات الممسوحة عبر تقنية OCR الخاصة بنظام التشغيل. أما إخفاء
المحتوى (redaction) فيزيل المحتوى المغطّى فعليًا في نسخة جديدة.

### Markdown و HTML

Markdown محرّر كُتل مبني على Tiptap يُكتب مجددًا كملف `.md` نصي صِرف، مع عرض
للمصدر يحافظ على البايتات للنص الخام. ويعاين محرّر HTML الصفحة داخل محرك
Chromium المدمج؛ انقر أي عنصر لإعادة تنسيقه، أو انقر نقرًا مزدوجًا لتحرير نصه،
أو انتقل إلى عرض المصدر. يُنتج خيار **Export as Word** في كلا التطبيقين ملف
`.docx` أصليًا قابلًا للتحرير بالكامل على الجهاز.

## لماذا GenOffice

- **مفتوح المصدر**، برخصة Apache-2.0، ويُطوَّر علنًا على GitHub.
- **لك لتشغيله.** تطبيقات أصلية لأنظمة macOS و Windows و Linux؛ تبقى الملفات
  على قرصك، وكل عملية تحرير وحفظ وتحويل تتم على جهازك.
- **ملفات Office حقيقية.** دعم أصلي لـ `.docx` و `.xlsx` و `.pptx`، مع الحفاظ
  على البايتات: الأجزاء التي لم تلمسها من الملف تُنسخ كما هي تمامًا.
- **PDF يُعالَج كما ينبغي.** حرِّر النص داخل الصفحة مباشرة، وحوِّل PDF إلى Word
  أو Excel أو PowerPoint على جهازك، مع OCR النظام للملفات الممسوحة ضوئيًا.
- **Markdown و HTML أيضًا**، مع تصدير محلي إلى Word و PDF.
- **بلا حساب.** لا شيء تشترك فيه، ولا أرصدة، ولا اشتراك.
- **مجاني**، للأفراد والفرق على حد سواء.

تأتي الحزمة كاملةً بثلاثة مظاهر: فاتح وداكن ومظهر النظام. تغيّر المظاهر فقط ما
يظهر على الشاشة: تحتفظ ملفات التصدير والطباعة والحفظ دائمًا بألوان المستند
نفسه.

<a id="download"></a>

## التنزيل

| المنصة                               | المتطلبات                                             | التنزيل                                                                              |
| ------------------------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **macOS** — شريحة Apple (arm64)      | macOS 11+                                             | [أحدث نسخة `.dmg` (arm64)](https://github.com/genspark-ai/genoffice/releases/latest) |
| **macOS** — Intel (x64)              | macOS 11+                                             | [أحدث نسخة `.dmg` (x64)](https://github.com/genspark-ai/genoffice/releases/latest)   |
| **Windows** (x64، لمعظم الأجهزة)     | Windows 10+، معالجات Intel/AMD                        | [أحدث مثبِّت `-x64.exe`](https://github.com/genspark-ai/genoffice/releases/latest)   |
| **Windows** على Arm (ARM64)          | Windows 11 على Arm (معالج Snapdragon X وما شابهه)     | [أحدث مثبِّت `-arm64.exe`](https://github.com/genspark-ai/genoffice/releases/latest) |
| **Linux** — Debian / Ubuntu          | x86_64، glibc 2.34+ (Ubuntu 22.04 أو أحدث)            | [أحدث نسخة `.deb`](https://github.com/genspark-ai/genoffice/releases/latest)         |
| **Linux** — Fedora / RHEL / openSUSE | x86_64، glibc 2.34+ (Fedora 35+، RHEL 9+، Leap 15.6+) | [أحدث نسخة `.rpm`](https://github.com/genspark-ai/genoffice/releases/latest)         |
| **Linux** — توزيعات أخرى             | x86_64، glibc 2.34+، وFUSE 2                          | [أحدث نسخة `.AppImage`](https://github.com/genspark-ai/genoffice/releases/latest)    |

جميع الإصدارات مبنية من الفرع `main`؛ ومثبِّتات macOS و Windows موقَّعة رقميًا.
الإصدارات الأقدم متوفرة في صفحة [Releases](https://github.com/genspark-ai/genoffice/releases).
أما Flatpak و Nix وصورة Docker للتحويل الدفعي دون واجهة رسومية فموصوفة في
[packaging/README.md](../../packaging/README.md).

<details>
<summary><b>التثبيت على Linux</b></summary>

يتم تثبيت حزمة deb باستخدام apt — فيسحب التبعيات المطلوبة ويضيف GenOffice إلى
قائمة التطبيقات:

```bash
sudo apt install ./genoffice_<version>_amd64.deb
```

على Fedora / عائلة RHEL / openSUSE، ثبِّت حزمة rpm بدلًا من ذلك:

```bash
sudo dnf install ./genoffice-<version>.x86_64.rpm     # Fedora / RHEL family
sudo zypper install ./genoffice-<version>.x86_64.rpm  # openSUSE
```

يعمل ملف AppImage مباشرة من مكانه: ثبِّت بيئة تشغيل FUSE 2
(`sudo apt install libfuse2`؛ وعلى Ubuntu 24.04 اسم الحزمة هو `libfuse2t64`)،
ثم اجعل الملف قابلاً للتنفيذ، وشغِّله:

```bash
chmod +x GenOffice-<version>.AppImage
./GenOffice-<version>.AppImage
```

</details>

## كيف يعمل

تتشارك سبعة تطبيقات Electron — Docs و Sheets و Slides و PDF و Markdown و
HTML بالإضافة إلى الغلاف (shell) ذي التبويبات — طبقة محرِّك واحدة من حزم
TypeScript خالصة، إلى جانب عملية Rust مساعدة (sidecar) لملفات `.xlsx`. الملف
الأصلي هو المرجع دائمًا: تُطبَّق التعديلات كرقعات (patches) ضيّقة النطاق، وكل
ما لم يلمسه المحرِّر يبقى سليمًا دون تغيير عند إعادة الحفظ.

```
open docx ─► archive original by hash (never touched)
          ─► parse word/document.xml into a block tree, each block anchored to its original XML
          ─► Tiptap editor (dirty tracking per block)
save      ─► dirty blocks → OOXML fragments (referencing existing styles only)
          ─► splice into the original document.xml; untouched blocks keep their bytes
          ─► repack the zip; every other entry is copied byte-for-byte
```

توجد المحرِّكات ضمن `packages/` (`docx-engine`، و`pptx-engine`،
و`pptx-render`، و`pptx-ops`، و`pdf2docx`، و`html2docx`، و`xlsx-gateway`،
و`file-parse`، و`font-metrics`، و`i18n`، و`ui` وغيرها)؛ أما محرِّك `.xlsx`
المكتوب بلغة Rust ففي `apps/sheets/native/xlsx-engine`. ويقدّم
[CONTRIBUTING.md](../../CONTRIBUTING.md) جولة تفصيلية حزمة بحزمة.

<a id="development"></a>

## التطوير

المتطلبات المسبقة: Node 22+ و npm 10+ وسلسلة أدوات Rust (يجب أن يكون `cargo`
متاحًا في PATH) للعملية المساعدة الخاصة بـ `.xlsx` في Sheets.

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

يقوم أمر `npm run build -w @genoffice/sheets` بتجميع عملية Rust المساعدة
تلقائيًا. راجع [CONTRIBUTING.md](../../CONTRIBUTING.md) لمعرفة الفحوصات التي
يجب أن يمر بها كل تغيير وكيفية دمج طلبات السحب (pull requests).

## المجتمع

- **أبلغ عن خطأ أو اطلب ميزة جديدة** عبر
  [GitHub Issues](https://github.com/genspark-ai/genoffice/issues).
- **أضِف نجمة (Star) للمستودع** إذا كان GenOffice مفيدًا لك — فهذه أفضل طريقة
  لدعم المشروع.

## الأسئلة الشائعة

<details>
<summary><b>هل GenOffice مجاني؟</b></summary>

نعم. GenOffice مجاني ومفتوح المصدر بموجب ترخيص Apache-2.0 — لا نسخة تجريبية
ولا حساب ولا باقة مدفوعة.

</details>

<details>
<summary><b>هل يمكن لـ GenOffice فتح ملفات Microsoft Word و Excel و PowerPoint؟</b></summary>

نعم. يفتح GenOffice ملفات `.docx` و `.xlsx` و `.pptx` الأصلية ويحفظها.
والحفظ يحافظ على البايتات: تُكتب الأجزاء التي لم تلمسها من الملف كما هي
حرفيًا بايتًا ببايت، فتستمر المستندات في العمل في Microsoft Office.

</details>

<details>
<summary><b>هل يعمل GenOffice دون اتصال بالإنترنت؟</b></summary>

نعم. فتح المستندات وتحريرها وحفظها وتحويلها محلي بالكامل ولا يحتاج إلى أي
اتصال بالشبكة. لا تُستخدم الشبكة إلا للتحقق من التحديثات، وتنزيل الخطوط
الاختيارية، وإحصاءات الاستخدام المجهولة التي يمكنك إيقافها من
Settings → General.

</details>

<details>
<summary><b>هل يمكن لـ GenOffice تحرير ملفات PDF؟</b></summary>

نعم — تحرير حقيقي لنص وصور PDF يعيد كتابة تدفّق محتوى الصفحة مع الحفاظ على
الخطوط الأصلية، وليس بتعليقات تغطية فوق النص.

</details>

<details>
<summary><b>هل يمكن لـ GenOffice تحويل PDF إلى Word أو Excel أو PowerPoint؟</b></summary>

نعم — بالكامل على الجهاز: استخراج على مستوى الحروف عبر PDFium إلى جانب تحليل
للتخطيط يعتمد على الأشكال الهندسية، دون أي خدمة سحابية أو رفع للملفات. وتشمل
هذه الميزة أيضًا الصفحات الممسوحة: تقرؤها تقنية OCR الخاصة بنظام التشغيل على
macOS و Windows، فتُحوَّل إلى نص قابل للتحرير بدلًا من صورة للصفحة.

</details>

<details>
<summary><b>هل يمكن لـ GenOffice تحويل HTML إلى Word؟</b></summary>

نعم — يُنتج خيار Export as Word في تطبيق HTML ملف `.docx` أصليًا قابلًا
للتحرير، بالكامل على الجهاز. تُعرَض الصفحة داخل محرك Chromium المدمج وتُحوَّل
إلى عناصر Word حقيقية: عناوين، وفقرات، وقوائم، وجداول، وبطاقات، وصفوف مؤشرات
أداء، وحقول نماذج، وخلفيات صفحات؛ ولا تُضمَّن كصور إلا العناصر البصرية التي لا
نظير لها في Word (كالرسوم البيانية والأيقونات والصناديق المزخرفة).

</details>

<details>
<summary><b>هل يجمع GenOffice أي بيانات؟</b></summary>

ترسل الإصدارات الرسمية المعبَّأة بيانات استخدام مجهولة ومحدودة بشكل افتراضي،
ويمكنك تعطيل هذا الإرسال في أي وقت من Settings → General. لا تُرسَل عبر هذه
البيانات أبدًا محتويات المستندات، أو أسماء الملفات، أو مساراتها، أو عناوين
البريد الإلكتروني. راجع [GenOffice Privacy](../../PRIVACY.md) للاطلاع على
الإفصاح الكامل عن الأحداث والبيانات المُجمَّعة.

</details>

## الأمان

راجع [SECURITY.md](../../SECURITY.md) للتعرّف على وضع الأمان الخاص بالعمليات
(عزل واجهة العرض renderer في صندوق رمل، والتحقق من رسائل IPC، والتحكم في
الروابط الخارجية).

## شكر وتقدير

ما كان لـ GenOffice أن يكون ممكنًا لولا هذه المشاريع المفتوحة المصدر:

- [Electron](https://www.electronjs.org/) — بيئة تشغيل سطح المكتب لكل التطبيقات.
- [Univer](https://github.com/dream-num/univer) (Apache-2.0) — نواة واجهة جدول
  البيانات التي يبني عليها تطبيق Sheets.
- [PDFium](https://pdfium.googlesource.com/pdfium/) (BSD-3-Clause، مُضمَّن عبر
  [@embedpdf/pdfium](https://github.com/embedpdf/embed-pdf-viewer)) — محرِّك
  تدفّق المحتوى الذي يقوم عليه التحرير الحقيقي لنص وصور PDF.
- [pdf.js](https://github.com/mozilla/pdf.js) (Apache-2.0) و
  [pdf-lib](https://github.com/Hopding/pdf-lib) (MIT) — عرض ملفات PDF وتجميع
  المستندات.
- [Tiptap](https://tiptap.dev/) / [ProseMirror](https://prosemirror.net/) —
  محرِّرا الكُتل في تطبيقَي Docs و Markdown.
- [CodeMirror](https://codemirror.net/) (MIT) — محرِّر الكود المصدري في تطبيق HTML.
- [Konva](https://konvajs.org/) — عرض لوحة الرسم لتطبيق Slides ورسوم Sheets
  البيانية.
- [HarfBuzz](https://github.com/harfbuzz/harfbuzz) (wasm) — مقاييس تشكيل
  النص (text-shaping) للأنظمة الكتابية المعقّدة.
- [calamine](https://github.com/tafia/calamine) و
  [IronCalc](https://github.com/ironcalc/IronCalc) — طبقتا القراءة والحساب في
  عملية Rust المساعدة الخاصة بـ xlsx.
- [libeot](https://github.com/umanwizard/libeot) (MPL-2.0) — أداة فكّ تشفير
  MicroType Express لخطوط PowerPoint المُضمَّنة، تم نقلها إلى TypeScript.
- [React](https://react.dev/) (MIT) — طبقة واجهة المستخدم لكل التطبيقات.
- [Mermaid](https://mermaid.js.org/) (MIT) و [KaTeX](https://katex.org/)
  (MIT) — الرسوم البيانية والمعادلات الرياضية في Markdown و Docs.
- [opentype.js](https://opentype.js.org/) (MIT) — تحليل الخطوط لاستخراج
  المقاييس وأشكال الحروف (glyphs).
- [JSZip](https://stuk.github.io/jszip/) (MIT) و
  [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser)
  (MIT) — طبقتا حاوية OOXML و XML.
- [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons)
  (MIT) — مجموعة الأيقونات المستخدَمة في كل أشرطة الأدوات.
- [electron-updater](https://www.electron.build/) (MIT) — التحديثات داخل
  التطبيق.
- خطوط Liberation و Carlito و Caladea و Noto CJK (OFL/Apache-2.0) — الخطوط
  المُضمَّنة في المستندات.

يُعيد أمر `npm run notices` توليد ملخّص ترخيص الجهات الخارجية المُضمَّن
(`tools/gen-third-party-notices.mjs`)؛ وجميع تبعيات وقت التشغيل مرخَّصة بموجب
MIT/Apache-2.0/BSD-3-Clause/OFL.

## الترخيص

يخضع GenOffice لترخيص [Apache License 2.0](../../LICENSE)، مع استثناء واحد:
دليل `ee/` محجوز لوحدات المؤسسات (enterprise) المستقبلية ويخضع لـ
[GenOffice Enterprise License](../../ee/LICENSE).

اسما وشعارا GenOffice و Genspark هما علامتان تجاريتان مملوكتان لشركة
Mainfunc, Inc. لا يمنح ترخيص Apache-2.0 إذنًا باستخدامهما (راجع البند 6)؛
ويجب أن تستخدم النسخ المتفرعة (forks) هويتها البصرية الخاصة.
