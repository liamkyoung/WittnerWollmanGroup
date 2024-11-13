'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { DefaultSocials } from '../../../globalData/general'
import { Page, Project } from '../../../payload/payload-types'

import { fetchDocs } from '@/app/_api/fetchDocs'
import RichText from '@/app/_components/RichText'
import { GoogleMap } from '@/app/customComponents/GoogleMap/GoogleMap'
import { GoogleMapPin } from '@/app/types/viewmodels'
import { ContactLink } from '@/globalData/navigation/contact/contact'

async function getProjectPins() {
  try {
    const projects = await fetchDocs<Project>('projects')
    let pins: GoogleMapPin[] = projects?.map(({ slug, title, latitude, longitude }) => {
      return { name: title, slug: slug, coords: { lat: latitude, lng: longitude } }
    })
    return pins
  } catch (error) {
    return []
  }
}

export const ProjectHero: React.FC<Page['hero']> = ({ richText, media, links, headerText }) => {
  const [pins, setPins] = useState<GoogleMapPin[]>()
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjectPins()
      setPins(data)
    }

    fetchData().catch(console.error) // eslint-disable-line no-console
  }, [])

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 global-margin-x lg:gap-8 gap-16 lg:mt-16">
      <div className="mt-24">
        <h1 className="mb-10">Our Projects</h1>
        <p className="mb-8">
          <RichText content={richText} />
        </p>

        <div className="flex gap-8 items-center">
          <div>
            <p className="text-sm text-wwRed mb-4 italic">Need help with your big idea?</p>
            <Link href={ContactLink.relLink} className="btn-primary">
              SEND US A MESSAGE
            </Link>
          </div>
          <div className="flex items-center gap-2 border-l-2 border-wwRed pl-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-wwRed"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              Or call us at
              <br /> <b>{DefaultSocials.phoneNumber}</b>
            </span>
          </div>
        </div>
      </div>

      <GoogleMap pins={pins} pinType="project" />
    </div>
  )
}
