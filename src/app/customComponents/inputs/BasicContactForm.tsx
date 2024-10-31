'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '../../../components/ui/form'
import { Input } from '../../../components/ui/input'
import { ColorScheme } from '../../types/viewmodels'
import Spinner from '../Icons/Spinner'
import { CalendarInput } from './CalendarInput'

import { useToast } from '@/hooks/use-toast'

const formSchema = z.object({
  firstName: z
    .string()
    .min(1, {
      message: 'First name must be at least 1 characters.',
    })
    .max(50, 'First name cannot exceed 50 characters'),
  lastName: z
    .string()
    .min(1, {
      message: 'Last name must be at least 12 characters.',
    })
    .max(50, 'First name cannot exceed 50 characters'),
  phoneNumber: z.string().regex(/^\+?\d{10,15}$/, 'Phone number must be valid'),
  email: z.string().email('Invalid email address'),
  address: z.string(),
  date: z.date().min(new Date(), 'Please select a valid date'),
})

type Props = {
  address: string
  colorScheme?: ColorScheme
}

export function BasicContactForm({ address, colorScheme = ColorScheme.DEFAULT }: Props) {
  const { toast } = useToast()

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      address: address,
      date: new Date(),
    },
  })

  // console.log(form.getValues())

  const formInputStyle =
    colorScheme === ColorScheme.WHITE
      ? `bg-white text-wwBlack w-full`
      : 'focus:ring-1 ring-inset focus:ring-inset focus:ring-wwRed w-full'
  const formTextStyle = colorScheme === ColorScheme.WHITE ? 'text-white' : 'text-wwBlack'
  const buttonStyle = colorScheme === ColorScheme.WHITE ? 'btn-secondary' : 'btn-primary'

  const [sending, setSending] = useState<boolean>(false)

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log('VALUES: ', values)
    setSending(true)
    try {
      const response = await fetch('/api/sendListingEmail', {
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
      // console.error('Error submitting form:', err)
      toast({
        title: '❌ There was an error sending your message',
        description: 'Please try again later.',
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row gap-4 w-full"
      >
        <div
          className={`flex flex-col justify-center gap-8 ${formTextStyle} min-w-72 max-w-96 mx-auto mb-8`}
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="First Name" {...field} className={formInputStyle} />
                </FormControl>
                <FormMessage className="absolute" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Last Name" {...field} className={formInputStyle} />
                </FormControl>
                <FormMessage className="absolute" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="(123) 456 - 7890" {...field} className={formInputStyle} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage className="absolute" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="example@gmail.com" {...field} className={formInputStyle} />
                </FormControl>
                <FormMessage className="absolute" />
              </FormItem>
            )}
          />
        </div>

        <div className="mx-auto">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <CalendarInput
                    date={form.getValues('date')}
                    setDate={(date: Date) => form.setValue('date', date)}
                  />
                </FormControl>
                <FormMessage className="absolute" />
              </FormItem>
            )}
          />
        </div>

        <div className="mx-auto lg:place-self-end">
          <button type="submit" className={buttonStyle} disabled={sending}>
            {!sending ? <span>SUBMIT</span> : <Spinner size={6} />}
          </button>
        </div>
      </form>
    </Form>
  )
}
