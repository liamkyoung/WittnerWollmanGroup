import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { adminsOrPublished } from '../../access/adminsOrPublished'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'

export const InvolvementEvents: CollectionConfig = {
  slug: 'involvementEvents',
  admin: {
    useAsTitle: 'title',
  },
  versions: {
    drafts: true,
  },
  access: {
    read: adminsOrPublished,
    update: admins,
    create: admins,
    delete: admins,
  },
  hooks: {
    beforeChange: [populatePublishedAt],
    // afterChange: [revalidateListing],
    // afterRead: [populateArchiveBlock], // FIX FOR LATER TO SHOW DIFFERENT
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Event Name',
      required: true,
    },
    {
      name: 'description',
      label: 'Event Description',
      type: 'textarea',
      required: false,
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Image',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'eventDate',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'd MMM yyy',
        },
      },
    },
  ],
}
