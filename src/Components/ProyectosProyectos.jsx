import React, { useState, useEffect } from "react";
import Proyecto from "./Proyecto";
import db from "../Data/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";

export default function ProyectosProyectos() {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    const ObtenerProyectos = async () => {
      onSnapshot(collection(db, "ProyectosHome"), (querySnapshot) => {
        const grupoProyectos = [];
        querySnapshot.forEach((proy) => {
          grupoProyectos.push({ ...proy.data(), id: proy.id });
        });
        setProyectos(grupoProyectos);
      });
    };
    ObtenerProyectos();
  }, []);

  return (
    <>
      <div className="flex justify-center font-inter py-14  bg-white">
        {/* Contenedor del contenido de la seccion de proyectos */}
        <div className="flex-container lg:flex w-full md:w-[768px] lg:w-[1024px] mx-5 h-[5/6] my-5 lg:h-screen lg:my-0 justify-center">
          {/* Contenido de proyetos */}
          <div className="flex flex-col space-y-10">
            {/* Titulo de la seccion */}
            <h2 className="text-center text-5xl font-extrabold">Proyectos</h2>

            {/* Proyectos */}
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
                    rol={data.rol}
                    metodologia={data.metodologia}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
