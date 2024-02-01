"use client";
import React from 'react'
import { useState, useEffect } from 'react';

const ServiceItem = ({service}) => {
  const [showDescription, setShowDescription] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setShowDescription(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setShowDescription(false);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      toggleDescription();
    }
  };
  
    return (
      <div 
        className='flex flex-col items-center justify-start gap-y-4 p-8 w-full cursor-pointer  purpleshadow m-2' 
        key={service.id}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <h1 className='text-purpleultralight lg:text-xl text-lg font-bold text-center'>{service.tittle}</h1>
        {showDescription ?
        <div className='flex flex-col items-center justify-center gap-y-4'> 
            <p className='text-purplelight description-format text-lg'>{service.description}</p>
            <ul>
                {service.includes.map((item, index) => (
                    <li key={index} className='text-white flex gap-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth="1.5" stroke="currentColor" aria-hidden="true"
                            className="h-6 w-5 flex-none text-purplelight">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className='text-white font-inter text-md'>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
         : 
         <div className='flex flex-col items-center justify-center gap-y-4'>
          <img className='w-60 h-60' src={service.icon} alt={service.tittle} />
          <p className='text-gray text-sm md:hidden '>haz click para desplegar la información</p>
        </div>
        }
      </div>
    )
  }
  
  export default ServiceItem;