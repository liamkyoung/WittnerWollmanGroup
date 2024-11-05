import React from 'react'
import Link from 'next/link'

import { Service } from '../../../../payload/payload-types'
import { ServiceCard } from '../ServiceCard'

type Props = {
  services: Service[]
  displayHeader: 'yes' | 'no'
}

export const ServiceGallery = ({ services, displayHeader = 'yes' }: Props) => {
  return (
    <div className="global-margin-x space-y-24 my-40">
      {displayHeader === 'yes' && (
        <div className="flex md:justify-between justify-center items-center">
          <h2 className="md:text-left text-center">Our Services</h2>
          <div className="hidden md:block">
            <Link className="btn-primary" href="/services">
              LEARN MORE
            </Link>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 xl:grid-cols-4 justify-items-center">
        {services.map((s, i) => (
          <ServiceCard doc={s} key={i} />
        ))}
      </div>

      <div className="md:hidden flex justify-center">
        <Link className="btn-primary" href="/services">
          LEARN MORE
        </Link>
      </div>
    </div>
  )
}
