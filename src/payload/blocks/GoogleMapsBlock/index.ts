import type { Block } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'

export const GoogleMapsBlock: Block = {
  slug: 'googleMapsBlock',
  fields: [
    {
      name: 'locations',
      type: 'relationship',
      label: 'Locations',
      relationTo: 'projects',
      hasMany: true,
    },
  ],
}
