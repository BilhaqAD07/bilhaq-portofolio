'use client'
import React from 'react'

// Components
import { TestimoniSlider } from '../slider/TestimoniSlider'

// Framer-motion
import { motion } from 'framer-motion'
import { fadeIn } from '../framer/variant'

function TestimoniPage() {
  return (
    <div className='h-full bg-primary/30 py-8 pb-40 md:pb-28 md:py-28 text-center'>
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

export default TestimoniPage
