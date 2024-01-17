import React from 'react'

const Subtitle = ({ text, center, color }) => {
  return (
    <p className={`text-lg leading-8 text-gray-600  font-inter text-center ${center ? 'md:text-center' : 'md:text-start'}`} style={{ color: color }}>
        {text}
    </p>
  )
}

export default Subtitle