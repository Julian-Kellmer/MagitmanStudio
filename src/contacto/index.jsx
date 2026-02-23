import React from 'react'
import ContactForm from './sections/ContactForm'
import { useTranslation } from '../i18n/context.jsx'

const Contacto = () => {
  const { t } = useTranslation('contact')
  return (
    <main className='min-h-screen pt-24 pb-32'>
      <div className='layout-wrap'>
        {/* Header Section */}
        <div className='col-span-full flex flex-col items-center text-center mb-8 px-4'>
          {/* <p className='text-xs uppercase tracking-[0.3em] text-secondary font-medium mb-4'>
            Contacto
          </p> */}
          <h1 className='text-h2 md:text-h1 text-primary font-medium mb-6'>
            {t('pageTitle')}
          </h1>
          <p className='text-primary/60 font-light max-w-lg leading-relaxed'>
            {t('pageSubtitle')}{' '}
            <a
              href='mailto:estudio@estudiomaguitman.com.ar'
              className='text-secondary hover:underline transition-colors'>
              estudio@estudiomaguitman.com.ar
            </a>
          </p>
        </div>

        {/* Form Section */}
        <div className='layout-grid'>
          <div className='col-span-full md:col-span-10 md:col-start-2 px-4 md:px-0'>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contacto
