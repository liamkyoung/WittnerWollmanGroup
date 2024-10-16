'use client'
import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog'
import NewsletterCard from '../NewsletterCard'
import { Button } from '@/components/ui/button'
import { getCookie, setCookie } from '../../../_utilities/cookies'

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const cookie = getCookie('ww-group-newsletter')

  useEffect(() => {
    // Only triggers popup if there is no cookie.
    // Newsletter cookie: ww-group-newsletter
    // If signed up - exists for 1 year, no sign up - 30 days.
    if (!cookie) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 20 * 1000) // 20 seconds
      // Cleanup timer on component unmount
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <div>
      {/* Trigger is hidden because the dialog opens automatically */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button style={{ display: 'none' }}>Open Dialog</button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl p-0 rounded-none">
          <NewsletterCard />
        </DialogContent>
        <DialogClose onClick={() => setCookie('ww-group-newsletter', false, 30)} />
      </Dialog>
    </div>
  )
}
