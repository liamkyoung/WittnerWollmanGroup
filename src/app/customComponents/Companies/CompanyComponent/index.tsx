import React from 'react'

import { Company, Media as MType } from '../../../../payload/payload-types'
import { Media } from '../../../_components/Media'

export const CompanyComponent: React.FC<{
  doc?: Company
}> = props => {
  const { doc } = props

  const { name, image } = doc || {}

  return (
    <Media imgClassName={'h-20 w-auto object-contain mx-16'} resource={image as MType} alt={name} />
  )
}
