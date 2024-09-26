import formatSlug from '../../utilities/formatSlug'
import { admins } from '../../access/admins'
import { adminsOrPublished } from '../../access/adminsOrPublished'
import type { CollectionConfig, FieldHook } from 'payload/types'
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
      required: true,
    },
    {
      // TODO: Remove?
      name: 'slug',
      label: 'Slug',
      type: 'text',
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
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
      name: 'bio',
      type: 'text',
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
