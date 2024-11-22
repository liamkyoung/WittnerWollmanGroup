import type { CollectionConfig } from 'payload/types'

import { slugField } from '../../../payload/fields/slug'
import { admins } from '../../access/admins'
import { adminsOrPublished } from '../../access/adminsOrPublished'
import { Archive } from '../../blocks/ArchiveBlock'
import { Content } from '../../blocks/Content'
import { MediaBlock } from '../../blocks/MediaBlock'
import { ProjectBlock } from '../../blocks/ProjectBlock'
import { StatBlock } from '../../blocks/StatBlock'
import { StatsAndVideoBlock } from '../../blocks/StatsAndVideoBlock'
import AdminAddressSearch from '../../customComponents/AdminAddressSearch'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
// import AdminAddressSearch from '../../../components/custom/GoogleMap/AdminAddressSearch'
import { revalidateListing } from './hooks/revalidateListing'

export const Listings: CollectionConfig = {
  slug: 'listings',
  admin: {
    useAsTitle: 'title',
    preview: doc => {
      return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/next/preview?url=${encodeURIComponent(
        `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/listings/${doc?.slug}`,
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
    afterChange: [revalidateListing],
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
              type: 'text',
              required: true,
            },
            {
              name: 'address',
              label: 'Property Address',
              type: 'text',
              required: true,
              admin: {
                components: {
                  Field: AdminAddressSearch,
                },
              },
              // Able to get from map
            },
            {
              name: 'streetAddress',
              label: 'Street',
              type: 'text',
              required: true,
              admin: { hidden: true },
              // Able to get from map
            },
            {
              name: 'neighborhood',
              label: 'Neighborhood',
              type: 'text',
              admin: { hidden: true },
              // Able to get from map
            },
            {
              name: 'city',
              label: 'City',
              type: 'text',
              required: true,
              admin: { hidden: true },
              // Able to get from map
            },
            {
              name: 'zipCode',
              label: 'Zip Code',
              type: 'text',
              required: true,
              admin: { hidden: true },
              // Able to get from map
            },
            {
              name: 'county',
              label: 'County',
              type: 'text',
              required: true,
              admin: { hidden: true },
              // Able to get from map
            },
            {
              name: 'state',
              label: 'State',
              type: 'text',
              required: true,
              admin: { hidden: true },
              // Able to get from map
            },
            {
              name: 'latitude',
              label: 'Latitude',
              type: 'number',
              required: true,
              admin: {
                hidden: true,
              },
              // Able to get from map
            },
            {
              name: 'longitude',
              label: 'Longitude',
              type: 'number',
              required: true,
              admin: {
                hidden: true,
              },
              // Able to get from map
            },
            {
              name: 'price',
              label: 'Listing Price (in USD)',
              type: 'number',
              required: true,
              validate: value => {
                if (value < 1) {
                  return 'Value must be greater than or equal to 1'
                }

                return true
              },
            },
            {
              name: 'agents', // required
              label: 'Agent(s) on Listing',
              type: 'relationship', // required
              relationTo: 'teammates', // required
              hasMany: true,
            },
          ],
        },
        {
          label: 'Images',
          fields: [
            {
              name: 'coverImage',
              label: 'Cover Image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'imageGallery',
              label: 'Additional Images',
              type: 'array',
              fields: [
                {
                  name: 'image',
                  label: 'Image',
                  type: 'upload',
                  relationTo: 'media', // Replace 'media' with the slug of your media collection
                },
                {
                  name: 'altText',
                  label: 'Alt Text',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'caption',
                  label: 'Caption',
                  type: 'text',
                },
              ],
            },
          ],
        },
        {
          label: 'Features',
          fields: [
            {
              name: 'propertyType',
              label: 'Property Type',
              type: 'select',
              hasMany: true,
              options: [
                {
                  label: 'Shopping Center',
                  value: 'shoppingCenter',
                },
                {
                  label: 'Business Opportunity',
                  value: 'bizOpportunity',
                },
                {
                  label: 'Multi-Family',
                  value: 'multiFamily',
                },
                {
                  label: 'Office',
                  value: 'office',
                },
                {
                  label: 'Mixed Use',
                  value: 'mixedUse',
                },
              ],
            },
            {
              name: 'propertySubtype',
              label: 'Subtype',
              type: 'text',
            },
            {
              name: 'sqFt',
              label: 'Square Footage',
              type: 'number',
              required: true,
            },
            {
              name: 'sqFtLand',
              label: 'Land Size (Sq Ft)',
              type: 'number',
            },
            {
              name: 'sqFtLot',
              label: 'Lot Size (Acres)',
              type: 'number',
            },
            {
              name: 'bedCount',
              label: 'Beds',
              type: 'number',
            },
            {
              name: 'bathroomCount',
              label: 'Bathrooms',
              type: 'number',
            },
            {
              name: 'overview',
              label: 'Property Overview',
              type: 'textarea',
              required: true,
            },
            {
              name: 'areaOverview',
              label: 'Area Overview',
              type: 'textarea',
            },
            {
              name: 'zoningType',
              label: 'Zone',
              type: 'select',
              options: [
                {
                  label: 'Commercial',
                  value: 'C',
                },
                {
                  label: 'Residential',
                  value: 'r',
                },
                {
                  label: 'Industrial',
                  value: 'i',
                },
              ],
            },
            {
              name: 'tenancyType',
              label: 'Tenancy Type',
              type: 'select',
              options: [
                {
                  label: 'Single Tenant',
                  value: 'Single Tenant',
                },
                {
                  label: 'Multi-Tenant',
                  value: 'Multi-Tenant',
                },
              ],
            },
            {
              name: 'yearBuilt',
              label: 'Year Built',
              type: 'number',
              validate: value => {
                if (value < 1492) {
                  return 'Value must be greater than or equal to 1492'
                }

                return true
              },
            },
            {
              name: 'occupancy',
              label: '% Occupied',
              type: 'number',
              validate: value => {
                if (value < 0) {
                  return 'Value must be greater than or equal to 0'
                }

                if (value > 100) {
                  return 'Value must be less than or equal to 100'
                }

                return true
              },
            },
          ],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              required: true,
              blocks: [Content, MediaBlock, Archive, ProjectBlock, StatsAndVideoBlock, StatBlock],
            },
          ],
        },
      ],
    },

    slugField(),
  ],
}
