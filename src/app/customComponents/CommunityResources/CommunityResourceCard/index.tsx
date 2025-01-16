import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { CommunityResource, Media as MediaType } from '../../../../payload/payload-types'
import { Media } from '../../../_components/Media'
import CardInfo from '../../CardInfo'

export const CommunityResourceCard: React.FC<{
  className?: string
  doc?: CommunityResource
}> = props => {
  const { doc, className } = props

  const { title, categories, image, description, address } = doc || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space

  const shortenedAddress = address?.split(',') // Only return streetAddress, city

  return (
    <div className={`${className} w-64 md:w-96 lg:w-72 space-y-4`}>
      <div className="space-y-2">
        <h5>{title}</h5>
        <CardInfo
          address={
            shortenedAddress && shortenedAddress.length >= 2
              ? `${shortenedAddress[0]}, ${shortenedAddress[1]}`
              : `${address}`
          }
        />
      </div>

      <Media imgClassName={`size-64 object-cover`} resource={image as MediaType} />
      <p className="border-l-4 border-wwRed pl-2">{sanitizedDescription}</p>
    </div>
  )
}
