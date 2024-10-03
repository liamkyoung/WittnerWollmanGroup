import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Service } from '../../../payload/payload-types'
import { Media } from '../../_components/Media'

export const ServiceCard: React.FC<{
  className?: string
  doc?: Service
}> = props => {
  const { doc, className } = props

  const { title, shortDescription, iconSvg, slug } = doc || {}

  //
  const sanitizedDescription = shortDescription?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/service/${slug}`

  return (
    <div className={`${className}`}>
      <Link className="" href={href}>
        <h2>{title}</h2>
        <h3>{iconSvg}</h3>
        <p>{sanitizedDescription}</p>
      </Link>
    </div>
  )
}
