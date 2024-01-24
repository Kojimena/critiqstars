import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailOpen, IoIosContacts, IoLogoInstagram, IoLogoLinkedin} from "react-icons/io";
import { FaFacebook } from "react-icons/fa";



const ContactItem = ({name, number, mail, img}) => {
  return (
    <div className=" w-full mt-4 shadow-lg py-10 ">
        <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-between gap-8">
                    <div className="w-full flex flex-row items-start justify-start purpleshadow p-2 hover:animate-bounce">
                        <FaPhoneAlt className="text-purpleultralight text-2xl" />
                        <a href={`tel:${number}`} className=" cursor-pointer font-inter rounded-md px-4 lg:px-8 text-sm font-semibold text-white" >{number}</a>
                    </div>
                    <div className="w-full flex flex-row items-start justify-start purpleshadow p-2 hover:animate-bounce">
                        <IoMdMailOpen className="text-purpleultralight text-2xl" />
                        <a href={`mailto:${mail}`} className=" cursor-pointer font-inter rounded-md px-4 lg:px-8 text-sm font-semibold text-white" >{mail}</a>
                    </div>
                    <div className="w-full flex flex-row items-start justify-start purpleshadow p-2 hover:animate-bounce">
                        <FaFacebook className="text-purpleultralight text-2xl" />
                        <a href={`https://www.facebook.com/people/Nomade-Anuncios/pfbid02JGro95bUgKPtEJG6WMA3uxpZVv7bTSZkE5288iyPvKVkAUnU2qP1CWfxfkBRxqpsl/?mibextid=ZbWKwL`} className=" cursor-pointer font-inter rounded-md px-4 lg:px-8 text-sm font-semibold text-white" >@nomadeglobaltalent</a>
                    </div>
                    <div className="w-full flex flex-row items-start justify-start purpleshadow p-2 hover:animate-bounce">
                        <IoLogoInstagram className="text-purpleultralight text-2xl" />
                        <a href={`https://www.instagram.com/nomadeglobaltalent/?hl=es`} className=" cursor-pointer font-inter rounded-md px-4 lg:px-8 text-sm font-semibold text-white" >@nomadeglobaltalent</a>
                    </div>
                    <div className="w-full flex flex-row items-start justify-start purpleshadow p-2 hover:animate-bounce">
                        <IoLogoLinkedin className="text-purpleultralight text-2xl" />
                        <a href={`https://www.linkedin.com/company/nomade-globaltalent/about/`} className=" cursor-pointer font-inter rounded-md px-4 lg:px-8 text-sm font-semibold text-white" >Nomade Global Talent</a>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ContactItem