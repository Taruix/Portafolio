import React from "react";
import github from "../Images/github.svg";
import linkProyecto from "../Images/linkProyecto.svg";

export default function Proyecto(props) {
  return (
    <>
      <div>
        {/* Contenedor del Proyecto */}
        <div className="bg-white rounded-lg text-black h-full overflow-hidden flex flex-col">
          {/* Imagen del proyecto */}
          <div className="shadow">
            <img
              src={props.foto}
              alt=""
              className="lg:max-h-[173px] max-h-[1000px] w-full object-cover"
            />
          </div>

          {/* Contenido del proyecto */}
          <div className="px-8 pt-4 flex flex-col h-full">
            {/* Titulo y descripcion del proyecto */}
            <div className="pb-2">
              <h4 className="text-2xl font-semibold">{props.titulo}</h4>
              <p className="pt-2">{props.descripcion}</p>
            </div>
          </div>

          {/* Parte baja del la card */}
          <div className="pb-8 px-8">
            {/* Tecnologias, herramientas, git y link */}
            <div className="flex justify-between">
              {/* Iconos de las herramientas */}
              <div className="flex gap-x-1">
                {props.tecnologias.map((tec) => {
                  return <img src={tec} alt="" />;
                })}
              </div>

              {/* Link a repositorio y pagina */}
              <div className="flex gap-x-1">
                {props.programacion ? (
                  <>
                    <div>
                      {/* Link de la pagina o proyecto */}
                      <a href={props.url} target="_blank">
                        <img src={linkProyecto} alt="" />
                      </a>
                    </div>
                    {/* Link del repositorio de github */}
                    <div>
                      <a href={props.repositorio} target="_blank">
                        <img src={github} alt="" />
                      </a>
                    </div>
                  </>
                ) : (
                  <div></div>
                )}
              </div>
            </div>

            {/* Boton que muestra toda la focumentacion */}
            <div className="pt-3">
              <button className="text-[#22D1EE] bottom-0">
                Documentacion {"->"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
