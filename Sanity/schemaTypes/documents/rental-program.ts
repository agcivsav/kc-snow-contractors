import {defineField, defineType} from 'sanity'
import {CalendarIcon} from '@sanity/icons'

/** Rental program marketing page — create via + like Equipment (no template picker). */
export const rentalProgramType = defineType({
  name: 'rentalProgram',
  title: 'Rental Program',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Internal / list title (also used to generate the slug)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
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
      options: {collapsible: true, collapsed: false},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page builder',
      type: 'pageBuilder',
      description: 'Sections below the hero',
    }),
  ],
  preview: {
    select: {title: 'title', slug: 'slug.current', media: 'hero.image'},
    prepare({title, slug, media}) {
      return {
        title: title || 'Rental Program',
        subtitle: slug ? `/${slug}` : 'Set title + Generate slug',
        media: media ?? CalendarIcon,
      }
    },
  },
})
