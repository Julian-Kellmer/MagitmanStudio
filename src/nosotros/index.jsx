import React from 'react'
import Hero from './sections/HeroNosotros'
import TeamList from './sections/TeamList'
const images = [
  '/About1.png',
  '/About2.png',
  '/KarinaImg.png',
  '/GustavoImg.png',
  '/About1.png',
  '/About2.png',
]
const Nosotros = () => {
  return (
    <main className='bg-background min-h-screen pt-32 pb-32'>
      <Hero />
      <TeamList />
      <div className='col-span-full overflow-hidden w-full relative'>
          <div className='flex gap-4 animate-marquee-fast'>
            {/* First set of images */}
            {images.map((img, index) => (
              <div
                key={index}
                className='flex-shrink-0 w-[280px] md:w-[600px] aspect-video overflow-hidden rounded-sm'>
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  className='w-full h-full object-cover   transition-all duration-500'
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {images.map((img, index) => (
              <div
                key={`dup-${index}`}
                className='flex-shrink-0 w-[280px] md:w-[600px] aspect-video overflow-hidden rounded-sm'>
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500'
                />
              </div>
            ))}
          </div>
        </div>
    </main>
  )
}

export default Nosotros
