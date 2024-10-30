import * as React from 'react'

interface EmailTemplateProps {
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  date: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  phoneNumber,
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
    </div>

    <div>
      {firstName} {lastName}&apos; message:
      <p>Date: {date}</p>
    </div>
  </div>
)
