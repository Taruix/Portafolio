import React from "react";
import MeSVG from "../Images/AboutMePerson.svg";

export default function AboutMe() {
  return (
    <>
      {/* Contenedor del contenido seccion Sobre mi */}
      <div className="flex justify-center bg-[#0E153A] text-white font-inter py-14">
        {/* Contenido seccion Sobre Mi */}
        <div className="flex-container lg:flex w-full md:w-[768px] lg:w-[1024px] mx-5 h-[5/6] my-5 lg:h-screen lg:my-0 justify-center items-center">
          {/* Imagen de la seccion */}
          <div className="w-full lg:w-6/12 flex justify-center items-center h-2/4 lg:h-full">
            <img src={MeSVG} alt="" className="h-full lg:h-fit" />
          </div>

          {/* Informacion de la seccion */}
          <div className="w-full lg:w-6/12 flex flex-col justify-center items-center h-1/2 lg:h-full gap-y-10">
            {/* Titulo de la seccion */}
            <h2 className="text-5xl font-extrabold text-center lg:text-left">
              Sobre mí
            </h2>
            <p className="text-lg">
              Soy un estudiante de decimo semestre de la carrera de Ingeniería
              en Mecatrónica de la Facultad de Ingeniería, Mecánica y Eléctrica.
              Apasionado de los proyectos multidisciplinarios donde se pueda
              aplicar diversas ramas de la tecnología y otras ramas de
              conocimiento para la creación de soluciones.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
