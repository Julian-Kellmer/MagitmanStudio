import React from 'react'
import Button from '../../components/Button'
import WaveText from '../../components/TextWave'
import { useTranslation } from '../../i18n/context.jsx'

const Hero = () => {
  const { t } = useTranslation('home')
  return (
    <section className='layout-wrap md:min-h-screen'>
      <div className='layout-grid mt-12 md:mt-[128px] '>
        {/* Text Section */}
        <div className=' col-span-full md:col-span-10 mb-8 text-center sm:text-left md:h-[25svh] h-[30svh] flex  items-end'>
          <WaveText
            text={t('hero.waveText')}
            className=' text-h2 text-primary text-start '
          />
        </div>

        {/* Full layout image */}
        <div className='col-span-full md:h-[80svh] h-[55svh]'>
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
