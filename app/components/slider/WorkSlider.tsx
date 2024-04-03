/* eslint-disable react/jsx-key */
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

// import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// icons 
import { BsArrowRight } from 'react-icons/bs'

// import required modules
import { Pagination } from 'swiper/modules'

// Work Data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'PPLK ITERA 2022',
          path: '/PPLK.png',
          link: 'https://pplk2022.com/'
        },
        {
          title: 'WEB KM ITERA',
          path: '/km-itera.png',
          link: 'https://teknokm.my.id/'
        },
        {
          title: 'Human Resource Information System PT GATRA MAPAN',
          path: '/HRIS-GatraMapan.png',
          link: 'https://hr.masqomar.site/',
        },
        {
          title: 'C-Sports Mobile Application',
          path: '/C-Sports.png',
          link: 'https://github.com/Shercosta/csport',
        },
      ],
    },
    {
      images: [
        {
          title: 'Song Finder AI Model',
          path: '/Song-Finder.png',
          link: 'https://github.com/revanfz/IR-Song-Finder.git',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          link: '',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          link: '',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
          link: '',
        },
      ],
    },
  ],
};

export const WorkSlider = () => {
  return (
    <Swiper 
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div className="relative rounded-lg overflow-hidden flex items-center justify-center group" key={index}>
                    <a href={image.link} className="flex items-center justify-center relative overflow-hidden group">
                      {/* Image */}
                      <Image src={image.path} width={500} height={300} className='w-[372px] h-52 object-fill' alt=''/>
                      {/* Overflow gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* Title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* Title Part 1 */}
                          <div className="delay-100">
                            LIVE
                          </div>
                          {/* Title Part 2 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all  duration-300 delay-150'>
                            PROJECT
                          </div>
                          {/* Icon */}
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            <BsArrowRight/>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ) 
              })}
            </div>
          </SwiperSlide>
        )
      })
      }
    </Swiper>
  )
}
