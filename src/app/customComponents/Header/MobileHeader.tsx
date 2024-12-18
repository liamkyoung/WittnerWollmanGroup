'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '../../assets/branding/logo.svg'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import { InternalLinks } from '@/globalData/navigation'
import { ContactLink } from '@/globalData/navigation/contact/contact'

type Props = {}

function MobileHeader({}: Props) {
  return (
    <nav className="flex justify-between lg:hidden global-margin-x my-5">
      <Link href="/">
        <Image priority src={Logo} alt="Logo" />
      </Link>

      <Sheet>
        <SheetTrigger>
          <div className="p-2 ring-1 ring-wwRed rounded-md cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8 text-wwRed"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </SheetTrigger>
        <SheetContent side={'left'}>
          <SheetHeader>
            <SheetTitle className="ml-32">
              <Link href="/">
                <Image priority src={Logo} alt="WW-Logo" />
              </Link>
            </SheetTitle>
            <SheetDescription>
              {InternalLinks.map(navGroup => (
                <div className="my-4 text-left" key={navGroup.title}>
                  <SheetClose asChild>
                    <Link href={navGroup.relLink}>
                      <p className="text-xl hover:text-gray-500 cursor-pointer">{navGroup.title}</p>
                    </Link>
                  </SheetClose>

                  {navGroup.subNavigation?.map(subNav => (
                    <SheetClose asChild key={navGroup.title}>
                      <Link href={subNav.relLink}>
                        <p className="mx-4 hover:text-gray-500 cursor-pointer text-left">
                          {subNav.title}
                        </p>
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              ))}

              <div className="pt-12 justify-self-start">
                <SheetClose asChild>
                  <Link className="btn-primary" href={ContactLink.relLink}>
                    CONTACT
                  </Link>
                </SheetClose>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileHeader
