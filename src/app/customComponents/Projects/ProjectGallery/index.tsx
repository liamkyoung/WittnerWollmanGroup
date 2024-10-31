import React from 'react'
import Link from 'next/link'

import { Project } from '../../../../payload/payload-types'
import { ProjectCard } from './../ProjectCard'

type Props = {
  projects: Project[]
}

export const ProjectGallery = ({ projects }: Props) => {
  return (
    <>
      {projects && projects.length > 0 && (
        <div className="global-margin-x space-y-24 my-40">
          <div className="flex justify-center md:justify-between items-center">
            <h2 className="text-center md:text-left">Previous Deals</h2>
            <div className="hidden md:block">
              <Link className="btn-primary" href="/projects">
                VIEW ALL PROJECTS
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 2xl:gap-16 3xl:gap-32 justify-items-center">
            {projects.map(p => (
              <div key={p.id}>
                <ProjectCard doc={p} />
              </div>
            ))}
          </div>

          <div className="md:hidden flex justify-center">
            <Link className="btn-primary" href="/projects">
              VIEW ALL PROJECTS
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
