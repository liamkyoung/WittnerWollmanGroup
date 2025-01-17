import type { CollectionConfig } from 'payload/types'

import { slugField } from '../../../payload/fields/slug'
import { admins } from '../../access/admins'
import { adminsOrPublished } from '../../access/adminsOrPublished'
import { Archive } from '../../blocks/ArchiveBlock'
import { CallToAction } from '../../blocks/CallToAction'
import { Content } from '../../blocks/Content'
import { ContentAndStatsBlock } from '../../blocks/ContentAndStatsBlock'
import { MediaBlock } from '../../blocks/MediaBlock'
import { ProjectBlock } from '../../blocks/ProjectBlock'
import { StatBlock } from '../../blocks/StatBlock'
import { StatsAndVideoBlock } from '../../blocks/StatsAndVideoBlock'
import { hero } from '../../fields/hero'
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
      type: 'tabs',
      tabs: [
        {
          label: 'Overview',
          fields: [
            {
              name: 'title',
              label: 'Service Name',
              type: 'text',
              required: true,
            },
            {
              name: 'shortDescription',
              label: 'Short Description',
              type: 'textarea',
              required: false,
            },
          ],
        },
        {
          label: 'Hero',
          fields: [hero],
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
                MediaBlock,
                Archive,
                ProjectBlock,
                StatsAndVideoBlock,
                StatBlock,
                ContentAndStatsBlock,
              ],
            },
          ],
        },
      ],
    },
    slugField(),
  ],
}
