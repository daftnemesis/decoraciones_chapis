import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  console.log(toggle);

  return (
    <nav className='bg-pink-200 border-amber-600 px-2 sm:px-4 py-2.5 rounded sticky w-full top-0 z-50'>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>

        <NavLink 
          to='/'
          className='flex items-center'
        >
          <img 
            src="../assets/logo.png" 
            alt="chapis logo" 
            className="mr-1 h-9 sm:h-12"
          />
          <span className='self-center font-heading text-3xl text-blue-400 whitespace-nowrap'>Decoraciones Chapis</span>
        </NavLink>
        <button 
          className='ml-3 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
          onClick={handleToggle}  
        >
          <span className='sr-only'>Abrir menu principal</span>
          <svg className="w-6 h-6 fill-blue-400 bg-pink-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <svg className="hidden w-6 h-6 fill-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>

        <div className={`flex w-full md:block md:w-auto ${toggle ? '': 'hidden'}`} id='mobile-menu'>
          <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
            <li className='text-blue-400'>Inicio</li>
            <li className='text-blue-400'>Acerca De</li>
            <li className='text-blue-400'>Contacto</li>
          </ul>
        </div>

      </div>
    </nav>
  )
}
