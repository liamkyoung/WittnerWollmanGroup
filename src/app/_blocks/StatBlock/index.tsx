import React from 'react'
import Image, { StaticImageData } from 'next/image'

import { Media as MType, Page } from '../../../payload/payload-types'
import BGImage from '../../assets/images/bg_backdrop.png'
import { Stat } from '../../customComponents/Stat'

import { Media } from '@/app/_components/Media'

export type StatBlockProps = Extract<Page['layout'][0], { blockType: 'statBlock' }> & {
  staticImage?: StaticImageData
  id?: string
}

export type FactStat = {
  factStat: string
  factDescription: string
  id?: string | null
}

export const StatBlock: React.FC<StatBlockProps> = props => {
  const { title, description, facts, bgImage } = props

  return (
    <div className="relative">
      <div className="absolute z-10 w-full xl:h-auto mt-16">
        <div className="global-margin-x py-0 lg:py-16">
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-16">
            <h2 className="flex-1">{title}</h2>
            <p className="text-center xl:text-right max-w-3xl">{description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-4 global-space-x global-space-y">
            {facts &&
              facts?.map((f, i) => {
                const bgIndex = i % 4

                switch (bgIndex) {
                  case 0:
                    return (
                      <Stat bgColor="bg-wwRed" title={f.factStat} descriptor={f.factDescription} />
                    )
                  case 1:
                    return (
                      <Stat
                        bgColor="bg-wwBlack"
                        title={f.factStat}
                        descriptor={f.factDescription}
                      />
                    )
                  case 2:
                    return (
                      <Stat
                        bgColor="bg-wwLogoPink"
                        title={f.factStat}
                        descriptor={f.factDescription}
                      />
                    )
                  case 3:
                    return (
                      <Stat
                        bgColor="bg-wwLogoRed"
                        title={f.factStat}
                        descriptor={f.factDescription}
                      />
                    )
                  default:
                }
              })}
          </div>
        </div>
      </div>

      {!bgImage ? (
        <>
          {' '}
          <Image
            src={BGImage}
            alt="stats-video-bg-img"
            className="w-full min-h-[48rem] xl:h-auto opacity-20 object-cover"
          />
        </>
      ) : (
        <>
          <Media
            resource={bgImage as MType}
            imgClassName="w-full min-h-[48rem] xl:h-auto opacity-20 object-cover"
          />
        </>
      )}
    </div>
  )
}
