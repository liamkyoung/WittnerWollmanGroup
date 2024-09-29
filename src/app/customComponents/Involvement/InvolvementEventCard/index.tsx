import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Media } from '../../../_components/Media'
import { InvolvementEvent } from '@/payload/payload-types'

export const InvolvementEventCard: React.FC<{
  className?: string
  doc?: InvolvementEvent
}> = props => {
  const { doc, className } = props

  const { title, image, description, eventDate } = doc || {}

  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space

  return (
    <div className={`${className}`}>
      <Media imgClassName={``} resource={image} fill />
      <h2>{title}</h2>
      <p>{sanitizedDescription}</p>

      {/* Fix Date? */}
      <p>{eventDate}</p>
    </div>
  )
}
