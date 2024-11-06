import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '../../assets/branding/logo.svg'
import { ColorScheme } from '../../types/viewmodels'
import Facebook from '../Icons/Facebook'
import Instagram from '../Icons/Instagram'
import Linkedin from '../Icons/LinkedinIcon'
import NewsletterInputFooter from '../inputs/NewsletterInputFooter'

import { DefaultSocials, GoogleMapOfficeURL } from '@/globalData/general'
import { InternalLinks } from '@/globalData/navigation'

function Footer() {
  return (
    <div className="bg-wwBlack text-white py-16">
      <div className="global-margin-x flex flex-col xl:flex-row justify-between gap-8 lg:gap-0">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-16 lg:mb-16">
          <Image src={Logo} alt="WW-Logo" />
          <NewsletterInputFooter />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 justify-items-center gap-8">
          {InternalLinks.map(group => (
            <div>
              <h6 className="text-white">{group.title}</h6>
              <div className="space-y-2 mt-4">
                {group.subNavigation &&
                  group.subNavigation.map(n => (
                    <p className="text-sm text-white">
                      <Link href={n.relLink}>{n.title}</Link>
                    </p>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="global-margin-x flex justify-between mt-24">
        <div className="hidden md:flex flex-col gap-4">
          <span className="text-white inline-flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-wwRed"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            {DefaultSocials.email}
          </span>

          <span className="text-white inline-flex gap-2">
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

            {DefaultSocials.phoneNumber}
          </span>

          <span className="text-white inline-flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-wwRed"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>

            {DefaultSocials.address}
          </span>
        </div>

        <div className="flex gap-4 items-center justify-center md:justify-start">
          {DefaultSocials.instagram && (
            <Instagram
              profileLink={DefaultSocials.instagram.profileLink}
              colorScheme={ColorScheme.RED}
            />
          )}

          {DefaultSocials.facebook && (
            <Facebook
              profileLink={DefaultSocials.facebook.profileLink}
              colorScheme={ColorScheme.RED}
            />
          )}

          {DefaultSocials.linkedin && (
            <Linkedin
              profileLink={DefaultSocials.linkedin.profileLink}
              colorScheme={ColorScheme.RED}
            />
          )}

          <div className="flex items-center gap-4 md:hidden">
            {DefaultSocials.email && (
              <Link href={`mailto:${DefaultSocials.email}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-wwRed"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
              </Link>
            )}

            {DefaultSocials.phoneNumber && (
              <Link href={`tel:${DefaultSocials.phoneNumber}`}>
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
              </Link>
            )}

            <Link href={GoogleMapOfficeURL}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-wwRed"
              >
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
