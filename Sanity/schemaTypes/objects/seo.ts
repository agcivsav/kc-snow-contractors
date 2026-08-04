import {defineField, defineType} from 'sanity'
import {SearchIcon} from '@sanity/icons'

export const seoType = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  icon: SearchIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'SEO title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'SEO description',
      type: 'text',
      rows: 3,
    }),
  ],
})
