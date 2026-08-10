import {defineArrayMember, defineField, defineType} from 'sanity'
import {CubeIcon} from '@sanity/icons'

export const machinesSectionType = defineType({
  name: 'machinesSection',
  title: 'Machines Section',
  type: 'object',
  icon: CubeIcon,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subheading',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'machines',
      type: 'array',
      of: [defineArrayMember({type: 'machineCard'})],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {title: 'heading', machines: 'machines'},
    prepare({title, machines}) {
      const count = Array.isArray(machines) ? machines.length : 0
      return {
        title: title || 'Machines Section',
        subtitle: `Machines · ${count} card${count === 1 ? '' : 's'}`,
        media: CubeIcon,
      }
    },
  },
})
