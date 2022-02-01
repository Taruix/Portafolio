import React from 'react';
import github from "../Images/github.svg"
import linkProyecto from "../Images/linkProyecto.svg"

export default function Proyecto(props) {
  return (
    <>
    <div>
      {/* Contenedor del Proyecto */}
      <div className='bg-white rounded-lg text-black h-full'>
        
        {/* Imagen del proyecto */}
        <div>
          <img src={props.foto} alt="" />
        </div>

        {/* Contenido del proyecto */}
        <div className='px-8 pb-8 pt-2'>


          {/* Titulo y descripcion del proyecto */}
          <div className='pb-4'>
            <h4 className='text-2xl font-semibold'>{props.titulo}</h4>
            <p className='pt-2'>{props.descripcion}</p>
          </div>

          <div className='content-flex self-end'>
            {/* Tecnologias, herramientas, git y link */}
            <div className='flex justify-between'>
              {/* Iconos de las herramientas */}
              <div>tools</div>
              {/* Link a repositorio y pagina */}
              <div className='flex gap-x-1'>

                {/* Link de la pagina o proyecto */}
                <div>
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

              </div>
            </div>

            {/* Boton que muestra toda la focumentacion */}
            <div className='relative'>
              <button className='text-[#22D1EE] bottom-0'>
                Documentacion {"->"}
              </button>
            </div>
          </div>
          </div>


      </div>
    </div>
    </>
  );
}
