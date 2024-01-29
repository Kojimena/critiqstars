import React from "react"
import "./LogoClouds.css"

const LogoClouds = ({logos}) => {
  const logosDuplicados = [...logos, ...logos];


    return (
      <div className="py-10">
        <div className="mx-auto px-6 lg:px-8 ">
          <div className="marquee-container overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <div className="mx-auto flex items-center gap-x-20  marquee h-20 ">
            {logosDuplicados.map((logo) => (
                <img
                    key={logo}
                    src={logo}
                    alt=""
                    className=" h-16 object-contain"
                />
                ))
            }
          </div>
          </div>
        </div>
      </div>
    )
  }

export default LogoClouds
  