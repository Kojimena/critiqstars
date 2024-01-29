import React from 'react'
import PriceItem from '../PriceItem/PriceItem'
const Prices = ({text, price,name, image }) => {
  return (
            <div className="ring-1 ring-white rounded-3xl p-8 xl:p-6">
                <div className="flex items-center justify-between gap-x-4">
                    <h3 id="tier-standard" className="text-purplelight text-2xl font-semibold leading-8 font-pricedown">{name}</h3>
                </div>
                <img className="w-full mx-auto" src={image} alt="" />

                <p className="mt-6 flex items-center gap-x-1 ">
                    <span className="text-5xl font-bold tracking-tight text-white text-center font-inter">{price}€</span>
                </p>
                <ul role="list" className="mt-4 space-y-3 leading-6 xl:mt-10">
                    <span className='text-purplelight font-inter text-lg py-6 '>{text}</span>
                    <PriceItem text={"Cuentas reales"} />
                    <PriceItem text={"Opiniones sinceras"} />
                    <PriceItem text={"5 estrellas"} />
                </ul>
        </div>
  )
}

export default Prices