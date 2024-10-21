import type { CollectionConfig, FieldHook } from 'payload/types'
import { admins } from '../../access/admins'
import { adminsOrPublished } from '../../access/adminsOrPublished'
import formatSlug from '../../utilities/formatSlug'

import { populateArchiveBlock } from '../../hooks/populateArchiveBlock'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'

import { revalidateTeammate } from './hooks/revalidateTeammate'
import { formatSocialMediaHandle } from '../../../payload/hooks/formatSocialMediaHandle'

export const Teammates: CollectionConfig = {
  slug: 'teammates',
  admin: {
    useAsTitle: 'title',
    preview: doc => {
      return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/next/preview?url=${encodeURIComponent(
        `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/teammates/${doc?.slug}`,
      )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
    },
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
    afterChange: [revalidateTeammate],
    // afterRead: [populateArchiveBlock], // FIX FOR LATER TO SHOW DIFFERENT
  },
  fields: [
    {
      name: 'title',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'profileIntroduction',
      label: 'Profile Introduction',
      type: 'text',
      required: true,
    },
    {
      name: 'bio',
      type: 'text',
      required: true,
    },
    {
      name: 'profilePic',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'strengths',
      label: 'Specializtion',
      type: 'select', // required
      hasMany: true,
      admin: {
        isClearable: true,
        isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
      },
      options: [
        {
          label: 'Residential',
          value: 'Residential Real Estate',
        },
        {
          label: 'Commercial',
          value: 'Commercial Real Estate',
        },
      ],
    },
    {
      name: 'yearsOfExperience',
      type: 'number',
      required: true,
      admin: {
        step: 1,
      },
    },
    {
      name: 'favoritePlaces', // required
      label: 'Favorite Places',
      type: 'relationship', // required
      relationTo: 'communityResources', // required
      hasMany: true,
    },
    {
      name: 'phoneNumber',
      label: 'Phone Number',
      type: 'text',
      required: true,
      validate: value => {
        // Custom validation logic for phone number
        const phoneRegex = /^\d{10}$/
        if (!phoneRegex.test(value)) {
          return 'Phone number must be exactly 10 digits'
        }
        return true
      },
    },
    {
      name: 'email',
      label: 'Contact Email',
      type: 'email',
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
      name: 'instagram',
      label: 'Instagram Username',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [formatSocialMediaHandle],
      },
    },
    {
      name: 'Facebook',
      label: 'Facebook Link',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'Linkedin',
      label: 'Linkedin Profile',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
