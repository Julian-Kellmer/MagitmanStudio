import React, { useState } from 'react'
import Button from '../../components/Button'

// Icon for the button
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

const ChevronDown = ({ isOpen }) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
    <path
      d='M6 9L12 15L18 9'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const servicesData = [
  {
    id: 1,
    number: '1.',
    title: 'Asesoramiento y consultoría impositiva',
    intro:
      'El régimen tributario argentino se ha convertido en un sistema de normas complejo, que requieren estudio e interpretación.',
    description: (
      <>
        <p className='mb-4'>
          Muchas de las decisiones que toman cotidianamente las empresas tienen
          consecuencias tributarias, las cuales, por su incidencia en los
          costos, deben ser analizadas con oportunidad. En Estudio Maguitman y
          Asociados SRL asistimos en forma permanente a nuestros clientes en el
          desarrollo de sus actividades, colaborando con ellos para la correcta
          aplicación de las normas tributarias y la planificación de la carga
          impositiva.
        </p>
        <p className='font-medium mb-2'>
          Con ese objetivo brindamos los siguientes servicios:
        </p>
        <ul className='list-disc pl-5 space-y-1 marker:text-secondary'>
          <li>
            Planeamiento tributario: análisis de los aspectos impositivos de las
            distintas alternativas de inversión y/o expansión de los negocios.
          </li>
          <li>
            Consultoría fiscal: asesoramiento para la toma de decisiones, a
            partir del conocimiento de la correcta incidencia de los tributos
            nacionales, provinciales y municipales.
          </li>
          <li>Envío periódico de las novedades impositivas.</li>
          <li>Realización de auditorias impositivas.</li>
          <li>Proyecciones impositivas de Ejercicio.</li>
          <li>
            Reporte profesional con las inspecciones llevadas a cabo por los
            organismos fiscales.
          </li>
          <li>
            Outsourcing de Impuestos: ofrecemos la posibilidad de tercerizar las
            tareas de preparación de las declaraciones juradas de impuestos
            nacionales, provinciales y municipales.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    number: '2.',
    title: 'Contencioso Tributario',
    intro: 'Brindamos defensa frente a reclamos fiscales.',
    description: (
      <>
        <p className='mb-4'>
          Mediante el trabajo conjunto con abogados tributaristas de nuestro
          equipo, asistimos en:
        </p>
        <ul className='list-disc pl-5 space-y-1 marker:text-secondary'>
          <li>Defensas ante inspecciones y requerimientos fiscales.</li>
          <li>Atención de inspecciones integrales.</li>
          <li>Contestación de vistas y requerimientos.</li>
          <li>Recursos administrativos y judiciales.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    number: '3.',
    title: 'Operaciones Internacionales',
    intro: 'Nuestros servicios comprenden:',
    description: (
      <ul className='list-disc pl-5 space-y-1 marker:text-secondary'>
        <li>
          Análisis de la aplicación de convenios para evitar la doble imposición
          internacional.
        </li>
        <li>Precios de Transferencia.</li>
        <li>Régimen de repatriación de capitales.</li>
        <li>
          Asesoramiento en materia de importación y exportación de servicios.
        </li>
      </ul>
    ),
  },
  {
    id: 4,
    number: '4.',
    title: 'Auditoría de estados contables',
    intro:
      'Realizamos el análisis de los estados contables de la empresa en función de las normas de auditoría vigentes.',
    description: (
      <>
        <p className='mb-4'>
          Realizamos el análisis de los estados contables de la empresa en
          función de las normas de auditoría vigentes, concluyendo con la
          emisión del dictamen o informe sobre su razonabilidad. Con ese
          objetivo, desarrollamos las tareas y pruebas de control necesarias,
          considerando la evaluación de las normas contables profesionales.
        </p>
        <p className='font-medium mb-2'>Nuestros servicios abarcan:</p>
        <ul className='list-disc pl-5 space-y-1 marker:text-secondary'>
          <li>
            Auditoría de Estados Contables anuales y de períodos intermedios.
          </li>
          <li>Certificaciones contables.</li>
          <li>Auditoría operativa y de gestión.</li>
          <li>Auditoría de compra de paquetes accionarios (Due Diligence).</li>
          <li>
            Evaluación del sistema de control interno y de los circuitos
            administrativos.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    number: '5.',
    title: 'Outsourcing administrativo-contable',
    intro:
      'Resolvemos las necesidades que se plantean mayormente en pequeñas y medianas empresas, cuando requieren la tercerización de tareas contables.',
    description: (
      <>
        <p>
          Resolvemos las necesidades que se plantean mayormente en pequeñas y
          medianas empresas, cuando requieren la tercerización de tareas
          contables, a fin de asegurar la emisión de la información contable y
          de gestión adecuada para el desenvolvimiento de sus negocios.
        </p>
      </>
    ),
  },
  {
    id: 6,
    number: '6.',
    title: 'Asesoramiento societario',
    intro:
      'Brindamos, entre otros, los siguientes servicios junto con nuestro equipo legal:',
    description: (
      <ul className='list-disc pl-5 space-y-1 marker:text-secondary'>
        <li>Constitución de sociedades, sucursales y asociaciones civiles.</li>
        <li>Reformas de estatutos, aumentos y reducción de capital.</li>
        <li>Transformación, fusión, escisión y disolución de sociedades.</li>
        <li>
          Inscripción de Directorio y fiscalización de sociedades anónimas.
        </li>
        <li>Rúbrica de libros societarios y contables.</li>
      </ul>
    ),
  },
  {
    id: 7,
    number: '7.',
    title: 'Payroll',
    intro: 'Ver Servicios:',
    description: (
      <ul className='list-disc pl-5 space-y-1 marker:text-secondary'>
        <li>Liquidación de sueldos y jornales.</li>
        <li>Liquidación de cargas sociales y sindicatos.</li>
        <li>Libro Especial de Sueldos y Jornales.</li>
        <li>
          Atención de inspecciones y requerimientos de organismos laborales y
          previsionales.
        </li>
      </ul>
    ),
  },
]

const ServiceItem = ({
  service,
  isOpen,
  toggleExpand,
  handleWhatsAppClick,
}) => {
  return (
    <div
      className='col-span-full layout-grid group cursor-pointer mb-8 pb-8 border-b border-primary border-opacity-30 last:border-none'
      onClick={() => toggleExpand(service.id)}>
      {/* Mobile Layout: Full width with collapsible content */}
      <div className='md:hidden col-span-full flex flex-col gap-4'>
        {/* Title Row - Always Visible */}
        <div className='flex items-start justify-between gap-4'>
          <div className='flex items-start gap-3 flex-1'>
            <span className='text-body text-secondary font-medium leading-none'>
              {service.number}
            </span>
            <h3 className='text-h5 leading-tight'>{service.title}</h3>
          </div>
          <div className='flex-shrink-0 text-secondary'>
            <ChevronDown isOpen={isOpen} />
          </div>
        </div>

        {/* Expandable Content - Only visible when open */}
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}>
          <div className='overflow-hidden min-h-0'>
            <div className='flex flex-col gap-4 pt-2'>
              <p className='text-body text-black/70'>{service.intro}</p>
              <div className='text-body text-black/70'>
                {service.description}
              </div>
              <div className='flex justify-end mt-2'>
                <Button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleWhatsAppClick(service.title)
                  }}
                  className='flex items-center gap-2 text-secondary border border-secondary bg-[#FDF6F3] rounded-full px-6 py-2 hover:bg-secondary hover:text-white transition-all duration-300'>
                  Contactar este servicio <ArrowIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout: Original two-column design */}
      <div className='hidden md:contents'>
        {/* Left Side: Number + Title */}
        <div className='col-span-5 col-start-2 flex items-start gap-8'>
          <span className='text-h3 text-secondary font-medium leading-none'>
            {service.number}
          </span>
          <h3 className='text-h4'>{service.title}</h3>
        </div>

        {/* Right Side: Content */}
        <div className='col-span-5 col-start-7 flex flex-col'>
          {/* Intro Section (Collapses when Open) */}
          <div
            className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
              isOpen
                ? 'grid-rows-[0fr] opacity-0'
                : 'grid-rows-[1fr] opacity-100'
            }`}>
            <div className='overflow-hidden min-h-0'>
              <div className='flex flex-col gap-6'>
                <p className='text-body text-black/70'>{service.intro}</p>
                <div className='flex justify-end mt-2'>
                  <div className='flex items-center gap-2 text-secondary font-medium'>
                    Ver servicio <ChevronDown isOpen={isOpen} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description Section (Expands when Open) */}
          <div
            className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
              isOpen
                ? 'grid-rows-[1fr] opacity-100'
                : 'grid-rows-[0fr] opacity-0'
            }`}>
            <div className='overflow-hidden min-h-0'>
              <div className='flex flex-col gap-6 pt-2'>
                <div className='text-body text-black/70'>
                  {service.description}
                </div>
                <div className='flex justify-end mt-2'>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleWhatsAppClick(service.title)
                    }}
                    className='flex items-center gap-2 text-secondary border border-secondary bg-[#FDF6F3] rounded-full px-6 py-2 hover:bg-secondary hover:text-white transition-all duration-300'>
                    Contactar este servicio <ArrowIcon />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ServicesList = () => {
  const [expandedId, setExpandedId] = useState(null)

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const handleWhatsAppClick = (title) => {
    const message = `Hola! Quiero saber más sobre el servicio de ${title}`
    const url = `https://wa.me/5491166662222?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <section className='layout-grid col-span-full gap-y-0 '>
      {/* Separator Top */}
      <div className='col-span-full border-t border-primary opacity-30 w-full '></div>

      {servicesData.map((service) => (
        <ServiceItem
          key={service.id}
          service={service}
          isOpen={expandedId === service.id}
          toggleExpand={toggleExpand}
          handleWhatsAppClick={handleWhatsAppClick}
        />
      ))}
    </section>
  )
}

export default ServicesList
