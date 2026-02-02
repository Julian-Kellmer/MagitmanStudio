import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '../../components/Button'

gsap.registerPlugin(ScrollTrigger)

// SVG Icons for the cards
const UserIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='opacity-80'>
    <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
    <circle
      cx='12'
      cy='7'
      r='4'
    />
  </svg>
)

const ChartIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='opacity-80'>
    <path d='M3 3v18h18' />
    <path d='m19 9-5 5-4-4-3 3' />
  </svg>
)

const BookIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='opacity-80'>
    <path d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20' />
  </svg>
)

const BellIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='opacity-80'>
    <path d='M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9' />
    <path d='M10.3 21a1.94 1.94 0 0 0 3.4 0' />
  </svg>
)

const ArrowIcon = () => (
  <svg
    width='12'
    height='12'
    viewBox='0 0 12 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M1 11L11 1M11 1H1M11 1V11'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const benefits = [
  {
    icon: <UserIcon />,
    title: 'Atencion personalizada',
    description: 'El cliente trabaja directamente con los socios del estudio.',
  },
  {
    icon: <ChartIcon />,
    title: 'Experiencia y trayectoria comprobada',
    description: 'El cliente trabaja directamente con los socios del estudio.',
  },
  {
    icon: <BookIcon />,
    title: 'Cumplimiento y tranquilidad',
    description: 'El cliente trabaja directamente con los socios del estudio.',
  },
  {
    icon: <BellIcon />,
    title: 'Acompañamiento constante',
    description: 'El cliente trabaja directamente con los socios del estudio.',
  },
]

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className='flex flex-col items-start gap-4 min-h-[250px] max-w-[250px] animate-card'>
      <div className='p-2 border border-black/10 rounded-full mb-2'>{icon}</div>
      <h4 className='text-h6 font-medium leading-tight'>{title}</h4>
      <div className='h-[0.5px] w-full bg-[#eb1c24] '></div>
      <p className='text-sm text-black/60 leading-relaxed'>{description}</p>
    </div>
  )
}

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add(
        {
          isMobile: '(max-width: 767px)',
          isDesktop: '(min-width: 768px)',
        },
        (context) => {
          const { isMobile } = context.conditions

          // Animar título y descripción desde la izquierda
          gsap.fromTo(
            '.animate-header',
            {
              opacity: 0,
              x: -50,
            },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: '.animate-header',
                start: isMobile ? 'top 90%' : 'top 80%',
                toggleActions: 'play none none reverse',
              },
            },
          )

          // Animar botón desde abajo
          gsap.fromTo(
            '.animate-button',
            {
              opacity: 0,
              y: 30,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: '.animate-button',
                start: isMobile ? 'top 95%' : 'top 85%',
                toggleActions: 'play none none reverse',
              },
            },
          )

          // Animar tarjetas de beneficios con stagger
          gsap.fromTo(
            '.animate-card',
            {
              opacity: 0,
              y: 40,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: '.cards-container',
                start: isMobile ? 'top 90%' : 'top 75%',
                toggleActions: 'play none none reverse',
              },
            },
          )
        },
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className='layout-wrap md:mt-64 mt-24 py-32 min-h-screen'>
      <div className='layout-grid col-span-full items-start'>
        {/* Left Column */}
        <div className='col-span-full layout-grid'>
          <div className='md:col-span-5 col-span-full md:col-start-2 flex flex-col justify-start   h-full gap-12'>
            <div className='flex flex-col gap-6 max-w-[90%] animate-header'>
              <h2 className='text-h2 '>
                Beneficios de trabajar con Estudio Magitman
              </h2>
              <p className='text-body text-black/70'>
                Trabajamos de manera personalizada. Analizamos, asesoramos y
                buscamos mejoras reales y ahorros impositivos que acompañen el
                crecimiento de cada negocio.
              </p>
            </div>

            <div className='self-end md:self-start mt-8 px-8 animate-button'>
              <Button className='group flex items-center  gap-2 text-[#eb1c24] hover:opacity-80 !p-0 font-medium border-b border-[#eb1c24] rounded-none pb-1 w-fit overflow-hidden'>
                Contactanos
                <div className='relative h-[12px] w-[12px] overflow-hidden'>
                  <div className='flex flex-col transition-transform duration-300 ease-in-out group-hover:-translate-y-[12px]'>
                    <ArrowIcon />
                    <ArrowIcon />
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column - Cards Grid */}
        <div className='md:col-span-6 md:col-end-[-1] col-span-full grid grid-cols-2 gap-x-12 gap-y-16 mt-16 md:mt-0 md:px-0 px-8 cards-container'>
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              {...benefit}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
