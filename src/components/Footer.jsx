import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-tertiary/30'>
      <div className='layout-wrap  pt-12 pb-8 border-t border-black/5'>
        <div className='layout-grid col-span-full  pt-12 md:pt-12 pb-8 px-4 md:px-8 rounded-lg'>
          {/* Top Section: Logo & Title */}
          <div className='col-span-full flex flex-col items-center justify-center gap-4 md:gap-6 mb-6 md:mb-12'>
            <img
              src='/isotipo.svg'
              alt='Estudio Maguitman Logo'
              className='h-16 md:h-24 opacity-80'
            />
            <div className='text-center'>
              <h2 className='text-xl md:text-h3 uppercase tracking-widest font-normal text-primary mb-2'>
                Estudio Maguitman & ASOC
              </h2>
              <p className='text-sm md:text-lg font-light text-black/60 tracking-wide'>
                Consultores Tributarios y Auditores
              </p>
            </div>
          </div>

          {/* Middle Section: Links & Contact */}
          <div className='col-span-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 mb-12 md:mb-12'>
            {/* Left: Navigation */}
            <div className='md:col-span-3 flex flex-col gap-3 items-center md:items-start text-body text-primary/80 uppercase tracking-wide text-sm font-medium'>
              <Link
                to='/'
                className='hover:text-secondary transition-colors'>
                Home
              </Link>
              <Link
                to='/servicios'
                className='hover:text-secondary transition-colors'>
                Servicios
              </Link>
              <Link
                to='/nosotros'
                className='hover:text-secondary transition-colors'>
                About us
              </Link>
            </div>

            {/* Center: Contact Info */}
            <div className='md:col-span-6 flex flex-col items-center text-center gap-6 md:gap-8'>
              <div className='flex flex-col gap-1'>
                <h4 className='text-base md:text-lg font-medium mb-1'>
                  Contactanos
                </h4>
                <p className='text-sm md:text-body text-black/60'>
                  +54 9 11 6666 2222
                </p>
                <a
                  href='mailto:Maguitman@gmail.com'
                  className='text-sm md:text-body text-black/60 hover:text-secondary transition-colors'>
                  Maguitman@gmail.com
                </a>
              </div>

              <div className='flex flex-col gap-1'>
                <h4 className='text-base md:text-lg font-medium mb-1'>
                  Estudio
                </h4>
                <p className='text-sm md:text-body text-black/60'>
                  Belgrano CABA,
                </p>
                <p className='text-sm md:text-body text-black/60'>
                  Cabildo 4367
                </p>
              </div>
            </div>

            {/* Right: Social Links */}
            <div className='md:col-span-3 flex flex-col gap-3 items-center md:items-end text-body text-primary/80 uppercase tracking-wide text-sm font-medium'>
              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-secondary transition-colors'>
                Linkedin
              </a>
              <a
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-secondary transition-colors'>
                Facebook
              </a>
              <a
                href='mailto:Maguitman@gmail.com'
                className='hover:text-secondary transition-colors'>
                Email
              </a>
            </div>
          </div>

          {/* Bottom Section: Copyright */}
          <div className='col-span-full border-t border-black/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-black/40 uppercase tracking-wider gap-4'>
            <p className='text-center md:text-left'>
              Copyright 2024, Todos los derechos reservados
            </p>
            <p className='text-center'>Developer, Kallman Julian</p>
            <div className='flex flex-col md:flex-row gap-4 md:gap-8 text-center'>
              <Link
                to='/terms'
                className='hover:text-primary transition-colors'>
                Terminos & Condiciones
              </Link>
              <Link
                to='/privacy'
                className='hover:text-primary transition-colors'>
                Politicas de privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
