import React from 'react'
import PriceItem from '../PriceItem/PriceItem'
const Prices = ({text, price,name }) => {
  return (
            <div className="ring-1 ring-white rounded-3xl p-8 xl:p-10">
                <div className="flex items-center justify-between gap-x-4">
                    <h3 id="tier-standard" className="text-purplelight text-2xl font-semibold leading-8 font-pricedown">{name}</h3>
                </div>
                <p className="mt-6 flex items-center gap-x-1 ">
                    <span className="text-5xl font-bold tracking-tight text-white text-center font-inter">{price}€</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                    <PriceItem text={text} />
                </ul>
        </div>
  )
}

export default Prices