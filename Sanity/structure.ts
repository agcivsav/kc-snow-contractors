import type {StructureBuilder, StructureResolver} from 'sanity/structure'
import {
  HomeIcon,
  CogIcon,
  DocumentIcon,
  CaseIcon,
  CalendarIcon,
  EarthGlobeIcon,
  UsersIcon,
  EnvelopeIcon,
  ComposeIcon,
  EditIcon,
} from '@sanity/icons'
import {MAIN_PAGES} from './lib/main-pages'

function mainPage(
  S: StructureBuilder,
  title: string,
  documentId: string,
  templateId: string,
  icon: typeof DocumentIcon = DocumentIcon,
) {
  return S.listItem()
    .title(title)
    .icon(icon)
    .child(
      S.document()
        .schemaType('page')
        .documentId(documentId)
        .title(title)
        .initialValueTemplate(templateId),
    )
}

const mainIcons: Record<string, typeof DocumentIcon> = {
  'page-how-it-works': ComposeIcon,
  'page-contractor-program': UsersIcon,
  'page-contact': EnvelopeIcon,
  'page-quote': EditIcon,
  'page-inventory': CaseIcon,
  'page-rent-wheel-loader': CaseIcon,
  'page-rent-skid-steer': CaseIcon,
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site Settings'),
        ),
      S.listItem()
        .title('Home Page')
        .icon(HomeIcon)
        .child(
          S.document().schemaType('homePage').documentId('homePage').title('Home Page'),
        ),

      S.divider(),

      ...MAIN_PAGES.map((page) =>
        mainPage(
          S,
          page.title,
          page.id,
          page.templateId,
          mainIcons[page.id] ?? DocumentIcon,
        ),
      ),

      S.divider(),

      S.listItem()
        .title('Equipment')
        .icon(CaseIcon)
        .child(
          S.documentTypeList('equipment')
            .title('Equipment')
            .defaultOrdering([{field: 'model', direction: 'asc'}]),
        ),
      S.listItem()
        .title('Rental Programs')
        .icon(CalendarIcon)
        .child(
          S.documentTypeList('rentalProgram')
            .title('Rental Programs')
            .defaultOrdering([{field: 'title', direction: 'asc'}]),
        ),
      S.listItem()
        .title('SEO Landings')
        .icon(EarthGlobeIcon)
        .child(
          S.documentTypeList('seoLanding')
            .title('SEO Landings')
            .defaultOrdering([{field: 'title', direction: 'asc'}]),
        ),

      S.divider(),

      ...S.documentTypeListItems().filter((listItem) => {
        const id = listItem.getId()
        return (
          id !== 'page' &&
          id !== 'homePage' &&
          id !== 'siteSettings' &&
          id !== 'equipment' &&
          id !== 'rentalProgram' &&
          id !== 'seoLanding'
        )
      }),
    ])
