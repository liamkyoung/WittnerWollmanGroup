import React from 'react'
import Link from 'next/link'

import { Page } from '../../../payload/payload-types'

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
            <Link className="btn-secondary" href="/contact">
              MESSAGE AN AGENT
            </Link>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="absolute -bottom-16 -right-16 z-50 size-64 bg-wwRed"></div>
        </div>
      </div>
    </div>
  )
}
