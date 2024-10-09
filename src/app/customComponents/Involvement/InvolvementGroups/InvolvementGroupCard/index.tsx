import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Media } from '../../../../_components/Media'
import { Media as MType } from '@/payload/payload-types'
import { InvolvementGroup } from '@/payload/payload-types'
import DefaultCard from '../../../DefaultCard'

export const InvolvementGroupCard: React.FC<{
  className?: string
  doc?: InvolvementGroup
}> = props => {
  const { doc, className } = props

  const { title, image, description, linkToGroupWebsite } = doc || {}

  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space

  return (
    <DefaultCard
      title={title}
      image={image as MType}
      description={sanitizedDescription}
      link={linkToGroupWebsite}
    />
  )
}
