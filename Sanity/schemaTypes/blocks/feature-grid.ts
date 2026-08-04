import {defineArrayMember, defineField, defineType} from 'sanity'
import {ThListIcon} from '@sanity/icons'

export const featureGridType = defineType({
  name: 'featureGrid',
  title: 'Feature Grid',
  type: 'object',
  icon: ThListIcon,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'subheading', type: 'text', rows: 2}),
    defineField({
      name: 'features',
      type: 'array',
      of: [defineArrayMember({type: 'featureCard'})],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {title: 'heading', features: 'features'},
    prepare({title, features}) {
      const count = Array.isArray(features) ? features.length : 0
      return {
        title: title || 'Feature Grid',
        subtitle: `Feature Grid · ${count}`,
        media: ThListIcon,
      }
    },
  },
})
