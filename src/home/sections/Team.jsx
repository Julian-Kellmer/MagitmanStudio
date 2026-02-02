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
  return (
    <section
      className='layout-wrap md:mt-32 md:mb-32 mt-12 mb-12'
      id='team'>
      <div className='layout-grid col-span-full mb-24'>
        <div className='md:col-span-5 col-span-full md:col-start-7 flex flex-col items-start gap-4 border-l border-black/10 pl-8'>
          <h2 className='text-h2 leading-none font-medium'>
            Equipo Estudio Magitman <br /> & ASOC
          </h2>
          <Button className='flex items-center gap-2 text-[#eb1c24] hover:opacity-80 !p-0 font-medium border-b border-[#eb1c24] rounded-none pb-1 w-fit mt-4'>
            Conoce mas <ArrowIcon />
          </Button>
        </div>
      </div>

      <div className='layout-grid col-span-full items-start'>
        {/* Image - Col 2 to 5 (Span 4) */}
        <div className='md:col-span-4 col-span-full md:col-start-2 relative aspect-[4/5] overflow-hidden '>
          <img
            src='/KarinaImg.png'
            alt='Karina Maguitman'
            className='object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500'
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
              LIDER DEL ESTUDIO MAGITMAN
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
              así como de empresas pertenecientes al Estado...{' '}
              <span className='text-black font-medium text-xs cursor-pointer border-b border-black'>
                VER MAS
              </span>
            </p>
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
              LIDER DEL ESTUDIO MAGITMAN
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
        <div className='md:col-span-4 col-span-full md:col-start-8 relative aspect-[4/5] overflow-hidden '>
          <img
            src='/GustavoImg.png'
            alt='Gustavo Warcevitzky'
            className='object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500'
          />
        </div>
      </div>
    </section>
  )
}

export default Team
