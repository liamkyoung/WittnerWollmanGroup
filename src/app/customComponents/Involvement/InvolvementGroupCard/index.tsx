import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Media } from '../../../_components/Media'
import { InvolvementGroup } from '@/payload/payload-types'

export const InvolvementGroupCard: React.FC<{
  className?: string
  doc?: InvolvementGroup
}> = props => {
  const { doc, className } = props

  const { title, image, description, linkToGroupWebsite } = doc || {}

  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space

  return (
    <div className={`${className}`}>
      {linkToGroupWebsite ? (
        <Link href={linkToGroupWebsite}>
          <Media imgClassName={``} resource={image} />
          <h2>{title}</h2>
          <p>{sanitizedDescription}</p>
        </Link>
      ) : (
        <div>
          <Media imgClassName={``} resource={image} />
          <h2>{title}</h2>
          <p>{sanitizedDescription}</p>
        </div>
      )}
    </div>
  )
}
