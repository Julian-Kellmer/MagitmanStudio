import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../i18n/context.jsx'

const Footer = () => {
  const { t } = useTranslation('common')
  return (
    <footer className='bg-white pt-16 pb-8 border-t border-black/5'>
      <div className='layout-wrap'>
        {/* Main Grid: 4 Columns on Desktop, 1 on Mobile */}
        <div className='col-span-full grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16 px-4 md:px-0'>
          {/* Column 1: Logo & Slogan */}
          <div className='flex flex-col items-center md:items-start gap-6'>
            <img
              src='/isotipo.svg'
              alt='Estudio Maguitman Logo'
              className='h-20 opacity-90'
            />
            <div className='text-center md:text-left'>
              <h2 className='text-lg uppercase tracking-widest font-medium text-primary mb-2'>
                Estudio Maguitman & ASOC
              </h2>
              <p className='text-sm font-light text-black/60 tracking-wider'>
                Consultores Tributarios y Auditores
              </p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className='flex flex-col items-center md:items-start gap-4'>
            <h4 className='text-white font-medium text-lg mb-2'>
              {t('footer.menu')}
            </h4>
            <div className='flex flex-col gap-3 items-center md:items-start text-sm text-white font-medium uppercase tracking-wide'>
              <Link
                to='/'
                className='hover:text-secondary transition-colors'>
                {t('nav.home')}
              </Link>
              <Link
                to='/servicios'
                className='hover:text-secondary transition-colors'>
                {t('nav.services')}
              </Link>
              <Link
                to='/nosotros'
                className='hover:text-secondary transition-colors'>
                {t('nav.about')}
              </Link>
              <Link
                to='/contacto'
                className='hover:text-secondary transition-colors'>
                {t('nav.contact')}
              </Link>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className='flex flex-col items-center md:items-start gap-4'>
            <h4 className='text-primary font-medium text-lg mb-2'>
              {t('footer.contactTitle')}
            </h4>
            <div className='flex flex-col gap-3 items-center md:items-start text-sm text-black/60'>
              <a
                href='mailto:estudio@estudiomaguitman.com.ar'
                className='hover:text-secondary transition-colors break-all'>
                estudio@estudiomaguitman.com.ar
              </a>
              <div className='text-center md:text-left'>
                <p>{t('footer.address1')}</p>
                <p>{t('footer.address2')}</p>
              </div>
            </div>
          </div>

          {/* Column 4: Social */}
          <div className='flex flex-col items-center md:items-start gap-4'>
            <h4 className='text-primary font-medium text-lg mb-2'>
              {t('footer.findUs')}
            </h4>
            <div className='flex flex-col gap-3 items-center md:items-start text-sm text-black/60 font-medium uppercase tracking-wide'>
              <a
                href='https://www.linkedin.com/in/karina-maguitman-74872b25/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-secondary transition-colors flex items-center gap-2 capitalize'>
                <div className='h-5 w-5'>
                  <img
                    src='Linkedin.svg'
                    alt='Social'
                  />
                </div>
                Karina Maguitman
              </a>
            </div>
            <div className='flex flex-col gap-3 items-center md:items-start text-sm text-black/60 font-medium uppercase tracking-wide'>
              <a
                href='https://www.linkedin.com/in/gustavo-warcevitzky-74a62a350/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-secondary transition-colors flex items-center gap-2 capitalize'>
                <div className='h-5 w-5'>
                  <img
                    src='Linkedin.svg'
                    alt='Social'
                  />
                </div>
                Gustavo Warcevitzky
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: 4 Columns alignment/Stack */}
        <div className='col-span-full border-t border-black/10 pt-8'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 items-center text-xs text-black/40 uppercase tracking-wider text-center md:text-left'>
            {/* 1. Copyright */}
            <div className='md:col-span-1'>
              <p>{t('footer.copyright')}</p>
            </div>

            {/* 2. Developer */}
            <div className='md:col-span-1 flex justify-center md:justify-start'>
              <p>{t('footer.developer')}</p>
            </div>

            {/* 3. Terms */}
            <div className='md:col-span-1 flex justify-center md:justify-start'>
              <Link
                to='/terms'
                className='hover:text-primary transition-colors'>
                {t('footer.terms')}
              </Link>
            </div>

            {/* 4. Privacy */}
            <div className='md:col-span-1 flex justify-center md:justify-start'>
              <Link
                to='/privacy'
                className='hover:text-primary transition-colors'>
                {t('footer.privacy')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
