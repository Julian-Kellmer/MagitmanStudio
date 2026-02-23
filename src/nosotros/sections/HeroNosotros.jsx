import React from 'react'
import { useTranslation } from '../../i18n/context.jsx'

const HeroNosotros = () => {
  const { t } = useTranslation('about')
  return (
    <section className='layout-wrap md:min-h-[50vh] flex flex-col justify-start '>
      <div className='flex flex-col gap-4 pt-12 md:pt-[128px] md:px-0 px-4'>
        {/* Title */}
        <h1 className='text-h1 leading-tight mb-4'>{t('heroTitle')}</h1>

        {/* Description */}
        <p className='text-body text-black/70 leading-relaxed max-w-2xl'>
          {t('heroDesc')}
        </p>
      </div>
    </section>
  )
}

export default HeroNosotros
