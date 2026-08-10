import {defineArrayMember, defineField, defineType} from 'sanity'
import {BoltIcon} from '@sanity/icons'

export const statsBannerType = defineType({
  name: 'statsBanner',
  title: 'Stats Banner',
  type: 'object',
  icon: BoltIcon,
  fields: [
    defineField({
      name: 'stats',
      type: 'array',
      of: [defineArrayMember({type: 'statItem'})],
      validation: (rule) => rule.required().min(1).max(6),
    }),
  ],
  preview: {
    select: {stats: 'stats'},
    prepare({stats}) {
      const count = Array.isArray(stats) ? stats.length : 0
      return {
        title: 'Stats Banner',
        subtitle: `${count} stat${count === 1 ? '' : 's'}`,
        media: BoltIcon,
      }
    },
  },
})
