'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../../components/ui/form'
import { Input } from '../../../components/ui/input'
import { Textarea } from '../../../components/ui/textarea'
import { useToast } from '../../../hooks/use-toast'
import { ColorScheme } from '../../types/viewmodels'
import Spinner from '../Icons/Spinner'

const formSchema = z.object({
  firstName: z
    .string()
    .min(1, {
      message: 'First name must be at least 1 character.',
    })
    .max(50, 'First name cannot exceed 50 characters'),
  lastName: z
    .string()
    .min(1, {
      message: 'Last name must be at least 1 character.',
    })
    .max(50, 'Last name cannot exceed 50 characters'),
  phoneNumber: z
    .string()
    .regex(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, 'Phone number must be valid'), // https://stackoverflow.com/questions/16699007/regular-expression-to-match-standard-10-digit-phone-number
  email: z.string().email('Invalid email address'),
  subject: z
    .string()
    .min(1, 'Subject line is required')
    .max(100, 'Subject line cannot exceed 100 characters'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters long')
    .max(1000, 'Message cannot exceed 1000 characters'),
})

type Props = {
  colorScheme?: ColorScheme
}

export type ContactEmailProps = typeof formSchema

export function ContactForm({ colorScheme = ColorScheme.DEFAULT }: Props) {
  const { toast } = useToast()
  // 1. Define your form.
  const form = useForm<z.infer<ContactEmailProps>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  const [sending, setSending] = useState<boolean>(false)

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<ContactEmailProps>) {
    setSending(true)
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      const data = await response.json()
      if (response.ok) {
        toast({
          title: '✅ Your message has been sent!',
        })
      } else {
        toast({
          title: '❌ There was an error sending your message',
          description: 'Please try again later.',
        })
      }
    } catch (err) {
      //console.error('Error submitting form:', err)
      toast({
        title: '❌ There was an error sending your message',
        description: 'Please try again later.',
      })
    } finally {
      setSending(false)
    }
  }

  const formInputStyle =
    colorScheme === ColorScheme.WHITE
      ? `bg-white text-wwBlack`
      : 'focus:ring-1 ring-inset focus:ring-inset focus:ring-wwRed'
  const formTextStyle = colorScheme === ColorScheme.WHITE ? 'text-white' : 'text-wwBlack'
  const buttonStyle = colorScheme === ColorScheme.WHITE ? 'btn-secondary' : 'btn-primary'

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-8 ${formTextStyle}`}>
        <div className={`grid grid-cols-2 gap-4`}>
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="First Name" {...field} className={formInputStyle} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Last Name" {...field} className={formInputStyle} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="(123) 456 - 7890" {...field} className={formInputStyle} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@gmail.com" {...field} className={formInputStyle} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Service Inquiry" {...field} className={formInputStyle} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your message here"
                    className={`resize-none ${formInputStyle}`}
                    rows={6}
                    {...field}
                  />
                </FormControl>
                <FormDescription className={formTextStyle}>
                  Please provide details about your request here and we will contact you on how we
                  can help.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <button type="submit" className={buttonStyle} disabled={sending}>
          {!sending ? <span>SEND MESSAGE</span> : <Spinner size={6} />}
        </button>
      </form>
    </Form>
  )
}
