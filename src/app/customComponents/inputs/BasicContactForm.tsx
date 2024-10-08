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
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ColorScheme } from '@/types/viewmodels'

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
})

type Props = {
  colorScheme?: ColorScheme
}

export function BasicContactForm({ colorScheme = ColorScheme.DEFAULT }: Props) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  const formInputStyle =
    colorScheme === ColorScheme.WHITE
      ? `bg-white text-wwBlack`
      : 'focus:ring-1 ring-inset focus:ring-inset focus:ring-wwRed'
  const formTextStyle =
    colorScheme === ColorScheme.WHITE ? 'text-white' : 'text-wwBlack'
  const buttonStyle =
    colorScheme === ColorScheme.WHITE ? 'btn-secondary' : 'btn-primary'

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`w-full max-w-[28rem] space-y-4 ${formTextStyle}`}
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="First Name"
                  {...field}
                  className={formInputStyle}
                />
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
              <FormControl>
                <Input
                  placeholder="Last Name"
                  {...field}
                  className={formInputStyle}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="(123) 456 - 7890"
                  {...field}
                  className={formInputStyle}
                />
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
              <FormControl>
                <Input
                  placeholder="example@gmail.com"
                  {...field}
                  className={formInputStyle}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <button type="submit" className={buttonStyle}>
          SUBMIT
        </button>
      </form>
    </Form>
  )
}
