import React, { useState } from 'react'
import Button from '../../components/Button'
import { useTranslation } from '../../i18n/context.jsx'

// Icon for the button
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

const ChevronDown = ({ isOpen }) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
    <path
      d='M6 9L12 15L18 9'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const ServiceItem = ({
  service,
  isOpen,
  toggleExpand,
  handleWhatsAppClick,
  contactLabel,
  viewLabel,
}) => {
  return (
    <div
      className='col-span-full layout-grid group cursor-pointer mb-8 pb-8 border-b border-primary border-opacity-30 last:border-none'
      onClick={() => toggleExpand(service.id)}>
      {/* Mobile Layout: Full width with collapsible content */}
      <div className='md:hidden col-span-full flex flex-col gap-4'>
        {/* Title Row - Always Visible */}
        <div className='flex items-start justify-between gap-4'>
          <div className='flex items-start gap-3 flex-1'>
            <span className='text-body text-secondary font-medium leading-none'>
              {service.number}
            </span>
            <h3 className='text-h5 leading-tight'>{service.title}</h3>
          </div>
          <div className='flex-shrink-0 text-secondary'>
            <ChevronDown isOpen={isOpen} />
          </div>
        </div>

        {/* Expandable Content - Only visible when open */}
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}>
          <div className='overflow-hidden min-h-0'>
            <div className='flex flex-col gap-4 pt-2'>
              <p className='text-body text-black/70'>{service.intro}</p>
              <div className='text-body text-black/70'>
                {service.description}
              </div>
              <div className='flex justify-end mt-2'>
                <Button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleWhatsAppClick(service.title)
                  }}
                  className='flex items-center gap-2 text-secondary border border-secondary bg-[#FDF6F3] rounded-full px-6 py-2 hover:bg-secondary hover:text-white transition-all duration-300'>
                  {contactLabel} <ArrowIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout: Original two-column design */}
      <div className='hidden md:contents'>
        {/* Left Side: Number + Title */}
        <div className='col-span-5 col-start-2 flex items-start gap-8'>
          <span className='text-h3 text-secondary font-medium leading-none'>
            {service.number}
          </span>
          <h3 className='text-h4'>{service.title}</h3>
        </div>

        {/* Right Side: Content */}
        <div className='col-span-5 col-start-7 flex flex-col'>
          {/* Intro Section (Collapses when Open) */}
          <div
            className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
              isOpen
                ? 'grid-rows-[0fr] opacity-0'
                : 'grid-rows-[1fr] opacity-100'
            }`}>
            <div className='overflow-hidden min-h-0'>
              <div className='flex flex-col gap-6'>
                <p className='text-body text-black/70'>{service.intro}</p>
                <div className='flex justify-end mt-2'>
                  <div className='flex items-center gap-2 text-secondary font-medium'>
                    {viewLabel} <ChevronDown isOpen={isOpen} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description Section (Expands when Open) */}
          <div
            className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
              isOpen
                ? 'grid-rows-[1fr] opacity-100'
                : 'grid-rows-[0fr] opacity-0'
            }`}>
            <div className='overflow-hidden min-h-0'>
              <div className='flex flex-col gap-6 pt-2'>
                <div className='text-body text-black/70'>
                  {service.description}
                </div>
                <div className='flex justify-end mt-2'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ServicesList = () => {
  const [expandedId, setExpandedId] = useState(null)
  const { t } = useTranslation('services')
  const serviceItems = t('items')

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const handleWhatsAppClick = (title) => {
    const message = t('whatsappMessage', { title })
    const url = `https://wa.me/5491166662222?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  // Wait for dictionary to load
  if (!Array.isArray(serviceItems)) return null

  return (
    <section className='layout-grid col-span-full gap-y-0 '>
      {/* Separator Top */}
      <div className='col-span-full  w-full '></div>

      {serviceItems.map((service) => (
        <ServiceItem
          key={service.id}
          service={{
            ...service,
            description:
              typeof service.description === 'function'
                ? service.description()
                : service.description,
          }}
          isOpen={expandedId === service.id}
          toggleExpand={toggleExpand}
          handleWhatsAppClick={handleWhatsAppClick}
          contactLabel={t('contactService')}
          viewLabel={t('viewService')}
        />
      ))}
    </section>
  )
}

export default ServicesList
