import React from 'react'
import "./ButtonPrincipal.css"

const ButtonPrincipal = ({text}) => {
  return (
    <button className='button-principal'>
        {text}
    </button>
  )
}

export default ButtonPrincipal