import {defineArrayMember, defineField, defineType} from 'sanity'
import {BlockContentIcon} from '@sanity/icons'
import {richTextBlockMember} from '../objects/rich-text-block'

export const textSectionType = defineType({
  name: 'textSection',
  title: 'Text Section',
  type: 'object',
  icon: BlockContentIcon,
  description:
    'Heading, rich description, optional stats row, and a bottom CTA box with up to 2 buttons',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Description',
      type: 'array',
      of: [richTextBlockMember],
      description: 'Rich text — paragraphs, bold, lists, links',
    }),
    defineField({
      name: 'stats',
      title: 'Stats row',
      type: 'array',
      of: [defineArrayMember({type: 'statItem'})],
      description: 'e.g. 74 HP / Engine — shown as cards under the description',
      validation: (rule) => rule.max(6),
    }),
    defineField({
      name: 'bullets',
      title: 'Bullet cards (optional)',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      name: 'ctaBox',
      title: 'Bottom CTA box',
      type: 'object',
      options: {collapsible: true, collapsed: false},
      fields: [
        defineField({name: 'heading', type: 'string'}),
        defineField({name: 'description', type: 'text', rows: 2}),
        defineField({
          name: 'buttons',
          title: 'Buttons',
          type: 'array',
          of: [defineArrayMember({type: 'button'})],
          validation: (rule) => rule.max(2),
          description: 'Primary + secondary (e.g. Request a Quote, Full Specs)',
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare({title}) {
      return {
        title: title || 'Text Section',
        subtitle: 'Text Section',
        media: BlockContentIcon,
      }
    },
  },
})
