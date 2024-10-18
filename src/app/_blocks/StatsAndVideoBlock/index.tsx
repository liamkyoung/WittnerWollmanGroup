import React from 'react'
import Image, { StaticImageData } from 'next/image'

import { Media as MType, Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import RichText from '../../_components/RichText'
import { Media } from '../../_components/Media'

import { FactsList } from '../../../payload/payload-types'
import classes from './index.module.scss'
import Link from 'next/link'
import { YoutubeVideo } from '../../customComponents/YoutubeVideo'
import { Stat } from '../../customComponents/Stat'
import BGImage from '../../assets/images/bg_backdrop.png'

export type StatAndVideoBlockProps = Extract<
  Page['layout'][0],
  { blockType: 'statsAndVideoBlock' }
> & {
  staticImage?: StaticImageData
  id?: string
}

export type FactStat = {
  factStat: string
  factDescription: string
  id?: string | null
}

export const StatsAndVideoBlock: React.FC<StatAndVideoBlockProps> = props => {
  const { title, description, facts, bgImage } = props

  return (
    <div className="relative">
      <div className="absolute z-10 w-full h-screen xl:h-auto mt-16">
        <div className="global-margin-x">
          <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-4">
            <h2 className="flex-1 text-center xl:text-left">{title}</h2>
            <p className="text-center xl:text-right max-w-3xl">{description}</p>
          </div>

          <div className="flex flex-col-reverse xl:flex-row items-center mt-16 gap-8">
            <div className="grid grid-cols-2 gap-4 xl:w-1/2">
              {facts &&
                facts?.map((f, i) => {
                  const bgIndex = i % 4

                  switch (bgIndex) {
                    case 0:
                      return (
                        <Stat
                          bgColor="bg-wwRed"
                          title={f.factStat}
                          descriptor={f.factDescription}
                        />
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
                      return (
                        <Stat
                          bgColor="bg-wwLogoRed"
                          title={f.factStat}
                          descriptor={f.factDescription}
                        />
                      )
                  }
                })}
            </div>
            <div className="w-full xl:w-1/2">
              <YoutubeVideo />
            </div>
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
          {/* {Repeated Img to fill space} */}
          <Image
            src={BGImage}
            alt="stats-video-bg-img-1"
            className="xl:hidden block w-full opacity-20 object-cover min-h-96"
          />
        </>
      ) : (
        <>
          <Media
            resource={bgImage as MType}
            imgClassName="w-full min-h-[48rem] xl:h-auto opacity-20 object-cover"
          />
          <Media
            resource={bgImage as MType}
            imgClassName="xl:hidden block w-full opacity-20 object-cover"
          />
        </>
      )}
    </div>
  )
}
