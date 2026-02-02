import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Benefits = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // User used id="animation" multiple times.
      // While invalid HTML, we can select them via attribute selector.
      const items = containerRef.current.querySelectorAll('[id="animation"]')

      items.forEach((item) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.5, // Creating detailed ease feels
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: item, // Trigger each item individually
              start: 'top bottom', // Trigger when top of element hits 60% of viewport (slightly below center for better UX)
              toggleActions: 'play none none reverse', // Optional: reverse on scroll up, or just 'play none none none'
            },
          },
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className=' layout-wrap md:mt-64 mt-24 flex flex-col justify-center gap-12'>
      <div className='layout-grid col-span-full animate-item'>
        <div
          id='animation'
          className='md:col-span-5 md:col-start-2 col-span-full flex flex-col gap-4'>
          <div className='flex items-center gap-2 '>
            <div className='h-2 w-2 bg-[#eb1c24] rounded-full '> </div>
            <p className='text-h6 opacity-50'> Acerca de nosotros </p>
          </div>
          <h3 className='text-h3'>
            Desde hace más de 30 años brindamos asesoramiento tributario;
            societario y servicios de auditoría.
          </h3>
        </div>
      </div>
      <div
        id='animation'
        className='layout-grid animate-item'>
        <div className=' bg-red-500 col-span-5 col-start-7  '>
          <img
            src='estudio6.jpg'
            className='w-full h-full object-cover'
            alt=''
          />
        </div>
      </div>
      <div
        id='animation'
        className='layout-grid col-span-full md:mt-64 mt-24 animate-item'>
        <div className='md:col-span-6 md:col-end-[-2] col-span-full flex flex-col '>
          <div className='flex items-start gap-6  '>
            <h3 className='text-h3 text-end'>
              La capacitación, actualización permanente y solvencia profesional
              son los pilares de nuestro trabajo.
            </h3>
            <div className='h-3 w-6 bg-[#eb1c24] rounded-full mt-2'> </div>
          </div>
        </div>
      </div>
      <div
        id='animation'
        className='layout-grid animate-item md:mt-24'>
        <div className=' bg-red-500 md:col-span-5 md:col-start-2 col-span-3'>
          <img
            src='estudio4.jpg'
            className='w-full h-full object-cover'
            alt=''
          />
        </div>
      </div>
    </section>
  )
}

export default Benefits
