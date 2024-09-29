import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { CommunityResource } from '../../../payload/payload-types'
import { Media } from '../../_components/Media'

export const CommunityResourceCard: React.FC<{
  className?: string
  doc?: CommunityResource
}> = props => {
  const { doc, className } = props

  const { title, categories, image, description, address } = doc || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space

  return (
    <div className={`${className}`}>
      <Media imgClassName={``} resource={image} />
      <h2>{title}</h2>
      <p>{address}</p>
      <p>{sanitizedDescription}</p>
      {hasCategories && <p>{categories.map(c => c)}</p>}
    </div>
  )
}
