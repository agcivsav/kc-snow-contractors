import {defineArrayMember, defineField, defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'eyebrow',
      type: 'string',
      description: 'Small label above the headline',
    }),
    defineField({
      name: 'eyebrowStyle',
      title: 'Eyebrow style',
      type: 'string',
      options: {
        list: [
          {title: 'Yellow', value: 'yellow'},
          {title: 'Green', value: 'green'},
        ],
        layout: 'radio',
      },
      initialValue: 'yellow',
      hidden: ({parent}) => !parent?.eyebrow,
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'highlightedTitle',
      title: 'Highlighted title line',
      type: 'string',
      description: 'Second line shown in accent color',
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [defineArrayMember({type: 'button'})],
      validation: (rule) => rule.max(3),
    }),
    defineField({
      name: 'image',
      title: 'Background image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: (rule) =>
            rule.required().warning('Alt text helps SEO and accessibility'),
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'title', media: 'image'},
    prepare({title, media}) {
      return {
        title: title || 'Hero',
        subtitle: 'Hero',
        media: media ?? ImageIcon,
      }
    },
  },
})
