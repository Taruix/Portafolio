import React from 'react';
import heroImg from "../Images/programing.svg"

export default function HomaPage() {
  return (
      <>
        {/* Contenedor del Hero */}
        <div className='flex justify-center'>

          {/* Contenedor del cotenido del hero */}
          <div className='flex-container lg:flex w-full md:w-[768px] lg:w-[1024px] mx-5 h-[5/6] my-5 md:h-screen lg:my-0'>
            
            {/* Mobil!!!!!! Contenedor Imagen de la Hero Image, Derecha y Arriba */}
            <div className=' lg:hidden flex h-1/2 lg:h-full lg:w-1/2 items-center justify-center w-full lg:justify-end'>

              {/* Imagen de la Hero */}
              <img src={heroImg} alt="" className='py-4 lg:py-0 h-full' />

            </div>

            {/* Contenedor texto de la Hero Image, Izquierda y Debajo */}
            <div className=' flex lg:w-1/2 h-1/2 lg:h-full items-start md:items-center lg:items-center w-full py-5'>

              {/* Texto de la Hero */}
              <div className='space-y-6'>

                {/* Nombre */}
                <h1 className='font-inter font-extrabold text-3xl sm:text-7xl'>
                  Roberto
                  <br />
                  Montalvo Rocha
                </h1>

                {/* Lo que soy */}
                <h3 className='font-inter font-extrabold text-base sm:text-4xl'>
                  Soy <b className='text-blue-600'>Ingeniero en Mecatronica</b>
                </h3>

                {/* Botones de contacto */}
                <div className='flex space-x-5 font-inter'>
                  <button className='px-4 py-2.5 rounded-md text-white bg-blue-600 hover:bg-blue-500'>Ver proyectos</button>
                  <button className='px-4 py-2.5 rounded-md text-white bg-blue-600 hover:bg-blue-500'>Contacto</button>
                </div>
                
              </div>

            </div>

            {/* Desktop!!!! Contenedor Imagen de la Hero Image, Derecha y Arriba */}
            <div className='hidden lg:flex h-1/2 lg:h-full lg:w-1/2 items-center justify-center w-full lg:justify-end'>

              {/* Imagen de la Hero */}
              <img src={heroImg} alt="" className='h-full' />

            </div>

          </div>
        </div>
      </>
  );
}
