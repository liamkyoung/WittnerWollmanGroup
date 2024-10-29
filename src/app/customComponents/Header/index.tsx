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
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'

function Nav() {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
    </>
  )
}

export default Nav
