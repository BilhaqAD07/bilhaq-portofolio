import React from 'react'
import Image from 'next/image'

export const Circles = () => {
  return (
    <div className='w-[200px] xl:w-[300px] img-mirror absolute -left-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10'>
      <Image 
        src={'/circles.png'} 
        alt="Circles"
        width={260} 
        height={200} 
        className='h-full w-full' />
    </div>
  )
}
