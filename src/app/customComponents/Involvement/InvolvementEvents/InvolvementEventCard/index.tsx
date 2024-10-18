import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Media } from '../../../../_components/Media'
import { Media as MType } from '@/payload/payload-types'
import { InvolvementEvent } from '@/payload/payload-types'
import DefaultCard from '../../../DefaultCard'
import { formatDateTime } from '@/app/_utilities/formatDateTime'

export const InvolvementEventCard: React.FC<{
  className?: string
  doc?: InvolvementEvent
}> = props => {
  const { doc, className } = props

  const { title, image, description, eventDate } = doc || {}

  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space

  return <DefaultCard title={title} image={image as MType} accentText={formatDateTime(eventDate)} />
}
