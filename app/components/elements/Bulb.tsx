import Image from 'next/image'
import React from 'react'

export const Bulb = () => {
  return (
    <div className='absolute -right-36 -rotate-12 -bottom-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]'>
      <Image 
        src={'/bulb.png'}
        width={260}
        height={200}
        className='w-full h-full'
        alt='bulb'
      />
    </div>
  )
}
