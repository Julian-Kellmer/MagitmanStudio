import React from 'react'

const BrandsMarquee = ({ brands = [], direction = 'left' }) => {
  const loopedBrands = [...brands, ...brands, ...brands, ...brands]

  return (
    <div className='w-full overflow-hidden relative fade-mask-x'>
      <div
        className='flex w-max animate-marquee-slow'
        style={{
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
        }}>
        {loopedBrands.map((item, index) => {
          const content = (
            <div
              className={`flex items-center justify-center mx-8 w-[200px] md:w-[200px] h-[100px] md:h-[100px]`}>
              <img
                src={item.image || item}
                alt={item.name || `Brand ${index}`}
                className='max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300'
              />
            </div>
          )

          return (
            <React.Fragment key={index}>
              {item.url ? (
                <a
                  href={item.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block'>
                  {content}
                </a>
              ) : (
                content
              )}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default BrandsMarquee
