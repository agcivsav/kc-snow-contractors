import {defineArrayMember, defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'
import {
  AutoSlugInput,
  AutoTitleInput,
  VisuallyHiddenField,
} from '../../components/AutoSlugInput'
import {
  isContactPage,
  isFormMainPage,
  isQuotePage,
} from '../../lib/page-guards'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      components: {
        field: VisuallyHiddenField,
        input: AutoTitleInput,
      },
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'hero.title', maxLength: 96},
      components: {
        field: VisuallyHiddenField,
        input: AutoSlugInput,
      },
      validation: (rule) =>
        rule.custom((slug) => {
          if (!slug?.current) {
            return 'Add a Hero title first — the URL is generated from it automatically'
          }
          return true
        }),
    }),
    defineField({
      name: 'section',
      type: 'string',
      initialValue: 'main',
      components: {field: VisuallyHiddenField},
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      options: {collapsible: true, collapsed: true},
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'hero',
      description: 'Page hero (outside the page builder)',
      options: {collapsible: true, collapsed: false},
      validation: (rule) => rule.required(),
    }),

    // —— Contact page sections ——
    defineField({
      name: 'contactForm',
      title: 'Contact form',
      type: 'object',
      hidden: ({document}) => !isContactPage(document),
      options: {collapsible: true, collapsed: false},
      fields: [
        defineField({name: 'heading', type: 'string'}),
        defineField({name: 'submitLabel', type: 'string'}),
        defineField({name: 'submittingLabel', type: 'string'}),
        defineField({name: 'successTitle', type: 'string'}),
        defineField({name: 'successMessage', type: 'text', rows: 2}),
      ],
    }),
    defineField({
      name: 'contactInfoCard',
      title: 'Contact info card',
      type: 'object',
      hidden: ({document}) => !isContactPage(document),
      options: {collapsible: true, collapsed: true},
      fields: [
        defineField({name: 'heading', type: 'string'}),
        defineField({name: 'locationLabel', type: 'string'}),
        defineField({name: 'locationValue', type: 'string'}),
        defineField({name: 'areaLabel', type: 'string'}),
        defineField({name: 'areaValue', type: 'string'}),
      ],
    }),
    defineField({
      name: 'contactQuoteCta',
      title: 'Quote CTA card',
      type: 'object',
      hidden: ({document}) => !isContactPage(document),
      options: {collapsible: true, collapsed: true},
      fields: [
        defineField({name: 'heading', type: 'string'}),
        defineField({name: 'description', type: 'text', rows: 2}),
        defineField({name: 'button', type: 'button'}),
      ],
    }),

    // —— Quote page sections ——
    defineField({
      name: 'quoteSuccess',
      title: 'Quote success state',
      type: 'object',
      hidden: ({document}) => !isQuotePage(document),
      options: {collapsible: true, collapsed: false},
      fields: [
        defineField({name: 'title', type: 'string'}),
        defineField({name: 'description', type: 'text', rows: 3}),
        defineField({name: 'homeLinkLabel', type: 'string'}),
      ],
    }),
    defineField({
      name: 'quoteSidebarFast',
      title: 'Sidebar — Fast response',
      type: 'object',
      hidden: ({document}) => !isQuotePage(document),
      options: {collapsible: true, collapsed: true},
      fields: [
        defineField({name: 'heading', type: 'string'}),
        defineField({name: 'description', type: 'text', rows: 3}),
      ],
    }),
    defineField({
      name: 'quoteSidebarWhatYouGet',
      title: 'Sidebar — What you get',
      type: 'object',
      hidden: ({document}) => !isQuotePage(document),
      options: {collapsible: true, collapsed: true},
      fields: [
        defineField({name: 'heading', type: 'string'}),
        defineField({
          name: 'bullets',
          type: 'array',
          of: [defineArrayMember({type: 'string'})],
        }),
      ],
    }),
    defineField({
      name: 'quoteSidebarMultiUnit',
      title: 'Sidebar — Multiple units',
      type: 'object',
      hidden: ({document}) => !isQuotePage(document),
      options: {collapsible: true, collapsed: true},
      fields: [
        defineField({name: 'heading', type: 'string'}),
        defineField({name: 'description', type: 'text', rows: 2}),
        defineField({name: 'link', type: 'button'}),
      ],
    }),

    defineField({
      name: 'pageBuilder',
      title: 'Page builder',
      type: 'pageBuilder',
      description: 'Sections below the hero',
      hidden: ({document}) => isFormMainPage(document),
    }),
  ],
  preview: {
    select: {
      heroTitle: 'hero.title',
      title: 'title',
      slug: 'slug.current',
    },
    prepare({heroTitle, title, slug}) {
      return {
        title: heroTitle || title || 'Untitled page',
        subtitle: slug ? `/${slug}` : 'Set hero title to generate URL',
        media: DocumentIcon,
      }
    },
  },
})
