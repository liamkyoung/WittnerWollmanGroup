import React from 'react'
import { StaticImageData } from 'next/image'

import { Media as MType, Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import RichText from '../../_components/RichText'
import { FactsList } from '../../../payload/payload-types'
import classes from './index.module.scss'
import Link from 'next/link'
import { ColorScheme } from '../../types/viewmodels'
import ProjectStat from '../../customComponents/Projects/ProjectStat'

export type ContentAndStatsProps = Extract<Page['layout'][0], { blockType: 'contentAndStats' }> & {
  staticImage?: StaticImageData
  id?: string
}

export type FactStat = {
  factStat: string
  factDescription: string
  id?: string | null
}

export const ContentAndStatsBlock: React.FC<ContentAndStatsProps> = props => {
  const { title, facts, richText } = props
  return (
    <div className="global-margin-x my-24">
      <h2>Optimize Your Leasing Experience</h2>
      <div className="grid grid-cols-1 xl:grid-cols-3 mt-16 gap-8 xl:gap-0">
        <div className="col-span-1 w-full xl:col-span-2 xl:w-3/4 space-y-8">
          <RichText content={richText} />
        </div>
        {facts && (
          <div className="bg-wwRed p-16 xl:p-8 xl:max-w-min xl:mx-auto xl:block flex flex-col items-center gap-8">
            {facts.map((f, i) => (
              <ProjectStat
                colorScheme={ColorScheme.RED}
                stat={f.factStat}
                description={f.factDescription}
                key={i}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
