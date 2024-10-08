import React from 'react'

type FeatureProps = {
  name: string
  description: string
}

function Feature({ name, description }: FeatureProps) {
  return (
    <div className="flex justify-between items-end">
      <h6>{name}</h6>
      <h3>{description}</h3>
    </div>
  )
}

type Props = {
  bedrooms: string
  bathrooms: string
  sqFt: string
  yearBuilt: string
  propertyType: string
  price: number
  sqFtLand: number
  status: string
  occupancy: number
  area: string
  zipCode: string
  zoningType: string
}

function Features({
  bedrooms,
  bathrooms,
  sqFt,
  yearBuilt,
  propertyType,
  price,
  sqFtLand,
  status,
  area,
  zipCode,
  zoningType,
  occupancy,
}) {
  return (
    <div>
      <h2>Features</h2>
      <div className="grid grid-cols-2 gap-16 my-16">
        <div className="space-y-8">
          {bedrooms && <Feature name={'Bedrooms'} description={bedrooms} />}
          {bathrooms && <Feature name={'Bathrooms'} description={bathrooms} />}
          {sqFt && <Feature name={'Square Footage'} description={sqFt} />}
          {yearBuilt && <Feature name={'Year Built'} description={yearBuilt} />}
          {propertyType && <Feature name={'Building Type'} description={propertyType} />}
          {zoningType && <Feature name={'Zoning Type'} description={zoningType} />}
        </div>

        <div className="space-y-8">
          {price && <Feature name={'Price'} description={price} />}
          {sqFtLand && <Feature name={'Acres'} description={sqFtLand} />}
          {status && <Feature name={'Status'} description={status} />}
          {area && <Feature name={'Area'} description={area} />}
          {zipCode && <Feature name={'Zip Code'} description={zipCode} />}
          {occupancy && <Feature name={'Occupancy'} description={`${occupancy}%`} />}
        </div>
      </div>
    </div>
  )
}

export default Features
