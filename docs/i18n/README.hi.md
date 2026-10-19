<h1 align="center">GenOffice</h1>

<p align="center"><b>एक फ़्री, ओपन-सोर्स ऑफ़िस सूट जो पूरी तरह आपकी मशीन पर चलता है।</b><br>
Word, Excel, PowerPoint, PDF, Markdown और HTML फ़ाइलें — खोली, एडिट की और उनके असली फ़ॉर्मैट में ही वापस सेव की जाती हैं।</p>

<p align="center">
  <a href="../../LICENSE"><img src="https://img.shields.io/github/license/genspark-ai/genoffice" alt="License: Apache-2.0"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases/latest"><img src="https://img.shields.io/github/v/release/genspark-ai/genoffice" alt="Latest release"></a>
  <a href="https://github.com/genspark-ai/genoffice/releases"><img src="https://img.shields.io/github/downloads/genspark-ai/genoffice/total" alt="Downloads"></a>
  <a href="https://github.com/genspark-ai/genoffice/stargazers"><img src="https://img.shields.io/github/stars/genspark-ai/genoffice?style=flat" alt="GitHub stars"></a>
</p>

<p align="center"><a href="../../README.md">English</a> · <a href="README.es.md">Español</a> · <a href="README.pt-BR.md">Português (Brasil)</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.zh-CN.md">简体中文</a> · <a href="README.zh-TW.md">繁體中文</a> · <a href="README.ko.md">한국어</a> · <a href="README.ja.md">日本語</a> · <a href="README.ar.md">العربية</a> · <a href="README.ru.md">Русский</a> · <a href="README.it.md">Italiano</a> · <a href="README.nl.md">Nederlands</a> · <a href="README.pl.md">Polski</a> · <a href="README.cs.md">Čeština</a> · <a href="README.id.md">Bahasa Indonesia</a> · <a href="README.ms.md">Bahasa Melayu</a> · <a href="README.th.md">ไทย</a> · <b>हिन्दी</b> · <a href="README.he.md">עברית</a> · <a href="README.vi.md">Tiếng Việt</a></p>

<p align="center">
  <a href="#download"><b>डाउनलोड</b></a> ·
  <a href="#development"><b>डेवलपमेंट</b></a> ·
  <a href="../../PRIVACY.md"><b>गोपनीयता</b></a>
</p>

GenOffice, macOS, Windows और Linux के लिए Microsoft Office का एक फ़्री, ओपन-सोर्स विकल्प है। यह नेटिव `.docx`, `.xlsx` और `.pptx` फ़ाइलें खोलता और सेव करता है और PDF, Markdown और HTML एडिट करता है — सब कुछ एक ही टैब वाली विंडो में। न कोई अकाउंट बनाना है, न कहीं साइन इन करना है: फ़ाइलें आपके अपने कंप्यूटर पर ही खुलती, एडिट होती, सेव होती और कन्वर्ट होती हैं।

- **असली फ़ॉर्मैट, बाइट-प्रिज़र्विंग।** सिर्फ़ वही हिस्सा दोबारा लिखा जाता है जिसे आप एडिट करते हैं। फ़ाइल का बाकी हिस्सा बाइट-दर-बाइट वैसा ही रहता है, इसलिए डॉक्यूमेंट Word, Excel और PowerPoint में पहले जैसे ही काम करते रहते हैं।
- **डिज़ाइन से ही लोकल।** न क्लाउड, न अपलोड। PDF → Word / Excel / PowerPoint, Markdown → Word और HTML → Word — ये सभी कन्वर्शन ऑन-डिवाइस होते हैं।
- **छह एडिटर, एक विंडो।** Docs, Sheets, Slides, PDF, Markdown और HTML एक ही टैब स्ट्रिप, एक ही होम स्क्रीन और सेटिंग्स का एक ही सेट शेयर करते हैं।
- **फ़ाइलों को उनके कंटेंट से ढूँढें।** होम स्क्रीन एक लोकल इंडेक्स से आपकी `.docx`, `.xlsx`, `.pptx`, PDF, Markdown और HTML फ़ाइलों के नाम, फ़ोल्डर और पूरा टेक्स्ट खोजती है — CJK भाषाएँ भी शामिल हैं।
- **21 इंटरफ़ेस भाषाएँ**, लाइट, डार्क और सिस्टम थीम, और हर भाषा में बिल्ट-इन यूज़र गाइड (F1)।

**पाएँ:** [macOS](https://github.com/genspark-ai/genoffice/releases/latest) (Apple Silicon और Intel) ·
[Windows](https://github.com/genspark-ai/genoffice/releases/latest) (x64 और Arm) ·
[Linux](https://github.com/genspark-ai/genoffice/releases/latest) (deb, rpm, AppImage) —
विवरण और आवश्यकताएँ [डाउनलोड](#download) में देखें।

## ऐप्स

| ऐप           | खोलता और सेव करता है                  | खासियतें                                                                                                                                                                       |
| ------------ | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Docs**     | `.docx` (और खोलने के लिए `.doc`)      | Word की लाइन मेट्रिक्स पर असली WYSIWYG पेजिनेशन; स्टाइल्स, टेबल, हेडर और फ़ुटर, फ़ुटनोट, विषय-सूची, कमेंट्स, ट्रैक्ड चेंजेस, तुलना, इक्वेशन और इंक।                            |
| **Sheets**   | `.xlsx`, `.xls`, `.csv`, `.tsv`       | अपने अलग प्रोसेस में चलने वाला इन-हाउस Rust `.xlsx` इंजन; लाइव फ़ॉर्मूला, चार्ट, पिवट टेबल, स्लाइसर, कंडीशनल फ़ॉर्मैटिंग, डेटा वैलिडेशन, फ़ॉर्मूला ट्रेसिंग और शीट सुरक्षा। |
| **Slides**   | `.pptx` (और खोलने के लिए `.ppt`)      | मास्टर और लेआउट, स्मार्ट गाइड, नॉन-डिस्ट्रक्टिव क्रॉपिंग, ट्रांज़िशन और एनिमेशन, स्पीकर नोट्स, प्रेज़ेंटर व्यू और PDF एक्सपोर्ट।                                              |
| **PDF**      | `.pdf`                                | PDFium के ज़रिए पेज के भीतर टेक्स्ट एडिट करें, एनोटेट करें, फ़ॉर्म भरें, साइन करें, रिडैक्ट करें, पेजों को रीऑर्डर, स्प्लिट और मर्ज करें; सिस्टम OCR के साथ ऑन-डिवाइस Word, Excel या PowerPoint में कन्वर्ट करें। |
| **Markdown** | `.md`, `.markdown`, `.txt`, `.json`   | प्लेन Markdown पर एक ब्लॉक एडिटर — टेबल, टास्क लिस्ट, Mermaid डायग्राम और गणित के साथ, बाइट-फ़ेथफ़ुल सोर्स व्यू, और Word, PDF व इमेज में एक्सपोर्ट।                          |
| **HTML**     | `.html`, `.htm`                       | एलिमेंट इंस्पेक्टर के साथ लाइव प्रीव्यू, CodeMirror सोर्स व्यू, फ़ुल-स्क्रीन प्रेज़ेंटिंग, और Word, PDF या एक सिंगल सेल्फ़-कंटेन्ड HTML फ़ाइल में एक्सपोर्ट।                   |

### Docs

Docs फ़ाइल को वैसे ही खोलता है जैसे Word उसे लेआउट करता है — मल्टी-कॉलम सेक्शन, फ़ुल-ब्लीड इमेज, शेडेड टेबल, हेडर और फ़ुटर, और Word की लाइन मेट्रिक्स पर पेजिनेशन। स्टाइल्स, कमेंट्स, ट्रैक्ड चेंजेस, इक्वेशन और इंक बिना किसी छेड़छाड़ के राउंड-ट्रिप होते हैं, और सेव करने पर सिर्फ़ वही पैराग्राफ़ दोबारा लिखे जाते हैं जिन्हें आपने बदला है।

### Sheets

कैलकुलेशन एक अलग Rust इंजन प्रोसेस में चलता है, इसलिए वहाँ कोई क्रैश होने पर भी ऐप बंद नहीं होता। फ़ॉर्मूला लाइव फ़ॉर्मूला ही रहते हैं, चार्ट और PivotChart सेव की गई वर्कबुक में असली ऑब्जेक्ट होते हैं, और सुरक्षा, डिफ़ाइंड नेम्स और कंडीशनल फ़ॉर्मैट वापस `.xlsx` में लिखे जाते हैं।

### Slides

मास्टर और लेआउट, स्मार्ट गाइड, टेबल, चार्ट, ट्रांज़िशन और एनिमेशन वाला PowerPoint-स्टाइल एडिटर। जिन स्लाइड्स को आपने नहीं छुआ, वे सेव पर बाइट-दर-बाइट एक जैसी रहती हैं; नोट्स, मास्टर और एनोटेशन बने रहते हैं, और डेक PDF में या हर स्लाइड के लिए एक PNG के रूप में एक्सपोर्ट होते हैं।

### PDF

एडिट मोड इन-प्लेस रीटाइपिंग के लिए हर टेक्स्ट ब्लॉक की आउटलाइन बनाता है; कंटेंट स्ट्रीम को PDFium के ज़रिए मूल फ़ॉन्ट्स के साथ फिर से लिखा जाता है, किसी कवर-अप एनोटेशन से नहीं। **PDF Converter → PDF to Word** एक एडिटेबल `.docx` बनाता है जो सोर्स के बगल में Docs में खुलता है। Excel और PowerPoint टारगेट भी इसी तरह काम करते हैं, और macOS व Windows पर स्कैन किए गए पेज सिस्टम OCR से गुज़रते हैं। रिडैक्शन एक नई कॉपी में ढके गए कंटेंट को सचमुच हटा देता है।

### Markdown और HTML

Markdown एक Tiptap ब्लॉक एडिटर है जो वापस प्लेन `.md` के रूप में लिखा जाता है, और रॉ टेक्स्ट के लिए एक बाइट-फ़ेथफ़ुल सोर्स व्यू भी है। HTML एडिटर बिल्ट-इन Chromium में पेज का प्रीव्यू दिखाता है; किसी भी एलिमेंट को रीस्टाइल करने के लिए उस पर क्लिक करें, उसका टेक्स्ट एडिट करने के लिए डबल-क्लिक करें, या सोर्स व्यू पर स्विच करें। दोनों ऐप्स में **Export as Word** पूरी तरह ऑन-डिवाइस एक नेटिव, एडिटेबल `.docx` बनाता है।

## GenOffice क्यों

- **ओपन सोर्स**, Apache-2.0, GitHub पर खुले तौर पर बनाया गया।
- **खुद चलाने के लिए आपका।** macOS, Windows और Linux के लिए नेटिव ऐप्स; फ़ाइलें
  आपकी डिस्क पर रहती हैं और हर एडिट, सेव और कन्वर्ज़न आपकी अपनी मशीन पर होता है।
- **असली Office फ़ाइलें।** नेटिव `.docx`, `.xlsx` और `.pptx`, बाइट-प्रिज़र्विंग:
  फ़ाइल के जिन हिस्सों को आपने नहीं छुआ वे जैसे थे वैसे ही कॉपी होते हैं।
- **PDF सही तरीके से हैंडल किया गया।** पेज के भीतर सीधे टेक्स्ट एडिट करें, और PDF को
  ऑन-डिवाइस Word, Excel या PowerPoint में कन्वर्ट करें, स्कैन के लिए सिस्टम OCR के
  साथ।
- **Markdown और HTML भी**, Word और PDF में लोकल एक्सपोर्ट के साथ।
- **कोई अकाउंट नहीं।** न साइन अप, न क्रेडिट, न सब्सक्रिप्शन।
- **फ़्री**, व्यक्तियों और टीमों दोनों के लिए।

पूरा सूट लाइट, डार्क और सिस्टम थीम के साथ आता है। थीम सिर्फ़ स्क्रीन पर दिखने वाली चीज़ बदलती है: एक्सपोर्ट, प्रिंट और सेव की गई फ़ाइलें हमेशा डॉक्यूमेंट के अपने असली रंग बरकरार रखती हैं।

<a id="download"></a>

## डाउनलोड

| प्लेटफ़ॉर्म                          | आवश्यकताएँ                                            | डाउनलोड                                                                                   |
| ------------------------------------ | ----------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **macOS** — Apple Silicon (arm64)    | macOS 11+                                             | [नवीनतम `.dmg` (arm64)](https://github.com/genspark-ai/genoffice/releases/latest)         |
| **macOS** — Intel (x64)              | macOS 11+                                             | [नवीनतम `.dmg` (x64)](https://github.com/genspark-ai/genoffice/releases/latest)           |
| **Windows** (x64, ज़्यादातर PC)      | Windows 10+, Intel/AMD                                | [नवीनतम `-x64.exe` installer](https://github.com/genspark-ai/genoffice/releases/latest)   |
| **Windows** Arm पर (ARM64)           | Windows 11 on Arm (Snapdragon X और समान)              | [नवीनतम `-arm64.exe` installer](https://github.com/genspark-ai/genoffice/releases/latest) |
| **Linux** — Debian / Ubuntu          | x86_64, glibc 2.34+ (Ubuntu 22.04 या नया)             | [नवीनतम `.deb`](https://github.com/genspark-ai/genoffice/releases/latest)                 |
| **Linux** — Fedora / RHEL / openSUSE | x86_64, glibc 2.34+ (Fedora 35+, RHEL 9+, Leap 15.6+) | [नवीनतम `.rpm`](https://github.com/genspark-ai/genoffice/releases/latest)                 |
| **Linux** — अन्य डिस्ट्रीब्यूशन      | x86_64, glibc 2.34+, FUSE 2                           | [नवीनतम `.AppImage`](https://github.com/genspark-ai/genoffice/releases/latest)            |

सभी बिल्ड `main` से बनते हैं; macOS और Windows इंस्टॉलर साइन किए हुए हैं।
पुराने वर्शन [Releases](https://github.com/genspark-ai/genoffice/releases) पेज पर मौजूद हैं।
Flatpak, Nix और एक हेडलेस Docker बैच-कन्वर्ज़न इमेज का विवरण
[packaging/README.md](../../packaging/README.md) में है।

<details>
<summary><b>Linux पर इंस्टॉल करना</b></summary>

deb, apt के साथ इंस्टॉल होता है — यह डिपेंडेंसीज़ खींच लेता है और GenOffice को applications मेन्यू में जोड़ देता है:

```bash
sudo apt install ./genoffice_<version>_amd64.deb
```

Fedora / RHEL-फ़ैमिली / openSUSE पर, इसके बजाय rpm इंस्टॉल करें:

```bash
sudo dnf install ./genoffice-<version>.x86_64.rpm     # Fedora / RHEL family
sudo zypper install ./genoffice-<version>.x86_64.rpm  # openSUSE
```

AppImage उसी जगह चलती है: FUSE 2 रनटाइम इंस्टॉल करें
(`sudo apt install libfuse2`; Ubuntu 24.04 पर पैकेज का नाम `libfuse2t64` है),
फ़ाइल को executable बनाएँ, फिर उसे चलाएँ:

```bash
chmod +x GenOffice-<version>.AppImage
./GenOffice-<version>.AppImage
```

</details>

## यह कैसे काम करता है

सात Electron ऐप्स — Docs, Sheets, Slides, PDF, Markdown, HTML और टैब्ड शेल — एक ही इंजन लेयर शेयर करते हैं, जो प्योर TypeScript पैकेजेज़ और `.xlsx` के लिए एक Rust sidecar से बना है। मूल फ़ाइल हमेशा सोर्स ऑफ़ ट्रुथ होती है: एडिट्स को छोटे, सटीक पैच के रूप में लागू किया जाता है, और जिस हिस्से को एडिटर ने नहीं छुआ, वह राउंड ट्रिप में बिना छेड़छाड़ के बचा रहता है।

```
open docx ─► archive original by hash (never touched)
          ─► parse word/document.xml into a block tree, each block anchored to its original XML
          ─► Tiptap editor (dirty tracking per block)
save      ─► dirty blocks → OOXML fragments (referencing existing styles only)
          ─► splice into the original document.xml; untouched blocks keep their bytes
          ─► repack the zip; every other entry is copied byte-for-byte
```

इंजन `packages/` के अंतर्गत हैं (`docx-engine`, `pptx-engine`, `pptx-render`, `pptx-ops`, `pdf2docx`, `html2docx`, `xlsx-gateway`, `file-parse`, `font-metrics`, `i18n`, `ui` और अन्य); Rust `.xlsx` इंजन `apps/sheets/native/xlsx-engine` में है। पैकेज-दर-पैकेज टूर [CONTRIBUTING.md](../../CONTRIBUTING.md) में मौजूद है।

<a id="development"></a>

## डेवलपमेंट

ज़रूरी चीज़ें: Node 22+, npm 10+, और Sheets के `.xlsx` sidecar के लिए एक Rust
toolchain (`cargo` PATH में होना चाहिए)।

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

`npm run build -w @genoffice/sheets` Rust sidecar को अपने-आप कंपाइल कर देता है।
हर बदलाव को किन चेक्स से गुज़रना होता है और pull request कैसे मर्ज होते हैं,
इसके लिए [CONTRIBUTING.md](../../CONTRIBUTING.md) देखें।

## कम्युनिटी

- [GitHub Issues](https://github.com/genspark-ai/genoffice/issues) में
  **बग रिपोर्ट करें या फ़ीचर रिक्वेस्ट करें**।
- अगर GenOffice आपके लिए उपयोगी है तो **रीपो को स्टार करें** — प्रोजेक्ट को
  सपोर्ट करने का यह सबसे अच्छा तरीका है।

## FAQ

<details>
<summary><b>क्या GenOffice फ़्री है?</b></summary>

हाँ। GenOffice, Apache-2.0 लाइसेंस के तहत फ़्री और ओपन-सोर्स है — न कोई ट्रायल,
न कोई अकाउंट, न कोई पेड टियर।

</details>

<details>
<summary><b>क्या GenOffice Microsoft Word, Excel और PowerPoint फ़ाइलें खोल सकता है?</b></summary>

हाँ। GenOffice नेटिव `.docx`, `.xlsx` और `.pptx` फ़ाइलें खोलता और सेव करता है।
सेविंग बाइट-प्रिज़र्विंग है: फ़ाइल के जिन हिस्सों को आपने नहीं छुआ, वे
बाइट-दर-बाइट वापस लिखे जाते हैं, इसलिए डॉक्यूमेंट Microsoft Office में पहले
जैसे ही काम करते रहते हैं।

</details>

<details>
<summary><b>क्या GenOffice ऑफ़लाइन काम करता है?</b></summary>

हाँ। डॉक्यूमेंट खोलना, एडिट करना, सेव करना और कन्वर्ट करना पूरी तरह लोकल है
और इसके लिए किसी नेटवर्क कनेक्शन की ज़रूरत नहीं होती। नेटवर्क का इस्तेमाल सिर्फ़
अपडेट चेक, वैकल्पिक फ़ॉन्ट डाउनलोड और उन गुमनाम यूसेज आँकड़ों के लिए होता है
जिन्हें आप Settings → General में बंद कर सकते हैं।

</details>

<details>
<summary><b>क्या GenOffice PDF फ़ाइलें एडिट कर सकता है?</b></summary>

हाँ — असली PDF टेक्स्ट और इमेज एडिटिंग, जो मूल फ़ॉन्ट्स को बरकरार रखते हुए
पेज की कंटेंट स्ट्रीम को फिर से लिखती है, कोई कवर-अप एनोटेशन नहीं।

</details>

<details>
<summary><b>क्या GenOffice PDF को Word, Excel या PowerPoint में कन्वर्ट कर सकता है?</b></summary>

हाँ — पूरी तरह ऑन-डिवाइस: PDFium का कैरेक्टर-लेवल एक्सट्रैक्शन और
जियोमेट्री-आधारित लेआउट एनालिसिस, न कोई क्लाउड सर्विस, न कोई अपलोड। स्कैन
किए गए पेज भी कवर होते हैं: macOS और Windows पर सिस्टम OCR उन्हें पढ़ लेता
है, इसलिए वे पेज इमेज के बजाय एडिटेबल टेक्स्ट में कन्वर्ट होते हैं।

</details>

<details>
<summary><b>क्या GenOffice HTML को Word में कन्वर्ट कर सकता है?</b></summary>

हाँ — HTML ऐप में Export as Word पूरी तरह ऑन-डिवाइस एक नेटिव, एडिटेबल
`.docx` बनाता है। पेज को बिल्ट-इन Chromium में रेंडर किया जाता है और असली
Word स्ट्रक्चर में बदला जाता है: हेडिंग, पैराग्राफ़, लिस्ट, टेबल, कार्ड, KPI
रो, फ़ॉर्म फ़ील्ड और पेज बैकग्राउंड; सिर्फ़ वही विज़ुअल जिनका Word में कोई
समकक्ष नहीं है (चार्ट, आइकन, डेकोरेटेड बॉक्स), उन्हें इमेज के रूप में एम्बेड
किया जाता है।

</details>

<details>
<summary><b>क्या GenOffice कोई डेटा कलेक्ट करता है?</b></summary>

ऑफ़िशियल पैकेज्ड बिल्ड डिफ़ॉल्ट रूप से सीमित, गुमनाम यूसेज एनालिटिक्स भेजते
हैं, और आप Settings → General के तहत कभी भी रिपोर्टिंग बंद कर सकते हैं।
एनालिटिक्स कभी भी डॉक्यूमेंट कंटेंट, फ़ाइल नाम, फ़ाइल पाथ या ईमेल एड्रेस नहीं
भेजता। पूरे इवेंट और डेटा डिस्क्लोज़र के लिए
[GenOffice Privacy](../../PRIVACY.md) देखें।

</details>

## सिक्योरिटी

प्रोसेस सिक्योरिटी पॉस्चर (रेंडरर सैंडबॉक्सिंग, IPC वैलिडेशन, एक्सटर्नल-लिंक
गेटिंग) के लिए [SECURITY.md](../../SECURITY.md) देखें।

## आभार

इन ओपन-सोर्स प्रोजेक्ट्स के बिना GenOffice संभव नहीं होता:

- [Electron](https://www.electronjs.org/) — हर ऐप का डेस्कटॉप रनटाइम।
- [Univer](https://github.com/dream-num/univer) (Apache-2.0) — वह स्प्रेडशीट
  UI कोर जिसे Sheets एक्सटेंड करता है।
- [PDFium](https://pdfium.googlesource.com/pdfium/) (BSD-3-Clause, बंडल्ड
  [@embedpdf/pdfium](https://github.com/embedpdf/embed-pdf-viewer) के
  ज़रिए) — असली PDF टेक्स्ट और इमेज एडिटिंग के पीछे का कंटेंट-स्ट्रीम इंजन।
- [pdf.js](https://github.com/mozilla/pdf.js) (Apache-2.0) और
  [pdf-lib](https://github.com/Hopding/pdf-lib) (MIT) — PDF रेंडरिंग और
  डॉक्यूमेंट असेंबली।
- [Tiptap](https://tiptap.dev/) / [ProseMirror](https://prosemirror.net/) —
  Docs और Markdown के ब्लॉक एडिटर।
- [CodeMirror](https://codemirror.net/) (MIT) — HTML का सोर्स एडिटर।
- [Konva](https://konvajs.org/) — Slides और Sheets चार्ट के लिए कैनवस
  रेंडरिंग।
- [HarfBuzz](https://github.com/harfbuzz/harfbuzz) (wasm) — जटिल स्क्रिप्ट
  के लिए टेक्स्ट-शेपिंग मेट्रिक्स।
- [calamine](https://github.com/tafia/calamine) और
  [IronCalc](https://github.com/ironcalc/IronCalc) — Rust xlsx sidecar की
  रीड और कैल्क लेयर।
- [libeot](https://github.com/umanwizard/libeot) (MPL-2.0) — एम्बेडेड
  PowerPoint फ़ॉन्ट्स के लिए MicroType Express डिकोडर, जिसे TypeScript में
  पोर्ट किया गया है।
- [React](https://react.dev/) (MIT) — हर ऐप की UI लेयर।
- [Mermaid](https://mermaid.js.org/) (MIT) और [KaTeX](https://katex.org/)
  (MIT) — Markdown और Docs में डायग्राम और गणित।
- [opentype.js](https://opentype.js.org/) (MIT) — मेट्रिक्स और ग्लिफ़
  लुकअप के लिए फ़ॉन्ट पार्सिंग।
- [JSZip](https://stuk.github.io/jszip/) (MIT) और
  [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser)
  (MIT) — OOXML कंटेनर और XML लेयर।
- [Fluent UI System Icons](https://github.com/microsoft/fluentui-system-icons)
  (MIT) — सभी रिबन में इस्तेमाल होने वाला आइकन सेट।
- [electron-updater](https://www.electron.build/) (MIT) — ऐप के भीतर
  अपडेट।
- Liberation, Carlito, Caladea, और Noto CJK फ़ॉन्ट्स (OFL/Apache-2.0) —
  बंडल्ड डॉक्यूमेंट फ़ॉन्ट्स।

`npm run notices` बंडल्ड थर्ड-पार्टी लाइसेंस समरी को फिर से जनरेट करता है
(`tools/gen-third-party-notices.mjs`); सभी रनटाइम डिपेंडेंसीज़
MIT/Apache-2.0/BSD-3-Clause/OFL हैं।

## लाइसेंस

GenOffice को [Apache License 2.0](../../LICENSE) के तहत लाइसेंस किया गया
है, एक अपवाद के साथ: `ee/` डायरेक्टरी भविष्य के एंटरप्राइज़ मॉड्यूल्स के लिए
रिज़र्व है और [GenOffice Enterprise License](../../ee/LICENSE) के तहत आती है।

GenOffice और Genspark के नाम व लोगो, Mainfunc, Inc. के ट्रेडमार्क हैं।
Apache-2.0 लाइसेंस इनके इस्तेमाल की अनुमति नहीं देता (सेक्शन 6 देखें);
फ़ॉर्क को अपनी खुद की ब्रांडिंग इस्तेमाल करनी चाहिए।
