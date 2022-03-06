import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* Contenedor del cotenido del Footer */}
      <div className="flex justify-center bg-[#0E153A] font-inter pt-8 text-gray-400">
        {/* Contenido del Footer */}
        <div className="flex flex-col lg:flex w-full md:w-[768px] lg:w-[1024px] mx-5 h-[5/6] mt-3 justify-center items-center gap-y-10 px-3">
          {/* Logo */}
          <div className="text-lg font-bold">
            <NavLink to="/">RMR</NavLink>
          </div>

          {/* Navegacion de la pagina */}
          <div>
            <ul className="flex flex-wrap justify-center gap-y-2 gap-x-5">
              <li>
                <NavLink to="/">Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/habilidades">Habilidades</NavLink>
              </li>
              <li>
                <NavLink to="/proyectos">Proyectos</NavLink>
              </li>
              <li>
                <NavLink to="/contacto">Contacto</NavLink>
              </li>
              <li>
                <NavLink to="/curriculum">Curriculum</NavLink>
              </li>
            </ul>
          </div>

          {/* Creditos, redes y herramientas */}
          <div className="w-full md:w-[768px] lg:w-[1024px]">
            <hr />
            {/* Contenido de los creatidos */}
            <div className="flex text-sm py-6">
              {/* Creditos para mi Desktop*/}
              <div className="hidden sm:flex w-5/12">
                <p>© 2022 Página diseñada por Roberto Montalvo Rocha</p>
              </div>

              {/* Herramientas usadas para el diseño de esta pagina */}
              <div className="flex gap-x-2 w-6/12 sm:w-2/12 justify-start sm:justify-center">
                <img src="Images/firebase.svg" alt="" />
                <img src="Images/react.svg" alt="" />
                <img src="Images/tailwind.svg" alt="" />
              </div>

              {/* Redes y contacto */}
              <div className="flex w-6/12 sm:w-5/12 justify-end items-center">
                <div className="flex gap-x-2">
                  <a
                    href="https://github.com/Taruix"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="Images/githubw.svg" alt="logo de github" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/robertomontalvorocha/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="Images/linkedin.svg" alt="logo de linkedin" />
                  </a>
                </div>
              </div>
            </div>

            {/* Creditos para mi Mobil*/}
            <div className="sm:hidden flex w-full justify-center pb-4">
              <p className="text-center">
                © 2022 Página diseñada por Roberto Montalvo Rocha
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
