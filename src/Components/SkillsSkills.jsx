import React, { useState, useEffect } from "react";
import db from "../Data/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";

export default function SkillsSkills() {
  const [skillsSkills, setSkillsSkills] = useState([]);

  const toggleSkill = (e) => {
    //console.log(e.target.dataset.id);
    document.getElementById(e.target.dataset.id).classList.toggle("hidden");
  };

  useEffect(() => {
    const ObtenerProyectos = async () => {
      onSnapshot(collection(db, "SkillsSkills"), (querySnapshot) => {
        const grupoProyectos = [];
        querySnapshot.forEach((proy) => {
          grupoProyectos.push({ ...proy.data(), id: proy.id });
        });
        setSkillsSkills(grupoProyectos);
      });
    };
    ObtenerProyectos();
  }, []);

  return (
    <>
      <div className="flex justify-center font-inter py-14">
        {/* Contenedor del contenido de la seccion de proyectos */}
        <div className="flex-container lg:flex w-full md:w-[768px] lg:w-[1024px] mx-5 h-[5/6] my-5 lg:h-fit lg:my-0 justify-center">
          {/* Contenido de proyetos */}
          <div className="flex flex-col space-y-10 w-full">
            {/* Titulo de la seccion */}
            <h2 className="text-center text-5xl font-extrabold">Habilidades</h2>

            {/* Proyectos */}
            <div className="w-full gap-x-7 grid grid-cols gap-y-6">
              {skillsSkills.map((data) => {
                // console.log(data.Obtenidos);
                return (
                  <>
                    <div onClick={toggleSkill} data-id={data.Titulo}>
                      {/* Titulo de seccion de la habilidad */}
                      <div
                        key={data.Titulo}
                        data-id={data.Titulo}
                        className="border w-full h-20 shadow flex items-center px-[21px] justify-between "
                      >
                        <h4
                          className="text-[28px] font-bold"
                          data-id={data.Titulo}
                        >
                          {data.Titulo}
                        </h4>
                        <svg
                          data-id={data.Titulo}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>

                      {/* Certificado o habilidad */}
                      <div className="border p-6 hidden" id={data.Titulo}>
                        {data.Certificados ? (
                          // Caso en que sea certificacion
                          <>
                            <div>
                              <h6 className="font-bold">Obtenidas:</h6>
                              <ul className="list-disc list-inside marker:text-blue-600">
                                {data.Obtenidos.map((certi) => {
                                  return <li>{certi}</li>;
                                })}
                              </ul>
                              <h6 className="font-bold pt-3">Auditadas:</h6>
                              <ul className="list-disc list-inside marker:text-blue-600">
                                {data.Auditados.map((certi) => {
                                  return <li>{certi}</li>;
                                })}
                              </ul>
                            </div>
                          </>
                        ) : (
                          // Caso en que sea habilidad
                          <>
                            {/* Descripcion de la habilidad */}
                            <div>
                              <h6 className="font-bold">Descripción:</h6>
                              {data.Descripcion.map((parr) => {
                                return <p>{parr}</p>;
                              })}
                            </div>
                            {/* Competencias */}
                            <div>
                              <h6 className="font-bold pt-3 pb-1">
                                Competencias:
                              </h6>
                              <ul className="flex flex-col gap-y-1">
                                {data.Habilidades.map((hab) => {
                                  return (
                                    <>
                                      <li className="flex">
                                        <img
                                          src={hab.icono}
                                          alt="icono de la habilidad"
                                          className="h-6 pr-2"
                                        />
                                        <p>{hab.nombre}</p>
                                      </li>
                                    </>
                                  );
                                })}
                              </ul>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
