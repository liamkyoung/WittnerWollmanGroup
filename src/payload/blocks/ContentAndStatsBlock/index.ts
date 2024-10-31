import type { Block } from 'payload/types'

import richText from '../../fields/richText'

export const ContentAndStatsBlock: Block = {
  slug: 'contentAndStatsBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    richText(),
    {
      name: 'facts', // required
      type: 'array', // required
      label: 'Project Facts',
      minRows: 1,
      maxRows: 3,
      interfaceName: 'FactsList', // optional
      labels: {
        singular: 'Fact',
        plural: 'Facts',
      },
      fields: [
        // required
        {
          name: 'factStat',
          label: 'Fact Metric (Number, Percentage, Etc.)',
          type: 'text',
          required: true,
        },
        {
          name: 'factDescription',
          label: 'Descriptor of Fact',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
