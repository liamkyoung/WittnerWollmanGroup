import React from 'react'
import Link from 'next/link'

import { Media as MediaType, Teammate } from '../../../../payload/payload-types'
import { Media } from '../../../_components/Media'
import Email from '../../Icons/Email'
import Instagram from '../../Icons/Instagram'
import LinkedinIcon from '../../Icons/LinkedinIcon'
import Phone from '../../Icons/Phone'

export const TeammateCard: React.FC<{
  className?: string
  title?: string
  doc?: Teammate
}> = props => {
  const { title: titleFromProps, doc } = props

  const {
    slug,
    title,
    meta,
    strengths,
    instagram,
    Facebook,
    Linkedin,
    email,
    phoneNumber,
    profilePic,
  } = doc || {}
  const { description, image: metaImage } = meta || {}

  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/teammates/${slug}`

  return (
    <div key={title}>
      <Link href={href}>
        <div className="bg-gradient-to-b from-gray-50 to-[#949495] w-72 rounded-md mb-2">
          {profilePic && typeof metaImage !== 'string' && (
            <Media imgClassName={`size-72`} resource={profilePic as MediaType} />
          )}

          <p className="bg-wwYellow px-3 py-4 rounded-md font-bold text-wwBlack">{strengths}</p>
        </div>

        <div className="inline-flex gap-2 items-center">
          <h4 className="text-white">{titleToUse}</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 text-wwYellow"
          >
            <path
              fillRule="evenodd"
              d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="text-white">Commercial Agent</p>
      </Link>
      <div className={``}>
        <div className="flex gap-4 mt-4">
          {email && <Email emailAddress={email} />}
          {phoneNumber && <Phone phoneNumber={phoneNumber} />}
          {Linkedin && <LinkedinIcon profileLink={Linkedin} />}
          {instagram && <Instagram profileLink={instagram} />}
        </div>
      </div>
    </div>
  )
}
