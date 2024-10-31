'use client'

import * as React from 'react'

import { Calendar } from '../../../components/ui/calendar'

type Props = {
  date: Date | undefined
  setDate: React.Dispatch<React.SetStateAction<Date>>
}

export function CalendarInput({ date, setDate }: Props) {
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      disabled={{ before: new Date() }}
      className="rounded-md border shadow bg-gray-50 text-wwBlack w-72"
    />
  )
}
