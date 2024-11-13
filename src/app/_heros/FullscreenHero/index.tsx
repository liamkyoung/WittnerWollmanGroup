import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import RichText from '../../../app/_components/RichText'
import { Media as MediaType, Page } from '../../../payload/payload-types'
import HeroImg from '../../assets/images/bg_backdrop.png'

import { CMSLink } from '@/app/_components/Link'
import { Media } from '@/app/_components/Media'

export const FullscreenHero: React.FC<Page['hero']> = ({
  richText,
  media,
  links,
  headerText,
  backupImage,
}) => {
  return (
    <div className="relative">
      <div className="absolute z-20 lg:w-3/5 flex flex-col h-full justify-center md:space-y-16 space-y-4 global-margin-x">
        <div className="space-y-4 text-center lg:text-left">
          <h1 className="md:font-normal text-white text-2xl sm:text-3xl font-semibold md:text-5xl lg:text-6xl">
            {headerText}
          </h1>
          <RichText
            content={richText}
            className="md:text-lg font-medium lg:w-3/4 text-sm"
            textColor="text-white"
          />
        </div>

        <div className="space-x-4 mt-4 sm:mt-0 mx-auto lg:mx-0 text-center sm:text-left">
          {links &&
            links.map((l, i) => {
              const appearance = l.link?.appearance

              if (!appearance) return

              switch (appearance) {
                case 'secondary':
                  return <CMSLink className="btn-secondary" {...l.link} key={i} />
                case 'default':
                case 'primary':
                default:
                  return <CMSLink className="btn-primary" {...l.link} key={i} />
              }
            })}
        </div>
      </div>
      {/* Black overlay */}
      <div className="bg-wwBlack absolute inset-0 z-10 opacity-70 pointer-events-none"></div>

      {/* Media (image or video) */}
      <Media
        resource={media as MediaType}
        alt="hero-video-img"
        imgClassName="sm:w-full sm:h-screen lg:h-auto object-cover hidden sm:block"
        videoClassName="sm:w-full sm:h-screen lg:h-auto object-cover hidden sm:block"
        priority
      />

      {!backupImage ? (
        <Image
          src={HeroImg}
          alt="hero-img"
          className="w-full h-96 object-cover sm:hidden block"
          priority
        />
      ) : (
        <Media
          resource={backupImage as MediaType}
          alt="hero-img"
          imgClassName="w-full h-[32rem] object-cover sm:hidden block"
        />
      )}
    </div>
  )
}
