import React from 'react'
import { Metadata } from 'next'

// Components
import TestimoniPage from '@/app/components/testimoni/TestimoniPage'

export const metadata: Metadata = {
  title: 'Testimonial',
  description: 'This is my testimonial page, you can see my testimonials here.',
  alternates: {
    canonical: '/testimoni',
    languages: {
      'en': '/en/testimoni',
    }
  }
}

function Testimoni() {
  return (
    <TestimoniPage/>
  )
}

export default Testimoni