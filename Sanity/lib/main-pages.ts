export const MAIN_PAGES = [
  {
    id: 'page-how-it-works',
    title: 'How It Works',
    slug: 'how-it-works',
    templateId: 'main-how-it-works',
  },
  {
    id: 'page-contractor-program',
    title: 'Contractor Program',
    slug: 'contractor-program',
    templateId: 'main-contractor-program',
  },
  {
    id: 'page-contact',
    title: 'Contact',
    slug: 'contact',
    templateId: 'main-contact',
  },
  {
    id: 'page-quote',
    title: 'Quote',
    slug: 'quote',
    templateId: 'main-quote',
  },
  {
    id: 'page-inventory',
    title: 'Inventory',
    slug: 'inventory',
    templateId: 'main-inventory',
  },
  {
    id: 'page-rent-wheel-loader',
    title: 'Rent Wheel Loader',
    slug: 'rent-wheel-loader-kansas-city',
    templateId: 'main-rent-wheel-loader',
  },
  {
    id: 'page-rent-skid-steer',
    title: 'Rent Skid Steer',
    slug: 'rent-skid-steer-kansas-city',
    templateId: 'main-rent-skid-steer',
  },
] as const

export const MAIN_PAGE_ID_SET = new Set(MAIN_PAGES.map((p) => p.id))

export const MAIN_PAGE_TEMPLATE_IDS = new Set<string>(
  MAIN_PAGES.map((p) => p.templateId),
)

export function cleanDocId(id?: string) {
  return id?.replace(/^drafts\./, '') ?? ''
}

export function getMainPageById(id?: string) {
  const clean = cleanDocId(id)
  return MAIN_PAGES.find((p) => p.id === clean)
}

export function isMainPageId(id?: string) {
  return Boolean(getMainPageById(id))
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 96)
}
