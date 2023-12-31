'use client'
import React from 'react'

// components
import { WorkSlider } from '../../components/slider/WorkSlider'
import { Bulb } from '../../components/elements/Bulb'
import { Circles } from '../../components/elements/Circles'

// framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '../../components/framer/variant'


export default function Work() {
  return (
    <div className='h-screen overflow-y-scroll sm:overflow-hidden bg-primary/30 py-32'>
      <Circles />
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* Text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden' 
              className="text-3xl font-semibold xl:text-5xl xl:mt-12 mb-4"
            >
              My Work <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p 
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden' 
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam similique minus, doloremque consequatur harum deleniti fuga perspiciatis unde labore iste pariatur accusamus numquam architecto fugit atque aliquid ipsam beatae veniam.
            </motion.p>
          </div>

          {/* Slider */}
          <motion.div 
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden' 
            className="w-full xl:max-w-[65%] xss:pb-20 sm:pb-0"
          >
            <WorkSlider/>
          </motion.div>
        </div>
      </div>
      <Bulb/>
    </div>
  )
}