import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { adminsOrPublished } from '../../access/adminsOrPublished'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'

export const Companies: CollectionConfig = {
  slug: 'companies',
  admin: {
    useAsTitle: 'name',
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
      name: 'name',
      label: 'Company Name',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Company Image',
      relationTo: 'media',
      required: true,
    },
  ],
}
