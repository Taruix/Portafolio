import React from "react";
import github from "../Images/github.svg";
import emailjs from "emailjs-com";

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
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    e.target.reset();
  }

  return (
    <>
      {/* Contenedor del contenido de contacto */}
      <div className="flex justify-center font-inter py-14">
        {/* Contenido de contacto */}
        <div className="flex flex-col lg:flex w-full md:w-[768px] lg:w-[1024px] mx-5 h-[5/6] my-5 lg:h-screen lg:my-0 justify-center items-cente gap-y-10">
          {/* Titulo */}
          <div>
            <h2 className="text-center text-5xl font-extrabold">Contacto</h2>
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
                >
                  <img src="Images/githubb.svg" alt="" className="w-7 h-7" />
                  <p>/robertomontalvorocha/</p>
                </a>
              </div>

              {/* Github */}
              <div>
                <a
                  href="https://github.com/Taruix"
                  className="flex items-center gap-x-3"
                  target="_blank"
                >
                  <img src={github} alt="" className="w-7 h-7" />
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
    </>
  );
}
