import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='layout-wrap bg-[#fdf6f3] pt-24 pb-8 border-t border-black/5'>
      <div className='layout-grid col-span-full bg-tertiary/30 pt-24 pb-8 px-8 rounded-lg '>
        {/* Top Section: Logo & Title */}
        <div className='col-span-full flex flex-col items-center justify-center gap-6 mb-24'>
          <img
            src='/isotipo.svg'
            alt='Estudio Maguitman Logo'
            className='h-24 opacity-80'
          />
          <div className='text-center'>
            <h2 className='text-h3 uppercase tracking-widest font-normal text-primary mb-2'>
              Estudio Maguitman & ASOC
            </h2>
            <p className='text-lg font-light text-black/60 tracking-wide'>
              Consultores Tributarios y Auditores
            </p>
          </div>
        </div>

        {/* Middle Section: Links & Contact */}
        <div className='col-span-full grid grid-cols-12 gap-4 mb-24'>
          {/* Left: Navigation */}
          <div className='col-span-3 flex flex-col gap-3 items-start text-body text-primary/80 uppercase tracking-wide text-sm font-medium'>
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
          <div className='col-span-6 flex flex-col items-center text-center gap-8'>
            <div className='flex flex-col gap-1'>
              <h4 className='text-lg font-medium mb-1'>Contactanos</h4>
              <p className='text-body text-black/60'>+54 9 11 6666 2222</p>
              <a
                href='mailto:Maguitman@gmail.com'
                className='text-body text-black/60 hover:text-secondary transition-colors'>
                Maguitman@gmail.com
              </a>
            </div>

            <div className='flex flex-col gap-1'>
              <h4 className='text-lg font-medium mb-1'>Estudio</h4>
              <p className='text-body text-black/60'>Belgrano CABA,</p>
              <p className='text-body text-black/60'>Cabildo 4367</p>
            </div>
          </div>

          {/* Right: Social Links */}
          <div className='col-span-3 flex flex-col gap-3 items-end text-body text-primary/80 uppercase tracking-wide text-sm font-medium'>
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
        <div className='col-span-full border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-black/40 uppercase tracking-wider gap-4'>
          <p>Copyright 2024, Todos los derechos reservados</p>
          <p>Developer, Kallman Julian</p>
          <div className='flex gap-8'>
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
    </footer>
  )
}

export default Footer
