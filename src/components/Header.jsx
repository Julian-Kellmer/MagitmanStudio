import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from './Button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Close menu on route change
  // Using queueMicrotask to defer state update and avoid cascading render warning
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

  // GSAP animation for menu (optional but nice)
  // For simplicity and robustness given the prompt "exactamente como se encuentra ahora" for desktop
  // we will use standard CSS classes for visibility toggling.

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 layout-wrap py-4 flex items-center justify-between transition-colors duration-300 ${
          isScrolled ? 'bg-white shadow-sm' : 'bg-background'
        }`}>
        {/* Mobile: Hamburger Button */}
        {/* Desktop Left: Navigation */}
        <nav className='hidden md:flex space-x-6'>
          <Link
            to='/'
            className='text-[var(--text-color)] hover:text-secondary font-medium'>
            Inicio
          </Link>
          <Link
            to='/servicios'
            className='text-[var(--text-color)] hover:text-secondary font-medium'>
            Servicios
          </Link>
          <Link
            to='/nosotros'
            className='text-[var(--text-color)] hover:text-secondary font-medium'>
            Nosotros
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
        {/* Desktop Right: Language & Contact */}
        <div className='hidden md:flex items-center space-x-4'>
          <button className='text-[var(--text-color)] hover:text-secondary font-medium'>
            ES / EN
          </button>
          <Button className='bg-secondary text-white hover:opacity-90'>
            Contactanos
          </Button>
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
            Inicio
          </Link>
          <Link
            to='/servicios'
            className='text-white/90 font-light text-h2 hover:text-white transition-colors duration-200'
            onClick={toggleMenu}>
            Servicios
          </Link>
          <Link
            to='/nosotros'
            className='text-white/90 font-light text-h2 hover:text-white transition-colors duration-200'
            onClick={toggleMenu}>
            Acerca de nosotros
          </Link>
        </nav>

        {/* Bottom section with language and contact */}
        <div className='absolute bottom-24 flex flex-col items-center space-y-6'>
          <button className='text-white/70 font-light text-sm hover:text-white transition-colors duration-200'>
            ES / EN
          </button>
          <Button className='bg-white text-primary hover:bg-white/90 transition-all duration-200'>
            Contactanos
          </Button>
        </div>
      </div>
    </>
  )
}

export default Header
