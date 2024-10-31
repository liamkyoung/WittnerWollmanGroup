import type { PayloadHandler } from 'payload/config'
import { Resend } from 'resend'

import { NewsletterEmailTemplate } from '../../app/emailTemplates/newsletterEmail'
import { NewsletterEmail } from '../../globalData/general'

const resend = new Resend(process.env.PAYLOAD_PUBLIC_RESEND_API_KEY)

export const signUpNewsletter: PayloadHandler = async (req, res) => {
  const { email } = req.body
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: NewsletterEmail, // TODO: Make into a env variable
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
