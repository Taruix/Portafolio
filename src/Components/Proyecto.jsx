import React from "react";
import github from "../Images/github.svg";
import linkProyecto from "../Images/linkProyecto.svg";

export default function Proyecto(props) {
  //
  const mostrarProyecto = (e) => {
    //console.log(e.target.dataset.id);
    document.getElementById(e.target.dataset.id).classList.remove("hidden");
  };

  const quitarProyecto = (e) => {
    //console.log(e.target.dataset.id);
    document.getElementById(e.target.dataset.id).classList.add("hidden");
  };

  return (
    <>
      <div key={props.titulo} className="hover:scale-105 ease-out duration-300">
        {/* Contenedor del Proyecto */}
        <div className="bg-white rounded-lg text-black h-full overflow-hidden flex flex-col shadow">
          {/* Imagen del proyecto */}
          <div className="shadow">
            <img
              src={props.foto}
              alt="Imagen del proyecto"
              className="lg:max-h-[173px] max-h-[1000px] w-full object-cover"
            />
          </div>

          {/* Contenido del proyecto */}
          <div className="px-8 pt-4 pb-2 flex flex-col h-full">
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
                {props.tecnologias.map((tec, i) => {
                  return (
                    <img
                      key={i + props.titulo}
                      src={tec.icon}
                      title={tec.nombre}
                      alt="Iconos de tecnologias utilizadas"
                    />
                  );
                })}
              </div>

              {/* Link a repositorio y pagina */}
              <div className="flex gap-x-1">
                {props.programacion ? (
                  <>
                    <div>
                      {/* Link de la pagina o proyecto */}
                      <a href={props.url} target="_blank" rel="noreferrer">
                        <img
                          src={linkProyecto}
                          alt="Link que manda a la pagina del proyecto"
                        />
                      </a>
                    </div>
                    {/* Link del repositorio de github */}
                    <div>
                      <a
                        href={props.repositorio}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={github} alt="Repositorio de Github" />
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
              <button
                className="text-[#22D1EE] bottom-0"
                data-id={props.titulo}
                onClick={mostrarProyecto}
              >
                Documentación {"->"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Informacion completa del proyecto */}
      <div id={props.titulo} className="hidden font-inter fixed top-0 left-0">
        {/* Contenedor del contenedor del contenido */}
        <div className="h-screen w-screen bg-black z-10 bg-opacity-50 flex justify-center items-center">
          {/* Contenedor del contenido del proyecto */}
          <div className="bg-white text-black w-11/12 max-w-[1124px] h-[91%] py-6 px-2 md:px-12 rounded-md flex flex-col items-center relative">
            {/* Titulo del proyecto */}
            <h2 className="text-3xl font-semibold pb-4">{props.titulo}</h2>

            {/* Contenido del proyecto */}
            <div className="overflow-y-scroll scrollbar-hide w-11/12 flex flex-col md:flex-row gap-x-20">
              {/* Lado izquierdo para descripcion rapida del proyecto */}
              <div className="w-full md:w-5/12 gap-y-2 pb-4">
                {/* Imagen del proyecto */}
                <div className="drop-shadow-md">
                  <img
                    src={props.foto}
                    alt="Imagen del proyecto"
                    className="w-full object-cover"
                  />
                </div>

                {/* Repositorio y link a pagina */}
                <div className="flex pt-3 gap-x-4">
                  {props.programacion ? (
                    <>
                      <div>
                        {/* Link de la pagina o proyecto */}
                        <a
                          href={props.url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex gap-x-1"
                        >
                          <img
                            src={linkProyecto}
                            alt="Link que manda a la pagina del proyecto"
                          />
                          <p>Link</p>
                        </a>
                      </div>
                      {/* Link del repositorio de github */}
                      <div>
                        <a
                          href={props.repositorio}
                          target="_blank"
                          rel="noreferrer"
                          className="flex gap-x-1"
                        >
                          <img src={github} alt="Repositorio de Github" />
                          <p>Repositorio</p>
                        </a>
                      </div>
                    </>
                  ) : (
                    <div></div>
                  )}
                </div>

                {/* Descripcion corta del proyecto */}
                <div className="py-3">
                  <h6 className="font-bold">Descripcion:</h6>
                  <p>{props.descripcion}</p>
                </div>

                {/* Tecnologias utilizadas */}
                <div>
                  <h6 className="font-bold pb-1">Herramientas:</h6>
                  <div className="flex flex-col gap-x-1 gap-y-1">
                    {props.tecnologias.map((tec, i) => {
                      return (
                        <>
                          <div className="flex items-center gap-x-1">
                            <img
                              key={i + props.titulo + "a"}
                              src={tec.icon}
                              alt="Iconos de tecnologias utilizadas"
                              className="w-[30px]"
                            />
                            <p>{tec.nombre}</p>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Lado derecho para descripcion detallada del proyecto */}
              <div className="w-full md:w-7/12">
                {/* Mi rol */}
                <div className="pb-3">
                  <h6 className="font-bold">Mi rol:</h6>
                  <p>{props.rol}</p>
                </div>

                {/* Metodologia */}
                <div>
                  <h6 className="font-bold">Metodología:</h6>
                  <ul className="list-disc list-inside marker:text-blue-600 space-y-2">
                    {props.metodologia.map((punto) => {
                      return <li>{punto}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>

            {/* Boton para cerrar el proyecto completo */}
            <button
              className="absolute top-3 right-3"
              onClick={quitarProyecto}
              data-id={props.titulo}
            >
              <svg
                data-id={props.titulo}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  data-id={props.titulo}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
