import Link from 'next/link'
import React from 'react'

import {
  RiMailLine,
  RiInstagramLine,
  RiGithubLine
} from 'react-icons/ri'

export const Social = () => {
  return (
    <div className='flex items-center gap-x-5 text-2xl'>
      <Link href={'https://mailto:bilhaqad90@gmail.com'} className='hover:text-accent transition-all duration-300'>
        <RiMailLine/>
      </Link>
      <Link href={'https://instagram.com/bilhaqad'} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine/>
      </Link>
      <Link href={'https://github.com/BilhaqAD07'} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine/>
      </Link>
    </div>
  )
}
