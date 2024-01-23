"use client";
import React from 'react'
import Subtitle from '../Subtitle/Subtitle'
import { useState } from 'react';

const ServiceItem = ({service}) => {
    const [showDescription, setShowDescription] = useState(false)
  
    const toggleDescription = () => {
      setShowDescription(!showDescription)
    }
  
    return (
      <div 
        className='flex flex-col items-center justify-start gap-y-4 p-4 w-full cursor-pointer  purpleshadow m-2' 
        key={service.id}
        onClick={toggleDescription}
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
        <img className='w-60 h-60' src={service.icon} alt={service.tittle} />}
      </div>
    )
  }
  
  export default ServiceItem;