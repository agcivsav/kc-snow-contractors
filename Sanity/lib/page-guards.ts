import {cleanDocId} from './main-pages'

type DocLike = {_id?: string} | undefined

export function isDocumentId(document: DocLike, id: string) {
  return cleanDocId(document?._id) === id
}

export function isContactPage(document: DocLike) {
  return isDocumentId(document, 'page-contact')
}

export function isQuotePage(document: DocLike) {
  return isDocumentId(document, 'page-quote')
}

/** Main pages that use form layouts instead of the page builder. */
export function isFormMainPage(document: DocLike) {
  return isContactPage(document) || isQuotePage(document)
}
