# Slides: op journal (collaboration groundwork)

Status: groundwork landed; no network transport yet. Same-process sharing works:
two webContents attached to one `Session` (`slides:open-path` on an already-open
file, presenter audience) receive `slides:deck-changed` pushes via
`scheduleDeckBroadcast` — the first consumer of the "one side edits, the other
side sees it" loop. Reaching it from the shell UI needs a second window or a
split view, which the shell does not have yet (it focuses the existing tab).

## What exists

Every document mutation in Slides flows through the op executor (`runTxn`), and
every **applied** transaction is now appended to a per-session journal
(`Session.opLog` in `apps/slides/src/main/session-state.ts`):

```ts
interface OpLogEntry {
  seq: number // monotonic per session
  source: 'edit' | 'reset'
  ops: Array<{ op: Op; slideId?: string; created?: string[] }>
}
```

- `edit` — every UI edit (the `slides:edit-text` shim, fills, transforms,
  tables, master edits, header/footer and theme changes, …)
- `reset` — a snapshot restore happened (undo/redo); the journal cannot
  express it as ops, so consumers must full-resync past it

`slideId` is the durable id the executor stamps at apply time; `created` carries
ids minted by additive ops. Payloads (e.g. picture bytes, extracted page
sources) are kept verbatim; the ring is capped at 200 entries.

The single funnel is `journaledTxn` in `slides-main.ts` — every non-dry `runTxn`
call in the module goes through it. Do not add direct `runTxn` calls in IPC
handlers.

## What a transport still needs (phase 2)

1. **Ordering authority.** The journal is per-main-process. Multi-user needs a
   server that orders ops and fans them out; clients apply remote entries
   through the same executor.
2. **Content-addressed assets.** `addPicture` / `insertSlidePptx` payloads carry
   bytes inline; a transport should replace them with content hashes plus an
   upload channel.
3. **Inverse ops for undo.** Undo is snapshot-based today, which is why restores
   journal as `reset`. `OpRecord.before` is already captured; deriving inverse
   ops removes most `reset` markers.
4. **Derived state stays local.** Autofit resize/fontScale write-backs after
   text ops are deterministic re-derivations done by each client's post-pass;
   they are deck mutations but not journaled as ops — a remote peer re-derives
   them by replaying the text op through the same shim path.
