import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import RichText from '../../../app/_components/RichText'
import { Media as MediaType, Page } from '../../../payload/payload-types'
import HeroImg from '../../assets/images/bg_backdrop.png'

import { CMSLink } from '@/app/_components/Link'
import { Media } from '@/app/_components/Media'

function getGradientColor(g: string): string {
  if (g === 'none') return ''
  if (g === 'red') return 'to-wwRed'
  if (g === 'black') return 'to-wwBlack'

  return ''
}

export const FullscreenHero: React.FC<Page['hero']> = ({
  richText,
  media,
  links,
  headerText,
  backupImage,
  centeredText,
  gradient,
}) => {
  const gradientColor = getGradientColor(gradient)

  return (
    <div className="relative">
      <div className="relative group">
        <div
          className={`absolute z-20 ${
            !centeredText && 'lg:w-3/5'
          }  flex flex-col h-full justify-center md:space-y-16 space-y-4 global-margin-x`}
        >
          <div
            className={`space-y-8  ${
              !centeredText && 'lg:text-left'
            } opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity`}
          >
            <h1 className="md:font-normal text-white text-3xl sm:text-3xl font-semibold md:text-5xl lg:text-6xl">
              {headerText}
            </h1>
            <div className="overflow-y-scroll max-h-64 sm:max-h-96 no-scrollbar">
              <RichText
                content={richText}
                className={`md:text-lg font-medium ${!centeredText && 'lg:w-full'} text-sm`}
                textColor="text-white"
              />
            </div>
          </div>

          <div
            className={`flex gap-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity`}
          >
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
        <div className="bg-wwBlack absolute inset-0 z-10 opacity-90 md:opacity-0 group-hover:opacity-90 transition-opacity pointer-events-none"></div>

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
            priority
          />
        )}
      </div>
      {gradientColor && (
        <div
          className={`w-full bg-gradient-to-b from-wwBlack/0 ${gradientColor} pointer-events-none h-24 bottom-0 z-20 absolute`}
        />
      )}
    </div>
  )
}
