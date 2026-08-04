import {defineArrayMember, defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons'

export const footerColumnType = defineType({
  name: 'footerColumn',
  title: 'Footer column',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'links',
      type: 'array',
      of: [defineArrayMember({type: 'link'})],
    }),
  ],
  preview: {
    select: {title: 'title'},
  },
})

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  groups: [
    {name: 'brand', title: 'Brand', default: true},
    {name: 'header', title: 'Header'},
    {name: 'footer', title: 'Footer'},
    {name: 'exitIntent', title: 'Exit Intent'},
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      initialValue: 'Site Settings',
      hidden: true,
    }),
    defineField({
      name: 'brandName',
      type: 'string',
      group: 'brand',
      initialValue: 'RPM Equipment Leasing',
    }),
    defineField({
      name: 'logo',
      type: 'image',
      group: 'brand',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
    defineField({
      name: 'header',
      title: 'Header / Navbar',
      type: 'object',
      group: 'header',
      options: {collapsible: true, collapsed: false},
      fields: [
        defineField({
          name: 'navLinks',
          title: 'Nav links',
          type: 'array',
          of: [defineArrayMember({type: 'link'})],
        }),
        defineField({
          name: 'cta',
          title: 'Header CTA',
          type: 'link',
        }),
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      group: 'footer',
      options: {collapsible: true, collapsed: false},
      fields: [
        defineField({
          name: 'brandDescription',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'columns',
          type: 'array',
          of: [defineArrayMember({type: 'footerColumn'})],
        }),
        defineField({
          name: 'bottomLinks',
          title: 'Bottom SEO links',
          type: 'array',
          of: [defineArrayMember({type: 'link'})],
        }),
        defineField({
          name: 'serviceAreaNote',
          type: 'string',
        }),
        defineField({
          name: 'copyrightName',
          type: 'string',
          initialValue: 'RPM Equipment Leasing',
        }),
      ],
    }),
    defineField({
      name: 'exitIntent',
      title: 'Exit intent popup',
      type: 'object',
      group: 'exitIntent',
      options: {collapsible: true, collapsed: true},
      description: 'Optional popup when visitors move to leave the site',
      fields: [
        defineField({
          name: 'enabled',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'heading',
          type: 'string',
        }),
        defineField({
          name: 'description',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'cta',
          type: 'link',
        }),
        defineField({
          name: 'dismissLabel',
          type: 'string',
          initialValue: 'No thanks',
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Site Settings', media: CogIcon}
    },
  },
})
