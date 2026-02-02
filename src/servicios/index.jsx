import React from 'react'
import ServicesList from './sections/ServicesList'

const Servicios = () => {
  return (
    <main className='bg-background min-h-screen  md:pt-32 pb-32'>
      <div className='layout-wrap'>
        <div className='layout-grid col-span-full mb-16 min-h-[40svh] flex items-end '>
          <h1 className='col-span-full md:col-span-6 md:col-start-2 text-h1 leading-tight font-medium text-primary'>
            Servicios que ofrecemos en Estudio Magitman & ASOC
          </h1>
        </div>
        <ServicesList />
      </div>
    </main>
  )
}

export default Servicios
