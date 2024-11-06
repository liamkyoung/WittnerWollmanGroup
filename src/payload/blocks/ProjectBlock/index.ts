import type { Block } from 'payload/types'

export const ProjectBlock: Block = {
  slug: 'projectBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subheading',
      label: 'Subheading',
      type: 'text',
      required: false,
    },
    {
      name: 'subheadingType',
      label: 'Subheading Type',
      type: 'select',
      defaultValue: 'None',
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
    {
      name: 'links', // required
      type: 'array', // required
      interfaceName: 'Links', // optional
      labels: {
        singular: 'Link',
        plural: 'Links',
      },
      minRows: 1,
      maxRows: 2,
      fields: [
        // required
        {
          name: 'link',
          label: 'Link',
          type: 'text',
          required: true,
        },
        {
          name: 'buttonName',
          label: 'Button Name',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
