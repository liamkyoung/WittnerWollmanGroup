import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { adminsOrPublished } from '../../access/adminsOrPublished'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'

export const InvolvementGroups: CollectionConfig = {
  slug: 'involvementGroups',
  admin: {
    useAsTitle: 'title',
    // preview: doc => {
    //   return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/next/preview?url=${encodeURIComponent(
    //     `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/listings/${doc?.slug}`,
    //   )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
    // },
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
      label: 'Group Name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Group Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Image',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'linkToGroupWebsite',
      type: 'text',
      label: 'Link To Group',
      required: false,
    },
  ],
}
