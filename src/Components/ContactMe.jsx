import React from "react";
import github from "../Images/github.svg";
import emailjs from "emailjs-com";

const salirExito = () => {
  document.querySelector(".AlertaExito").classList.add("hidden");
};

const salirError = () => {
  document.querySelector(".AlertaError").classList.add("hidden");
};

const mostrarExito = () => {
  document.querySelector(".AlertaExito").classList.remove("hidden");
};

const mostrarError = () => {
  document.querySelector(".AlertaError").classList.remove("hidden");
};

export default function ContactMe() {
  function enviarCorreo(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_66pzqaf",
        "template_t87f766",
        e.target,
        "user_kVwHdjUgLwNGeA44G0K6E"
      )
      .then((res) => {
        mostrarExito();
      })
      .catch((err) => {
        mostrarError();
      });

    e.target.reset();
  }

  return (
    <>
      {/* Contenedor del contenido de contacto */}
      <div className="flex justify-center font-inter py-2">
        {/* Contenido de contacto */}
        <div className="flex flex-col lg:flex w-full md:w-[768px] lg:w-[1024px] px-5 h-[5/6] my-5 lg:h-screen lg:my-0 justify-center items-cente gap-y-10">
          {/* Titulo */}
          <div>
            <h2 className="text-center text-5xl font-extrabold">Contáctame</h2>
          </div>

          {/* Contacto interfaz */}
          <div className="flex flex-col md:flex-row md:flex-nowrap w-full">
            {/* Informacion de contacto */}
            <div className="w-full md:w-5/12 flex flex-col gap-y-6 pb-8">
              {/* Correo Electronico */}
              <div className="flex gap-x-3 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p>Roberto.Montalvo.Rocha@gmail.com</p>
              </div>

              {/* Telefono */}
              <div className="flex gap-x-3 items center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p>(+52) 826 142 4440</p>
              </div>

              {/* Linkedin */}
              <div>
                <a
                  href="https://www.linkedin.com/in/robertomontalvorocha/"
                  className="flex items-center gap-x-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="Images/githubb.svg"
                    alt="imagen linkedin"
                    className="w-7 h-7"
                  />
                  <p>/robertomontalvorocha/</p>
                </a>
              </div>

              {/* Github */}
              <div>
                <a
                  href="https://github.com/Taruix"
                  className="flex items-center gap-x-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={github} alt="logo Github" className="w-7 h-7" />
                  <p>https://github.com/Taruix</p>
                </a>
              </div>
            </div>

            {/* Formulario para mandar un correo */}
            <div className="w-full md:w-7/12">
              <form
                className="w-full flex flex-col gap-y-4"
                onSubmit={enviarCorreo}
              >
                {/* Nombre */}
                <div className="w-full flex flex-col gap-y-2">
                  <label className="font-semibold">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    className="border p-2 bg-gray-50 focus:bg-blue-50"
                  />
                </div>

                {/* Correo Electronico */}
                <div className="w-full flex flex-col gap-y-2">
                  <label className="font-semibold">Correo Electrónico</label>
                  <input
                    type="email"
                    name="user_email"
                    className="border p-2 bg-gray-50 focus:bg-blue-50"
                  />
                </div>

                {/* Area para el mensaje */}
                <div className="w-full flex flex-col">
                  <label className="font-semibold">Mensaje</label>
                  <textarea
                    name="message"
                    cols="30"
                    rows="9"
                    className="border p-2 bg-gray-50 focus:bg-blue-50"
                  />
                </div>

                {/* Boton mandar formulario */}
                <input
                  type="submit"
                  value="Enviar"
                  className="w-full py-2.5 rounded-md text-white bg-blue-600 hover:bg-blue-500 mt-2 cursor-pointer active:bg-blue-200"
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Alerta de mensaje enviado con exito */}
      <div className="AlertaExito fixed top-0 left-0 hidden">
        <div className="h-screen w-screen bg-black z-10 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-10/12 sm:w-9/12 md:w-7/12 lg:w-5/12 xl:w-4/12 p-5 rounded-md flex flex-col justify-center items-center gap-y-5 relative">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[100px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#0f0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex flex-col items-center">
              <h5 className="font-semibold text-lg text-center">
                El mensaje se envió de manera exitosa
              </h5>
              <p className="text-center">
                Pronto me estaré poniendo en contacto
              </p>
            </div>
            <button
              className="px-10 py-2.5 rounded-md text-white bg-blue-600 hover:bg-blue-500 mt-2 cursor-pointer active:bg-blue-200"
              onClick={salirExito}
            >
              Aceptar
            </button>
            <button className="absolute top-3 right-3" onClick={salirExito}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
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

      {/* Alerta no se pudo mandar el mensaje */}
      <div className="AlertaError fixed top-0 left-0 hidden">
        <div className="h-screen w-screen bg-black z-10 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-10/12 sm:w-9/12 md:w-7/12 lg:w-5/12 xl:w-4/12 p-5 rounded-md flex flex-col justify-center items-center gap-y-5 relative">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-[100px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#f00"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex flex-col items-center">
              <h5 className="font-semibold text-lg text-center">
                Hubo un error al mandar el mensaje
              </h5>
              <p className="text-center">
                Puede intentar nuevamente o mandarme un mensaje directo a mi
                correo electrónico.
                <br />
                <b className="font-semibold text-blue-500">
                  Roberto.Montalvo.Rocha@gmail.com
                </b>
                <br />
                Gracias por su compresión
              </p>
            </div>
            <button
              className="px-10 py-2.5 rounded-md text-white bg-blue-600 hover:bg-blue-500 mt-2 cursor-pointer active:bg-blue-200"
              onClick={salirError}
            >
              Aceptar
            </button>
            <button className="absolute top-3 right-3" onClick={salirError}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
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
