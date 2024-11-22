import type { Block } from 'payload/types'

export const StatsAndVideoBlock: Block = {
  slug: 'statsAndVideoBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
    },
    {
      name: 'facts', // required
      type: 'array', // required
      label: 'Project Facts',
      minRows: 1,
      maxRows: 4,
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
      name: 'youtubeLink',
      type: 'text',
      label: 'YouTube Link (Use the Embedded URL)',
      required: true,
    },
    {
      name: 'youtubeThumbnail',
      type: 'upload',
      relationTo: 'media',
      label: 'YouTube Thumbnail Image (Displays As Video Until Clicked)',
      required: true,
    },
    {
      name: 'bgImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
    },
  ],
}
