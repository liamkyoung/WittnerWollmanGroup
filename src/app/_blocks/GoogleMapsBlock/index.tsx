import React from 'react'
import { StaticImageData } from 'next/image'
import Link from 'next/link'

import { FactsList, Media as MType, Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import RichText from '../../_components/RichText'
import { GoogleMap } from '../../customComponents/GoogleMap/GoogleMap'

import classes from './index.module.scss'

// import { ColorScheme } from '@/app/types/viewmodels'

export type GoogleMapsBlockProps = Extract<Page['layout'][0], { blockType: 'googleMapsBlock' }> & {
  staticImage?: StaticImageData
  id?: string
}

export type FactStat = {
  factStat: string
  factDescription: string
  id?: string | null
}

export const GoogleMapsBlock: React.FC<GoogleMapsBlockProps> = props => {
  return (
    <div>
      <GoogleMap fullscreen />
    </div>
  )
}
