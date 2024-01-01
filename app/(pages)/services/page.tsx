'use client'
import React from 'react'

// components
import { ServiceSlider } from '../../components/slider/ServiceSlider'
import { Bulb } from '../../components/elements/Bulb'
import { Circles } from '../../components/elements/Circles'

// framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '../../components/framer/variant'


export default function Services() {
  return (
    <div className='h-screen overflow-y-scroll md:overflow-y-hidden bg-primary/30 py-40'>
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
              className="text-3xl xl:text-5xl font-semibold xl:mt-8 mb-4"
            >
              My Services <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p 
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden' 
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 hidden md:block"
            >
              I offer a range of services designed to help you achieve your digital goals. Whether you&#39;re 
              looking for web development, UI/UX design, or custom software solutions, my expertise is here 
              to bring your vision to life. With a focus on modern technologies and user-centered design, 
              I ensure that every project is crafted to the highest standards of quality and innovation.
            </motion.p>
          </div>
          <motion.div 
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden' 
            className="w-full xl:max-w-[65%]"
          >
            {/* Slider */}
            <ServiceSlider/>
          </motion.div>
        </div>
      </div>
      <Bulb/>
    </div>
  )
}
