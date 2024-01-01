import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../components/framer/variant'
import { BsArrowRight } from 'react-icons/bs'


function ContactForm() {
  return (
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
        <button className='btn rounded-full border border-white/50 max-w-[120px] md:max-w-[170px]  px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
            <span className='group-hover:-translate-y-[120%] text-xs md:text-base group-hover:opacity-0 transition-all duration-500'>Let&#39;s talk</span>
            <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
        </button>
    </motion.form>
  )
}

export default ContactForm