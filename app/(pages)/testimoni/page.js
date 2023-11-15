'use client'
import React from 'react'

// Components
import { TestimoniSlider } from '../../components/TestimoniSlider'

// Framer-motion
import { motion } from 'framer-motion'
import { fadeIn } from '../../../variant'

export default function Testimoni() {
  return (
    <div className='h-full xxs:overflow-y-scroll sm:overflow-hidden bg-primary/30 py-40 xxs:pb-60 text-center'>
      <div className='container mx-auto h-full flex flex-col justify-center'>
        {/* Title */}
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden' 
          className='text-3xl font-semibold xl:text-5xl mb-4'>
          What clients <span className='text-accent'>say.</span>
        </motion.h2>
        {/* Slider */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
          <TestimoniSlider />
        </motion.div>
      </div>
    </div>
  )
}
