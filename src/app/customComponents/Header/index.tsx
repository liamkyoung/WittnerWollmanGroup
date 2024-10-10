import React from 'react'
import Logo from '../../assets/branding/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { InternalLinks } from '@/globalData/navigation'

function Nav() {
  return (
    <>
      <nav className="bg-gray-50 font-semibold items-center justify-between my-5 hidden lg:flex global-margin-x">
        <Link href="/">
          <Image priority src={Logo} alt="WW-Logo" />
        </Link>

        <div className="flex items-center space-x-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <p className="hover:text-gray-500 cursor-pointer">Services</p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <Link href="/services/leasing">
                  <DropdownMenuItem className="hover:cursor-pointer">Leasing</DropdownMenuItem>
                </Link>
                <Link href="/services/sales">
                  <DropdownMenuItem className="hover:cursor-pointer">Sales</DropdownMenuItem>
                </Link>
                <Link href="/services/acquisition">
                  <DropdownMenuItem className="hover:cursor-pointer">Acquisition</DropdownMenuItem>
                </Link>
                <Link href="/services/consulting">
                  <DropdownMenuItem className="hover:cursor-pointer">Consulting</DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link className="" href="/listings">
            <p className="hover:text-gray-500">Listings</p>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <p className="hover:text-gray-500 cursor-pointer">About Us</p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <Link href="/teammates">
                  <DropdownMenuItem className="hover:cursor-pointer">Our Team</DropdownMenuItem>
                </Link>
                <Link href="/projects">
                  <DropdownMenuItem className="hover:cursor-pointer">Our Projects</DropdownMenuItem>
                </Link>
                <Link href="/involvement">
                  <DropdownMenuItem className="hover:cursor-pointer">
                    Our Involvement
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <p className="hover:text-gray-500 cursor-pointer">Community</p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <Link href="/news">
                  <DropdownMenuItem className="hover:cursor-pointer">News</DropdownMenuItem>
                </Link>
                <Link href="/community-resources">
                  <DropdownMenuItem className="hover:cursor-pointer">Resources</DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Link className="btn-primary" href="/contact">
          CONTACT
        </Link>
      </nav>

      <nav className="flex justify-between lg:hidden global-margin-x my-5 items-center">
        <Link href="/">
          <Image priority src={Logo} alt="WW-Logo" />
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
                  <div className="my-4" key={navGroup.title}>
                    <Link href={navGroup.relLink}>
                      <p className="text-xl hover:text-gray-500 cursor-pointer">{navGroup.title}</p>
                    </Link>
                    {navGroup.subNavigation?.map(subNav => (
                      <Link href={subNav.relLink} key={navGroup.title}>
                        <p className="ml-4 hover:text-gray-500 cursor-pointer">{subNav.title}</p>
                      </Link>
                    ))}
                  </div>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  )
}

export default Nav
