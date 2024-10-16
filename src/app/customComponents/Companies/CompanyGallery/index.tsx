'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Logo from '../../../assets/branding/logo.svg'
// import anime from 'animejs/lib/anime.es.js'
import { Company } from '@/payload/payload-types'
import { CompanyComponent } from '../CompanyComponent'

type Props = {
  companies: Company[]
}

export const CompanyGallery = ({ companies }: Props) => {
  // const animationRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   if (animationRef.current) {
  //     anime({
  //       targets: animationRef.current.querySelectorAll('.marquee-content'),
  //       translateX: (el: HTMLElement) => {
  //         return [0, `-${el.scrollWidth / 2}px`]
  //       },
  //       easing: 'linear', // Make the movement smooth
  //       duration: 10000, // Adjust duration for speed
  //       loop: true, // Infinite loop
  //     })
  //   }
  // }, [])

  return (
    <>
      <h2 className="text-center">Companies We&apos;ve Helped</h2>
      <div className="w-full overflow-hidden relative h-96 whitespace-nowrap">
        <div className="fixed flex items-center justify-around w-fit whitespace-nowrap ">
          {companies?.map((c, i) => (
            <CompanyComponent doc={c} key={`${i}`} />
          ))}
        </div>
        <div className="fixed flex items-center justify-around w-fit whitespace-nowrap ">
          {companies?.map((c, i) => (
            <CompanyComponent doc={c} key={`${i}-1`} />
          ))}
        </div>
      </div>
      {/* <div className="w-full absolute bg-gradient-to-r from-black to-black/30 inset-0 pointer-events-none"></div> */}
    </>
  )
}
