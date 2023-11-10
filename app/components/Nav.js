import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope
} from 'react-icons/hi2';

export const navData = [
  { name: "Home", path: "/", icon: <HiHome /> },
  { name: "About", path: "/about", icon: <HiUser /> },
  { name: "Services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "Work", path: "/work", icon: <HiViewColumns /> },
  { name: "Testimonials", path: "/testimoni", icon: <HiChatBubbleBottomCenterText /> },
  { name: "Contact", path: "/contact", icon: <HiEnvelope /> },
];

export const Nav = () => {
  const currentRoute = usePathname();

  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:left-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
      {/* Inner */}
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-20 xl:h-max p-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          return (
            <Link className={`${link.path === currentRoute ? 'text-accent' : ''} relative flex items-center group hover:text-accent transition-all duration-300`} key={index} href={link.path}>
              {/* Tooltip */}
              <div className="absolute pl-14 left-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  {/* Triangle */}
                  <div className="border-solid border-r-white border-r-8 border-y-transparent border-y-[6px] border-l-0 absolute -left-2"></div>
                </div>
              </div>

              {/* Icon */}
              <div>
                {link.icon}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
