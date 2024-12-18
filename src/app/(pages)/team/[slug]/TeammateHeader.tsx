import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { TeamLinks } from '../../../../globalData/navigation/about/about'

import { Media } from '@/app/_components/Media'
import { Media as MType } from '@/payload/payload-types'

type Props = {
  name: string
  jobTitle: string
  shortDescription: string
  yearsOfExperience: number
  strength: string
  fullBodyImg: MType
}

function TeammateHeader({
  name,
  jobTitle,
  yearsOfExperience,
  shortDescription,
  strength,
  fullBodyImg,
}: Props) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
      <div className="block xl:flex items-center">
        <Link href={TeamLinks.relLink} className="block xl:hidden">
          <h6 className="text-gray-800 hidden xl:block">Team /</h6>
        </Link>

        <div className="xl:hidden block">
          <Media
            resource={fullBodyImg}
            alt="fullbody-img"
            imgClassName="mx-auto size-80 shadow-md"
          />
        </div>
        <div>
          <Link href={TeamLinks.relLink}>
            <h6 className="text-gray-800 hidden xl:block">Team /</h6>
          </Link>
          <h1 className="mb-2 mt-6 text-center xl:text-left">{name}</h1>
          <h6 className="mb-6 text-center xl:text-left">{jobTitle}</h6>
          <p className="text-center xl:text-left xl:w-3/4 w-full leading-8">{shortDescription}</p>
        </div>
      </div>
      <div className="hidden xl:block">
        <Media
          resource={fullBodyImg as MType}
          alt="fullbody-img"
          imgClassName="w-[30rem] shadow-md"
        />
      </div>
    </div>
  )
}

export default TeammateHeader
