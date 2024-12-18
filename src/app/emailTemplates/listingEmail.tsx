import * as React from 'react'

import { formatDateTime } from '../_utilities/formatDateTime'

interface EmailTemplateProps {
  firstName: string
  lastName: string
  phoneNumber: string
  address: string
  email: string
  date: Date
}

// NOTE: DEPRECATED DUE TO NOT USING CALENDAR

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  address,
  date,
}) => (
  <div>
    <h1>New Message from wittnerwollman.com:</h1>
    <h2>
      Name: {firstName} {lastName}
    </h2>

    <div>
      <h2>Contact Information</h2>
      <p>Email Address: {email}</p>
      <p>Phone Number: {phoneNumber}</p>
      <p>Street Address: {address}</p>
    </div>

    <div>
      {firstName} {lastName}&apos; message:
      <p>Date: {formatDateTime(date)}</p>
    </div>
  </div>
)
