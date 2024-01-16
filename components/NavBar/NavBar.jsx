"use client";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-scroll"
import ButtonPrincipal from '../ButtonPrincipal/ButtonPrincipal'


const navigation = [
  { name: 'Precios', href: '/prices' },
  { name: 'Nosotros', href: '/us' },
]

const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-black">
        <nav className="flex items-center justify-between md:justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:mr-12 lg:flex-none md:flex-1">
            <a href="#" className="-m-1.5 p-0">
              <img
                className="h-28 w-auto"
                src="/assets/images/logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-6 items-center">
            {navigation.map((item) => (
                <Link key={item.name} to={item.href} spy={true} smooth={true} duration={500} className="text-md leading-6 text-white cursor-pointer hover:text-purplelight p-2 rounded-lg font-grifter">
                  {item.name}
                </Link>
            ))}
            <ButtonPrincipal text="Contactar" />
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  className="h-24 w-auto"
                  src="/assets/images/logo.png"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link key={item.name} to={item.href} spy={true} smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black font-grifter cursor-pointer">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
  )
}

export default NavBar
