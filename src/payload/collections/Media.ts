import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'
import type { CollectionConfig } from 'payload/types'

import { adminsOrPublished } from '../access/adminsOrPublished'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: path.resolve(__dirname, '../../../media'),
    mimeTypes: ['image/*', 'video/*', 'application/pdf'],
    staticURL: '/media',
    // Limit file size to 10MB
    adminThumbnail: 'thumbnail',
    // Enable resize for security
    resizeOptions: {
      width: 2048,
      height: 2048,
      fit: 'inside',
      withoutEnlargement: true,
    },
  },
  access: {
    // Only published media or admin access
    read: adminsOrPublished,
    create: ({ req: { user } }) => !!user, // Only authenticated users can upload
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: false,
    },
    {
      name: 'caption',
      type: 'richText',
      editor: slateEditor({
        admin: {
          elements: ['link'],
        },
      }),
    },
  ],
}
