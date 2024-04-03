import React from 'react'

// Components
import Homepage from './components/home/HomePage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bilhaq Avi Dewantara',
  description: "Hello, i'm Bilhaq. I'm a software engineer. I love creating web and mobile apps.",
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