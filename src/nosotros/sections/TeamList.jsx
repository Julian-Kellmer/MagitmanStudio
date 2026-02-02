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
    web: 'contacto@magitman.com',
  },
  {
    id: 102,
    name: 'Ximena Parellada',
    role: 'Abogada Corporativa',
    image: '/About2.png',
    linkedin: '#',
  },
  {
    id: 103,
    name: 'Casandra Alberto',
    role: 'Contadora Publica, payrroll, servicios laborales y previsionales',
    image: '/CasandraAlberto.png',
    web: 'cyaasociados.com.ar',
    linkedin: '#',
  },
]

const TeamMemberItem = ({ member, isOpen, toggleOpen }) => {
  return (
    <div
      className='col-span-full border-b border-primary/20 py-6 cursor-pointer group'
      onClick={() => toggleOpen(member.id)}>
      <div className='flex flex-col gap-4'>
        {/* Header Row */}
        <div className='flex justify-between items-center'>
          <div>
            <h4
              className={`text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-[#eb1c24]' : 'text-primary'}`}>
              {member.name}
            </h4>
            <p className='text-sm text-black/60'>{member.role}</p>
          </div>
          {/* Optional: Indicator Icon */}
        </div>

        {/* Body (Expanded) */}
        <div
          className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <div className='overflow-hidden min-h-0'>
            <div className='flex md:flex-row flex-col gap-8 pt-4 items-start'>
              <div className='w-[150px] h-[150px] md:w-[250px] md:h-[250px] rounded-lg overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500'>
                <img
                  src={member.image}
                  alt={member.name}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='flex flex-col gap-2 justify-center h-full pt-2'>
                <a
                  href={member.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 text-sm uppercase tracking-wider font-medium hover:text-[#eb1c24] transition-colors'>
                  Linkedin <ArrowIcon />
                </a>
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
    <section className='layout-wrap'>
      <div className='layout-grid col-span-full items-start'>
        {/* Intro Text */}
        <div className='md:col-span-12 col-span-full mb-16'>
          <p className='text-h5  text-primary max-w-4xl'>
            El valor de nuestro estudio reside en las personas que lo conforman.
            Nuestro equipo acompaña de manera cercana a cada cliente,
            entendiendo sus necesidades y desafíos. La dedicación de nuestros
            colaboradores y la confianza de quienes nos eligen hacen posible
            mantener un nivel de exigencia acorde a un mercado cada vez más
            competitivo.
          </p>
        </div>

        {/* Main Team List - Left Side */}
        <div className='col-span-full layout-grid '>
          <div className='md:col-span-5 md:col-start-1 col-span-full mb-24'>
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

        {/* Associates List - Below Team List (Same Column Grid) */}
        <div className='md:col-span-5 md:col-start-8 col-span-full mt-12'>
          <h3 className='text-h3 font-medium mb-8 text-left text-primary md:text-end '>
            Asociados Profesionales
          </h3>
          <div className='flex flex-col w-full'>
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
    </section>
  )
}

export default TeamList
