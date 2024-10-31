import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { adminsOrPublished } from '../../access/adminsOrPublished'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'

export const CommunityResources: CollectionConfig = {
  slug: 'communityResources',
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
      required: true,
    },
    {
      name: 'address',
      type: 'text',
      label: 'Address',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      required: true,
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      admin: {
        position: 'sidebar',
      },
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Image',
      relationTo: 'media',
      required: true,
    },
  ],
}
