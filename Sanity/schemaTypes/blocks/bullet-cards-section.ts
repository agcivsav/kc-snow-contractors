import {defineArrayMember, defineField, defineType} from 'sanity'
import {ThListIcon} from '@sanity/icons'

export const bulletCardType = defineType({
  name: 'bulletCard',
  title: 'Card',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'e.g. Spring',
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bullets',
      title: 'Bullet list',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {title: 'title', bullets: 'bullets'},
    prepare({title, bullets}) {
      const count = Array.isArray(bullets) ? bullets.length : 0
      return {
        title: title || 'Card',
        subtitle: `${count} item${count === 1 ? '' : 's'}`,
      }
    },
  },
})

export const bulletCardsSectionType = defineType({
  name: 'bulletCardsSection',
  title: 'Bullet Cards',
  type: 'object',
  icon: ThListIcon,
  description:
    'Centered heading, 2-column cards with bullet lists, optional bottom CTA',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      validation: (rule) => rule.required(),
      initialValue: 'What You Can Do Off-Season',
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3,
      description: 'Optional text under the heading',
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [defineArrayMember({type: 'bulletCard'})],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'ctaBox',
      title: 'Bottom CTA box',
      type: 'object',
      options: {collapsible: true, collapsed: false},
      fields: [
        defineField({name: 'heading', type: 'string'}),
        defineField({name: 'description', type: 'text', rows: 2}),
        defineField({name: 'cta', type: 'button'}),
      ],
    }),
  ],
  preview: {
    select: {title: 'heading', cards: 'cards'},
    prepare({title, cards}) {
      const count = Array.isArray(cards) ? cards.length : 0
      return {
        title: title || 'Bullet Cards',
        subtitle: `Bullet Cards · ${count} card${count === 1 ? '' : 's'}`,
        media: ThListIcon,
      }
    },
  },
})
