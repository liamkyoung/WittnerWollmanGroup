import type { Block } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'
import linkGroup from '../../fields/linkGroup'
import richText from '../../fields/richText'

export const CallToAction: Block = {
  slug: 'cta',
  labels: {
    singular: 'Call to Action',
    plural: 'Calls to Action',
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'default',
      options: [
        {
          value: 'default',
          label: 'Default CTA',
        },
        {
          value: 'listing',
          label: 'Listing CTA',
        },
        {
          value: 'agent',
          label: 'Agent CTA',
        },
      ],
    },
  ],
}
