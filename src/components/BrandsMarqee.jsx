import React from 'react'
import gsap from 'gsap'

const BrandsMarquee = React.forwardRef(
  ({ brands = [], direction = 'left' }, ref) => {
    const containerRef = React.useRef(null)
    const contentRef = React.useRef(null)

    // Duplicate brands enough times to ensure smooth looping
    const loopedBrands = [
      ...brands,
      ...brands,
      ...brands,
      ...brands,
      ...brands,
      ...brands,
    ]

    React.useImperativeHandle(ref, () => ({
      move: (moveDirection) => {
        const content = contentRef.current
        if (!content) return

        const slideAmount = 600
        const totalWidth = content.scrollWidth
        const halfWidth = totalWidth / 2
        let currentX = gsap.getProperty(content, 'x')

        // Logic for infinite scroll wrapping "jump"
        // If we are moving 'next' (content moves left), and we are past the halfway point, reset to start
        if (moveDirection === 'next' || moveDirection === 'left') {
          // Moving Left (showing right items)
          // If we've scrolled past half way (e.g. -1000 < -900), jump back to close to 0
          if (currentX <= -halfWidth) {
            currentX += halfWidth
            gsap.set(content, { x: currentX })
          }
          gsap.to(content, {
            x: currentX - slideAmount,
            duration: 0.8,
            ease: 'power3.inout',
          })
        } else {
          // Moving Right (showing left items)
          // If we are close to 0 (e.g. -100 > -200), jump to half way (e.g. -1000)
          // We use a small threshold like -10 or 0.
          if (currentX >= 0) {
            currentX -= halfWidth
            gsap.set(content, { x: currentX })
          }
          gsap.to(content, {
            x: currentX + slideAmount,
            duration: 0.8,
            ease: 'power3.inout',
          })
        }
      },
    }))

    // Set initial position based on direction to stagger visually if needed
    // or just normal setup.
    React.useEffect(() => {
      if (contentRef.current) {
        // Reset x on mount logic if needed, e.g. for right-start marquee
        // actually we can just start at 0 for all and let them move.
        // If "direction" prop implies initial alignment:
        // For now, start at 0 is safe.
        // If infinite loop needs start at -halfWidth for one direction?
        // Let's keep it simple: Start at 0.
        // If we want them to look different, we can offset one.
        if (direction === 'right') {
          // Maybe offset it by half slide? Or just let them be.
          // User said: "move for the same side, just difference of animation effect"
          // So structural mirroring isn't needed for animation direction,
          // but maybe for visual variety.
          // Let's offset the starting position of 'right' marquee so it doesn't look identical to 'left' if brands are same?
          // But brands are different arrays (brands vs brands2).
        }
      }
    }, [direction])

    return (
      <div
        className='relative group'
        ref={containerRef}>
        <div className='w-full overflow-hidden relative fade-mask-x'>
          <div
            ref={contentRef}
            className='flex w-max'>
            {loopedBrands.map((item, index) => {
              const isUrl = typeof item === 'object' && item.url
              const image = typeof item === 'object' ? item.image : item
              const name =
                typeof item === 'object' ? item.name : `Brand ${index}`

              return (
                <div
                  key={index}
                  className={`flex items-center justify-center mx-8 w-[200px] md:w-[200px] h-[100px] md:h-[100px]`}>
                  {isUrl ? (
                    <a
                      href={item.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='block w-full h-full'>
                      <img
                        src={image}
                        alt={name}
                        className='max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300'
                      />
                    </a>
                  ) : (
                    <img
                      src={image}
                      alt={name}
                      className='max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300'
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  },
)

export default BrandsMarquee
