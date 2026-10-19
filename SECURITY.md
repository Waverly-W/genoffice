# Security Policy

## Reporting a Vulnerability

Please report suspected vulnerabilities privately via GitHub's
[private vulnerability reporting](https://github.com/genspark-ai/genoffice/security/advisories/new)
on this repository. Do not open public issues for security reports. We aim to
acknowledge reports within 72 hours.

## Process Security Posture

All application windows run with the full Electron renderer lockdown:

- `contextIsolation: true`, `nodeIntegration: false`, `sandbox: true` for every
  document window and tab view (docs, sheets, slides, pdf, markdown, shell, updater).
- Renderers reach the main process only through typed, validated IPC channels
  (payloads are schema-checked in the main process; sheets uses zod end to end).
- Every `shell.openExternal` call goes through a single shared gate
  (`@genoffice/electron-utils` → `safeExternalUrl`) that parses the URL and
  enforces a protocol allowlist (http/https; pdf link annotations additionally
  allow mailto). `file:`, `javascript:`, and custom schemes are always rejected.
- No API keys are hardcoded, and the app has no account or sign-in: documents
  are opened and saved locally.

## Threat Model: Rendering Untrusted HTML

Three pipelines render untrusted HTML in a hidden
`BrowserWindow`. Every window is treated as hostile content: full renderer
lockdown (`sandbox: true`, `contextIsolation: true`, `nodeIntegration: false`),
no preload script, no IPC surface. The slides hidden windows only load the
app's own renderer and print HTML (PDF export, print, headless export). The HTML app's DOCX export and the docs altChunk conversion drive their
windows exclusively through `executeJavaScript` under a watchdog timeout
(`Promise.race` against a fixed timeout, then `destroy()`), so a page whose
scripts never yield cannot strand the hidden window. HTML→DOCX
conversion renders the page with scripts enabled and does not sanitize the
markup before conversion — the output is a document, not a sandbox escape;
report it as a vulnerability if you find a way from the converted page into
the main process.

## Out of Scope

- Vulnerabilities that require an already-compromised machine or a modified
  binary. This includes the deliberate environment-variable override points
  for local development (`XLSX_SIDECAR_PATH`): setting them
  requires control of the process environment, which is equivalent to code
  execution on the machine.
