'use client'
import React from 'react'
import { Poppins } from 'next/font/google'
import { Nav } from '../navigation/Nav'
import { Header } from '../elements/Header'
import { TopLeftImg } from '../elements/TopLeftImg'
import { Transition } from '../framer/Transition'

// Font
const poppins = Poppins ({
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: ['100','200','300','400','500','600','700','800']
})

// Franer motion
import { AnimatePresence, motion } from 'framer-motion'

export default function BaseLayout ({ children }) {

  return (
    <AnimatePresence mode='wait'>
      <motion.div className='h-full'>
        <Transition/>
        <div className={`page bg-site text-white flex flex-col justify-between bg-cover bg-no-repeat ${poppins.variable} relative`}>
          <TopLeftImg/>
          <Nav/>
          <Header/>
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
