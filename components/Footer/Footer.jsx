import React from 'react'
import Image from 'next/image'
import { IoLogoLinkedin, IoLogoWhatsapp, IoMdMail} from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-black">
    <aside>
    <Image
                src="/assets/images/logo.png"
                alt="logo"
                width={100}
                height={100}
                className='object-cover'
            />
      <a href="https://kojimena.com/"><p className='text-white'>Copyright © 2024 - All right reserved</p></a>
    </aside> 
    <nav>
      <div className="grid grid-flow-col gap-4">
            <a href={`https://www.linkedin.com/company/critiq-stars/`} className=" cursor-pointer font-inter rounded-md px-4 lg:px-8 text-sm font-semibold text-white" ><IoLogoLinkedin className="text-purpleultralight text-2xl" /></a>
            <a href={`https://wa.me/34685693461`} className=" cursor-pointer font-inter rounded-md px-4 lg:px-8 text-sm font-semibold text-white" ><IoLogoWhatsapp className="text-purpleultralight text-2xl" /></a>
            <a href={`mailto:Gerencia@critiqstars.com `} className=" cursor-pointer font-inter rounded-md px-4 lg:px-8 text-sm font-semibold text-white" ><IoMdMail className="text-purpleultralight text-2xl" /></a>
      </div>
    </nav>
  </footer>
  )
}

export default Footer