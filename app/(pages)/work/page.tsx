import React from 'react'
import { Metadata } from 'next'

// Components
import WorkPage from '@/app/components/work/WorkPage'

export const metadata: Metadata = {
  title: 'My Work',
  description: 'This is my work page, you can see my projects here.',
  alternates: {
    canonical: '/work',
    languages: {
      'en': '/en/work',
    }
  }
}

function Work() {
  return (
    <WorkPage/>
  )
}

export default Work