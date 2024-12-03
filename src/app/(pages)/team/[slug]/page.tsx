import React from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import payload from 'payload'

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

import { CommunityResourceCard } from '@/app/customComponents/CommunityResources/CommunityResourceCard'
import { CommunityResourceGallery } from '@/app/customComponents/CommunityResources/CommunityResourceGallery'
import { GoogleMap } from '@/app/customComponents/GoogleMap/GoogleMap'
import { ListingCard } from '@/app/customComponents/Listings'
import { ListingGallery } from '@/app/customComponents/Listings/ListingGallery'
import { ProjectGallery } from '@/app/customComponents/Projects/ProjectGallery'
import { GoogleMapPin } from '@/app/types/viewmodels'

export default async function Page({ params: { slug } }) {
  const { isEnabled: isDraftMode } = draftMode()
  let teammate: Teammate | null = null
  let listings: Listing[] | null = null
  let projects: Project[] | null = null

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
  } else {
    listings = await getAgentListings(teammate.id)
    projects = await getAgentProjects(teammate.id)
  }

  const {
    title,
    bio,
    profilePic,
    profileIntroduction,
    strengths,
    yearsOfExperience,
    jobTitle,
    email,
    phoneNumber,
    instagram,
    Facebook,
    Linkedin,
    favoritePlaces,
  } = teammate
  return (
    <>
      <div className="global-margin-x space-y-24 mt-16">
        <TeammateHeader
          name={title}
          fullBodyImg={profilePic as MType}
          shortDescription={profileIntroduction}
          jobTitle={jobTitle}
          yearsOfExperience={yearsOfExperience}
          strength={strengths[0]}
        />
        <ContactAndBio
          bio={bio}
          email={email}
          phoneNumber={phoneNumber}
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
          <div className="global-margin-y">
            <h2 className="mb-16 text-center md:text-start global-margin-x">My Listings</h2>
            <ListingGallery listings={listings} displayHeader="no" />
          </div>
        )}

        {projects && projects.length > 0 && <ProjectGallery projects={projects} />}

        {favoritePlaces && favoritePlaces.length > 0 && (
          <div className="global-margin-x">
            <h2 className=" mb-16 text-center md:text-start">My Favorite Places in Tampa Bay</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 my-24 lg:place-items-start place-items-center">
              {favoritePlaces.map((place, i) => (
                <CommunityResourceCard doc={place as CommunityResource} key={i} />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="mt-24">
        <CallToActionBlock blockType="cta" />
      </div>
    </>
  )
  // return <div></div>
}

// TODO: Can Remove? Copied from Listings
export async function generateStaticParams() {
  try {
    const teammates = await fetchDocs<Teammate>('teammates')
    // console.log('team Members: ', teammates)
    return teammates?.map(({ slug }) => slug)
  } catch (error) {
    // console.log("(Couldn't generate teammates)", error)
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

async function getAgentListings(teammateId: number): Promise<Listing[] | null> {
  let listings = null
  // Next, fetch listings that reference the teammate in the 'agents' field
  try {
    listings = await payload.find({
      collection: 'listings',
      where: {
        agents: {
          contains: teammateId, // This filters listings by the agent's ID
        },
        _status: { equals: 'published' },
      },
    })
  } catch (error) {
    //console.error('Error fetching teammate or listings:', error)
  }

  // console.log('listings', listings) // eslint-disable-line no-console

  return listings?.docs
}

async function getAgentProjects(teammateId: number): Promise<Project[] | null> {
  let projects = null
  // Next, fetch listings that reference the teammate in the 'agents' field
  try {
    projects = await payload.find({
      collection: 'projects',
      where: {
        agents: {
          contains: teammateId, // This filters listings by the agent's ID
        },
        _status: { equals: 'published' },
      },
    })
  } catch (error) {
    console.error('Error fetching teammate or listings:', error) // eslint-disable-line no-console
  }

  //console.log('Projects', projects.docs)

  return projects?.docs
}
