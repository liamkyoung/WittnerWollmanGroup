import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../../../components/ui/carousel'
import { Testimonial } from '../../../payload/payload-types'
import BGImage from '../../assets/images/bg_backdrop.png'
import { TestimonialCard } from './TestimonialCard'

type Props = {
  testimonials: Testimonial[]
  displayHeader: 'yes' | 'no'
}

function TestimonialGallery({ testimonials, displayHeader = 'no' }: Props) {
  return (
    <div className="relative">
      {displayHeader === 'yes' && <h2>Testimonials</h2>}

      <Carousel className="pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32 mx-auto z-20">
        <CarouselContent className="py-24">
          {testimonials?.map((t, index) => (
            <CarouselItem className="bg-wwRed pb-20 sm:pb-24 xl:pb-0" key={index}>
              <TestimonialCard doc={t} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute bottom-0 left-10" />
        <CarouselNext className="absolute bottom-0 right-10" />
      </Carousel>
      <Image
        src={BGImage}
        alt="bg-image"
        className="absolute top-0 left-0 z-10 w-full h-full opacity-20"
      />
    </div>
  )
}

export default TestimonialGallery
