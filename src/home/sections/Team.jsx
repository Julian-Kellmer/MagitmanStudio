import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

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
  return (
    <section
      className='layout-wrap md:mb-32  mb-12 py-8 md:px-0 px-4 '
      id='team'>
      <div className='layout-grid col-span-full md:mb-24 mb-12'>
        <div className='md:col-span-10 col-span-full md:col-start-2 flex flex-col items-start gap-4 border-l border-black/10 pl-8'>
          <h2 className='text-h2 leading-none font-medium'>
            Equipo Estudio Maguitman & ASOC
          </h2>
          <Link to='/nosotros'>
            <Button className='flex items-center gap-2 text-[#eb1c24] hover:opacity-80 !p-0 font-medium border-b border-[#eb1c24] rounded-none pb-1 w-fit mt-4'>
              Conoce mas <ArrowIcon />
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
        <div className='md:col-span-5 col-span-full md:col-start-7 flex flex-col gap-8'>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-4'>
              <div className='h-3 w-3 bg-[#eb1c24] rounded-full shrink-0'></div>
              <h3 className='text-h4 font-medium'>Karina Maguitman</h3>
              <div className='flex gap-2 ml-2'>
                <a
                  href='#'
                  className='hover:opacity-70 transition-opacity'>
                  <img
                    src='/Linkedin.svg'
                    alt='LinkedIn'
                    className='w-6 h-6'
                  />
                </a>
                <a
                  href='#'
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
              LIDER DEL ESTUDIO Maguitman
            </p>
          </div>

          <div className='flex flex-col gap-6 ml-7 text-body text-black/70'>
            <p>
              Karina Maguitman es Contadora Pública egresada de la Facultad de
              Ciencias Económicas de la Universidad de Buenos Aires y
              Especialista en Derecho Tributario graduada en la Facultad de
              Derecho y Ciencias Sociales de la Universidad de Buenos Aires.
            </p>
            <p>
              Es asesora tributaria del Gobierno de la Ciudad Autónoma de Buenos
              Aires desde el año 2008, desempeñándose en distintas reparticiones
              del mismo. Asesora de empresas privadas nacionales y extranjeras
              así como de empresas pertenecientes al Estado.{' '}
              {!showMoreKarina && (
                <span
                  onClick={() => setShowMoreKarina(true)}
                  className='text-black font-medium text-xs cursor-pointer border-b border-black hover:opacity-70 transition-opacity'>
                  VER MAS
                </span>
              )}
            </p>

            {showMoreKarina && (
              <>
                <p>
                  Es profesora adjunta de las materias de Impuestos I e
                  Impuestos II de la Universidad de Belgrano, en la carrera de
                  Contador Público.
                </p>
                <p>
                  Fue columnista del Diario "El Cronista" dentro de su
                  Suplemento Impositivo y Previsional, a cargo de la columna
                  mensual "Compilado de Dictámenes y Consultas" emitidos por la
                  Administración Federal de Ingresos Públicos, ahora ARCA.
                </p>
                <p>
                  Ha publicado trabajos relativos a la materia tributaria en
                  distintos medios periodísticos y presentado trabajos escritos
                  en diversos Congresos Nacionales.
                </p>
                <p>
                  Miembro de la Comisión de Estudios Impositivos del Colegio de
                  Graduados en Ciencias Económicas de la Ciudad Autónoma de
                  Buenos Aires desde el año 2002.
                </p>
                <p>
                  Se ha desempeñado como docente en Teoría y Técnica Impositiva
                  II de la Universidad de Buenos Aires.
                </p>
                <span
                  onClick={() => setShowMoreKarina(false)}
                  className='text-black font-medium text-xs cursor-pointer border-b border-black hover:opacity-70 transition-opacity w-fit'>
                  VER MENOS
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
              <div className='h-3 w-3 bg-[#eb1c24] rounded-full shrink-0'></div>
              <h3 className='text-h4 font-medium'>Gustavo Warcevitzky</h3>
              <div className='flex gap-2 ml-2'>
                <a
                  href='#'
                  className='hover:opacity-70 transition-opacity'>
                  <img
                    src='/Linkedin.svg'
                    alt='LinkedIn'
                    className='w-6 h-6'
                  />
                </a>
                <a
                  href='#'
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
              LIDER DEL ESTUDIO Maguitman
            </p>
          </div>

          <div className='flex flex-col gap-6 ml-7 text-body text-black/70'>
            <p>
              Contador Público, egresado de la Facultad de Ciencias Económicas
              de la Universidad de Buenos Aires.
            </p>
            <p>
              Cuenta con una amplia trayectoria en el gerenciamiento de empresas
              PYME. Posee una sólida experiencia en la conducción y reingeniería
              de procesos y circuitos administrativos.
            </p>
            <p>
              Dentro de sus áreas de expertise se incluyen:
              <br />
              Asesoramiento e implementación de sistemas de gestión
              comercial/administrativo-contables.
              <br />
              Asesoramiento y elaboración de presupuestos económico-financieros.
              <br />
              Auditorías contables e impositivas.
              <br />
              Auditorías de gestión.
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
