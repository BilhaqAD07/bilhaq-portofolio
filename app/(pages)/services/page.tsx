import React from 'react'
import { Metadata } from 'next'

// Components
import ServicesPage from '@/app/components/services/ServicesPage'

export const metadata: Metadata = {
  title: 'My Services',
  description: 'This is my services page, you can see any services that i offer here.',
  alternates: {
    canonical: '/services',
    languages: {
      'en': '/en/services',
    }
  }
}

function Services() {
  return (
    <ServicesPage/>
  )
}

export default Services