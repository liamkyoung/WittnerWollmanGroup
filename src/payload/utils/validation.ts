import { z } from 'zod'
import DOMPurify from 'isomorphic-dompurify'

/**
 * Security validation utilities for API endpoints
 */

// Email validation schema
export const emailSchema = z.object({
  firstName: z.string()
    .min(1, 'First name is required')
    .max(50, 'First name too long')
    .regex(/^[a-zA-Z\s-']+$/, 'Invalid characters in first name'),
  lastName: z.string()
    .min(1, 'Last name is required')
    .max(50, 'Last name too long') 
    .regex(/^[a-zA-Z\s-']+$/, 'Invalid characters in last name'),
  email: z.string()
    .email('Invalid email format')
    .max(254, 'Email too long'),
  subject: z.string()
    .min(1, 'Subject is required')
    .max(200, 'Subject too long'),
  phoneNumber: z.string()
    .optional()
    .refine((phone) => {
      if (!phone) return true
      return /^\+?[\d\s\-\(\)]{10,20}$/.test(phone)
    }, 'Invalid phone number format'),
  message: z.string()
    .min(1, 'Message is required')
    .max(2000, 'Message too long')
})

// Listing email validation schema
export const listingEmailSchema = z.object({
  firstName: z.string()
    .min(1, 'First name is required')
    .max(50, 'First name too long')
    .regex(/^[a-zA-Z\s-']+$/, 'Invalid characters in first name'),
  lastName: z.string()
    .min(1, 'Last name is required')
    .max(50, 'Last name too long')
    .regex(/^[a-zA-Z\s-']+$/, 'Invalid characters in last name'),
  email: z.string()
    .email('Invalid email format')
    .max(254, 'Email too long'),
  phoneNumber: z.string()
    .optional()
    .refine((phone) => {
      if (!phone) return true
      return /^\+?[\d\s\-\(\)]{10,20}$/.test(phone)
    }, 'Invalid phone number format'),
  date: z.string()
    .refine((date) => {
      const parsed = new Date(date)
      return !isNaN(parsed.getTime()) && parsed > new Date()
    }, 'Invalid future date'),
  address: z.string()
    .min(1, 'Address is required')
    .max(200, 'Address too long')
})

// Newsletter signup validation schema
export const newsletterSchema = z.object({
  email: z.string()
    .email('Invalid email format')
    .max(254, 'Email too long'),
  firstName: z.string()
    .optional()
    .refine((name) => {
      if (!name) return true
      return name.length <= 50 && /^[a-zA-Z\s-']+$/.test(name)
    }, 'Invalid first name')
})

// Rate limiting configuration
export const RATE_LIMITS = {
  email: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 5 // 5 emails per 15 minutes
  },
  general: {
    windowMs: 15 * 60 * 1000, // 15 minutes  
    maxRequests: 100 // 100 requests per 15 minutes
  }
}

/**
 * Sanitize HTML content to prevent XSS
 */
export function sanitizeHtml(input: string): string {
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [], // No HTML tags allowed
    ALLOWED_ATTR: []
  })
}

/**
 * Validate and sanitize request body
 */
export function validateAndSanitize<T>(
  schema: z.ZodSchema<T>, 
  data: unknown
): { success: true; data: T } | { success: false; errors: string[] } {
  try {
    // First validate the structure
    const parsed = schema.parse(data)
    
    // Then sanitize string fields
    const sanitized = sanitizeObject(parsed)
    
    return { success: true, data: sanitized as T }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.errors.map(err => `${err.path.join('.')}: ${err.message}`)
      }
    }
    return {
      success: false,
      errors: ['Validation failed']
    }
  }
}

/**
 * Recursively sanitize object properties
 */
function sanitizeObject(obj: any): any {
  if (typeof obj === 'string') {
    return sanitizeHtml(obj)
  }
  
  if (Array.isArray(obj)) {
    return obj.map(sanitizeObject)
  }
  
  if (obj && typeof obj === 'object') {
    const sanitized: any = {}
    for (const [key, value] of Object.entries(obj)) {
      sanitized[key] = sanitizeObject(value)
    }
    return sanitized
  }
  
  return obj
}

/**
 * Check if IP is rate limited
 */
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

export function checkRateLimit(
  ip: string, 
  limit: typeof RATE_LIMITS.email
): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now()
  const key = `${ip}_${limit.windowMs}_${limit.maxRequests}`
  const record = rateLimitStore.get(key)
  
  if (!record || now > record.resetTime) {
    // Reset or create new record
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + limit.windowMs
    })
    return {
      allowed: true,
      remaining: limit.maxRequests - 1,
      resetTime: now + limit.windowMs
    }
  }
  
  if (record.count >= limit.maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: record.resetTime
    }
  }
  
  record.count++
  return {
    allowed: true,
    remaining: limit.maxRequests - record.count,
    resetTime: record.resetTime
  }
}

/**
 * Get client IP address from request
 */
export function getClientIP(req: any): string {
  return (
    req.headers['x-forwarded-for']?.split(',')[0] ||
    req.headers['x-real-ip'] ||
    req.connection?.remoteAddress ||
    req.socket?.remoteAddress ||
    'unknown'
  )
}