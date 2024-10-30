import type { NextApiRequest, NextApiResponse } from 'next'
import { EmailTemplate } from '../../app/emailTemplates/listingEmail'
import { Resend } from 'resend'
import type { PayloadHandler } from 'payload/config'
import { ContactEmailProps } from '@/app/customComponents/inputs/ContactForm'
import { DefaultSocials } from '../../globalData/general'
import { formatDateTime } from '../../app/_utilities/formatDateTime'

const resend = new Resend(process.env.PAYLOAD_PUBLIC_RESEND_API_KEY)

export const sendListingEmail: PayloadHandler = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, date, address } = req.body
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: DefaultSocials.email,
    subject: `Listing Showing for ${formatDateTime(date)}`,
    react: EmailTemplate({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      address: address,
      email: email,
      date: date,
    }),
  })

  if (error) {
    return res.status(400).json(error)
  }

  res.status(200).json(data)
  //   res.status(200).json(req.body)
}
