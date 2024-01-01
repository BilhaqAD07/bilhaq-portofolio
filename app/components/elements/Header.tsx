import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Components 
import { Social } from './Social'

export const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-16 xl-px-0 xl:h-[90px]'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-2 md:gap-y-6 py-4 md:py-8'>
          {/* Logo */}
          <Link href={'/'} className='w-[120px] md:w-[220px] h-[48px] relative'>
            <Image 
              src={'/logo.svg'}
              alt=''
              priority={true}
              fill
            />
          </Link>
          {/* Socials */}
          <Social />
        </div>
      </div>
    </header>
  )
}
