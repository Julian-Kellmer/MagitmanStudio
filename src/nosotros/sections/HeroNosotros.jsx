import React from 'react'
import { useTranslation } from '../../i18n/context.jsx'

const HeroNosotros = () => {
  const { t } = useTranslation('about')
  return (
    <section className='layout-wrap md:min-h-[50vh] flex flex-col justify-end '>
      <div className='layout-grid pt-12 md:pt-[128px]  md:px-0 px-4'>
        {/* Title */}
        <h1 className='col-span-full md:col-span-5 md:col-start-2 text-h1 md:text-h2 leading-tight font-medium text-primary mb-4'>
          {t('heroTitle')}
        </h1>

        {/* Description aligned right */}
        <div className='col-span-full md:col-span-5 md:col-start-7 flex items-end'>
          <p className='text-body text-black/70 leading-relaxed'>
            {t('heroDesc')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroNosotros
