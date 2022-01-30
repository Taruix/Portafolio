import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Navbar() {
  return (
  <>
  <nav className='shadow h-14 flex justify-center'>
    <div  className='border container flex justify-between items-center mx-5 xl:mx-40'>
      
      {/* Nav */}
      <div className='flex'>
        <ul className='flex space-x-7'>
          <li>
            <NavLink to="/">
              Logo
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/sobremi">
              Sobre Mi
            </NavLink>
          </li>
          <li>
            <NavLink to="/proyectos">
              Proyectos
            </NavLink>
          </li>
          <li>
            <NavLink to="/cv">
              CV
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Botones */}
      <div className='Flex space-x-7'>
        <button className='h-10 w-28 rounded-md text-white bg-blue-600 hover:bg-blue-500'>Contacto</button>
        <button className='h-10 w-28 rounded-md text-black bg-blue-50 hover:bg-blue-100'>Idioma</button>
      </div>
    </div>
  </nav>
  </>
  )
}
