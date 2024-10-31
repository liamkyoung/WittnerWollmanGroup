import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { FactsList, Media as MType, Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'
import { Stat } from '../../customComponents/Stat'
import { YoutubeVideo } from '../../customComponents/YoutubeVideo'

import classes from './index.module.scss'

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
  const { title, description, facts } = props

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 place-items-center global-space-x global-space-y">
      {facts &&
        facts?.map((f, i) => {
          const bgIndex = i % 4

          switch (bgIndex) {
            case 0:
              return <Stat bgColor="bg-wwRed" title={f.factStat} descriptor={f.factDescription} />
            case 1:
              return <Stat bgColor="bg-wwBlack" title={f.factStat} descriptor={f.factDescription} />
            case 2:
              return (
                <Stat bgColor="bg-wwLogoPink" title={f.factStat} descriptor={f.factDescription} />
              )
            case 3:
              return (
                <Stat bgColor="bg-wwLogoRed" title={f.factStat} descriptor={f.factDescription} />
              )
            default:
          }
        })}
    </div>
  )
}
