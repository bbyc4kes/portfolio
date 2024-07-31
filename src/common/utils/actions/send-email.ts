'use server'

import React from 'react'
import { Resend } from 'resend'
import ContactFormEmail from '@/common/components/sections/contact/_components/contact-form-email'
import { getErrorMessage, validateString } from '@/common/lib/utils'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail')
  const message = formData.get('message')

  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid sender email',
    }
  }
  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    }
  }

  let data
  try {
    data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['anthoniotheruiner@gmail.com'],
      subject: 'Message from contact form | PORTFOLIO',
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    }
  }

  return {
    data,
  }
}
