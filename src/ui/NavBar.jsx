import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='bg-orange-500 flex justify-between'>
      <div>
        <NavLink to='/'>
          <div className='flex align-middle'>
            <img 
              src="../assets/logo.png" 
              alt="" 
              className="h-12 w-12"
            />
            <p className='self-center font-heading text-3xl text-white'>Decoraciones Chapis</p>
          </div>
        </NavLink>
      </div>

      <div className='flex'>
        <ul className='flex self-center'>
          <li className=''>Home</li>
          <li>Acerca De</li>
          <li>Contacto</li>
        </ul>
      </div>


    </nav>
  )
}
