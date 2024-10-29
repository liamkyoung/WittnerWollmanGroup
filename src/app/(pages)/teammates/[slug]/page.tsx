import React from 'react'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { CommunityResource, Listing, Project, Teammate } from '../../../../payload/payload-types'
import { fetchDoc } from '../../../_api/fetchDoc'
import { fetchDocs } from '../../../_api/fetchDocs'
import { generateTeammateMetadata } from '../../../_utilities/generateMeta'
import Image from 'next/image'
import { Media } from '../../../_components/Media'
import { Media as MType } from '../../../../payload/payload-types'
import TeammateHeader from './TeammateHeader'
import ContactAndBio from './ContactAndBio'
import { CommunityResourceGallery } from '@/app/customComponents/CommunityResources/CommunityResourceGallery'
import payload from 'payload'
import { GoogleMapPin } from '@/app/types/viewmodels'
import { GoogleMap } from '@/app/customComponents/GoogleMap/GoogleMap'
import { ProjectGallery } from '@/app/customComponents/Projects/ProjectGallery'
import { Blocks } from '@/app/_components/Blocks'
import CallToAction, { CallToActionBlock } from '../../../_blocks/CallToAction'
import { Link } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function Page({ params: { slug } }) {
  const { isEnabled: isDraftMode } = draftMode()
  let teammate: Teammate | null = null
  let pins: GoogleMapPin[]
  let projects: Project[]

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
    pins = await getAgentListings(teammate.id)
    projects = await getAgentProjects(teammate.id)
  }

  const {
    title,
    bio,
    profilePic,
    profileIntroduction,
    strengths,
    yearsOfExperience,
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
          jobTitle="Commercial Real Estate Agent"
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

        {pins && pins.length > 0 && <GoogleMap pins={pins} fullscreen />}

        <ProjectGallery projects={projects} />
      </div>
      <div className="mt-24">
        <CommunityResourceGallery communityResources={favoritePlaces as CommunityResource[]} />
        <CallToActionBlock type={'agent'} blockType="cta" />
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

export async function getAgentListings(teammateId: number): Promise<GoogleMapPin[] | null> {
  let listings
  let pins: GoogleMapPin[]
  // Next, fetch listings that reference the teammate in the 'agents' field
  try {
    listings = await payload.find({
      collection: 'listings',
      where: {
        agents: {
          contains: teammateId, // This filters listings by the agent's ID
        },
      },
    })
  } catch (error) {
    console.error('Error fetching teammate or listings:', error)
  }

  if (listings && listings.docs) {
    // console.log(listings)
    pins = listings.docs.map(l => {
      return {
        name: l.title,
        coords: { lat: l.latitude, lng: l.longitude },
        slug: l.slug,
        coverImg: l.coverImage as MType,
      }
    })
  }

  return pins
}

export async function getAgentProjects(teammateId: number): Promise<Project[] | null> {
  let projects = null
  // Next, fetch listings that reference the teammate in the 'agents' field
  try {
    projects = await payload.find({
      collection: 'projects',
      where: {
        agents: {
          contains: teammateId, // This filters listings by the agent's ID
        },
      },
    })
  } catch (error) {
    console.error('Error fetching teammate or listings:', error)
  }

  //console.log('Projects', projects.docs)

  return projects.docs
}
