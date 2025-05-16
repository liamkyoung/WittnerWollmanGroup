import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

import { Service } from '../../../../payload/payload-types'
import { ServiceCard } from '../ServiceCard'

import { Skeleton } from '@/components/ui/skeleton'
import { ServiceLinks } from '@/globalData/navigation/services/services'

type Props = {
  services: Service[]
  displayHeader: 'yes' | 'no'
}

// animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export const FadeInServiceCard = ({ service }: { service: Service }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' })

  return (
    <motion.div ref={ref} variants={itemVariants} className="relative w-full">
      {!isLoaded && <Skeleton className="absolute top-0 left-0 w-full h-full rounded-md z-10" />}
      <div className={`${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
        <ServiceCard doc={service} onImageLoad={() => setIsLoaded(true)} />
      </div>
    </motion.div>
  )
}

export const ServiceGallery = ({ services, displayHeader = 'yes' }: Props) => {
  return (
    <div className="global-margin-x space-y-24 my-40">
      {displayHeader === 'yes' && (
        <div className="flex md:justify-between justify-center items-center">
          <h2 className="md:text-left text-center">Our Services</h2>
        </div>
      )}

      <motion.div
        initial="hidden"
        variants={containerVariants}
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 gap-16 lg:justify-items-start justify-items-center"
      >
        {services.map((s, i) => (
          <FadeInServiceCard key={s.id || i} service={s} />
        ))}
      </motion.div>

      <div className="md:hidden flex justify-center">
        <Link className="btn-primary" href={ServiceLinks.relLink}>
          LEARN MORE
        </Link>
      </div>
    </div>
  )
}
