import React, { useCallback } from 'react'
import { Particles } from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export const ContainerParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async () => {}, [])

  return (
    <Particles 
      className='w-full h-full absolute translate-z-0'
      id='tsparticles' 
      init={particlesInit} 
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: '',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
            },
            onhover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            }
          }
        },
        particles: {
          color: {
            value: '#ff2',
          },
          links: {
            color: '#3fe',
            distance: 150,
            enable: true,
            opacity: 0.7,
            width: 1
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle,'
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

        