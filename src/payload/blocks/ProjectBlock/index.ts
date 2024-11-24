import type { Block } from 'payload/types'

import linkGroup from '../../../payload/fields/linkGroup'

export const ProjectBlock: Block = {
  slug: 'projectBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subheadingType',
      label: 'Subheading Type',
      type: 'select',
      defaultValue: 'none',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Text',
          value: 'text',
        },
        {
          label: 'Location or Neighborhood',
          value: 'location',
        },
      ],
    },
    {
      name: 'subheading',
      label: 'Subheading',
      type: 'text',
      required: false,
      admin: {
        condition: (data, siblingData) => siblingData?.subheadingType !== 'none',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
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
      name: 'bgColor',
      label: 'Background Color',
      type: 'select',
      defaultValue: 'white',
      options: [
        {
          label: 'White',
          value: 'white',
        },
        {
          label: 'Red',
          value: 'red',
        },
      ],
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
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}
