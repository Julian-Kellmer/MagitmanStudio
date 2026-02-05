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
      className=' layout-wrap pt-12 flex flex-col justify-center gap-12'>
      <div className='layout-grid col-span-full animate-item'>
        <div
          id='animation'
          className='md:col-span-5 md:col-start-2 col-span-full flex flex-col gap-4 px-4 md:px-0'>
          <div className='flex items-center gap-2 '>
            <div className='h-2 w-2 bg-[#eb1c24] rounded-full '> </div>
            <p className='text-h3 '> Acerca de nosotros </p>
          </div>
          <h3 className='text-h6 text-start md:max-w-[80%]'>
            Desde hace más de 30 años brindamos asesoramiento tributario;
            societario y servicios de auditoría. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Autem, impedit atque? Iste, earum
            accusantium quidem, voluptatem, placeat similique eius recusandae
            perferendis dolore obcaecati possimus? Voluptatum, eos eveniet. Cum,
            animi debitis.
          </h3>
        </div>
        <div
          id='animation'
          className='md:col-span-5 col-span-full animate-item'>
          <img
            src='estudio6.jpg'
            className='w-full h-full object-cover rounded-lg'
            alt=''
          />
        </div>
      </div>
      <div className=' layout-grid col-span-full animate-item'>
        <div
          id='animation'
          className='md:col-span-5 md:col-start-2 col-span-full animate-item order-last md:order-none'>
          <img
            src='estudio4.jpg'
            className='w-full h-full object-cover rounded-lg'
            alt=''
          />
        </div>
        <div
          id='animation'
          className=' px-4 md:px-0 md:col-span-5 col-span-full flex flex-col justify-start gap-4 items-end text-end'>
          <div className='flex  gap-2 '>
            <h3 className='text-h3 text-start'>En nuestro estudio</h3>
            <div className='h-2 w-2 bg-[#eb1c24] rounded-full self-center'>
              {' '}
            </div>
          </div>
          <p className='text-body   text-end md:max-w-[80%]'>
            La capacitación, actualización permanente y solvencia profesional
            son los pilares de nuestro trabajo.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A cupiditate blanditiis odio. Natus velit unde illum! Odio laudantium excepturi optio corrupti porro sit dolor et aperiam? Voluptatem aperiam similique excepturi?
          </p>
        </div>
      </div>
    </section>
  )
}

export default Benefits
