import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Icons 
import { HiArrowRight } from 'react-icons/hi2'

export const Button = () => {
  return (
    <div className='mx-auto xl:mx-0'>
      <Link className='w-[185px] h-[182px] flex justify-center items-center bg-cover bg-circleStar bg-center bg-no-repeat group' href={'/work'}>
            <Image
                src={'/rounded-text.png'}
                alt='Project btn'
                width={141}
                height={148}
                className='animate-spin-low w-full h-full max-w-[141px] max-h-[148px]'
            />
            <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300'/>
        </Link>
    </div>
  )
}
