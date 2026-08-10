import {defineField, defineType} from 'sanity'
import {CubeIcon} from '@sanity/icons'

export const machineCardType = defineType({
  name: 'machineCard',
  title: 'Machine Card',
  type: 'object',
  icon: CubeIcon,
  fields: [
    defineField({
      name: 'model',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: (rule) => rule.required().warning('Alt text helps SEO and accessibility'),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'stats',
      type: 'array',
      of: [{type: 'statItem'}],
      validation: (rule) => rule.max(3),
    }),
    defineField({
      name: 'cta',
      type: 'button',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'category', media: 'image'},
  },
})
