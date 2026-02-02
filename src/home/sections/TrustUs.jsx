import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BrandsMarquee from '../../components/BrandsMarqee'

gsap.registerPlugin(ScrollTrigger)

const brands = [
  {
    name: 'Brand 1',
    image: '/clientes/Capa1.png',
  },
  {
    name: 'Brand 2',
    image: '/clientes/Capa2.png',
  },
  {
    name: 'Brand 3',
    image: '/clientes/Capa3.png',
  },
  {
    name: 'Brand 4',
    image: '/clientes/Capa4.png',
  },
  {
    name: 'Brand 5',
    image: '/clientes/Capa5.png',
  },
  {
    name: 'Brand 5',
    image: '/clientes/Capa6.png',
  },
  {
    name: 'Brand 5',
    image: '/clientes/Capa7.png',
  },
  {
    name: 'Brand 5',
    image: '/clientes/Capa8.png',
  },
  {
    name: 'Brand 5',
    image: '/clientes/Capa9.png',
  },
  {
    name: 'Brand 5',
    image: '/clientes/Capa10.png',
  },
  {
    name: 'Brand 5',
    image: '/clientes/Capa11.png',
  },
  {
    name: 'Brand 5',
    image: '/clientes/Capa12.png',
  },
  {
    name: 'Brand 5',
    image: '/clientes/Capa13.png',
  },
  {
    name: 'Brand 5',
    image: '/clientes/Capa14.png',
  },
  {
    name: 'Brand 5',
    image: '/clientes/Capa15.png',
  },
  {
    name: 'Brand 5',
    image: '/clientes/Capa16.png',
  },
  {
    name: 'Brand 5',
    image: '/clientes/Capa17.png',
  },
  {
    name: 'Brand 5',
    image: '/clientes/Capa18.png',
  },
  {
    name: 'Brand 5',
    image: '/clientes/Capa21.png',
  },
  {
    name: 'Brand 5',
    image: '/clientes/Capa20.png',
  },
]
const TrustUs = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    console.log(brands)
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
                  start: isMobile ? 'top 90%' : 'top 80%',
                  toggleActions: 'play none none reverse',
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
    <section
      ref={containerRef}
      className='layout-wrap md:mt-64 mt-24 flex flex-col gap-12'>
      <div className='layout-grid col-span-full md:mb-32 '>
        <div className='md:col-span-6 md:col-start-2 col-span-full flex flex-col gap-4 animate-text'>
          <div className='flex items-center gap-2 '>
            <div className='h-2 w-2 bg-[#eb1c24] rounded-full '> </div>
            <p className='text-h6 opacity-50'> Confian en nosotros </p>
          </div>
          <h3 className='text-h3'>
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
        brands={brands}
        direction={'right'}
      />

      <div className='layout-grid col-span-full md:mt-64 mt-24'>
        <div className='col-span-full flex justify-center w-full gap-4 animate-text'>
          <h3 className='text-h3 text-center md:w-2/5'>
            Actuamos con{' '}
            <span className='border-b-2 border-[#eb1c24]'>
              compromiso, responsabilidad y lealtad
            </span>
            , es por ello que nuestros clientes nos siguen eligiendo
          </h3>
        </div>
      </div>
    </section>
  )
}

export default TrustUs
