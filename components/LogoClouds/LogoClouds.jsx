import React from "react"
import Image from "next/image"
import "./LogoClouds.css"

const LogoClouds = ({logos}) => {

    return (
      <div className="py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="marquee-container">
          <div className="mx-auto flex items-center gap-x-20  marquee h-20">
            {logos.map((logo) => (
                <img
                    key={logo}
                    src={logo}
                    alt=""
                    className=" h-20 object-contain"
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
  