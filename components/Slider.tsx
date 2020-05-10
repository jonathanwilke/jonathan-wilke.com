import React, { useState, useEffect, useCallback, useRef } from 'react'
import projects, { Project } from '../projects'

let sliderTimeout: any
const timeoutDuration = 3000

function Slider() {
  const imageContainers = useRef([])
  const [position, setPosition] = useState(0)
  const [sliderHeight, setSliderHeight] = useState(0)

  const checkHeight = () => {
    let maxHeight = 0
    imageContainers.current.forEach((c: any) => {
      if (c?.clientHeight > maxHeight) {
        maxHeight = c.clientHeight
      }
    })
    setSliderHeight(maxHeight)
  }

  const nextItem = useCallback(() => {
    setPosition(position + 1 > projects.length - 1 ? 0 : position + 1)
  }, [position])

  // const getPrevious = (position: number) => {
  //   return position - 1 < 0 ? images.length - 1 : position - 1
  // }

  useEffect(() => {
    sliderTimeout = setTimeout(() => {
      nextItem()
    }, timeoutDuration)

    setTimeout(() => checkHeight(), 200)
    window.addEventListener('resize', checkHeight)

    return () => {
      clearTimeout(sliderTimeout)
      window.removeEventListener('resize', checkHeight)
    }
  }, [position])

  return (
    <div className="relative" style={{ minHeight: `${sliderHeight}px` }}>
      {projects.map((i: Project, k: number) => (
        <div
          className={`absolute inset-0 ${
            position === k ? 'opacity-1 z-20' : 'opacity-0 z-10'
          } transition-opacity duration-1000 ease-in-out`}
          key={`slider-item-${k}`}
          style={{
            minHeight: `${sliderHeight}px`,
          }}
        >
          <img
            ref={(el) => (imageContainers.current[k] = el)}
            src={i.image}
            alt={i.title}
          />
        </div>
      ))}
    </div>
  )
}

export default Slider
