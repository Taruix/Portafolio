import React from 'react';
import { NavLink } from 'react-router-dom';


const toggleMenu = () =>{
  document.querySelector(".menu-mobil").classList.toggle("hidden");
}

export default function Navbar() {
  return (
  <>
  <nav className='shadow h-14 flex justify-center'>
    <div  className='flex justify-between items-center font-semibold
    w-full md:w-[768px] lg:w-[1024px]
    mx-5 font-inter
    '>
      
      {/* Nav izquierda */}
      <div className='flex space-x-5'>
        
        {/* Logo */}
        <ul className='flex'>
          <li className='flex space-x-5'>
            <NavLink to="/" className="text-blue-600 font-bold">
              Inicio 
            </NavLink>
          </li>
        </ul>

        {/* Nav Links */}
        <ul className='hidden sm:flex space-x-5'>
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
      <div className='hidden sm:flex space-x-5'>
        <button className='h-10 w-28 rounded-md text-white bg-blue-600 hover:bg-blue-500'>Contacto</button>
        <button className='h-10 w-28 rounded-md text-black bg-blue-50 hover:bg-blue-100'>Idioma</button>
      </div>

      {/* Boton para mobil */}
      <div className='flex sm:hidden items-center'>
        <button onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

  </nav>
  
  {/* Menu mobil */}
  <div className='menu-mobil hidden sm:hidden'>
    <ul className='block sm:hidden border bg-gray-50'>
      <li className="block py-2 px-4 hover:bg-gray-200">
        <NavLink to="/" onClick={toggleMenu}>
          Inicio
        </NavLink>
      </li>
      <li className="block py-2 px-4 hover:bg-gray-200">
        <NavLink to="/sobremi" onClick={toggleMenu}>
          Sobre Mi
        </NavLink>
      </li>
      <li className="block py-2 px-4 hover:bg-gray-200">
        <NavLink to="/proyectos" onClick={toggleMenu}>
          Proyectos
        </NavLink>
      </li>
      <li className="block py-2 px-4 hover:bg-gray-200">
        <NavLink to="/cv" onClick={toggleMenu}>
          CV
        </NavLink>
      </li>
    </ul>
  </div>
  </>
  )
}
