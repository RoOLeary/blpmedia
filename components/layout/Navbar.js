'use client';

import Link from 'next/link'
import Image from 'next/image'
import menuLinks from '../../config/menus.js'
import siteConfig from '../../config/site.config.js'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'
import { Disclosure, Menu } from '@headlessui/react'
import { ChevronDownIcon, SearchIcon } from '@heroicons/react/solid'

import { useSession, signIn, signOut } from "next-auth/react"



// If loading a variable font, you don't need t

export default function Navbar() {
  const router = usePathname();
  // const { data: session } = useSession()

  return (
    <>
    <Disclosure as="header" className="relative bg-transparent">
      {({ open }) => (
        <>
          <nav className="flex items-center h-20 px-5 mx-auto md:px-8 darkNav">
            
            {/* Main navbar for large screens */}
            <div className="flex items-center justify-between w-full">

              {/* Logo */}
              <div className="flex items-center shrink-0">
                <Link href="/" className="lg:hidden pt-2">

                  {/* <Image 
                    src={siteConfig.logo} 
                    alt={siteConfig.logoText}
                    width={60}
                    height={60}
                    
                    className='p-2'
                  /> */}

                </Link>
                <Link href="/" className="lg:block h-9 font-black inter text-3xl tracking-tight">
                  b<span style={{ color: 'red', fontWeight: 'bold'}}>li</span>p
                </Link>
              </div>

              {/* Navigation for large screens */}
              <div className='flex'>
                <div className="ml-6 hidden md:flex justify-between items-center md:space-x-0.5 lg:space-x-2 text-xl md:text-base">

                  {menuLinks.mainMenu.map((link, index) =>
                    link.submenu ? (
                      <Menu as="div" className="relative" key={index}>
                        {({ open }) => (
                          <>
                            {/* <Menu.Button
                              className={`flex items-center px-3 py-1 font-medium text-md group ${open ? 'text-red-700' : 'text-gray-800 hover:text-red-700 transition duration-300 ease-in-out'}`}
                            >
                              <span>Pages</span>
                              <ChevronDownIcon
                                className={`w-5 h-5 ml-2 transform duration-300 ${open ? 'rotate-180 text-red-700' : 'text-red-600 group-hover:text-red-700'}`}
                                aria-hidden="true"
                              />
                            </Menu.Button> */}
                            
                            
                            <Menu.Items className="z-20 mt-3 absolute w-52 right-0 rounded-xl bg-white filter drop-shadow p-2.5 space-y-1">
                              {link.submenu.map((subLink, i) => (
                                <Menu.Item key={i}>
                                  <Link
                                    href={subLink.link}
                                    className={`block rounded-lg py-3.5 px-5 font-bold ${router.pathname == subLink.link ? 'bg-gray-50 text-red-700' : 'text-gray-800 hover:bg-gray-50 hover:text-red-700 transition duration-300 ease-in-out'}`}>

                                    {subLink.name}

                                  </Link>
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                            
                          </>
                        )}
                      </Menu>
                      
                    ) : (
                      (<Link
                        key={index}
                        href={link.link}
                        className={`px-3 py-1 font-bold text-md ${router.asPath == link.link ? 'active text-red-700' : 'text-white transition duration-300 ease-in-out hover:text-red-600'}`}>

                        {link.name}

                      </Link>)
                    )
                  )}

                </div>
              
              {/* Search */}
              <div className="flex">
                <div className="relative rounded-3xl">
                  <div className='flex gap-4'>
                      
                  <button className="bg-red-600 text-white rounded-sm px-4 py-2 hover:bg-red-400" onClick={() => signIn()}>Login</button>
                </div>
              </div>
              </div>
              {/* Hamburger menu button */}
              <Disclosure.Button className="flex items-center justify-center p-3 ml-6 transition duration-300 ease-in-out cursor-pointer rounded-xl bg-black md:hidden group focus:outline-none">
                <span className={`relative w-4 h-3.5 transition duration-500 ease-in-out transform rotate-0 ${open ? 'js-hamburger-open' : ''}`}>
                  <span className="absolute top-0 left-0 block w-full h-0.5 transition duration-300 ease-in-out transform rotate-0 bg-white rounded-full opacity-100 group-hover:bg-red-600" />
                  <span className="absolute left-0 block w-full h-0.5 transition duration-300 ease-in-out transform rotate-0 bg-white rounded-full opacity-100 top-1.5 group-hover:bg-red-600" />
                  <span className="absolute left-0 block w-full h-0.5 transition duration-300 ease-in-out transform rotate-0 bg-white rounded-full opacity-100 top-1.5 group-hover:bg-red-600" />
                  <span className="absolute left-0 block w-full h-0.5 transition duration-300 ease-in-out transform rotate-0 bg-white rounded-full opacity-100 top-3 group-hover:bg-red-600" />
                </span>
              </Disclosure.Button>
              </div>
            </div>
            
          </nav>

          {/* Mobile menu */}
          <Disclosure.Panel>
            <nav className=" md:hidden" aria-label="Global" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1">

                {menuLinks.mainMenu.map((link, i) =>
                  !link.submenu && (
                    (<Link
                      href={link.link}
                      key={i}
                      className={`block px-4 py-3 font-bold rounded-lg ${router.pathname == link.link ? 'text-white text-red-700' : 'text-gray-800 hover:text-gray-800 hover:text-red-700 transition duration-300 ease-in-out'}`}
                      aria-current="page">

                      {link.name}

                    </Link>)
                  )
                )}
              </div>

              {/* <div className="pt-4 pb-3 border-t border-gray-300/70">
                <div className="px-6 mt-2 text-xs font-medium tracking-widest text-gray-500 uppercase">Pages</div>
                <div className="px-2 mt-3 space-y-1">

                  {menuLinks.mainMenu.map((link, i) =>
                    link.submenu && (
                      <Fragment key={i}>
                        {link.submenu.map((subLink, j) => (
                          <Link href={subLink.link} key={j}>
                            <a 
                              className={`block px-4 py-2 font-medium rounded-lg ${router.pathname == subLink.link ? 'bg-gray-50 text-red-700' : 'text-red-600 hover:bg-gray-50 hover:text-red-700 transition duration-300 ease-in-out'}`}
                              aria-current="page"
                            >
                              {subLink.name}
                            </a>
                          </Link>
                        ))}
                      </Fragment>
                    )
                  )}
                  
                </div>
              </div> */}
            </nav>
          </Disclosure.Panel> 
        </>
      )}
    </Disclosure>
    <div className='flex items-center h-20 sm:px-0 md:px-2 mx-auto bg-red-600 text-white'>
      <p className="p-6 ml-0 sm:p-5 md:ml-1">This is a <strong>Notice.</strong> These units can be optimised/edited so as to highlight subscriptions/CTAs. Just sayin'.</p>
    </div>
    </>
  );
}