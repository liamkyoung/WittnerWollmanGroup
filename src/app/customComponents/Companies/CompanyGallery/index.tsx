'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import Logo from '../../../assets/branding/logo.svg'
import { CompanyComponent } from '../CompanyComponent'

import './style.css'
// import anime from 'animejs/lib/anime.es.js'
import { Company } from '@/payload/payload-types'

type Props = {
  companies: Company[]
  displayHeader: 'yes' | 'no'
}

export const CompanyGallery = ({ companies, displayHeader = 'no' }: Props) => {
  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller')

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation()
    }

    function addAnimation() {
      scrollers.forEach(scroller => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute('data-animated', 'true')

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector('.scroller__inner')
        const scrollerContent = Array.from(scrollerInner.children)

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach(item => {
          const duplicatedItem = item.cloneNode(true) as Element
          duplicatedItem.setAttribute('aria-hidden', 'true')
          scrollerInner.appendChild(duplicatedItem)
        })
      })
    }
  }, [])

  return (
    <div className="global-margin-y">
      {displayHeader === 'yes' && <h2 className="text-center mb-8">Companies We&apos;ve Helped</h2>}
      <div className="scroller mx-auto" data-direction="left" data-speed="slow">
        <div className="scroller__inner h-32">
          {companies?.map((c, i) => (
            <CompanyComponent doc={c} key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
