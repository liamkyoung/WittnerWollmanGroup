import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { adminsOrPublished } from '../../access/adminsOrPublished'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
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
      // Used as name
      name: 'title',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'quote',
      label: 'Quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Headshot of Person',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'jobTitle',
      label: 'Job Title',
      type: 'text',
      required: true,
    },
  ],
}
