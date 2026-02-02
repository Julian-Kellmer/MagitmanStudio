import React from 'react'

const images = [
  '/About1.png',
  '/About2.png',
  '/KarinaImg.png',
  '/GustavoImg.png',
  '/About1.png',
  '/About2.png',
]

const HeroNosotros = () => {
  return (
    <section className='layout-wrap mb-24'>
      <div className='layout-grid col-span-full mb-16 '>
        {/* Header */}
        <div className='md:col-span-12 col-span-full flex flex-col gap-6 md:mb-16'>
          <div className='flex items-center gap-2'>
            <div className='h-2 w-2 bg-[#eb1c24] rounded-full'></div>
            <p className='text-sm uppercase tracking-wider text-black/60 font-medium'>
              Quienes somos
            </p>
          </div>
          <h1 className='text-h2 text-primary font-medium leading-tight max-w-4xl'>
            Nuestro Equipo
          </h1>
          <div className='md:col-span-6 col-span-full'>
            <p className='text-body text-black/70 max-w-2xl'>
              Trabajamos de manera personalizada. Analizamos, asesoramos y
              buscamos mejoras reales y ahorros impositivos que acompañen el
              crecimiento de cada negocio.
            </p>
          </div>
        </div>

        {/* Carousel */}
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
                  className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500'
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
      </div>
    </section>
  )
}

export default HeroNosotros
