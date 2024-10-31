import type { CollectionConfig } from 'payload/types'

import { slugField } from '../../../payload/fields/slug'
// import { formatSocialMediaHandle } from '../../../payload/hooks/formatSocialMediaHandle'
import { admins } from '../../access/admins'
import { adminsOrPublished } from '../../access/adminsOrPublished'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { revalidateTeammate } from './hooks/revalidateTeammate'

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
      type: 'tabs',
      tabs: [
        {
          label: 'Overview',
          fields: [
            {
              name: 'title',
              label: 'Name',
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
              name: 'profileIntroduction',
              label: 'Profile Introduction',
              type: 'textarea',
              required: true,
            },
            {
              name: 'bio',
              type: 'textarea',
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
          ],
        },
        {
          label: 'Socials',
          fields: [
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
              name: 'instagram',
              label: 'Instagram Username',
              type: 'text',
            },
            {
              name: 'Facebook',
              label: 'Facebook Username',
              type: 'text',
            },
            {
              name: 'Linkedin',
              label: 'Linkedin Username',
              type: 'text',
            },
          ],
        },
      ],
    },
    slugField(),
  ],
}
