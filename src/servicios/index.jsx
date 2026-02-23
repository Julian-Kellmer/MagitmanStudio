import React from 'react'
import ServicesList from './sections/ServicesList'
import { useTranslation } from '../i18n/context.jsx'

const Servicios = () => {
  const { t } = useTranslation('services')
  return (
    <main className='bg-background min-h-screen pt-32 md:pt-32 '>
      <div className='layout-wrap'>
        <div className='layout-grid col-span-full mb-16  flex items-start '>
          <h1 className='col-span-full md:col-span-full md:col-start-2 text-h1 leading-tight font-medium text-primary'>
            {t('pageTitle')}
          </h1>
        </div>
        <ServicesList />
      </div>
    </main>
  )
}

export default Servicios
