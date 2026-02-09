import React from 'react'

const HeroNosotros = () => {
  return (
    <section className='layout-wrap '>
      <div className='layout-grid col-span-full  '>
        {/* Header */}
        <div className='md:col-span-12 col-span-full flex flex-col gap-6'>
          <div className='flex items-center gap-2'>
            <div className='h-2 w-2 bg-secondary rounded-full'></div>
            <p className='text-h2 text-primary font-medium leading-tight max-w-4xl'>
              Quiénes somos
            </p>
          </div>
        </div>

        <div className='md:col-span-12 col-span-full mb-16 flex flex-col gap-6 md:mb-16'>
          <div className='md:col-span-6 col-span-full'>
            <p className='text-body text-primary max-w-2xl'>
              Trabajamos de manera personalizada. Analizamos, asesoramos y
              buscamos mejoras reales y ahorros impositivos que acompañen el
              crecimiento de cada negocio. El valor de nuestro estudio reside en
              las personas que lo conforman. Nuestro equipo acompaña de manera
              cercana a cada cliente, entendiendo sus necesidades y desafíos. La
              dedicación de nuestros colaboradores y la confianza de quienes nos
              eligen hacen posible mantener un nivel de exigencia acorde a un
              mercado cada vez más competitivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroNosotros
