import type { PayloadHandler } from 'payload/config'
import { Resend } from 'resend'

import { NewsletterEmailTemplate } from '../../app/emailTemplates/newsletterEmail'

const resend = new Resend(process.env.PAYLOAD_PUBLIC_RESEND_API_KEY)

export const signUpNewsletter: PayloadHandler = async (req, res) => {
  const { email } = req.body // Sign Up Email
  const { data, error } = await resend.emails.send({
    from: process.env.PAYLOAD_PUBLIC_SENDING_EMAIL,
    to: process.env.PAYLOAD_PUBLIC_RECEIVING_EMAIL,
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
