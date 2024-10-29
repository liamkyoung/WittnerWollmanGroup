'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ColorScheme } from '../../types/viewmodels'
import { useToast } from '@/hooks/use-toast'
import { useState } from 'react'
import Spinner from '../Icons/Spinner'
import { setCookie } from '@/app/_utilities/cookies'

const formSchema = z.object({
  email: z.string().email('Invalid email address'),
})

export type ContactNewsletterProps = typeof formSchema

export function NewsletterForm() {
  const { toast } = useToast()
  // 1. Define your form.
  const form = useForm<z.infer<ContactNewsletterProps>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  const [sending, setSending] = useState<boolean>(false)

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<ContactNewsletterProps>) {
    setSending(true)

    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      const response = await fetch('/api/signUpNewsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      const data = await response.json()
      if (response.ok) {
        toast({
          title: '✅ Signed up for our newsletter!',
        })
        setCookie('ww-group-newsletter', true, 180) // Set true for 1 year
      } else {
        toast({
          title: '❌ There was an error signing up for the newsletter',
          description: 'Please try again later.',
        })
      }
    } catch (err) {
      console.error('Error submitting form:', err)
      toast({
        title: '❌ There was an error signing up for the newsletter.',
        description: 'Please try again later.',
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto mt-10 flex max-w-md gap-x-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 h-12"
                  placeholder="example@gmail.com"
                  aria-label="email-input"
                  {...field}
                />
              </FormControl>
              <FormMessage className="absolute" />
            </FormItem>
          )}
        />

        <button
          type="submit"
          className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          disabled={sending}
        >
          {!sending ? <span>Notify Me</span> : <Spinner />}
        </button>
      </form>
    </Form>
  )
}
