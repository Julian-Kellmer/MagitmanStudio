import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from './Button'
import { useTranslation } from '../i18n/context.jsx'

const Header = () => {
  const { t, lang, setLang } = useTranslation('common')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  // Initialize theme from localStorage or default using lazy initialization
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('theme') || 'mode-1'
      // Sync DOM immediately to avoid flash
      document.documentElement.setAttribute('data-theme', savedTheme)
      return savedTheme
    } catch {
      return 'mode-1'
    }
  })

  const location = useLocation()

  // Sync DOM when theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'mode-1' ? 'mode-2' : 'mode-1'))
  }

  // Close menu on route change
  useEffect(() => {
    queueMicrotask(() => {
      setIsMenuOpen(false)
    })
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 layout-wrap py-4 flex items-center justify-between transition-colors duration-300 ${
          isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}>
        {/* Mobile: Hamburger Button */}
        {/* Desktop Left: Navigation */}
        <nav className='hidden md:flex space-x-6 flex-1'>
          <Link
            to='/'
            className='text-[var(--text-color)] hover:text-secondary font-medium transition-colors'>
            {t('nav.home')}
          </Link>
          <Link
            to='/servicios'
            className='text-[var(--text-color)] hover:text-secondary font-medium transition-colors'>
            {t('nav.services')}
          </Link>
          <Link
            to='/nosotros'
            className='text-[var(--text-color)] hover:text-secondary font-medium transition-colors'>
            {t('nav.about')}
          </Link>
          <Link
            to='/contacto'
            className='text-[var(--text-color)] hover:text-secondary font-medium transition-colors'>
            {t('nav.contact')}
          </Link>
        </nav>
        {/* Center: Logo (Adjusted for mobile to be centered properly) */}
        <div className='flex-1 flex justify-center md:justify-center absolute left-0 right-0 pointer-events-none md:static md:pointer-events-auto'>
          {/* Pointer events none on absolute container so clicks pass through to hamburger/actions, 
               but enable pointer events on the logo itself */}
          <Link
            to='/'
            className='pointer-events-auto'>
            <img
              src='imagotiopo.svg'
              alt='Estudio Maguitman'
              className='h-8 md:h-12'
            />
          </Link>
        </div>
        {/* Desktop Right: Language & Contact & Theme Toggle */}
        <div className='hidden md:flex items-center space-x-4 flex-1 justify-end'>
          {/* Theme Toggle Button */}

          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            aria-label='Switch language'
            className='text-[var(--text-color)] hover:text-secondary font-medium transition-colors'>
            {t('nav.langSwitch')}
          </button>
          <Link to='/contacto'>
            <Button className='bg-secondary text-white hover:opacity-90'>
              {t('nav.contactUs')}
            </Button>
          </Link>
        </div>
        {/* Mobile Right: Placeholder or Language (optional, kept clean for now as per "make it valid for mobile") */}
        <div className='md:hidden w-8'></div> {/* Spacer to balance burger */}
        <button
          className={` md:hidden  z-50 flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none`}
          onClick={toggleMenu}>
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2 bg-primary' : 'bg-primary'
            }`}></span>
          <span
            className={`block w-6 h-0.5 transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-0' : 'bg-primary'
            }`}></span>
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isMenuOpen
                ? '-rotate-45 -translate-y-2 bg-primary'
                : 'bg-[var(--text-color)]'
            }`}></span>
        </button>
      </header>

      {/* Mobile Menu Overlay - Slides from top with primary background */}
      <div
        className={`w-[95%] mx-auto fixed inset-0 rounded-sm  bg-primary z-40 flex flex-col justify-center items-center transition-transform duration-500 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-y-15' : '-translate-y-full'
        }`}>
        <nav className='flex flex-col items-center space-y-8'>
          <Link
            to='/'
            className='text-white/90 font-light text-h2 hover:text-white transition-colors duration-200'
            onClick={toggleMenu}>
            {t('nav.home')}
          </Link>
          <Link
            to='/servicios'
            className='text-white/90 font-light text-h2 hover:text-white transition-colors duration-200'
            onClick={toggleMenu}>
            {t('nav.services')}
          </Link>
          <Link
            to='/nosotros'
            className='text-white/90 font-light text-h2 hover:text-white transition-colors duration-200'
            onClick={toggleMenu}>
            {t('nav.about')}
          </Link>
          <Link
            to='/contacto'
            className='text-white/90 font-light text-h2 hover:text-white transition-colors duration-200'
            onClick={toggleMenu}>
            {t('nav.contact')}
          </Link>
        </nav>

        {/* Bottom section with language and contact */}
        <div className='absolute bottom-24 flex flex-col items-center space-y-6'>
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className='flex items-center gap-2 text-white/70 hover:text-white transition-colors'>
            {theme === 'mode-1'
              ? t('header.themeOriginal')
              : t('header.themeAlternative')}
            {theme === 'mode-1' ? (
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
              </svg>
            ) : (
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <circle
                  cx='12'
                  cy='12'
                  r='5'></circle>
                <line
                  x1='12'
                  y1='1'
                  x2='12'
                  y2='3'></line>
                <line
                  x1='12'
                  y1='21'
                  x2='12'
                  y2='23'></line>
                <line
                  x1='4.22'
                  y1='4.22'
                  x2='5.64'
                  y2='5.64'></line>
                <line
                  x1='18.36'
                  y1='18.36'
                  x2='19.78'
                  y2='19.78'></line>
                <line
                  x1='1'
                  y1='12'
                  x2='3'
                  y2='12'></line>
                <line
                  x1='21'
                  y1='12'
                  x2='23'
                  y2='12'></line>
                <line
                  x1='4.22'
                  y1='19.78'
                  x2='5.64'
                  y2='18.36'></line>
                <line
                  x1='18.36'
                  y1='5.64'
                  x2='19.78'
                  y2='4.22'></line>
              </svg>
            )}
          </button>

          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            aria-label='Switch language'
            className='text-white/70 font-light text-sm hover:text-white transition-colors duration-200'>
            {t('nav.langSwitch')}
          </button>
          <Link
            to='/contacto'
            onClick={toggleMenu}>
            <Button className='bg-white text-primary hover:bg-white/90 transition-all duration-200'>
              {t('nav.contactUs')}
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header
