import React from 'react'

// Components
import Homepage from './components/home/HomePage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | Bilhaq Avi Dewantara - Portofolio',
  description: "Hello, i'm Bilhaq Avi Dewantara. I'm a software engineer. I love creating web and mobile apps.",
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en/',
    }
  }
}

function Home() {
  return (
    <Homepage/>
  )
}

export default Home