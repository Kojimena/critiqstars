import React from 'react'
import "./ButtonPrincipal.css"

const ButtonPrincipal = ({text}) => {
  return (
    <button className='button-principal tracking-wide text-lg'>
        {text}
    </button>
  )
}

export default ButtonPrincipal