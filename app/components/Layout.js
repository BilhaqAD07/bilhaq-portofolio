'use client'
import React from 'react'
import { Poppins } from 'next/font/google'
import { Nav } from './Nav'
import { Header } from './Header'
import { TopLeftImg } from './TopLeftImg'
import { Transition } from './Transition'

// Font
const poppins = Poppins ({
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: ['100','200','300','400','500','600','700','800']
})

// Router 
import { usePathname } from 'next/navigation'

// Franer motion
import { AnimatePresence, motion } from 'framer-motion'

export default function BaseLayout ({ children }) {

  return (
    <AnimatePresence mode='wait'>
      <motion.div className='h-full'>
        <Transition/>
        <div className={`page bg-site text-white bg-cover bg-no-repeat ${poppins.variable} relative`}>
          <TopLeftImg/>
          <Nav/>
          <Header/>
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
