import type { Block } from 'payload/types'

import richText from '../../fields/richText'

export const Archive: Block = {
  slug: 'archive',
  labels: {
    singular: 'Archive',
    plural: 'Archives',
  },
  fields: [
    richText({
      name: 'introContent',
      label: 'Intro Content',
      required: false,
    }),
    {
      name: 'populateBy',
      type: 'select',
      defaultValue: 'collection',
      options: [
        {
          label: 'Collection',
          value: 'collection',
        },
        {
          label: 'Individual Selection',
          value: 'selection',
        },
      ],
    },
    {
      type: 'select',
      name: 'relationTo',
      label: 'Collections To Show',
      defaultValue: 'posts',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
      options: [
        {
          label: 'Posts',
          value: 'posts',
        },
        {
          label: 'Projects',
          value: 'projects',
        },
        {
          label: 'Listings',
          value: 'listings',
        },
        {
          label: 'Teammates',
          value: 'teammates',
        },
        {
          label: 'Involvement Groups',
          value: 'involvementGroups',
        },
        {
          label: 'Involvement Events',
          value: 'involvementEvents',
        },
        {
          label: 'Testimonials',
          value: 'testimonials',
        },
        {
          label: 'Companies',
          value: 'companies',
        },
        {
          label: 'Services',
          value: 'services',
        },
        {
          label: 'Community Resources',
          value: 'communityResources',
        },
      ],
    },
    {
      type: 'relationship',
      name: 'categories',
      label: 'Categories To Show',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
    },
    {
      type: 'number',
      name: 'limit',
      label: 'Limit',
      defaultValue: 10,
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
        step: 1,
      },
    },
    {
      type: 'relationship',
      name: 'selectedDocs',
      label: 'Selection',
      relationTo: [
        'posts',
        'projects',
        'listings',
        'teammates',
        'involvementGroups',
        'involvementEvents',
        'testimonials',
        'companies',
        'services',
        'communityResources',
      ],
      hasMany: true,
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'selection',
      },
    },
    {
      type: 'relationship',
      name: 'populatedDocs',
      label: 'Populated Docs',
      relationTo: [
        'posts',
        'projects',
        'listings',
        'teammates',
        'involvementGroups',
        'involvementEvents',
        'testimonials',
        'companies',
        'services',
        'communityResources',
      ],
      hasMany: true,
      admin: {
        disabled: true,
        description: 'This field is auto-populated after-read',
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
    },
    {
      type: 'number',
      name: 'populatedDocsTotal',
      label: 'Populated Docs Total',
      admin: {
        step: 1,
        disabled: true,
        description: 'This field is auto-populated after-read',
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
    },
    {
      name: 'bgColor',
      type: 'select',
      label: 'Background Color',
      defaultValue: 'default',
      options: [
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'Red',
          value: 'red',
        },
      ],
    },
    {
      name: 'displayHeader',
      type: 'select',
      label: 'Display Archive Header',
      defaultValue: 'yes',
      options: [
        {
          label: 'Yes',
          value: 'yes',
        },
        {
          label: 'No',
          value: 'no',
        },
      ],
    },
  ],
}
