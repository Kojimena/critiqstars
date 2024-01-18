import React from 'react'
import PriceItem from '../PriceItem/PriceItem'
const Prices = () => {
  return (
    <section className="flex items-center justify-center mt-20 pb-10">
        <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="ring-1 ring-white rounded-3xl p-8 xl:p-10">
                <div className="flex items-center justify-between gap-x-4">
                    <h3 id="tier-standard" className="text-white text-2xl font-semibold leading-8 font-inter">Estándar</h3>
                </div>
                <p className="mt-6 flex items-center gap-x-1 ">
                    <span className="text-5xl font-bold tracking-tight text-white text-center font-pricedown">$1.5</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                    <PriceItem text="Spot de 10 segundos" />
                    <PriceItem text="72 repeticiones al dia" />
                    <PriceItem text="Contenido personalizado" />
                    <PriceItem text="Hasta 50 pantallas" />
                    <PriceItem text="Analytics" />
                </ul>
            </div>
            <div className="ring-2 ring-purplelight rounded-3xl p-8 xl:p-10">
                <div className="flex items-center justify-between gap-x-4">
                    <h3 id="tier-extended" className="text-purplelight text-2xl font-semibold leading-8 font-inter">Plus</h3>
                </div>
                <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-5xl font-bold tracking-tight text-purplelight font-pricedown">$2.5</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                    <PriceItem text="Spot de 15 segundos" />
                    <PriceItem text="72 repeticiones al dia" />
                    <PriceItem text="Encuestas en QR" />
                    <PriceItem text="POP en pantallas" />
                    <PriceItem text="Hasta 50 pantallas" />
                    <PriceItem text="Analytics" />
                </ul>
            </div>

            <div className="ring-1 ring-white rounded-3xl p-8 xl:p-10">
                <div className="flex items-center justify-between gap-x-4">
                    <h3 id="tier-standard" className="text-white text-2xl font-semibold leading-8 font-inter">Estándar</h3>
                </div>
                <p className="mt-6 flex items-center gap-x-1 ">
                    <span className="text-5xl font-bold tracking-tight text-white text-center font-pricedown">$1.5</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                    <PriceItem text="Spot de 10 segundos" />
                    <PriceItem text="72 repeticiones al dia" />
                    <PriceItem text="Contenido personalizado" />
                    <PriceItem text="Hasta 50 pantallas" />
                    <PriceItem text="Analytics" />
                </ul>
            </div>
    </div>
</section>
  )
}

export default Prices