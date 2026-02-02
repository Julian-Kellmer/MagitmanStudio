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
        {loopedBrands.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-center mx-8 w-[200px] md:w-[300px] h-[100px] md:h-[150px] border-1 border-secondary/50 rounded-xl opacity-70 bg-white/50 `}>
            <img
              src={item.image || item}
              alt={item.name || `Brand ${index}`}
              className='max-w-full max-h-full object-contain grayscale'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BrandsMarquee
