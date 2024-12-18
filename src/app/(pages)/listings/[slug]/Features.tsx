import React from 'react'

import { formatDollarAmount } from '../../../_utilities/formatDollarAmount'

import { formatPropertyType, formatZoningType } from '@/app/_utilities/propertyTypeFormatter'

type FeatureProps = {
  name: string
  description: string
}

function Feature({ name, description }: FeatureProps) {
  if (description === null || description === 'n_a') return

  return (
    <div className="flex justify-between items-end">
      <h6>{name}</h6>
      <h3>{description}</h3>
    </div>
  )
}

type ListingFeaturesProps = {
  bedrooms?: number
  bathrooms?: number
  sqFt?: number
  yearBuilt?: number
  propertyType?: string
  isPriceNegotiable?: boolean
  price?: number
  sqFtLand?: number
  status?: string
  occupancy?: number
  area?: string
  zipCode?: string
  zoningType?: string

  // Additional Info
  cool?: string
  heat?: string
  lighting?: string
  electricity?: string
  water?: string
  waste?: string
  sewer?: string
  internet?: string
  hasParking?: boolean
  parkingSpots?: number
  buildingClass?: string
  sqFtLot?: number
}

type Feature = {
  label: string
  description?: string | number
}

function Features({
  bedrooms,
  bathrooms,
  sqFt,
  yearBuilt,
  propertyType,
  isPriceNegotiable,
  price,
  sqFtLand,
  status,
  area,
  zipCode,
  zoningType,
  occupancy,
  cool,
  heat,
  lighting,
  electricity,
  water,
  waste,
  sewer,
  internet,
  hasParking,
  parkingSpots,
  buildingClass,
  sqFtLot,
}: ListingFeaturesProps) {
  const features: Feature[] = [
    { label: 'Status', description: status },
    { label: 'Bedrooms', description: bedrooms },
    { label: 'Bathrooms', description: bathrooms },
    { label: 'Square Footage', description: sqFt },
    { label: 'Year Built', description: yearBuilt },
    { label: 'Building Type', description: propertyType ? formatPropertyType(propertyType) : null },
    { label: 'Building Class', description: buildingClass },
    { label: 'Zoning Type', description: zoningType ? formatZoningType(zoningType) : null },
    { label: 'Area', description: area },
    { label: 'Zip Code', description: zipCode },
    { label: 'Occupancy', description: occupancy ? `${occupancy}%` : null },

    {
      label: 'Price',
      description: isPriceNegotiable || !price ? 'Negotiable' : formatDollarAmount(price),
    },
    { label: 'Land Square Footage', description: sqFtLand },
    { label: 'Lot Square Footage', description: sqFtLot },

    { label: 'Cooling', description: cool },
    { label: 'Heating', description: heat },
    { label: 'Lighting', description: lighting },
    { label: 'Electricity', description: electricity },
    { label: 'Water', description: water },
    { label: 'Sewage', description: sewer },
    { label: 'Waste', description: waste },
    { label: 'Internet', description: internet },
    { label: 'Parking', description: hasParking ? 'Yes' : 'No' },
    { label: 'Parking Spots', description: hasParking ? parkingSpots : null },
  ].filter(f => f.description)

  const listLength =
    features.filter(f => f.description !== null && f.description !== 'n_a').length / 2

  const leftFeatures = features.slice(0, listLength)
  const rightFeatures = features.slice(listLength)

  return (
    <div>
      <h2>Features</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 my-16">
        <div className="space-y-8">
          {leftFeatures?.map(f => (
            <Feature name={f.label} description={f.description?.toString()} />
          ))}
        </div>

        <div className="space-y-8">
          {rightFeatures?.map(f => (
            <Feature name={f.label} description={f.description?.toString()} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
