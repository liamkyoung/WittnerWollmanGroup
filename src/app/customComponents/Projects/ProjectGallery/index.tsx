'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

import { Project } from '../../../../payload/payload-types'
import { ProjectCard } from './../ProjectCard'

import { Skeleton } from '@/components/ui/skeleton'
import { ProjectLinks } from '@/globalData/navigation/projects/projects'

type Props = {
  projects: Project[]
  displayHeader?: 'yes' | 'no'
}

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
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const FadeInProjectCard = ({ project }: { project: Project }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="relative w-full">
      {!isLoaded && <Skeleton className="absolute top-0 left-0 w-full h-full rounded-md z-10" />}

      <div className={`${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
        <ProjectCard doc={project} onImageLoad={() => setIsLoaded(true)} />
      </div>
    </div>
  )
}

export const ProjectGallery = ({ projects, displayHeader = 'yes' }: Props) => {
  return (
    <>
      {projects && projects.length > 0 && (
        <div className="global-margin-x space-y-24 my-40">
          {displayHeader === 'yes' && (
            <div className="flex justify-center md:justify-between items-center">
              <h2 className="text-center md:text-left">Featured Deals</h2>
              <div className="hidden md:block">
                <Link className="btn-primary" href={ProjectLinks.relLink}>
                  VIEW MORE
                </Link>
              </div>
            </div>
          )}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 2xl:gap-16 3xl:gap-32 justify-items-center lg:justify-items-start"
          >
            {projects.map((project, index) => (
              <motion.div key={project.id || index} variants={itemVariants} className="w-full">
                <FadeInProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          <div className="md:hidden flex justify-center">
            <Link className="btn-primary" href={ProjectLinks.relLink}>
              VIEW MORE
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
