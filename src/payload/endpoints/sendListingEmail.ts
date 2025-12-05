import type { PayloadHandler } from 'payload/config'
import { Resend } from 'resend'

import { formatDateTime } from '../../app/_utilities/formatDateTime'
import { EmailTemplate } from '../../app/emailTemplates/listingEmail'
import {
  validateAndSanitize,
  listingEmailSchema,
  checkRateLimit,
  getClientIP,
  RATE_LIMITS,
} from '../utils/validation'

const resend = new Resend(process.env.PAYLOAD_PUBLIC_RESEND_API_KEY)

export const sendListingEmail: PayloadHandler = async (req, res) => {
  // Rate limiting check
  const clientIP = getClientIP(req)
  const rateLimit = checkRateLimit(clientIP, RATE_LIMITS.email)

  if (!rateLimit.allowed) {
    return res.status(429).json({
      error: 'Too many requests. Please try again later.',
      resetTime: new Date(rateLimit.resetTime).toISOString(),
    })
  }

  // Validate and sanitize input
  const validation = validateAndSanitize(listingEmailSchema, req.body)

  if (!validation.success) {
    const v = validation as {
      success: false
      errors: string[]
    }

    return res.status(400).json({
      error: 'Validation failed',
      details: v.errors,
    })
  }

  const { firstName, lastName, email, phoneNumber, date, address } = validation.data
  const { data, error } = await resend.emails.send({
    from: process.env.PAYLOAD_PUBLIC_SENDING_EMAIL,
    to: process.env.PAYLOAD_PUBLIC_RECEIVING_EMAIL,
    subject: `Listing Showing for ${formatDateTime(date)}`,
    react: EmailTemplate({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      address: address,
      email: email,
      date: new Date(date),
    }),
  })

  if (error) {
    return res.status(400).json(error)
  }

  res.status(200).json(data)
  //   res.status(200).json(req.body)
}
