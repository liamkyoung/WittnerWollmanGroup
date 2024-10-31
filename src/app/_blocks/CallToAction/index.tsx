import React from 'react'
import Link from 'next/link'

import { Page } from '../../../payload/payload-types'

type Props = Extract<Page['layout'][0], { blockType: 'cta' }>

export const CallToActionBlock: React.FC<
  Props & {
    id?: string
  }
> = ({ type }) => {
  switch (type) {
    // TODO: Remove and replace with normal CTA's but having actual associated images with the page.
    // case 'listing':
    //   return (
    //     <div className="bg-wwRed relative py-8">
    //       <div className="global-margin-x grid grid-cols-2">
    //         <div>
    //           <h2 className="text-white mb-8">
    //             <span className="text-wwYellow">Schedule A Tour</span> With Ashley
    //           </h2>
    //           <div className="flex gap-16 items-center">
    //             <BasicContactForm colorScheme={ColorScheme.WHITE} />
    //             <CalendarInput />
    //           </div>
    //         </div>
    //         <Image
    //           src={FullBodyImg}
    //           alt="teammate-image"
    //           className="absolute z-10 bottom-0 right-0 mr-24 max-w-80"
    //         />
    //       </div>
    //     </div>
    //   )
    // case 'agent':
    //   return (
    //     <div className="bg-wwRed relative py-8">
    //       <div className="global-margin-x grid grid-cols-1 xl:grid-cols-2">
    //         <div>
    //           <h1 className="text-white mb-16">Let&apos;s Get In Touch.</h1>
    //           <ContactForm colorScheme={ColorScheme.WHITE} />
    //         </div>
    //         <Image
    //           src={FullBodyImg}
    //           alt="teammate-image"
    //           className="hidden xl:block absolute z-10 bottom-0 right-0 mr-24"
    //         />
    //       </div>
    //     </div>
    //   )
    default:
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
              {/* <Image src={AgentImg} alt="agent"  /> */}
            </div>
          </div>
        </div>
      )
  }
}
