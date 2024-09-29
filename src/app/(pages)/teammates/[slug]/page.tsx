import React from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Teammate } from '../../../../payload/payload-types'
import { fetchDoc } from '../../../_api/fetchDoc'
import { fetchDocs } from '../../../_api/fetchDocs'
import { generateTeammateMetadata } from '../../../_utilities/generateMeta'
import Image from 'next/image'
import { Media } from '../../../_components/Media'

export const dynamic = 'force-dynamic'

export default async function Page({ params: { slug } }) {
  const { isEnabled: isDraftMode } = draftMode()
  let teammate: Teammate | null = null
  try {
    teammate = await fetchDoc<Teammate>({
      collection: 'teammates',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {
    console.error(error) // eslint-disable-line no-console
  }
  if (!teammate) {
    notFound()
  }
  const {
    title,
    bio,
    profilePic,
    strengths,
    yearsOfExperience,
    email,
    phoneNumber,
    instagram,
    Facebook,
    Linkedin,
  } = teammate
  return (
    <div>
      <h1 className="text-3xl">Name: {title}</h1>
      <div>
        Job Title: <b>MISSING</b>
      </div>
      <div>
        Short Bio: <b>MISSING</b>{' '}
      </div>
      <Media imgClassName={``} resource={profilePic} />

      <div>
        About Me
        <p>Strength: {strengths}</p>
        <p>{yearsOfExperience} Years of Experience</p>
        <p>
          Another Stat: <b>MISSING</b>
        </p>
      </div>

      <div>
        Contact
        <p>Email: {email}</p>
        <p>Phone: {phoneNumber}</p>
        <p>Insta: {instagram}</p>
        <p>FB: {Facebook}</p>
        <p>Linkedin: {Linkedin}</p>
      </div>
      <div>{bio}</div>

      <div>
        Current Listings: <b>MISSING</b>
      </div>
      <div>
        Previous Projects: <b>MISSING</b>
      </div>
      <div>
        Favorite Places: <b>MISSING</b>
      </div>

      <div>
        Contact Form: <b>MISSING</b>
      </div>
    </div>
  )
  // return <div></div>
}

// TODO: Can Remove? Copied from Listings
export async function generateStaticParams() {
  try {
    const teammates = await fetchDocs<Teammate>('teammates')
    console.log('team Members: ', teammates)
    return teammates?.map(({ slug }) => slug)
  } catch (error) {
    console.log("(Couldn't generate teammates)", error)
    return []
  }
}

export async function generateMetadata({ params: { slug } }): Promise<Metadata> {
  const { isEnabled: isDraftMode } = draftMode()

  let teammates: Teammate | null = null

  try {
    teammates = await fetchDoc<Teammate>({
      collection: 'teammates',
      slug,
      draft: isDraftMode,
    })
  } catch (error) {}

  return generateTeammateMetadata({ doc: teammates })
}
