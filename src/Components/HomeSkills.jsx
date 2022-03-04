import React from "react";
import Skills from "./Skills";
import { NavLink } from "react-router-dom";

export default function HomeSkills() {
  return (
    <>
      {/* Contenedor del contenido de la seccion habilidades */}
      <div className="flex justify-center font-inter py-14">
        {/* Contenido de seccion habilidades */}
        <div className="flex-container lg:flex w-full md:w-[768px] lg:w-[1024px] mx-5 h-[5/6] my-5 lg:h-screen lg:my-0 justify-center items-center">
          {/* Contenido de habilidades */}
          <div className="flex flex-col space-y-10">
            {/* Titulo de la seccion */}
            <div className="text-center text-5xl font-extrabold">
              <h2>Habilidades y Formación</h2>
            </div>

            {/* Componente de carrucel de habilidades */}
            <div className="text-center">
              <Skills />
            </div>

            {/* Boton para mostrar todas las habilidades */}
            <div className="text-center">
              <NavLink to="/habilidades">
                <button className="px-4 py-2.5 rounded-md text-white bg-blue-600 hover:bg-blue-500 cursor-pointer active:bg-blue-200">
                  Conocer todas las habilidades
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
