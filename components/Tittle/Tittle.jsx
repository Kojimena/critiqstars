import React from 'react';

const Tittle = ({ title, center, color, stars }) => {
    return (
        <h1 className={`lg:my-12 my-8 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl font-pricedown tracking-wide text-center ${center ? 'md:text-center' : 'md:text-start'}`} style={{ color: color }}>
            {
                stars ?
                    <div className="w-full flex gap-2 lg:gap-2 items-center justify-center"><span>⭐️</span> <span className='text-center'>{title}</span><span>⭐️</span></div>
                    : <span>{title}</span>
            }
        </h1>
    )
}

export default Tittle;
