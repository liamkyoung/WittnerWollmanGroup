import type { RowLabelArgs } from 'payload/dist/admin/components/forms/RowLabel/types'
import type { CollectionConfig } from 'payload/types'

import { ContentAndStatsBlock } from '../../../payload/blocks/ContentAndStatsBlock'
import { formatSocialMediaHandle } from '../../../payload/hooks/formatSocialMediaHandle'
import { admins } from '../../access/admins'
import { adminsOrPublished } from '../../access/adminsOrPublished'
import { Archive } from '../../blocks/ArchiveBlock'
import { CallToAction } from '../../blocks/CallToAction'
import { Content } from '../../blocks/Content'
import { MediaBlock } from '../../blocks/MediaBlock'
import { ProjectBlock } from '../../blocks/ProjectBlock'
import { StatBlock } from '../../blocks/StatBlock'
import { StatsAndVideoBlock } from '../../blocks/StatsAndVideoBlock'
import AdminAddressSearch from '../../customComponents/AdminAddressSearch'
import { slugField } from '../../fields/slug'
import { populateArchiveBlock } from '../../hooks/populateArchiveBlock'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { revalidateProject } from './hooks/revalidateProject'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  hooks: {
    beforeChange: [populatePublishedAt],
    afterChange: [revalidateProject],
    afterRead: [populateArchiveBlock],
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
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'neighborhood',
              type: 'text',
              required: false,
              admin: {
                hidden: false,
              },
            },
            {
              name: 'latitude',
              label: 'Latitude',
              type: 'number',
              admin: {
                hidden: true,
              },
              // Able to get from map
            },
            {
              name: 'longitude',
              label: 'Longitude',
              type: 'number',
              admin: {
                hidden: true,
              },
              // Able to get from map
            },
          ],
        },
        {
          label: 'Features',
          fields: [
            {
              name: 'price',
              label: 'Price (in USD)',
              type: 'text',
              required: false,
            },
            {
              name: 'agents', // required
              label: 'Teammates on Project',
              type: 'relationship', // required
              relationTo: 'teammates', // required
              hasMany: true,
            },
            {
              name: 'slider', // required
              type: 'array', // required
              label: 'Image Slider',
              minRows: 2,
              maxRows: 10,
              interfaceName: 'CardSlider', // optional
              labels: {
                singular: 'Slide',
                plural: 'Slides',
              },
              fields: [
                // required
                {
                  name: 'title',
                  type: 'text',
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'caption',
                  type: 'text',
                },
              ],
              admin: {
                components: {
                  RowLabel: ({ data, index }: RowLabelArgs) => {
                    return data?.title || `Slide ${String(index).padStart(2, '0')}`
                  },
                },
              },
            },
          ],
        },
        {
          label: 'Socials',
          fields: [
            {
              name: 'website',
              type: 'text',
              required: false,
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
          ],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              required: true,
              blocks: [
                CallToAction,
                Content,
                ContentAndStatsBlock,
                MediaBlock,
                Archive,
                ProjectBlock,
                StatsAndVideoBlock,
                StatBlock,
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    slugField(),
    {
      name: 'relatedProjects',
      type: 'relationship',
      relationTo: 'projects',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
      filterOptions: ({ id }) => {
        return {
          id: {
            not_in: [id],
          },
        }
      },
    },
  ],
}
