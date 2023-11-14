import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// icons 
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from 'react-icons/rx'

// import required modules
import { FreeMode, Pagination } from 'swiper/modules'

// Service Data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
]

export const ServiceSlider = () => {
  return (
    <Swiper breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      },

    }}
    freeMode={true}
    pagination={{
      clickable: true
    }}
    modules={[FreeMode, Pagination]}
    className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* Icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* Title & Desc */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>{item.desc}</p>
              </div>
              {/* Arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
              </div>
            </div>

          </SwiperSlide>
        )
      })
      }
    </Swiper>
  )
}
