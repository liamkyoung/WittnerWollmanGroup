import type { CollectionConfig, FieldHook } from 'payload/types'
import formatSlug from '../../../payload/utilities/formatSlug'

export const TeamMember: CollectionConfig = {
  slug: 'teamMember',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
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
        beforeValidate: [formatSlug('name')],
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
        beforeChange: [
          ({ value }) => {
            if (!value) return value // If the field is empty, return as is.
            if (value.startsWith('@')) {
              return value // If the username already starts with '@', return as is.
            }
            return `@${value}` // Prepend '@' to the username.
          },
        ],
      },
    },
  ],
}
