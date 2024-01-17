import React from 'react'

const Stats = ({number, description}) => {
  return (
    <div className="flex flex-col lg:items-start justify-start">
        <p className="text-5xl font-bold tracking-tight p-2 sm:text-6xl font-grifter text-center lg:text-start purple_gradient">
            {number}
        </p>
        <p className="text-lg text-gray-600  font-inter text-center lg:text-start">
            {description}
        </p>
    </div>
  )
}

export default Stats