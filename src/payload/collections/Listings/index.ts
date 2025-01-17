import type { CollectionConfig } from 'payload/types'

import richText from '../../../payload/fields/richText'
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

export const PropertyTypes = [
  // Residential
  {
    label: 'Single-Family',
    value: 'singleFamily',
  },
  {
    label: 'Multi-Family',
    value: 'multiFamily',
  },
  {
    label: 'Townhouse',
    value: 'townhouse',
  },
  {
    label: 'Condominium',
    value: 'condo',
  },
  {
    label: 'Co-op',
    value: 'co-op',
  },
  {
    label: 'Apartment',
    value: 'apt',
  },
  {
    label: 'Mobile Home',
    value: 'mobileHome',
  },
  {
    label: 'Vacation Home',
    value: 'vacationHome',
  },
  {
    label: 'Senior Living Home',
    value: 'seniorLivingHome',
  },
  {
    label: 'Shopping Center',
    value: 'shoppingCenter',
  },
  {
    label: 'Business Opportunity',
    value: 'bizOpportunity',
  },
  // Commercial
  {
    label: 'Office',
    value: 'office',
  },
  {
    label: 'Retail Property',
    value: 'retail',
  },
  {
    label: 'Industrial Property',
    value: 'industrial',
  },
  {
    label: 'Mixed Use',
    value: 'mixedUse',
  },
  {
    label: 'Hotel',
    value: 'hotel',
  },
  {
    label: 'Motel',
    value: 'motel',
  },
  {
    label: 'Restaurant',
    value: 'restaurant',
  },
  {
    label: 'Healthcare Facility',
    value: 'healthcareFacility',
  },
  {
    label: 'Storage Unit',
    value: 'storageUnit',
  },
  // Land
  {
    label: 'Vacant Land',
    value: 'vacantLand',
  },
  {
    label: 'Agricultiral Land',
    value: 'agriculturalLand',
  },
  {
    label: 'Timberland',
    value: 'timberland',
  },
  {
    label: 'Ranch Land',
    value: 'ranchLand',
  },
  {
    label: 'Recreational Land',
    value: 'recreationalLand',
  },
  {
    label: 'Development Land',
    value: 'developmentLand',
  },
  // Special Use
  {
    label: 'Religious Building',
    value: 'religion',
  },
  {
    label: 'School',
    value: 'school',
  },
  {
    label: 'University',
    value: 'university',
  },
  {
    label: 'Government Building',
    value: 'governmentBuilding',
  },
  {
    label: 'Cemetery',
    value: 'cemetery',
  },
  {
    label: 'Airport',
    value: 'airport',
  },
  {
    label: 'Utility',
    value: 'utility',
  },
  // Investment
  {
    label: 'Real Estate Investment Trusts (REITs)',
    value: 'reit',
  },
  {
    label: 'Rental Property',
    value: 'rentalProperty',
  },
  {
    label: 'Fix-and-Flip Properties',
    value: 'fixAndFlip',
  },
]

const ZoningType = [
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
]

const BuildingClass = [
  {
    label: 'A',
    value: 'A',
  },
  {
    label: 'B',
    value: 'B',
  },
  {
    label: 'C',
    value: 'C',
  },
]

const TenancyType = [
  {
    label: 'Single Tenant',
    value: 'Single Tenant',
  },
  {
    label: 'Multi-Tenant',
    value: 'Multi-Tenant',
  },
]

const UtilitySelect = [
  {
    label: 'N/A',
    value: 'n/a',
  },
  {
    label: 'Yes',
    value: 'yes',
  },
  {
    label: 'No',
    value: 'no',
  },
]

const PaymentFrequencyOptions = [
  {
    label: 'One Time',
    value: 'oneTime',
  },
  {
    label: 'Dollar / SQ FT / Year',
    value: 'dollarPerSqPerYear',
  },
  {
    label: 'Monthly',
    value: 'monthly',
  },
  {
    label: 'Yearly',
    value: 'yearly',
  },
]

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
              name: 'listingType',
              label: 'Listing Type',
              type: 'select',
              defaultValue: 'forSale',
              options: [
                {
                  label: 'For Sale',
                  value: 'forSale',
                },
                {
                  label: 'Lease',
                  value: 'lease',
                },
                {
                  label: 'For Sale / Lease',
                  value: 'forSaleLease',
                },
              ],
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
              name: 'isPriceNegotiable',
              label: 'Is Price Negotiable?',
              type: 'checkbox',
              required: true,
              defaultValue: false,
            },
            {
              name: 'price',
              label: 'Listing Price (in USD)',
              type: 'number',
              required: true,
              defaultValue: 0,
              validate: value => {
                if (value < 0) {
                  return 'Value must be greater than or equal to 0'
                }

                return true
              },
              admin: {
                condition: (data, siblingData) => siblingData?.isPriceNegotiable === false, // Only show if price is not-negotiable
              },
            },
            {
              name: 'rentalPrice',
              label: 'Rental Price (in USD)',
              type: 'number',
              defaultValue: 0,
              required: false,
              admin: {
                condition: (data, siblingData) => siblingData?.isPriceNegotiable === false, // Only show if price is not-negotiable
              },
            },
            {
              name: 'paymentFrequency',
              label: 'Payment Frequency',
              type: 'select',
              defaultValue: 'oneTime',
              options: PaymentFrequencyOptions,
              admin: {
                condition: (data, siblingData) => siblingData?.isPriceNegotiable === false, // Only show if price is not-negotiable
              },
            },
            {
              name: 'agents', // required
              label: 'Agent(s) on Listing',
              type: 'relationship', // required
              relationTo: 'teammates', // required
              hasMany: true,
            },
            {
              name: 'listingFlyer',
              label: 'Information Flyer (PDF)',
              type: 'upload',
              relationTo: 'media',
              required: false,
            },
            {
              name: 'zillowLink',
              label: 'Zillow Link',
              type: 'text',
              required: false,
            },
            {
              name: 'virtualTourLink',
              label: 'Virtual Tour Link',
              type: 'text',
              required: false,
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
              name: 'propertyTypes', // DO NOT RENAME TO propertyType, had to switch for new enum
              label: 'Property Type',
              type: 'select',
              options: PropertyTypes,
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
            richText({
              name: 'fullDescription',
              label: 'Full Property Description',
              required: false,
            }),
            {
              name: 'zoningType',
              label: 'Zone',
              type: 'select',
              options: ZoningType,
            },
            {
              name: 'buildingClass',
              label: 'Building Class',
              type: 'select',
              options: BuildingClass,
            },
            {
              name: 'tenancyType',
              label: 'Tenancy Type',
              type: 'select',
              options: TenancyType,
            },
            {
              name: 'yearBuilt',
              label: 'Year Built',
              type: 'number',
              required: false,
            },
            {
              name: 'yearRenovated',
              label: 'Year Renovated',
              type: 'number',
              required: false,
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
          label: 'Additional Information',
          fields: [
            {
              name: 'highlights',
              type: 'array',
              minRows: 1,
              maxRows: 10,
              fields: [
                {
                  name: 'highlightText',
                  type: 'text',
                },
              ],
            },
            {
              name: 'heat',
              label: 'Heating',
              type: 'select',
              hasMany: false,
              defaultValue: 'n/a',
              options: UtilitySelect,
            },
            {
              name: 'cool',
              label: 'Cooling',
              type: 'select',
              hasMany: false,
              defaultValue: 'n/a',
              options: UtilitySelect,
            },
            {
              name: 'electricity',
              label: 'Electricity',
              type: 'select',
              hasMany: false,
              defaultValue: 'n/a',
              options: UtilitySelect,
            },
            {
              name: 'water',
              label: 'Water',
              type: 'select',
              hasMany: false,
              defaultValue: 'n/a',
              options: UtilitySelect,
            },
            {
              name: 'waste',
              label: 'Waste',
              type: 'select',
              hasMany: false,
              defaultValue: 'n/a',
              options: UtilitySelect,
            },
            {
              name: 'sewer',
              label: 'Sewer',
              type: 'select',
              hasMany: false,
              defaultValue: 'n/a',
              options: UtilitySelect,
            },
            {
              name: 'internet',
              label: 'Internet',
              type: 'select',
              hasMany: false,
              defaultValue: 'n/a',
              options: UtilitySelect,
            },
            {
              name: 'lighting',
              label: 'Lighting',
              type: 'select',
              hasMany: false,
              defaultValue: 'n/a',
              options: UtilitySelect,
            },
            {
              name: 'hasParking',
              label: 'Parking',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'parkingDescription',
              label: 'Parking Spot Description',
              type: 'textarea',
              defaultValue: '',
              admin: {
                condition: (data, siblingData) => siblingData?.hasParking === true, // Only show if price is not-negotiable
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
