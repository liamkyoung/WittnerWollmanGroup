import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import AgentImg from '../../../../public/agent_cta.png'
import { Page } from '../../../payload/payload-types'

import CTA from '@/app/customComponents/CTA'
import { ContactLink } from '@/globalData/navigation/contact/contact'

type Props = Extract<Page['layout'][0], { blockType: 'cta' }>

export const CallToActionBlock: React.FC<
  Props & {
    id?: string
  }
> = ({}) => {
  return <CTA />
}
