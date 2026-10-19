/**
 * One-line usage signatures for every canonical edit op, appended to guided
 * validation errors; a test asserts it covers the registry exactly. Coordinates
 * are PDF user space points (y up); page indices are 0-based original indices.
 */

export interface OpDoc {
  sig: string
  group: 'annotate' | 'text' | 'image' | 'form' | 'page' | 'document'
  /** Registered by an in-flight branch: hidden until it lands */
  pending?: true
}

export const OP_DOCS: Record<string, OpDoc> = {
  // ── annotate ──────────────────────────────────────────────────────────
  addMarkup: {
    sig: '{markup:{pageIndex,type:"highlight"|"underline"|"strikeout",color:[r,g,b],quads:[[x1,yT,x2,yT,x1,yB,x2,yB],…]}} — quads payload',
    group: 'annotate',
  },
  removeMarkup: {
    sig: '{id} — a pending markup by its record id',
    group: 'annotate',
  },
  deleteSavedAnnot: {
    sig: '{annot:{pageIndex,objNum,type,rect,…}} — a markup or note already saved in the file',
    group: 'annotate',
  },
  editSavedNote: {
    sig: '{annot:{pageIndex,objNum,…},contents,force?} — rewrite a saved note comment in place',
    group: 'annotate',
  },
  addDrawing: {
    sig: '{drawing:{kind:"ink"|"rect"|"ellipse"|"line"|"arrow"|"image"|"note",pageIndex,…},formWidgetId?} — geometry payload',
    group: 'annotate',
  },
  removeDrawing: {
    sig: '{id} — a pending drawing or note by its record id; whole threads go through delete_note',
    group: 'annotate',
  },
  setNoteContents: {
    sig: '{id,contents} — rewrite a pending note',
    group: 'annotate',
  },
  moveDrawing: {
    sig: '{id,dx,dy} — shift a pending drawing (points, PDF user space)',
    group: 'annotate',
  },
  setDrawingRect: {
    sig: '{id,rect:[x1,y1,x2,y2]} — resize a pending image stamp',
    group: 'annotate',
  },

  // ── text ──────────────────────────────────────────────────────────────
  putTextEdit: {
    sig: '{input:TextEditInput,id?,cover?,moveBy?,paper?} — engine record',
    group: 'text',
  },
  removeTextEdit: {
    sig: '{id} — a pending text edit by its record id',
    group: 'text',
  },
  addTextInsert: {
    sig: '{input:TextInsertInput} — positioned text block',
    group: 'text',
  },
  removeTextInsert: {
    sig: '{id} — a pending text insert by its record id',
    group: 'text',
  },
  patchTextInsert: {
    sig: '{id,input:{text?,fontSize?,color?,origin?,…}} — change fields of a pending text insert; edit_inserted_text / move_inserted_text re-measure the lines',
    group: 'text',
  },

  // ── image ─────────────────────────────────────────────────────────────
  addImageEdit: {
    sig: '{input:{kind:"insertImage"|"transformImage"|"replaceImage"|"deleteImage",pageIndex,…}} — PNG payload',
    group: 'image',
  },
  setImageEditRect: {
    sig: '{id,rect:[x1,y1,x2,y2]} — move/resize a pending image edit',
    group: 'image',
  },
  bakeImageEdit: {
    sig: '{id,image,rect,opacityBase?} — PNG payload',
    group: 'image',
  },
  patchImageEdit: {
    sig: '{id,input?:{rect?,layer?,quarterTurns?,image?},opacityBase?:string|null} — change fields of a pending image edit',
    group: 'image',
  },
  setStaticFillImage: {
    sig: '{id,image,staticFill} — PNG payload',
    group: 'image',
  },
  removeImageEdit: {
    sig: '{id} — a pending image edit by its record id',
    group: 'image',
  },

  // ── form ──────────────────────────────────────────────────────────────
  setFormValue: {
    sig: '{value:{name,kind:"text"|"checkbox"|"radio"|"choice",value?,checked?}} — field names from list_form_fields',
    group: 'form',
  },
  addFormField: {
    sig: '{field:{name,kind:"text"|"checkbox"|"radio"|"choice"|"signature",pageIndex,rect:[x1,y1,x2,y2],required?,multiLine?,maxLen?,fontSize?,textAlignment?,value?,checked?,exportValue?,options?,dateFormat?}} — author a new fillable AcroForm field (Form Design); it becomes a real widget on save',
    group: 'form',
  },
  patchFormField: {
    sig: '{id,input:{name?,rect?,required?,multiLine?,maxLen?,fontSize?,textAlignment?,value?,checked?}} — change a pending authored field',
    group: 'form',
  },
  removeFormField: {
    sig: '{id} — drop a pending authored field',
    group: 'form',
  },
  editFormWidget: {
    sig: '{widgetId,fieldName,input:{rect?,required?,remove?}} — move, re-flag or remove a widget already saved in the file (Form Design)',
    group: 'form',
  },

  // ── page ──────────────────────────────────────────────────────────────
  insertBlankPage: {
    sig: '{after:pageIndex|null,pageIndex,width,height} — add a blank page after `after` (null = first); pageIndex must be the next page index',
    group: 'page',
  },
  rotatePages: {
    sig: '{pages:[pageIndex,…],dir:90|-90|180} — clockwise degrees added to the page rotation',
    group: 'page',
  },
  deletePage: {
    sig: '{pageIndex} — at least one page must remain',
    group: 'page',
  },
  setPageOrder: {
    sig: '{order:[pageIndex,…]|null} — every original page exactly once, deleted ones at the tail; null restores the file order',
    group: 'page',
  },

  // ── document ──────────────────────────────────────────────────────────
  setStamps: {
    sig: '{cfg:{wm:WatermarkConfig|null,hf:HeaderFooterConfig|null}|null} — watermark / header-footer layer; null or both layers null clears it',
    group: 'document',
  },
  setMetadata: {
    sig: '{metadata:{title?,author?,subject?,keywords?}|null} — empty string clears a field',
    group: 'document',
  },
}

/** One-line usage for a failing op, appended to its guided error. */
export function opUsage(name: string): string | undefined {
  const doc = OP_DOCS[name]
  if (!doc || doc.pending) return undefined
  return `Usage: ${name} ${doc.sig}`
}
