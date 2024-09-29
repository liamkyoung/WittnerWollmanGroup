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

  const { title, description, iconSvg, slug } = doc || {}

  //
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/service/${slug}`

  return (
    <div className={`${className}`}>
      <h2>{title}</h2>
      <h3>{iconSvg}</h3>
      <p>{sanitizedDescription}</p>
    </div>
  )
}
