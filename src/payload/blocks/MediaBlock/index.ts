import type { Block } from 'payload/types'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  fields: [
    {
      name: 'imgPosition',
      type: 'select',
      defaultValue: 'default',
      options: [
        {
          label: 'Center 50%',
          value: 'default',
        },
        {
          label: 'Left 50%',
          value: 'left',
        },
        {
          label: 'Right 50%',
          value: 'right',
        },
        {
          label: 'Fullscreen',
          value: 'fullscreen',
        },
      ],
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
