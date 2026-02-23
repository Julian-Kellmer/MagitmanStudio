import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '../../components/Button'
import React from 'react'
import { useTranslation } from '../../i18n/context.jsx'

gsap.registerPlugin(ScrollTrigger)

// SVG Icons for the cards
const UserIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='opacity-80'>
    <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
    <circle
      cx='12'
      cy='7'
      r='4'
    />
  </svg>
)

const ChartIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='opacity-80'>
    <path d='M3 3v18h18' />
    <path d='m19 9-5 5-4-4-3 3' />
  </svg>
)

const BookIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='opacity-80'>
    <path d='M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20' />
  </svg>
)

const BellIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='opacity-80'>
    <path d='M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9' />
    <path d='M10.3 21a1.94 1.94 0 0 0 3.4 0' />
  </svg>
)

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

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className='flex flex-col justify-start items-center p-4 min-h-[300px] w-full gap-6 text-center group'>
      <div className='flex flex-col items-center gap-6'>
        <div className='p-3 rounded-2xl text-secondary group-hover:scale-110 transition-transform duration-300'>
          {React.cloneElement(icon, {
            width: 48,
            height: 48,
            strokeWidth: 1.5,
          })}
        </div>
        <h4 className='text-h5 font-medium leading-tight text-text-about transition-colors duration-500'>
          {title}
        </h4>
      </div>
      <p className='text-body text-text-about/80 leading-relaxed max-w-[90%] transition-colors duration-500'>
        {description}
      </p>
    </div>
  )
}

const About = () => {
  const { t } = useTranslation('home')

  const benefits = [
    {
      icon: <UserIcon />,
      title: t('about.card1Title'),
      description: t('about.card1Desc'),
    },
    {
      icon: <ChartIcon />,
      title: t('about.card2Title'),
      description: t('about.card2Desc'),
    },
    {
      icon: <BookIcon />,
      title: t('about.card3Title'),
      description: t('about.card3Desc'),
    },
    {
      icon: <BellIcon />,
      title: t('about.card4Title'),
      description: t('about.card4Desc'),
    },
  ]

  return (
    <section className='layout-wrap md:py-12 min-h-[80vh] md:my-0 bg-bg-about py-16 md:px-0 px-4 flex flex-col justify-center transition-colors duration-500'>
      <div className='layout-grid col-span-full items-center gap-y-16'>
        {/* Header */}
        <div className='col-span-full layout-grid px-4'>
          <div className='col-span-12 flex flex-col items-center text-center gap-6 animate-header'>
            <h2 className='text-h2 text-text-about text-center transition-colors duration-500'>
              {t('about.title')} {t('about.titleStudio')}
            </h2>
            <p className='text-h6 text-text-about/80 md:max-w-[60%] transition-colors duration-500'>
              {t('about.subtitle')}
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className='col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:px-0 px-4 cards-container'>
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              {...benefit}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
