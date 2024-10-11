import React, { Fragment } from 'react'
import Link from 'next/link'
import { DefaultSocials } from '../../../globalData/general'
import Image from 'next/image'

import { Media as MediaType, Page } from '../../../payload/payload-types'
import RichText from '../../../app/_components/RichText'
import { Media } from '@/app/_components/Media'

export const FullscreenHero: React.FC<Page['hero']> = ({ richText, media, links, headerText }) => {
  return (
    <div className="relative">
      <div className="absolute z-20 lg:w-3/5 flex flex-col h-full justify-center space-y-16 global-margin-x">
        <div className="space-y-4 text-center lg:text-left">
          <h1 className="font-normal text-white">{headerText}</h1>
          <RichText
            content={richText}
            className="text-lg font-medium text-white lg:w-3/4"
            textColor="text-white"
          />
        </div>
        <div className="space-x-4 mx-auto lg:mx-0">
          <Link className="btn-primary" href="/team">
            MEET THE TEAM
          </Link>
          <Link className="btn-secondary" href="/listings">
            VIEW LISTINGS
          </Link>
        </div>
      </div>
      <div className="bg-wwBlack absolute z-10 w-full h-screen lg:h-full opacity-70"></div>
      <Media
        resource={media as MediaType}
        alt="hero-img"
        imgClassName="w-full h-screen lg:h-full aspect-video"
      />
    </div>
  )
}
