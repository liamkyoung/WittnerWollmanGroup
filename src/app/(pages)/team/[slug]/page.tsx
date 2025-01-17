import React from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import {
  CommunityResource,
  Listing,
  Media as MType,
  Project,
  Teammate,
} from '../../../../payload/payload-types'
import { fetchDoc } from '../../../_api/fetchDoc'
import { fetchDocs } from '../../../_api/fetchDocs'
import { CallToActionBlock } from '../../../_blocks/CallToAction'
import { generateTeammateMetadata } from '../../../_utilities/generateMeta'
import ContactAndBio from './ContactAndBio'
import TeammateHeader from './TeammateHeader'

import { fetchListingsByAgent } from '@/app/_api/fetchListingsByAgent'
import { fetchProjectsByAgent } from '@/app/_api/fetchProjectsByAgent'
import { CommunityResourceCard } from '@/app/customComponents/CommunityResources/CommunityResourceCard'
import { ListingGallery } from '@/app/customComponents/Listings/ListingGallery'
import { ProjectGallery } from '@/app/customComponents/Projects/ProjectGallery'

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

  if (!teammate) return notFound()

  // console.log('Teammate ID:', teammate.id)
  const listings = await fetchListingsByAgent<Listing>([teammate.id.toString()])
  const projects = await fetchProjectsByAgent<Project>([teammate.id.toString()], null, 8)

  const {
    title,
    bioParagraph,
    profilePic,
    profileIntroduction,
    strengths,
    yearsOfExperience,
    jobTitle,
    email,
    phoneNumber,
    officeNumber,
    instagram,
    Facebook,
    Linkedin,
    favoritePlaces,
  } = teammate
  return (
    <>
      <div className="max-w-[100rem] mx-auto">
        <div className="global-margin-x space-y-16 mt-16">
          <TeammateHeader
            name={title}
            fullBodyImg={profilePic as MType}
            shortDescription={profileIntroduction}
            jobTitle={jobTitle}
            yearsOfExperience={yearsOfExperience}
            strength={strengths}
          />
          <ContactAndBio
            bio={bioParagraph}
            email={email}
            phoneNumber={phoneNumber}
            officeNumber={officeNumber}
            instagram={
              instagram && {
                platformName: 'instagram',
                profileLink: `https://www.instagram.com/${instagram}`,
                username: instagram,
              }
            }
            facebook={
              Facebook && {
                platformName: 'facebook',
                profileLink: `https://www.facebook.com/${Facebook}`,
                username: Facebook,
              }
            }
            linkedin={
              Linkedin && {
                platformName: 'linkedin',
                profileLink: `https://www.linkedin.com/in/${Linkedin}`,
                username: Linkedin,
              }
            }
          />
        </div>
        <div>
          {listings && listings.length > 0 && (
            <ListingGallery listings={listings} displayHeader="no" />
          )}

          {projects && projects.length > 0 && <ProjectGallery projects={projects} />}

          {favoritePlaces && favoritePlaces.length > 0 && (
            <div className="global-margin-x global-margin-y">
              <h2 className=" mb-16 text-center md:text-start">My Favorite Places in Tampa Bay</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 my-24 lg:place-items-start place-items-center">
                {favoritePlaces.map((place, i) => (
                  <CommunityResourceCard doc={place as CommunityResource} key={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-36">
        <CallToActionBlock blockType="cta" />
      </div>
    </>
  )
}

// TODO: Can Remove? Copied from Listings
export async function generateStaticParams() {
  try {
    const teammates = await fetchDocs<Teammate>('teammates')
    return teammates?.map(({ slug }) => slug)
  } catch (error) {
    return ['/']
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
