import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Media } from '../../../../_components/Media'
import DefaultCard from '../../../DefaultCard'

import { formatDateTime } from '@/app/_utilities/formatDateTime'
import { InvolvementEvent, Media as MType } from '@/payload/payload-types'

export const InvolvementEventCard: React.FC<{
  className?: string
  doc?: InvolvementEvent
}> = props => {
  const { doc, className } = props

  const { title, image, description, eventDate } = doc || {}

  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space

  return <DefaultCard title={title} image={image as MType} accentText={formatDateTime(eventDate)} />
}
