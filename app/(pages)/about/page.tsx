import React from 'react'
import AboutPage from '@/app/components/about/AboutPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'This is my about page, you can see my skills and experience from here. And also you can contact me if you have any questions.',
  alternates: {
    canonical: '/about',
    languages: {
      'en': '/en/about',
    }
  }
}

function About() {
  return (
    <AboutPage/>
  )
}

export default About