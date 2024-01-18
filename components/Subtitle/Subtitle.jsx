import React from 'react'

const Subtitle = ({ text, center, color }) => {
  return (
    <p className={`text-lg font-inter text-center ${center ? 'md:text-center' : 'lg:text-start sm:text-center'}`} style={{ color: color }}>
        {text}
    </p>
  )
}

export default Subtitle