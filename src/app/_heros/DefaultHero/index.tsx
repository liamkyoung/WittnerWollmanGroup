import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import ImageSrc from '../../../../media/mangosteen-2.png'
import { Media as MType, Page } from '../../../payload/payload-types'

import { Media } from '@/app/_components/Media'
import RichText from '@/app/_components/RichText'
import { DefaultSocials } from '@/globalData/general'

export const DefaultHero: React.FC<Page['hero']> = ({ richText, media, links, headerText }) => {
  return (
    <div className="grid xl:grid-cols-2 place-items-center py-16">
      <div className="global-margin-x mt-24">
        <div className="text-center xl:text-left">
          {headerText && <h1 className="mb-10">{headerText}</h1>}
          <RichText content={richText} className="mb-8" />
        </div>

        <div className="flex gap-8 items-center justify-center xl:justify-start">
          <div>
            <p className="text-sm text-wwRed mb-4 italic">Need help with your big idea?</p>
            <Link href="/contact" className="btn-primary block text-center">
              SEND US A MESSAGE
            </Link>
          </div>
          <div className="flex items-center gap-2 border-l-2 border-wwRed pl-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-wwRed"
            >
              <path
                fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clip-rule="evenodd"
              />
            </svg>
            <span>
              Or call us at
              <br /> <b className="whitespace-nowrap">{DefaultSocials.phoneNumber}</b>
            </span>
          </div>
        </div>
      </div>
      <div>
        {/* Backup Image === The Hero Image for the Default Hero. */}
        {!media ? (
          <Image src={ImageSrc} alt="service-img" className="my-12 lg:my-0" />
        ) : (
          <Media
            resource={media as MType}
            alt="service-img"
            imgClassName="my-12 lg:my-0 lg:pr-36 pr-0"
          />
        )}
      </div>
    </div>
  )
}
