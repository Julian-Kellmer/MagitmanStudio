import React, { useState } from 'react'
// import { ChevronIcon } from '../../components/icons/ChevronIcon'

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

const teamMembers = [
  {
    id: 1,
    name: 'Karina Maguitman',
    role: 'Contadora Publica, Líder de Estudio Maguitman',
    image: '/KarinaMaguitman.jpg',

    linkedin: 'https://www.linkedin.com/in/karina-maguitman-74872b25/',
  },
  {
    id: 2,
    name: 'Gustavo Warcevitzky',
    role: 'Contador Publico, Líder de Estudio Maguitman',
    image: '/GustavoWarcevitzky.jpg',
    linkedin: 'https://www.linkedin.com/in/gustavo-warcevitzky-74a62a350/',
  },
  {
    id: 3,
    name: 'Ereidis Chacon',
    role: 'Contadora Publica',
    image: '/EreidisChacon.jpg',
    linkedin: 'https://www.linkedin.com/in/ereidis-chacon-454ba9123/',
  },
  {
    id: 4,
    name: 'Luis Villarreal',
    role: 'Contador Publico',
    image: '/LuisVillarreal.jpg',
    linkedin: 'https://www.linkedin.com/in/luis-villarreal-44137210a/',
  },
  {
    id: 5,
    name: 'Maria Fernanda Romero',
    role: 'Contadora Publica',
    image: '/MariaFernandaRomero.jpg',
    linkedin: '#',
  },
  {
    id: 6,
    name: 'Natalia Bratanich',
    role: 'Contadora Publica',
    image: '/NataliaBratanich.jpg',
    linkedin: 'https://www.linkedin.com/in/natalia-bratanich-70049717/',
  },
  {
    id: 7,
    name: 'Nataly Flores',
    role: '',
    image: '/NatalyFlores.jpg',
    linkedin: '#',
  },
  {
    id: 8,
    name: 'Sofia Gonza',
    role: 'Contadora Publica',
    image: '/SofiaGonza.jpg',
    linkedin: '#',
  },
]

const associates = [
  {
    id: 101,
    name: 'Sandra Diaz',
    role: 'Contadora Publica - Especialista en Precios de Transferencia',
    image: '/SandraDiaz.png',
    linkedin: '#',
    web: 'https://www.sdiaz-tax.com',
    servicios: [
      'Estudios de Precios de Transferencia',
      'Preparación Informe Maestro',
      'Reporte País por País',
      'Acuerdos de Contribución de Costos',
      'Centro de Servicios Compartidos',
      'Planificación Fiscal Internacional',
      'Acuerdos Anticipados de Precios',
      'Transacciones con Intangibles',
      'Benchmarking para relocalización de funciones',
    ],
  },
  {
    id: 102,
    name: 'Ximena Parellada',
    role: 'Abogada Especialista en Asesoría Jurídica de Empresas',
    image: '/PARELLADAXXimena.png',
    linkedin: '#',
    web: 'https://www.sdiaz-tax.com',
    servicios: [
      'Asesoramiento en materia societaria',
      ' contractual y sucesoria.',
      'Transacciones nacionales e internacionales.',
      'Fusiones, escisiones, transformaciones y reorganizaciones societarias.',
      'Procesos de debida diligencia legal.',
      'Representación de accionistas extranjeros.',
      'Participación en Directorios.',
      'Asociaciones Civiles y Fundaciones.',
      'Inscripciones registrales societarias.',
    ],
  },
  {
    id: 103,
    name: 'Facundo Giampaoli',
    role: 'Abogado',
    image: 'GIAMPAOLIFacundo.jpeg',
    linkedin: '#',
    web: 'https://www.sdiaz-tax.com',
    servicios: [
      'Relaciones individuales de Derecho del Trabajo.',
      'Accidentes y enfermedades laborales.',
      'Accidentes y enfermedades de naturaleza inculpables.',
      'Asesoramiento respecto de inspecciones y sanciones administrativas.',
      'Contratos modales.',
      'Seguimiento de expedientes administrativos y judiciales (Poder Judicial de la Nación, Poder Judicial de la Prov. de Buenos Aires, Poder Judicial de C.A.B.A.)',
    ],
  },
  {
    id: 104,
    name: 'Casandra Alberto',
    role: 'Contadora Publica, Payrroll, servicios labores y previsionales',
    image: '/CasandraAlberto.jpeg',
    linkedin: '#',
    web: 'https://www.sdiaz-tax.com',
    servicios: [
      'Liquidación de nómina',
      'Emisión de recibos de sueldo con firma electrónica y  digital tanto por empleador como por empleado, cumpliendo estándares y marco normativo definidos para documentos PDF.',
      'Gestión digital de toda la documentación laboral de cada empleado desde su ingreso.',
      'Cálculo de retención de impuesto a las ganancias',
      'Confección y presentación de cargas sociales F.931, libro de Sueldos Digital (ARCA) y boletas sindicales',
      'Altas y bajas en ARCA',
      'Certificación de servicios',
      'Generación del libro de sueldos digital.',
      'Confección de asientos contables de sueldos',
      'Atención de inspecciones y/o contestación de requerimientos de organismos de control',
      'Atención de consultas, previsionales y laborales relacionadas con la operatoria normal de liquidación de sueldos',
    ],
  },
]

const TeamMemberItem = ({ member, isOpen, toggleOpen }) => {
  const hasServices = member.servicios && member.servicios.length > 0

  return (
    <div
      className={`border-b border-primary/20 py-6 col-span-full md:col-span-1 ${hasServices ? 'cursor-pointer group' : ''}`}
      onClick={() => hasServices && toggleOpen(member.id)}>
      <div className='flex flex-col gap-4'>
        {/* Header Row */}
        <div className='flex justify-between items-center'>
          <div className='flex flex-col gap-2'>
            <div>
              <h4
                className={`text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-secondary' : 'text-primary'}`}>
                {member.name}
              </h4>
              <p className='text-sm text-black/60'>{member.role}</p>
            </div>
            {/* Linkedin Link */}
            {member.linkedin && member.linkedin !== '#' && (
              <a
                href={member.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                onClick={(e) => e.stopPropagation()}
                className='flex items-center gap-2 text-sm uppercase tracking-wider font-medium hover:text-secondary transition-colors w-fit'>
                Linkedin <ArrowIcon />
              </a>
            )}
          </div>
          <div className='w-30 h-30'>
            <img
              src={member.image}
              alt={member.name}
              className='w-full h-full rounded-full object-cover'
            />
          </div>
          {/* Indicator Icon - Only show if has services */}
          {hasServices && (
            <div
              className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <polyline points='6 9 12 15 18 9'></polyline>
              </svg>
            </div>
          )}
        </div>

        {/* Body (Expanded) - Only has services and web link now */}
        <div
          className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <div className='overflow-hidden min-h-0'>
            <div className='pt-4'>
              {/* Services List Directly */}
              {hasServices && (
                <div className='w-full'>
                  <ul className='pl-4 list-disc space-y-2 text-sm text-gray-600'>
                    {member.servicios.map((servicio, idx) => (
                      <li
                        key={idx}
                        className='pl-1'>
                        {servicio}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Web Link at the bottom if exists */}
              {member.web && (
                <div className='mt-4'>
                  <a
                    href={member.web}
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={(e) => e.stopPropagation()}
                    className='flex items-center gap-2 text-sm uppercase tracking-wider font-medium hover:text-secondary transition-colors w-fit'>
                    Web <ArrowIcon />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const TeamList = () => {
  const [openMemberId, setOpenMemberId] = useState(null)

  const toggleMember = (id) => {
    setOpenMemberId(openMemberId === id ? null : id)
  }

  return (
    <section className='layout-wrap '>
      <div className='layout-grid col-span-full items-start'>
        {/* Main Team List - Left Side */}
        {/* Main Team List */}
        <div className='col-span-full layout-grid '>
          <div className='col-span-full mb-24'>
            <h1 className='text-h2 text-primary font-medium leading-tight mb-8'>
              Nuestro Equipo
            </h1>
            <div className='grid md:grid-cols-2 gap-x-12 gap-y-6'>
              {teamMembers.map((member) => (
                <TeamMemberItem
                  key={member.id}
                  member={member}
                  isOpen={openMemberId === member.id}
                  toggleOpen={toggleMember}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Associates List */}
        <div className='col-span-full layout-grid'>
          <div className='col-span-full mt-12'>
            <h3 className='text-h3 font-medium mb-8 text-left text-primary '>
              Asociados Profesionales
            </h3>
            <div className='grid md:grid-cols-2 gap-x-12 gap-y-6 w-full'>
              {associates.map((assoc) => (
                <TeamMemberItem
                  key={assoc.id}
                  member={assoc}
                  isOpen={openMemberId === assoc.id}
                  toggleOpen={toggleMember}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamList
