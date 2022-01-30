import React from 'react';
import heroImg from "../Images/programing.svg"

export default function HomaPage() {
  return (
      <>
        {/* Contenedor del Hero */}
        <div className='flex justify-center'>

          {/* Contenedor del cotenido del hero */}
          <div className='flex w-full md:w-[768px] lg:w-[1024px] mx-5 h-screen'>
            
            {/* Contenedor texto de la Hero Image, Izquierda y Debajo */}
            <div className='flex w-1/2 items-center'>

              {/* Texto de la Hero */}
              <div className='space-y-6'>

                {/* Nombre */}
                <h1 className='font-["Roboto"] font-extrabold text-7xl'>
                  Roberto
                  <br />
                  Montalvo Rocha
                </h1>

                {/* Lo que soy */}
                <h3 className='font-["Roboto"] font-extrabold text-4xl'>
                  Soy <b className='text-blue-600'>Ingeniero en Mecatronica</b>
                </h3>

                {/* Botones de contacto */}
                <div className='flex space-x-5'>
                  <button className='px-4 py-2.5 rounded-md text-white bg-blue-600 hover:bg-blue-500'>Ver proyectos</button>
                  <button className='px-4 py-2.5 rounded-md text-white bg-blue-600 hover:bg-blue-500'>Contacto</button>
                </div>
                
              </div>

            </div>

            {/* Contenedor Imagen de la Hero Image, Derecha y Arriba */}
            <div className='flex w-1/2 items-center justify-end'>

              {/* Imagen de la Hero */}
              <img src={heroImg} alt=""/>

            </div>

          </div>
        </div>
      </>
  );
}
