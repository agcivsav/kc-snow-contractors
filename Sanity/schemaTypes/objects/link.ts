import {defineField, defineType} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export const linkType = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'URL',
      type: 'string',
      description: 'Internal path (e.g. /quote) or full URL',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'label', subtitle: 'href'},
  },
})
