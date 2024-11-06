'use client'
import React from 'react'

type Props = {}

import Image from 'next/image'
import Link from 'next/link'

import Logo from '../../assets/branding/logo.svg'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { InternalLinks } from '@/globalData/navigation'
import { ContactLink } from '@/globalData/navigation/contact/contact'

function DesktopHeader({}: Props) {
  return (
    <nav className="bg-gray-50 font-semibold items-center justify-between my-5 hidden lg:flex global-margin-x">
      <Link href="/">
        <Image priority src={Logo} alt="WW-Logo" />
      </Link>

      <div className="flex items-center space-x-8">
        {InternalLinks.map(navGroup => {
          if (navGroup.subNavigation) {
            return (
              <DropdownMenu key={navGroup.title}>
                <DropdownMenuTrigger asChild>
                  <p className="hover:text-gray-500 cursor-pointer">{navGroup.title}</p>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuGroup>
                    {navGroup.subNavigation.map(subNav => (
                      <Link href={subNav.relLink} key={subNav.title}>
                        <DropdownMenuItem className="hover:cursor-pointer">
                          {subNav.title}
                        </DropdownMenuItem>
                      </Link>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            )
          } else {
            return (
              <Link href={navGroup.relLink} key={navGroup.title}>
                <p className="hover:text-gray-500">{navGroup.title}</p>
              </Link>
            )
          }
        })}
      </div>
      <Link className="btn-primary" href={ContactLink.relLink}>
        CONTACT
      </Link>
    </nav>
  )
}

export default DesktopHeader
