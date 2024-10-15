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
      <Stat bgColor="bg-wwRed" title="17K+" descriptor="Satisfied Customers" />
      <Stat bgColor="bg-wwBlack" title="17K+" descriptor="Satisfied Customers" />
      <Stat bgColor="bg-wwLogoPink" title="17K+" descriptor="Satisfied Customers" />
      <Stat bgColor="bg-wwLogoRed" title="17K+" descriptor="Satisfied Customers" />
    </div>
  )
}
