import {defineArrayMember, defineType} from 'sanity'

export const pageBuilderType = defineType({
  name: 'pageBuilder',
  title: 'Page builder',
  type: 'array',
  of: [
    defineArrayMember({type: 'statsBanner'}),
    defineArrayMember({type: 'machinesSection'}),
    defineArrayMember({type: 'offSeasonSection'}),
    defineArrayMember({type: 'whoWeServeSection'}),
    defineArrayMember({type: 'audienceSidebarSection'}),
    defineArrayMember({type: 'howItWorksSection'}),
    defineArrayMember({type: 'bulletCardsSection'}),
    defineArrayMember({type: 'featureGrid'}),
    defineArrayMember({type: 'textSection'}),
    defineArrayMember({type: 'ctaBanner'}),
  ],
  options: {
    insertMenu: {
      views: [{name: 'list'}],
    },
  },
})
