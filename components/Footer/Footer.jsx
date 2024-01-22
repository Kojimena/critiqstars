import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="w-full bg-black text-white h-64 flex flex-col justify-center items-center gap-4 py-8">
        <div className="flex flex-col w-full">
            <ul className="flex flex-col md:flex-row justify-evenly items-center gap-4 py-4">
                <a href="https://kojimena.com/"><li className="font-grifter text-white text-sm">© 2023</li></a>
                <li className="font-grifter text-white text-sm">Términos y condiciones</li>
                <li className="font-grifter text-white text-sm">Política de privacidad</li>
            </ul>
            <div className="flex justify-center items-center">
            <Image
                src="/assets/images/logo.png"
                alt="logo"
                width={100}
                height={100}
                className='object-cover'
            />
            </div>
        </div>
    </div>
  )
}

export default Footer