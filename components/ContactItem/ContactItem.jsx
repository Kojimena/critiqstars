import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailOpen, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io";



const ContactItem = ({name, number, mail, img}) => {
  return (
    <div className=" w-full mt-4 shadow-lg py-10 ">
        <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-between gap-8">
                    <div className="w-full flex flex-row items-start justify-start purpleshadow p-2 hover:animate-bounce">
                        <IoLogoWhatsapp className="text-purpleultralight text-2xl" />
                        <a href={number} className=" cursor-pointer font-inter rounded-md px-4 lg:px-8 text-sm font-semibold text-white" >Enviar mensaje</a>
                    </div>
                    <div className="w-full flex flex-row items-start justify-start purpleshadow p-2 hover:animate-bounce">
                        <IoMdMailOpen className="text-purpleultralight text-2xl" />
                        <a href={`mailto:${mail}`} className=" cursor-pointer font-inter rounded-md px-4 lg:px-8 text-sm font-semibold text-white" >{mail}</a>
                    </div>
                    <div className="w-full flex flex-row items-start justify-start purpleshadow p-2 hover:animate-bounce">
                        <IoLogoLinkedin className="text-purpleultralight text-2xl" />
                        <a href={`https://www.linkedin.com/company/critiq-stars/`} className=" cursor-pointer font-inter rounded-md px-4 lg:px-8 text-sm font-semibold text-white" >CritiqStars</a>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ContactItem