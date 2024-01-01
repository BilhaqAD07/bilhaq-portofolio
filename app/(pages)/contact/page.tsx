import React from 'react'

// Components
import ContactPage from '@/app/components/contact/ContactPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'This is my contact page, if you have any questions, please contact me.',
  alternates: {
    canonical: '/contact',
    languages: {
      'en': '/en/contact',
    }
  }
}

function Contact() {
  return (
    <ContactPage/>
  )
}

export default Contact