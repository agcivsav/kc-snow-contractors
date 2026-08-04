import {defineArrayMember, defineField, defineType} from 'sanity'
import {LaunchIcon} from '@sanity/icons'

export const ctaBannerType = defineType({
  name: 'ctaBanner',
  title: 'CTA Banner',
  type: 'object',
  icon: LaunchIcon,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'description', type: 'text', rows: 2}),
    defineField({
      name: 'variant',
      title: 'Style',
      type: 'string',
      options: {
        list: [
          {title: 'Dark', value: 'dark'},
          {title: 'Yellow accent', value: 'accent'},
        ],
        layout: 'radio',
      },
      initialValue: 'dark',
    }),
    defineField({
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [defineArrayMember({type: 'button'})],
      validation: (rule) => rule.max(3),
    }),
    defineField({
      name: 'backgroundImage',
      type: 'image',
      options: {hotspot: true},
      hidden: ({parent}) => parent?.variant === 'accent',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'heading', media: 'backgroundImage', variant: 'variant'},
    prepare({title, media, variant}) {
      return {
        title: title || 'CTA Banner',
        subtitle: variant === 'accent' ? 'CTA Banner · Yellow' : 'CTA Banner',
        media: media ?? LaunchIcon,
      }
    },
  },
})
