/* eslint-disable @next/next/no-img-element */

import React from 'react'

import { Company, Media as MType } from '../../../../payload/payload-types'

export const CompanyComponent: React.FC<{
  doc?: Company
}> = props => {
  const { doc } = props

  const { name, image } = doc || {}

  const img = image as MType
  const src = `${process.env.NEXT_PUBLIC_S3_CDN_ENDPOINT}/${img?.filename}` // HARD CODED BECAUSE OTHER IMAGE VERSIONS WERE JUST DISAPPEARING AFTER A WHILE

  return (
    <>
      {img?.filename && (
        <img
          className={'h-24 w-auto object-contain mx-16'}
          src={src}
          loading="eager"
          alt="Company Logo"
        />
      )}
    </>
  )
}
