import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './home'
import Nosotros from './nosotros'
import Servicios from './servicios'
import Contacto from './contacto'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { ReactLenis } from './components/ReactLenis'

function App() {
  const lenisRef = useRef()

  useEffect(() => {
    function update(time) {
      // time in lenis raf is strictly timestamp?
      // gsap ticker gives time in seconds for delta or frame time?
      // lenis.raf(time) expects time in ms usually.
      // User had lenisRef.current?.lenis?.raf(time * 1000)
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => gsap.ticker.remove(update)
  }, [])
  return (
    <body className='relative'>
      <ReactLenis
        root
        options={{ autoRaf: false }}
        ref={lenisRef}
      />
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/nosotros'
            element={<Nosotros />}
          />
          <Route
            path='/servicios'
            element={<Servicios />}
          />
          <Route
            path='/contacto'
            element={<Contacto />}
          />
        </Routes>
        <Footer />
      </Router>
    </body>
  )
}

export default App
