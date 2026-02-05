import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BrandsMarquee from '../../components/BrandsMarqee'
import WaveText from '../../components/TextWave'
import Button from '../../components/Button'

gsap.registerPlugin(ScrollTrigger)

const brands = [
  {
    name: 'Cardon',
    image: '/clientes/Capa1.png',
    url: 'https://cardon.com.ar/',
  },
  {
    name: 'Kopelco',
    image: '/clientes/Capa2.png',
    url: 'https://www.kopelco.com.ar/',
  },
  {
    name: 'Bienes del Estado',
    image: '/clientes/Capa3.png',
    url: 'https://www.argentina.gob.ar/bienesdelestado',
  },
  {
    name: 'Legislatura',
    image: '/clientes/Capa4.png',
    url: 'https://www.legislatura.gob.ar/',
  },
  {
    name: 'Dist Beatriz',
    image: '/clientes/Capa5.png',
    url: 'https://distbeatriz.com.ar/',
  },
  {
    name: 'Brand 5',
    image: '/clientes/Capa6.png',
    url: 'https://www.kopelco.com.ar/',
  },
  {
    name: 'Buenos Aires Import',
    image: '/clientes/Capa7.png',
    url: 'https://buenosairesimport.com/?gad_campaignid=21644408535',
  },
  {
    name: 'Leon Vegano',
    image: '/clientes/Capa8.png',
    url: 'https://leonvegano.com.ar/',
  },
  {
    name: 'Zoologic',
    image: '/clientes/Capa9.png',
    url: 'https://www.zoologic.com.ar/',
  },
  {
    name: 'Limud BA',
    image: '/clientes/Capa10.png',
    url: 'https://limudba.org/nosotros/',
  },
]
const brands2 = [
  {
    name: 'Universidad de Buenos Aires',
    image: '/clientes/Capa11.png',
    url: 'https://www.ub.edu.ar/',
  },
  {
    name: 'Watson Levy',
    image: '/clientes/Capa12.png',
    url: 'https://watsonlevy.com/',
  },
  {
    name: 'Netting SA',
    image: '/clientes/Capa13.png',
    url: 'https://www.nettingsa.com.ar/',
  },
  {
    name: 'Secretaria de Industria y Desarrollo Productivo',
    image: '/clientes/Capa14.png',
    url: 'https://www.argentina.gob.ar/produccion/secretaria-de-industria-y-desarrollo-productivo-autoridades',
  },
  {
    name: 'UBAtec',
    image: '/clientes/Capa15.png',
    url: 'https://www.ubatec.uba.ar/',
  },
  {
    name: 'The Mind Co',
    image: '/clientes/Capa16.png',
    url: 'https://www.themindco.com/',
  },
  {
    name: 'Altman',
    image: '/clientes/Capa17.png',
    url: 'http://www.altman.com.ar/',
  },
  {
    name: 'William Hill',
    image: '/clientes/Capa18.png',
    url: 'https://www.williamhill.com/',
  },
  {
    name: 'Brand 5',
    image: '/clientes/Capa21.png',
    url: 'https://www.kopelco.com.ar/',
  },
  {
    name: 'Brand 5',
    image: '/clientes/Capa20.png',
    url: 'https://www.kopelco.com.ar/',
  },
]

const BrandsModal = ({ isOpen, onClose, allBrands }) => {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity duration-300'>
      <div
        className='bg-white rounded-2xl w-full max-w-5xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl animate-fade-in relative'
        onClick={(e) => e.stopPropagation()}>
        <div className='p-6 border-b border-black/5 flex justify-between items-center bg-white sticky top-0 z-10'>
          <h3 className='text-h5 text-primary'>Nuestros Clientes</h3>
          <button
            onClick={onClose}
            className='p-2 hover:bg-black/5 rounded-full transition-colors'
            aria-label='Cerrar modal'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <line
                x1='18'
                y1='6'
                x2='6'
                y2='18'></line>
              <line
                x1='6'
                y1='6'
                x2='18'
                y2='18'></line>
            </svg>
          </button>
        </div>

        <div className='p-8 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 bg-gray-50/50'>
          {allBrands.map((brand, index) => (
            <a
              key={index}
              href={brand.url || '#'}
              target={brand.url ? '_blank' : '_self'}
              rel='noopener noreferrer'
              className={`flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-black/5 hover:border-secondary/30 hover:shadow-lg transition-all duration-300 group aspect-video ${!brand.url ? 'cursor-default pointer-events-none' : ''}`}>
              <img
                src={brand.image}
                alt={brand.name}
                className='w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300'
              />
            </a>
          ))}
        </div>
      </div>

      <div
        className='absolute inset-0 -z-10'
        onClick={onClose}
      />
    </div>
  )
}
const TrustUs = () => {
  const containerRef = useRef(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const allBrands = [...brands, ...brands2]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.animate-text')

      items.forEach((item) => {
        // Configuración responsive: en mobile el texto aparece antes
        const mm = gsap.matchMedia()

        mm.add(
          {
            // Mobile: aparece cuando el elemento está al 95% del viewport (antes)
            isMobile: '(max-width: 767px)',
            // Desktop: aparece al 80% (comportamiento original)
            isDesktop: '(min-width: 768px)',
          },
          (context) => {
            const { isMobile } = context.conditions

            gsap.fromTo(
              item,
              {
                opacity: 0,
                y: 30,
              },
              {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: item,
                  start: isMobile ? 'top 90%' : 'top bottom',
                  toggleActions: 'play none none reverse',
                  // markers: true, // Descomenta esta línea para ver los marcadores de depuración
                },
              },
            )
          },
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <section
        ref={containerRef}
        className='my-16 '>
        <div className='layout-wrap  md:py-12 flex flex-col gap-12  '>
          <div className='layout-grid col-span-full  '>
            <div className='p-4 md:col-span-10 md:col-start-2 col-span-full flex flex-col gap-4 animate-text'>
              <div className='flex items-center gap-2 '>
                <div className='h-2 w-2 bg-[#eb1c24] rounded-full '> </div>
                <p className='text-h3 '> Empresas que confían en nosotros </p>
              </div>
              <h3 className='text-h6'>
                Acompañamos a las empresas en el desarrollo de sus negocios,
                otorgándoles conocimiento especializado y respaldo en la toma de
                decisiones.
              </h3>
            </div>
          </div>
          <BrandsMarquee
            brands={brands}
            direction={'left'}
          />
          <BrandsMarquee
            brands={brands2}
            direction={'right'}
          />
          <div className='flex justify-center mt-8 pb-12'>
            <Button
              onClick={() => setIsModalOpen(true)}
              className='bg-transparent text-primary hover:bg-primary hover:text-white border border-secondary transition-all duration-300'>
              Ver todos Nuestros Clientes
            </Button>
          </div>

          <BrandsModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            allBrands={allBrands}
          />
        </div>
      </section>
    
    </>
  )
}

export default TrustUs
