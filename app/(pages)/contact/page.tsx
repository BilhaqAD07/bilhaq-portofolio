'use client'
import React from 'react'

// Components
import { Circles } from '../../components/elements/Circles'

// Icons
import { BsArrowRight } from 'react-icons/bs'

// Framer-motion
import { motion } from 'framer-motion'
import { fadeIn } from '../../components/framer/variant'

export default function Contact() {
  return (
    <div className='h-full bg-primary/30'>
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* Text & Form */}
        <div className="flex flex-col w-full max-w-[700px]">
            {/* Text */}
            <motion.h2 
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='text-3xl xl:text-5xl font-semibold mb-12'
            >
                Let&#39;s <span className='text-accent'>connect.</span>
            </motion.h2>
            {/* Forms */}
            <motion.form
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden' 
                action="POSH" 
                className='flex flex-1 flex-col gap-6 w-full mx-auto'
            >
                {/* group */}
                <div className="flex gap-x-6 w-full">
                    <input type="text" placeholder='Name' className='input' name="name" />
                    <input type="text" placeholder='Email' className='input' name="email" />
                </div>
                <input type="text" placeholder='Subject' className='input' name="" />
                <textarea placeholder='message' className='textarea'></textarea>
                <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
                    <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let&#39;s talk</span>
                    <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
                </button>
            </motion.form>
        </div>
      </div>
    </div>
  )
}
