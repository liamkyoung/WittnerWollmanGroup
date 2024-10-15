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

export default function AutoDialog() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 30 * 1000) // 30 seconds

    // Cleanup timer on component unmount
    return () => clearTimeout(timer)
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
      </Dialog>
    </div>
  )
}
