import React from 'react'

const Stats = ({number, description}) => {
  return (
    <div className="flex flex-col lg:items-start justify-start min-h-40 w-full">
        <p className="text-5xl font-bold tracking-tight py-2 sm:text-6xl font-pricedown text-center lg:text-start purple_gradient">
            {number}
        </p>
        <p className="text-md text-purpleultralight font-inter text-center lg:text-start">
            {description}
        </p>
    </div>
  )
}

export default Stats