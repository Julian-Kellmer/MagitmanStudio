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

const lenisOptions = { autoRaf: false }

function App() {
  const lenisRef = useRef()

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => gsap.ticker.remove(update)
  }, [])
  return (
    <div className='relative'>
      <ReactLenis
        root
        options={lenisOptions}
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
    </div>
  )
}

export default App
