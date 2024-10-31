import type { Block } from 'payload/types'

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
