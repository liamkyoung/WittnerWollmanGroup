import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import ReflectionPool from '../../assets/images/reflection_pool_wide.png'
import CardInfo from './CardInfo'

type Props = {
  title: string
  accentText?: string
  description?: string
  address?: string
  additionalInfo?: string[]
}

function WideProjectCard({ accentText, title, description, address, additionalInfo }: Props) {
  return (
    <Link href="/" className="hover:opacity-90">
      <div>
        <div className="relative">
          <Image src={ReflectionPool} alt="" className="aspect-video w-full rounded-md" />
          {accentText && (
            <div className="bg-gray-50 absolute -bottom-1 -left-1 p-3 rounded-md">
              <p className="text-wwRed font-bold">{accentText}</p>
            </div>
          )}
        </div>
        <h4 className="my-4">{title}</h4>

        <CardInfo address={address} description={description} additionalInfo={additionalInfo} />
      </div>
    </Link>
  )
}

export default WideProjectCard
