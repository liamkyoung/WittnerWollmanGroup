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
  const { title, media, description, facts } = props

  return (
    <div className="relative">
      <div className="absolute z-10 w-full h-full mt-16">
        <div className="global-margin-x">
          <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-4">
            <h2 className="flex-1 text-center xl:text-left">{title}</h2>
            <p className="text-center xl:text-right max-w-3xl">{description}</p>
          </div>

          <div className="flex flex-col-reverse xl:flex-row items-center mt-16 gap-8">
            <div className="grid grid-cols-2 gap-4 xl:w-1/2">
              {/* {facts?.map((f, i) => <Stat bgColor="bg-wwRed" title="17K+" descriptor="Satisfied Customers" />)} */}
              <Stat bgColor="bg-wwRed" title="17K+" descriptor="Satisfied Customers" />
              <Stat bgColor="bg-wwBlack" title="17K+" descriptor="Satisfied Customers" />
              <Stat bgColor="bg-wwLogoPink" title="17K+" descriptor="Satisfied Customers" />
              <Stat bgColor="bg-wwLogoRed" title="17K+" descriptor="Satisfied Customers" />
            </div>
            <div className="w-full xl:w-1/2">
              <YoutubeVideo />
            </div>
          </div>
        </div>
      </div>
      <Image src={BGImage} alt="hero-img" className="w-full h-screen xl:h-auto opacity-20" />
    </div>
  )
}
