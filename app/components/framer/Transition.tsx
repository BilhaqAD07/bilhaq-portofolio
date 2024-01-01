import { motion } from 'framer-motion';
import React from 'react';

const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: '100%',
    width: '100%',
  }
};

const transitionProps = (delay: any) => ({
  variants: transitionVariants,
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  transition: {
    delay: delay,
    duration: 0.6,
    ease: 'easeInOut'
  }
});

export const Transition = () => {
  return (
    <>
      <motion.div 
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]' 
        {...transitionProps(0.2)}
      />
      <motion.div 
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2d71]' 
        {...transitionProps(0.4)}
      />
      <motion.div 
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#4b3792]'
        {...transitionProps(0.6)}
      />
    </>
  );
};

