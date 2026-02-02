import React from 'react'
import Button from '../../components/Button'
import WaveText from '../../components/TextWave'

const Hero = () => {
  return (
    <section className='layout-wrap '>
      <div className='layout-grid md:mt-[128px]'>
        {/* Text Section */}
        <div className=' col-span-full md:col-span-6 mb-16 text-center sm:text-left md:h-[25svh] h-[30svh] flex  items-end'>
          <WaveText
            text='Acompañamos a las empresas en el desarrollo de sus negocios, otorgándole conocimiento especializado y respaldo en la toma de decisiones.'
            className=' text-h2 text-primary text-start'
          />
        </div>

        {/* Full layout image */}
        <div className='col-span-full h-[45svh]'>
          <img
            src='home.webp'
            alt='Architecture'
            className='w-full h-full object-cover bg-red-500  rounded-sm opacity-0 animate-fadeIn  '
            style={{ animationDelay: '0.5s' }}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
