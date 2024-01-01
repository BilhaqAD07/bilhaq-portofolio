'use client'
import React from 'react'
import { Poppins } from 'next/font/google'
import { Nav } from '../navigation/Nav'
import { Header } from '../elements/Header'
import { TopLeftImg } from '../elements/TopLeftImg'
import { Transition } from '../framer/Transition'

// Franer motion
import { AnimatePresence, motion } from 'framer-motion'

const BaseLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <AnimatePresence mode='wait'>
      <motion.div className='h-full'>
        <Transition/>
        <div className={`page bg-site text-white flex flex-col justify-between bg-cover bg-no-repeat relative`}>
          <TopLeftImg/>
          <Nav/>
          <Header/>
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default BaseLayout
