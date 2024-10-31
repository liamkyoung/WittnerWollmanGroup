import type { PayloadHandler } from 'payload/config'
import { Resend } from 'resend'

import { EmailTemplate } from '../../app/emailTemplates/basicEmail'
import { DefaultSocials } from '../../globalData/general'

const resend = new Resend(process.env.PAYLOAD_PUBLIC_RESEND_API_KEY)

export const sendEmail: PayloadHandler = async (req, res) => {
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
