import React from "react";
import MeSVG from "../Images/AboutMePerson.svg";
import { NavLink } from "react-router-dom";

export default function AboutMe() {
  return (
    <>
      {/* Contenedor del contenido seccion Sobre mi */}
      <div className="flex justify-center bg-[#0E153A] text-white font-inter py-14">
        {/* Contenido seccion Sobre Mi */}
        <div className="flex-container lg:flex w-full md:w-[768px] lg:w-[1024px] mx-5 h-[5/6] my-5 lg:h-screen lg:my-0 justify-center items-center">
          {/* Imagen de la seccion */}
          <div className="w-full lg:w-6/12 flex justify-center items-center h-2/4 lg:h-full">
            <img
              src={MeSVG}
              alt="Imagen de mi representacion"
              className="h-full lg:h-fit"
            />
          </div>

          {/* Informacion de la seccion */}
          <div className="w-full lg:w-6/12 flex flex-col justify-center items-center h-1/2 lg:h-full gap-y-10">
            {/* Titulo de la seccion */}
            <h2 className="text-5xl font-extrabold text-center lg:text-left">
              Sobre mí
            </h2>

            {/* Contenido de la descripcion */}
            <p className="text-lg">
              Soy un estudiante de decimo semestre de la carrera de Ingeniería
              de Mecatrónica en la facultad de Ingeniería, Mecánica y Eléctrica.
              Apasionado de los proyectos multidisciplinarios donde se pueda
              aplicar diversas ramas de la tecnología y otras ramas de
              conocimiento para la creación de soluciones. También soy un
              apasionado del aprendizaje, aprendiendo de ramas fuera de la
              ingeniería, como lo es el emprendimiento, finanzas, negocios,
              marketing, etc.
            </p>

            {/* Boton que manda al curriculum */}
            <NavLink to="/curriculum">
              <button className="h-10 px-10 rounded-md text-white bg-blue-600 hover:bg-blue-500 cursor-pointer active:bg-blue-200">
                Mi Curriculum
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
