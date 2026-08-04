import {defineField, defineType} from 'sanity'
import {BoltIcon} from '@sanity/icons'

export const statItemType = defineType({
  name: 'statItem',
  title: 'Stat',
  type: 'object',
  icon: BoltIcon,
  fields: [
    defineField({
      name: 'value',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'value', subtitle: 'label'},
  },
})
