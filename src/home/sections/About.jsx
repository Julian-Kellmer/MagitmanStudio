import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '../../components/Button'

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

const benefits = [
  {
    icon: <UserIcon />,
    title: 'Atencion personalizada',
    description: 'El cliente trabaja directamente con los socios del estudio.',
  },
  {
    icon: <ChartIcon />,
    title: 'Experiencia y trayectoria comprobada',
    description: 'El cliente trabaja directamente con los socios del estudio.',
  },
  {
    icon: <BookIcon />,
    title: 'Cumplimiento y tranquilidad',
    description: 'El cliente trabaja directamente con los socios del estudio.',
  },
  {
    icon: <BellIcon />,
    title: 'Acompañamiento constante',
    description: 'El cliente trabaja directamente con los socios del estudio.',
  },
]

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className='flex flex-col justify-between items-start p-8 bg-white/50 rounded-2xl min-h-[350px] max-w-[550px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 w-full h-full gap-8 group'>
      <div className='flex flex-col items-start gap-6'>
        <div className='p-3 border border-black/5 rounded-2xl bg-gray-50 text-primary group-hover:scale-110 transition-transform duration-300'>
          {icon}
        </div>
        <h4 className='text-h5 font-medium leading-tight text-start text-primary'>
          {title}
        </h4>
      </div>
      <p className='text-body text-black/60 leading-relaxed text-start'>
        {description}
      </p>
    </div>
  )
}

const About = () => {
  
  return (
    <section className='layout-wrap  md:py-12 min-h-[100vh] md:mb-24 bg-darkground/10 py-8 md:px-0 px-4'>
      <div className='layout-grid col-span-full items-start  '>
        {/* Left Column */}
        <div className='col-span-full layout-grid px-4 mb-12'>
          <div className='col-span-10 md:col-start-2 flex flex-col justify-start h-full md:gap-12'>
            <div className=' flex flex-col gap-6 animate-header w-full '>
              <h2 className='text-h2 '>
                Beneficios de trabajar con Estudio Maguitman
              </h2>
              <div className='flex md:flex-row flex-col justify-between gap-8 md:items-end'>
                <p className='text-h6 text-black/70 md:max-w-[50%]'>
                  Trabajamos de manera personalizada. Analizamos, asesoramos y
                  buscamos mejoras reales y ahorros impositivos que acompañen el
                  crecimiento de cada negocio.
                </p>
              </div>
            </div>
          </div>
        </div>

        
        <div className='md:col-span-10 md:col-start-2 col-span-full grid md:grid-cols-2 grid-cols-1 md:gap-8 md:px-0 px-8 gap-y-8 cards-container'>
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
