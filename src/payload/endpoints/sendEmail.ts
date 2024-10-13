import type { NextApiRequest, NextApiResponse } from 'next'
import { EmailTemplate } from '../../app/emailTemplates/basicEmail'
import { Resend } from 'resend'
import type { PayloadHandler } from 'payload/config'
import { ContactEmailProps } from '@/app/customComponents/inputs/ContactForm'
import { DefaultSocials } from '../../globalData/general'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail: PayloadHandler = async (req, res) => {
  // console.log(process.env.RESEND_API_KEY)
  const { firstName, lastName, email, subject, phoneNumber, message } = req.body
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: DefaultSocials.email,
    subject: subject,
    react: EmailTemplate({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      message: message,
    }),
  })

  if (error) {
    return res.status(400).json(error)
  }

  res.status(200).json(data)
  //   res.status(200).json(req.body)
}
