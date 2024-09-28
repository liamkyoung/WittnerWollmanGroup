import formatSlug from '../../utilities/formatSlug'
import { admins } from '../../access/admins'
import { adminsOrPublished } from '../../access/adminsOrPublished'
import type { CollectionConfig, FieldHook } from 'payload/types'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'

export const Services: CollectionConfig = {
  slug: 'services',
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
      label: 'Service Name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
    },
    {
      // Can use link to SVG, text as SVG, etc
      name: 'iconSvg',
      label: 'Icon',
      type: 'text',
      required: true,
    },
    {
      // TODO: Remove?
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      admin: {
        position: 'sidebar',
      },
      required: true,
    },
    {
      name: 'bio',
      label: 'Description',
      type: 'text',
      required: true,
    },
  ],
}
