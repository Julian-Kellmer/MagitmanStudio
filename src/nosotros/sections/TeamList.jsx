import React, { useState } from 'react'

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
    image: '/About1.png',
    linkedin: '#',
    web: 'contacto@Maguitman.com',
  },
  {
    id: 102,
    name: 'Ximena Parellada',
    role: 'Abogada Especialista en Asesoría Jurídica de Empresas UBA (2014)',
    image: '/PARELLADAXimena.jpg',
    linkedin: '#',
  },
  {
    id: 103,
    name: 'Facundo Giampaoli',
    role: 'Abogado',
    image: '/GIAMPAOLIFacundo.jpeg',
    linkedin: '#',
  },
  {
    id: 104,
    name: 'Casandra Alberto',
    role: 'Contadora Publica, payrroll, servicios laborales y previsionales',
    image: '/CasandraAlberto.png',
    web: 'cyaasociados.com.ar',
    linkedin: '#',
  },
]

const ChevronIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M6 9L12 15L18 9'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const TeamMemberItem = ({ member, isOpen, toggleOpen }) => {
  return (
    <div
      className='border-b border-primary/20 py-6 cursor-pointer group col-span-full md:col-span-1'
      onClick={() => toggleOpen(member.id)}>
      <div className='flex flex-col gap-4'>
        {/* Header Row */}
        <div className='flex justify-between items-center'>
          <div className='flex flex-col gap-2'>
            <div>
              <h4
                className={`text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-[#eb1c24]' : 'text-primary'}`}>
                {member.name}
              </h4>
              <p className='text-sm text-black/60'>{member.role}</p>
            </div>
            {member.linkedin && member.linkedin !== '#' && (
              <a
                href={member.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                onClick={(e) => e.stopPropagation()}
                className='flex items-center gap-2 text-sm uppercase tracking-wider font-medium hover:text-[#eb1c24] transition-colors w-fit'>
                Linkedin <ArrowIcon />
              </a>
            )}
          </div>
          {/* Indicator Icon */}
          <div
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            <ChevronIcon />
          </div>
        </div>

        {/* Body (Expanded) */}
        <div
          className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <div className='overflow-hidden min-h-0'>
            <div className='flex md:flex-row flex-col gap-8 pt-4 items-start'>
              <div className='w-[150px] h-[150px] md:w-[250px] md:h-[250px] rounded-lg overflow-hidden  transition-all duration-500 shrink-0'>
                <img
                  src={member.image}
                  alt={member.name}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='flex flex-col gap-2 justify-center h-full pt-2'>
                {member.web && (
                  <a
                    href={`https://${member.web}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 text-sm uppercase tracking-wider font-medium hover:text-[#eb1c24] transition-colors'>
                    Web <ArrowIcon />
                  </a>
                )}
              </div>
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
        {/* Intro Text */}
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
