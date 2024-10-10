import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CardInfo from './CardInfo'
import { CardSize } from '../types/viewmodels'
import { Media as MType } from '@/payload/payload-types'
import { Media } from '../_components/Media'

type Props = {
  size?: CardSize
  title: string
  image: MType
  accentText?: string
  description?: string
  address?: string
  additionalInfo?: string[]
  textOnRight?: boolean
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
  link,
}: Props) {
  let width = '64' // default size

  if (size === CardSize.MEDIUM) {
    width = '72'
  } else if (size === CardSize.LARGE) {
    width = '80'
  } else if (size === CardSize.EXTRALARGE) {
    width = '96'
  }
  return (
    <div>
      {/* {TODO: MAKE IT SO IT CAN BE LINK OR NOT LINK} */}
      <Link href={link ? link : '/'} className="hover:opacity-90">
        {!textOnRight ? (
          <div className={`max-w-${width}`}>
            <div className="relative">
              <Media resource={image} imgClassName={`rounded-lg size-${width}`} />
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
              <Media resource={image} imgClassName={`rounded-lg size-${width}`} />
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
