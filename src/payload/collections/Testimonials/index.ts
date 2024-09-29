import formatSlug from '../../utilities/formatSlug'
import { admins } from '../../access/admins'
import { adminsOrPublished } from '../../access/adminsOrPublished'
import type { CollectionConfig, FieldHook } from 'payload/types'
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
      type: 'text',
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
