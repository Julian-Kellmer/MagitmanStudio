import React, { useState } from 'react'
import { useTranslation } from '../../i18n/context.jsx'
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

// Team member data moved into TeamList component for i18n support

// Associates data moved into TeamList component for i18n support

const TeamMemberItem = ({ member, isOpen, toggleOpen }) => {
  const hasServices = member.servicios && member.servicios.length > 0

  return (
    <div
      className={`border-t border-primary/20 py-6 col-span-full md:col-span-1 ${hasServices ? 'cursor-pointer group' : ''}`}
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
          <div className='flex items-center gap-4'>
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
  const { t } = useTranslation('about')

  const teamMembers = [
    {
      id: 1,
      name: 'Karina Maguitman',
      role: t('roles.cpaLeader'),
      image: '/KarinaMaguitman.jpg',
      linkedin: 'https://www.linkedin.com/in/karina-maguitman-74872b25/',
    },
    {
      id: 2,
      name: 'Gustavo Warcevitzky',
      role: t('roles.cpaLeaderM'),
      image: '/GustavoWarcevitzky.jpg',
      linkedin: 'https://www.linkedin.com/in/gustavo-warcevitzky-74a62a350/',
    },
    {
      id: 3,
      name: 'Ereidis Chacon',
      role: t('roles.cpa'),
      image: '/EreidisChacon.jpg',
    },
    {
      id: 4,
      name: 'Luis Villarreal',
      role: t('roles.cpaM'),
      image: '/LuisVillarreal.jpg',
    },
    {
      id: 5,
      name: 'Maria Fernanda Romero',
      role: t('roles.cpa'),
      image: '/MariaFernandaRomero.jpg',
    },
    {
      id: 6,
      name: 'Natalia Bratanich',
      role: t('roles.cpa'),
      image: '/NataliaBratanich.jpg',
    },
    {
      id: 7,
      name: 'Nataly Flores',
      role: '',
      image: '/NatalyFlores.jpg',
    },
    {
      id: 8,
      name: 'Sofia Gonza',
      role: t('roles.cpa'),
      image: '/SofiaGonza.jpg',
    },
  ]

  const associates = [
    {
      id: 101,
      name: 'Sandra Diaz',
      role: t('roles.tpSpecialist'),
      image: '/SandraDiaz.png',
      linkedin: '#',
      web: 'https://www.sdiaz-tax.com',
      servicios: t('sandraServices'),
    },
    {
      id: 102,
      name: 'Ximena Parellada',
      role: t('roles.corporateLawyer'),
      image: '/PARELLADAXXimena.png',
      linkedin: '#',
      web: 'https://www.linkedin.com/in/ximenaparellada/',
      servicios: t('ximenaServices'),
    },
    {
      id: 103,
      name: 'Facundo Giampaoli',
      role: t('roles.lawyer'),
      image: 'GIAMPAOLIFacundo.jpeg',
      linkedin: '#',
      web: 'https://www.linkedin.com/in/facundo-martin-giampaoli-432906a8/',
      servicios: t('facundoServices'),
    },
    {
      id: 104,
      name: 'Casandra Alberto',
      role: t('roles.payrollSpecialist'),
      image: '/CasandraAlberto.jpeg',
      linkedin: '#',
      web: 'https://www.cyaasociados.com.ar',
      servicios: t('casandraServices'),
    },
  ]

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
              {t('teamTitle')}
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
              {t('associatesTitle')}
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
