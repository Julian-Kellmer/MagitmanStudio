import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BrandsMarquee from '../../components/BrandsMarqee'
import WaveText from '../../components/TextWave'
import Button from '../../components/Button'
import { useTranslation } from '../../i18n/context.jsx'

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
    name: 'Aspirus',
    image: '/clientes/Capa4.png',
    url: 'https://www.aspirus.org/',
  },
  {
    name: 'Legislatura',
    image: '/clientes/Capa5.png',
    url: 'https://www.legislatura.gob.ar/',
  },
  {
    name: 'Dist Beatriz Comsticos',
    image: '/clientes/Capa6.png',
    url: 'https://distbeatriz.com.ar/',
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
    name: 'Neo Logistic',
    image: '/clientes/Capa9.png',
    url: 'http://neo-logistics.net/en/',
  },
  {
    name: 'ZooLogic',
    image: '/clientes/Capa10.png',
    url: 'https://www.zoologic.com.ar/',
  },

  {
    name: 'Cyber 42',
    image: '/clientes/Capa11.png',
    url: 'https://www.sans.org/cybersecurity-focus-areas/leadership/cyber42',
  },
  {
    name: 'Limud BA',
    image: '/clientes/Capa12.png',
    url: 'https://limudba.org/',
  },
  {
    name: 'Universidad de Buenos Aires',
    image: '/clientes/Capa13.png',
    url: 'https://www.ub.edu.ar/',
  },
  {
    name: 'Watson Levy',
    image: '/clientes/Capa14.png',
    url: 'https://watsonlevy.com/es',
  },
  {
    name: 'Netting SA',
    image: '/clientes/Capa15.png',
    url: 'https://www.nettingsa.com.ar/',
  },
  {
    name: 'Ministerio de Desarrollo Económico y Producción',
    image: '/clientes/Capa16.png',
    url: 'https://buenosaires.gob.ar/gcaba_historico/desarrolloeconomico/institucional-ministerio-de-desarrollo-economico',
  },
  {
    name: 'Ubatec',
    image: '/clientes/Capa17.png',
    url: 'https://www.ubatec.uba.ar/',
  },
  {
    name: 'The Mind Co',
    image: '/clientes/Capa18.png',
    url: 'https://www.themindco.com/',
  },
  {
    name: 'William Hill',
    image: '/clientes/Capa21.png',
    url: 'https://www.williamhill.com/',
  },
  {
    name: 'Altman',
    image: '/clientes/Capa20.png',
    url: 'https://altman.com.ar/',
  },
  {
    name: 'cloudesafe',
    image: '/clientes/CloudHesive.jpg',
    url: 'https://www.cloudhesive.com/es/',
  },
  {
    name: 'Geoconsult',
    image: '/clientes/Geoconsult.png',
    url: 'https://geoconsultsrl.com.ar/',
  },
  {
    name: 'Laboratorio Eta',
    image: '/clientes/laboratoriosEta.png',
    url: 'https://info814389.wixsite.com/laboratorioeta',
  },
  {
    name: 'Perramus',
    image: '/clientes/Perramus.png',
    url: 'https://www.perramus.com.ar/',
  },
  {
    name: 'Pampero',
    image: '/clientes/Pampero.png',
    url: 'https://pampero.com.ar/',
  },
  {
    name: 'pehuen consulting',
    image: '/clientes/PehuenConsulting.png',
    url: 'https://www.cuitonline.com/detalle/30710206607/pehuen-consulting-s.r.l.html',
  },
  {
    name: 'PsicoMgmnt',
    image: '/clientes/PsicoMgmnt.png',
    url: 'https://psicologiaymanagement.com/',
  },
  {
    name: 'Vista Sur Films',
    image: '/clientes/VistaSurFilms.png',
    url: 'https://vistasurfilms.com.ar/',
  },
  {
    name: 'Cotillon S.A',
    image: '/clientes/CotillonSA.png',
    url: '',
  },
  {
    name: 'Cyber 42',
    image: '/clientes/Cyber42.png',
    url: '',
  },
]

const BrandsModal = ({ isOpen, onClose, allBrands, t }) => {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity duration-300'>
      <div
        className='bg-white rounded-2xl w-full max-w-5xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl animate-fade-in relative'
        onClick={(e) => e.stopPropagation()}>
        <div className='p-6 border-b border-black/5 flex justify-between items-center bg-white sticky top-0 z-10'>
          <h3 className='text-h5 text-primary'>{t('trustUs.modalTitle')}</h3>
          <button
            onClick={onClose}
            className='p-2 hover:bg-black/5 rounded-full transition-colors'
            aria-label={t('trustUs.closeModal')}>
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
                className='w-full h-full object-contain  transition-all duration-300'
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
  const allBrands = [...brands]
  const { t } = useTranslation('home')

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

  const marquee1Ref = useRef(null)
  const marquee2Ref = useRef(null)

  const handleMarqueeMove = (direction) => {
    // Move first marquee immediately
    if (marquee1Ref.current) {
      marquee1Ref.current.move(direction)
    }

    // Move second marquee with a slight delay (stagger) for visual effect
    if (marquee2Ref.current) {
      setTimeout(() => {
        marquee2Ref.current.move(direction)
      }, 150) // 150ms delay
    }
  }

  return (
    <>
      <section
        ref={containerRef}
        className=' '>
        <div className='layout-wrap  md:py-12 flex flex-col gap-12 bg-lightground2 '>
          <div className='layout-grid col-span-full  '>
            <div className='p-4 md:col-span-10 md:col-start-2 col-span-full flex flex-col gap-4 animate-text justify-center'>
              <div
                className='flex items-center justify-center
               gap-2 '>
                {/* <div className='h-2 w-2 bg-secondary rounded-full text-center'> </div> */}
                <p className='text-h3 '> {t('trustUs.title')} </p>
              </div>
              <h3 className='text-h6 text-center'>{t('trustUs.subtitle')}</h3>
            </div>
          </div>

          <div className='relative'>
            {/* Shared Controls */}
            <div className='absolute top-1/2 left-0 -translate-y-1/2 z-10 w-full flex justify-between pointer-events-none px-2 lg:px-4'>
              <button
                onClick={() => handleMarqueeMove('prev')} // Left Arrow moves previous (content right)
                className='bg-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 pointer-events-auto cursor-pointer border border-black/5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <polyline points='15 18 9 12 15 6'></polyline>
                </svg>
              </button>

              <button
                onClick={() => handleMarqueeMove('next')} // Right Arrow moves next (content left)
                className='bg-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 pointer-events-auto cursor-pointer border border-black/5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <polyline points='9 18 15 12 9 6'></polyline>
                </svg>
              </button>
            </div>

            <div className='flex flex-col gap-4'>
              <BrandsMarquee
                ref={marquee1Ref}
                brands={brands}
                direction={'left'}
              />
              {/* <BrandsMarquee
                ref={marquee2Ref}
                brands={brands2}
                direction={'right'} // Visual direction prop might be less relevant now if both move same way, but kept for parity
              /> */}
            </div>
          </div>
          <div className='flex justify-center mt-8 pb-12'>
            <Button
              onClick={() => setIsModalOpen(true)}
              className='bg-secondary text-white hover:bg-secondary/80 hover:text-white border border-secondary transition-all duration-300'>
              {t('trustUs.viewClients')}
            </Button>
          </div>

          <BrandsModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            allBrands={allBrands}
            t={t}
          />
        </div>
      </section>
    </>
  )
}

export default TrustUs
