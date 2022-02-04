import React, { useState } from "react";
import Proyecto from "./Proyecto";
import ProyectosHome from "../Data/ProyectosHome.json";

export default function HomeProyects() {
  const [proyectos, _] = useState(ProyectosHome);

  return (
    <>
      {/* Configuraciones del contenedor principal */}
      <div className="flex justify-center bg-[#0E153A] text-white font-inter py-14">
        <div className="flex-container lg:flex w-full md:w-[768px] lg:w-[1024px] mx-5 h-[5/6] my-5 lg:h-screen lg:my-0 justify-center items-center">
          {/* Contenido de la seccion Proyectos */}
          <div className="space-y-10 w-full">
            {/* Titulo Proyectos */}
            <div className="text-center">
              <h2 className="text-5xl font-extrabold">Proyectos</h2>
            </div>

            {/* Seccion de las Cards */}
            <div className="w-full gap-x-7 grid grid-cols-1 lg:grid-cols-3 gap-y-7">
              {proyectos.map((data) => {
                return (
                  <Proyecto
                    key={data.id}
                    titulo={data.titulo}
                    descripcion={data.descripcion}
                    url={data.url}
                    repositorio={data.repositorio}
                    foto={data.foto}
                    tecnologias={data.tecnologias}
                    programacion={data.programacion}
                  />
                );
              })}
            </div>

            {/* Boton que redirecciona a ver todos los proyectos */}
            <div className="text-center">
              <button className="px-4 py-2.5 rounded-md text-white bg-blue-600 hover:bg-blue-500 cursor-pointer active:bg-blue-200">
                Explorar todos los proyectos {"->"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
