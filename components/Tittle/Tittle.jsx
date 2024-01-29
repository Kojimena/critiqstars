import React from 'react';

const Tittle = ({ title, center, color }) => {
    return (
        <h1 className={`lg:my-12 my-10 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl font-pricedown tracking-wide text-center ${center ? 'md:text-center' : 'md:text-start'}`} style={{ color: color }}>
            {title}
        </h1>
    )
}

export default Tittle;
