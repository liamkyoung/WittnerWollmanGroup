import React from 'react'

import { InvolvementGroup, Media as MType } from '../../../../../payload/payload-types'
import DefaultCard from '../../../DefaultCard'

export const InvolvementGroupCard: React.FC<{
  className?: string
  doc?: InvolvementGroup
}> = props => {
  const { doc } = props

  const { title, image, description, linkToGroupWebsite } = doc || {}

  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space

  return (
    <DefaultCard
      title={title}
      image={image as MType}
      description={sanitizedDescription}
      link={linkToGroupWebsite}
      squareImage
    />
  )
}
