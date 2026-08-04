import {defineArrayMember, defineField, defineType} from 'sanity'
import {UsersIcon} from '@sanity/icons'

export const audienceSidebarSectionType = defineType({
  name: 'audienceSidebarSection',
  title: 'Audience + Sidebar',
  type: 'object',
  icon: UsersIcon,
  description:
    'Left list of audience cards with a dark setup sidebar (steps + CTA)',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Audience cards',
      type: 'array',
      of: [defineArrayMember({type: 'featureCard'})],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'sidebar',
      title: 'Setup sidebar',
      type: 'object',
      options: {collapsible: true, collapsed: false},
      fields: [
        defineField({
          name: 'heading',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'steps',
          title: 'Steps',
          type: 'array',
          of: [defineArrayMember({type: 'string'})],
          validation: (rule) => rule.required().min(1),
        }),
        defineField({name: 'cta', type: 'button'}),
      ],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'heading', items: 'items'},
    prepare({title, items}) {
      const count = Array.isArray(items) ? items.length : 0
      return {
        title: title || 'Audience + Sidebar',
        subtitle: `Audience + Sidebar · ${count} card${count === 1 ? '' : 's'}`,
        media: UsersIcon,
      }
    },
  },
})
