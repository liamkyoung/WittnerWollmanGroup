'use client'
import { useEffect, useState } from 'react'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '../../../../components/ui/dialog'
import { getCookie, setCookie } from '../../../_utilities/cookies'
import NewsletterCard from '../NewsletterCard'

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const cookie = getCookie('ww-group-newsletter')

  useEffect(() => {
    // Only triggers popup if there is no cookie.
    // Newsletter cookie: ww-group-newsletter
    // If signed up - exists for 1 year, no sign up - 30 days.

    const secondsUntilPopupAppears = 20 // 20 seconds
    const hasBeenOpened = sessionStorage.getItem('ww-newsletter-opened')
    if (!cookie && !hasBeenOpened) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        sessionStorage.setItem('ww-newsletter-opened', 'true')
      }, secondsUntilPopupAppears * 1000)
      // Cleanup timer on component unmount
      return () => clearTimeout(timer)
    }
  })

  return (
    <div className={`${!isOpen && 'hidden'}`}>
      {/* Trigger is hidden because the dialog opens automatically */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button className="hidden">Open Dialog</button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl p-0 rounded-none" aria-describedby="newsletter-form">
          <VisuallyHidden>
            <DialogTitle>Newsletter Input Form</DialogTitle>
          </VisuallyHidden>
          <NewsletterCard />
        </DialogContent>
        <DialogClose
          onClick={() => {
            setCookie('ww-group-newsletter', false, 30)
          }}
        />
      </Dialog>
    </div>
  )
}
