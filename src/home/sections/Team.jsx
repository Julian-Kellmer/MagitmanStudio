import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import { useTranslation } from '../../i18n/context.jsx'

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

const Team = () => {
  const [showMoreKarina, setShowMoreKarina] = useState(false)
  const { t } = useTranslation('home')
  return (
    <section
      className='layout-wrap py-8 md:py-16 md:px-0 px-4 transition-[background] duration-500'
      style={{ background: 'var(--bg-team)' }}
      id='team'>
      <div className='layout-grid col-span-full md:mb-24 mb-12'>
        <div className='md:col-span-10 col-span-full md:col-start-2 flex flex-col items-start gap-4 border-l border-black/10 pl-8'>
          <h2 className='text-text-team-title text-h2 leading-none font-medium transition-colors duration-500'>
            {t('team.title')}
          </h2>
          <Link to='/nosotros'>
            <Button className='flex items-center gap-2 text-secondary hover:opacity-80 !p-0 font-medium border-b border-secondary rounded-none pb-1 w-fit mt-4'>
              {t('team.knowMore')} <ArrowIcon />
            </Button>
          </Link>
        </div>
      </div>

      <div className='layout-grid col-span-full items-start'>
        {/* Image - Col 2 to 5 (Span 4) */}
        <div className='md:col-span-4 p-4 col-span-full md:col-start-2 relative aspect-[4/5] overflow-hidden '>
          <img
            src='/KarinaMaguitman.jpg'
            alt='Karina Maguitman'
            className='object-cover w-full h-full transition-all duration-500 rounded-lg'
          />
        </div>

        {/* Spacer - Col 6 (Span 1) - Implicit by starting content at 7 */}

        {/* Content - Col 7 to 11 (Span 5) */}
        <div className='md:col-span-5 col-span-full md:col-start-7 flex flex-col gap-8 text-text-team-title'>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-4'>
              <div className='h-3 w-3 bg-secondary rounded-full shrink-0'></div>
              <h3 className='text-h4 font-medium'>Karina Maguitman</h3>
              <div className='flex gap-2 ml-2'>
                <a
                  href='https://www.linkedin.com/in/karina-maguitman-74872b25/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:opacity-70 transition-opacity'>
                  <img
                    src='/Linkedin.svg'
                    alt='LinkedIn'
                    className='w-6 h-6'
                  />
                </a>
                <a
                  href='mailto:km@estudiomaguitman.com.ar'
                  className='hover:opacity-70 transition-opacity'>
                  <img
                    src='/Mail.svg'
                    alt='Email'
                    className='w-6 h-6'
                  />
                </a>
              </div>
            </div>
            <p className='text-text-team-title text-sm uppercase tracking-wider text-black/50 font-medium ml-7'>
              {t('team.leaderRole')}
            </p>
          </div>

          <div className='text-text-team-title flex flex-col gap-6 ml-7 text-body text-black/70'>
            <p>{t('team.karina.bio1')}</p>
            <p>
              {t('team.karina.bio2')} <br />
              {!showMoreKarina && (
                <span
                  onClick={() => setShowMoreKarina(true)}
                  className=' text-secondary font-medium text-xs cursor-pointer border-b border-secondary hover:opacity-70 transition-opacity'>
                  {t('team.seeMore')}
                </span>
              )}
            </p>

            {showMoreKarina && (
              <>
                <p>{t('team.karina.bio3')}</p>
                <p>{t('team.karina.bio4')}</p>
                <p>{t('team.karina.bio5')}</p>
                <p>{t('team.karina.bio6')}</p>
                <p>{t('team.karina.bio7')}</p>
                <span
                  onClick={() => setShowMoreKarina(false)}
                  className='text-black font-medium text-xs cursor-pointer border-b border-black hover:opacity-70 transition-opacity w-fit'>
                  {t('team.seeLess')}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Gustavo Section */}
      <div className='layout-grid col-span-full items-start mt-32'>
        {/* Content - Col 2 to 6 (Span 5) */}
        <div className='md:col-span-5 col-span-full md:col-start-2 flex flex-col gap-8'>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-4'>
              <div className='h-3 w-3 bg-secondary rounded-full shrink-0'></div>
              <h3 className='text-h4 font-medium'>Gustavo Warcevitzky</h3>
              <div className='flex gap-2 ml-2'>
                <a
                  href='https://www.linkedin.com/in/gustavo-warcevitzky-74a62a350/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:opacity-70 transition-opacity'>
                  <img
                    src='/Linkedin.svg'
                    alt='LinkedIn'
                    className='w-6 h-6'
                  />
                </a>
                <a
                  href='mailto:gw@estudiomaguitman.com.ar'
                  className='hover:opacity-70 transition-opacity'>
                  <img
                    src='/Mail.svg'
                    alt='Email'
                    className='w-6 h-6'
                  />
                </a>
              </div>
            </div>
            <p className='text-sm uppercase tracking-wider text-black/50 font-medium ml-7'>
              {t('team.leaderRole')}
            </p>
          </div>

          <div className='flex flex-col gap-6 ml-7 text-body text-black/70'>
            <p>{t('team.gustavo.bio1')}</p>
            <p>{t('team.gustavo.bio2')}</p>
            <p>
              {t('team.gustavo.bio3')}
              <br />
              {t('team.gustavo.bio3Items')?.map?.((item, i) => (
                <span key={i}>
                  {item}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>

        {/* Image - Col 8 to 11 (Span 4) */}
        <div className='p-4 md:col-span-4 col-span-full md:col-start-8 relative aspect-[4/5] overflow-hidden '>
          <img
            src='/GustavoWarcevitzky.jpg'
            alt='Gustavo Warcevitzky'
            className='object-cover w-full h-full transition-all duration-500 rounded-lg'
          />
        </div>
      </div>
    </section>
  )
}

export default Team
