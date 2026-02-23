import React from 'react'

export default {
  pageTitle: 'Servicios que ofrecemos en Estudio Maguitman & ASOC',
  contactService: 'Contactar este servicio',
  viewService: 'Ver servicio',
  whatsappMessage: 'Hola! Quiero saber más sobre el servicio de {{title}}',

  items: [
    {
      id: 1,
      number: '1.',
      title: 'Asesoramiento y consultoría impositiva',
      intro:
        'El régimen tributario argentino se ha convertido en un sistema de normas complejo, que requieren estudio e interpretación.',
      description: () => (
        <>
          <p className='mb-4'>
            Muchas de las decisiones que toman cotidianamente las empresas
            tienen consecuencias tributarias, las cuales, por su incidencia en
            los costos, deben ser analizadas con oportunidad. En Estudio
            Maguitman y Asociados SRL asistimos en forma permanente a nuestros
            clientes en el desarrollo de sus actividades, colaborando con ellos
            para la correcta aplicación de las normas tributarias y la
            planificación de la carga impositiva.
          </p>
          <p className='font-medium mb-2'>
            Con ese objetivo brindamos los siguientes servicios:
          </p>
          <ul className='list-disc pl-5 space-y-1 marker:text-secondary'>
            <li>
              Planeamiento tributario: análisis de los aspectos impositivos de
              las distintas alternativas de inversión y/o expansión de los
              negocios.
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
              Outsourcing de Impuestos: ofrecemos la posibilidad de tercerizar
              las tareas de preparación de las declaraciones juradas de
              impuestos nacionales, provinciales y municipales.
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
      description: () => (
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
      description: () => (
        <ul className='list-disc pl-5 space-y-1 marker:text-secondary'>
          <li>
            Análisis de la aplicación de convenios para evitar la doble
            imposición internacional.
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
      description: () => (
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
            <li>
              Auditoría de compra de paquetes accionarios (Due Diligence).
            </li>
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
      description: () => (
        <p>
          Resolvemos las necesidades que se plantean mayormente en pequeñas y
          medianas empresas, cuando requieren la tercerización de tareas
          contables, a fin de asegurar la emisión de la información contable y
          de gestión adecuada para el desenvolvimiento de sus negocios.
        </p>
      ),
    },
    {
      id: 6,
      number: '6.',
      title: 'Asesoramiento societario',
      intro:
        'Brindamos, entre otros, los siguientes servicios junto con nuestro equipo legal:',
      description: () => (
        <ul className='list-disc pl-5 space-y-1 marker:text-secondary'>
          <li>
            Constitución de sociedades, sucursales y asociaciones civiles.
          </li>
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
      description: () => (
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
  ],
}
