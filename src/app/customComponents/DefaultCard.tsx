import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Media } from '../_components/Media'
import { CardSize } from '../types/viewmodels'
import CardInfo from './CardInfo'

import { Media as MType } from '@/payload/payload-types'

type Props = {
  size?: CardSize
  title: string
  image: MType
  accentText?: string
  description?: string
  address?: string
  additionalInfo?: string[]
  textOnRight?: boolean
  squareImage?: boolean
  link?: string
}

function DefaultCard({
  size,
  accentText,
  title,
  image,
  description,
  address,
  additionalInfo,
  textOnRight = false,
  squareImage = false,
  link,
}: Props) {
  let width = '64' // default size

  switch (size) {
    case CardSize.SMALL:
      width = '24'
      break
    case CardSize.MEDIUM:
      width = '72'
      break
    case CardSize.LARGE:
      width = '80'
      break
    case CardSize.EXTRALARGE:
      width = '96'
      break
    default:
      width = '64'
  }

  const imgCSS = 'rounded-lg' + squareImage ? `size-${width}` : `w-full`

  return (
    <div>
      {/* {TODO: MAKE IT SO IT CAN BE LINK OR NOT LINK} */}
      <Link href={link ? link : '/'} className="hover:opacity-90">
        {!textOnRight ? (
          <div className={`max-w-${width}`}>
            <div className="relative">
              <Media resource={image} imgClassName={'size-64'} />
              {accentText && (
                <div className="bg-gray-50 absolute -bottom-1 -left-1 p-3 rounded-md">
                  <p className="text-wwRed font-bold">{accentText}</p>
                </div>
              )}
            </div>
            <div>
              <h4 className="my-4">{title}</h4>
              <CardInfo
                address={address}
                description={description}
                additionalInfo={additionalInfo}
              />
            </div>
          </div>
        ) : (
          <div className={`flex gap-4`}>
            <div className="relative">
              <Media resource={image} imgClassName={'size-64'} />
              {accentText && (
                <div className="bg-gray-50 absolute -bottom-1 -left-1 p-3 rounded-md">
                  <p className="text-wwRed font-bold">{accentText}</p>
                </div>
              )}
            </div>
            <div className="max-w-64">
              <h4 className="my-4">{title}</h4>
              <CardInfo
                address={address}
                description={description}
                additionalInfo={additionalInfo}
              />
            </div>
          </div>
        )}
      </Link>
    </div>
  )
}

export default DefaultCard
