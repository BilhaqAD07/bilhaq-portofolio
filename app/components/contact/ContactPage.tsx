'use client'

// Components
import ContactForm from './Form'

// Framer-motion
import { motion } from 'framer-motion'
import { fadeIn } from '@/app/components/framer/variant'

function ContactPage() {
  return (
    <div className='h-full bg-primary/30 py-28'>
      <div className="container mx-auto text-center xl:text-left flex items-center justify-center">
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
            <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default ContactPage