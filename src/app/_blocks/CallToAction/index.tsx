import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import AgentImg from '../../../../public/agent_cta.png'
import { Page } from '../../../payload/payload-types'

import { ContactLink } from '@/globalData/navigation/contact/contact'

type Props = Extract<Page['layout'][0], { blockType: 'cta' }>

export const CallToActionBlock: React.FC<
  Props & {
    id?: string
  }
> = ({}) => {
  return (
    <div className="bg-wwRed py-16">
      <div className="global-margin-x relative">
        <div className="mx-auto lg:mx-0 md:max-w-none w-full md:w-1/2 xl:w-3/4 space-y-8 text-center lg:text-left">
          <h2 className="text-white">
            <span className="text-wwYellow">Message An Agent</span>
            <br /> To Get Help with Your BIG Idea
          </h2>
          <div>
            <Link className="btn-secondary" href={ContactLink.relLink}>
              MESSAGE AN AGENT
            </Link>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image src={AgentImg} alt="agent" className="absolute -bottom-16 -right-16 z-50" />
        </div>
      </div>
    </div>
  )
}
