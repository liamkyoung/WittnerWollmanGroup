import React, { Fragment } from 'react'
import Image from 'next/image'

import { Company, Media as MType } from '../../../../payload/payload-types'
import { Media } from '../../../_components/Media'

export const CompanyComponent: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: Company
  orientation?: 'horizontal' | 'vertical'
}> = props => {
  const { doc, className } = props

  const { name, image } = doc || {}

  return <Media imgClassName={'size-64'} resource={image as MType} alt={name} />
  // return <div className="size-64 bg-green-500 p-2">A</div>
}

// .item {
//   display: flex;
//   align-items: center;
//   gap: 0 0.2rem;
//   color: #e2e8f0;
//   font-size: .9rem;
//   background-color: #152c41;
//   padding: 0.7rem 1rem;
//   margin: 0rem 1rem;
//   border-radius: 0.4rem;
//   white-space: nowrap;
//   box-shadow:
//   0 0.1rem 0.2rem #00000033,
//   0 0.1rem 0.5rem #0000004d,
//   0 0.2rem 01.5rem #00000066,
// }
