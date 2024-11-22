import type { Block } from 'payload/types'

export const VideoBlock: Block = {
  slug: 'videoBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
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
