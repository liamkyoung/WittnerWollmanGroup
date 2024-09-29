import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Testimonial } from '../../../payload/payload-types'
import { Media } from '../../_components/Media'

export const TestimonialCard: React.FC<{
  className?: string
  doc?: Testimonial
}> = props => {
  const { doc, className } = props

  const { title, jobTitle, image, quote } = doc || {}

  //
  const sanitizedQuote = quote?.replace(/\s/g, ' ') // replace non-breaking space with white space

  return (
    <div className={`${className}`}>
      <Media imgClassName={``} resource={image} fill />
      <h2>{title}</h2>
      <h3>{jobTitle}</h3>
      <p>{sanitizedQuote}</p>
    </div>
  )
}
