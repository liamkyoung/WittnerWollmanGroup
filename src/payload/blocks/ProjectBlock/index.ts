import type { Block } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'

export const ProjectBlock: Block = {
  slug: 'projectBlock',
  fields: [
    invertBackground,
    {
      name: 'position',
      type: 'select',
      defaultValue: 'left',
      options: [
        {
          label: 'Left Image',
          value: 'left',
        },
        {
          label: 'Right Image',
          value: 'right',
        },
      ],
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'location',
      label: 'Neighborhood or Address',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'facts', // required
      type: 'array', // required
      label: 'Project Facts',
      minRows: 1,
      maxRows: 3,
      interfaceName: 'FactsList', // optional
      labels: {
        singular: 'Fact',
        plural: 'Facts',
      },
      fields: [
        // required
        {
          name: 'factStat',
          label: 'Fact Number',
          type: 'text',
          required: true,
        },
        {
          name: 'factDescription',
          label: 'Descriptor of Fact',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'externalLink',
      label: 'External Link',
      type: 'text',
      required: false,
    },
  ],
}
