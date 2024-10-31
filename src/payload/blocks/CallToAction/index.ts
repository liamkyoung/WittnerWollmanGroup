import type { Block } from 'payload/types'

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
