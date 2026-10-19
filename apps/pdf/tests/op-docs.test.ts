/**
 * Op docs ↔ registry coverage: guided validation errors quote the doc table,
 * so it must track the registry exactly.
 */
import { describe, expect, it } from 'vitest'
import { opNames, planEditOps } from '../src/renderer/edit-ops'
import { OP_DOCS } from '../src/shared/op-docs'

const IN_FLIGHT = new Set(Object.keys(OP_DOCS).filter((n) => OP_DOCS[n]!.pending))

describe('op docs coverage', () => {
  it('every registered op has a doc line', () => {
    expect(opNames().filter((n) => !OP_DOCS[n])).toEqual([])
  })

  it('every doc line matches a registered op', () => {
    const registered = new Set(opNames())
    expect(Object.keys(OP_DOCS).filter((n) => !registered.has(n) && !IN_FLIGHT.has(n))).toEqual([])
  })

  it('a validation failure appends the one-line usage', () => {
    const plan = planEditOps(
      [{ op: 'rotatePages', pages: [0], dir: 45 }],
      { readOnly: false, pageCount: 2, deleted: new Set(), claimedImages: new Set() },
      () => 'x',
    )
    expect(plan.failures[0]!.error).toContain(`Usage: rotatePages ${OP_DOCS.rotatePages!.sig}`)
  })

  it('an unknown op lists the registry without a usage line', () => {
    const plan = planEditOps(
      [{ op: 'nope' }],
      { readOnly: false, pageCount: 2, deleted: new Set(), claimedImages: new Set() },
      () => 'x',
    )
    expect(plan.failures[0]!.error).toContain('Unknown op "nope"')
    expect(plan.failures[0]!.error).toContain('rotatePages')
    expect(plan.failures[0]!.error).not.toContain('Usage:')
  })
})
