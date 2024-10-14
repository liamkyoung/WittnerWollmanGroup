import type { NextApiRequest, NextApiResponse } from 'next'
import { EmailTemplate } from '../../app/emailTemplates/basicEmail'
import { Resend } from 'resend'
import type { PayloadHandler } from 'payload/config'
import { ContactEmailProps } from '@/app/customComponents/inputs/ContactForm'
import { DefaultSocials } from '../../globalData/general'
import { NewsletterEmailTemplate } from '../../app/emailTemplates/newsletterEmail'

const resend = new Resend(process.env.PAYLOAD_PUBLIC_RESEND_API_KEY)

export const signUpNewsletter: PayloadHandler = async (req, res) => {
  const { email } = req.body
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: DefaultSocials.email,
    subject: `Newsletter Signup | ${email}`,
    react: NewsletterEmailTemplate({
      email: email,
    }),
  })

  if (error) {
    return res.status(400).json(error)
  }

  res.status(200).json(data)
  //   res.status(200).json(req.body)
}
