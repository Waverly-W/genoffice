/**
 * The `go:redact` marker older versions of the suite wrote into documents. The
 * editor no longer creates it, but a file that carries one must still declare
 * the namespace on save, or Word reports the document as corrupt. pptx-engine
 * keeps the same three values for decks (redaction-xml.ts); they must match.
 */
export const REDACT_NS = 'https://genspark.ai/genoffice/redaction/2026'
export const REDACT_PREFIX = 'go'
export const REDACT_EL = `${REDACT_PREFIX}:redact`
