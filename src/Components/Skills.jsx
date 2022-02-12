import React, { useState, useEffect } from "react";
import db from "../Data/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const ObtenerSkills = async () => {
      onSnapshot(collection(db, "SkillsHome"), (querySnapshot) => {
        const grupoSkills = [];
        querySnapshot.forEach((proy) => {
          grupoSkills.push({ ...proy.data(), id: proy.id });
        });
        setSkills(grupoSkills);
      });
    };
    ObtenerSkills();
  }, []);

  return (
    <>
      {/* Contenedor de las habilidades y conocimientos */}
      <div>
        {/* Contenido de las habilidades */}
        <div className="flex overflow-x-auto gap-x-7 scrollbar-hide snap-mandatory snap-x">
          {skills.map((info, i) => {
            //console.log(info.habilidades.grupo[1]);
            return (
              <>
                <div key={i + info.grupo} className="shrink-0">
                  <h5 className="p-2">{info.grupo}</h5>
                  <hr />
                  <div className="flex p-2 gap-x-3">
                    {info.habilidades.map((hab, i) => {
                      //console.log(hab);
                      return (
                        <img
                          src={hab.img}
                          key={i + info.grupo}
                          title={hab.titulo}
                          className="h-20"
                          alt="Icono o logo del area de conocimiento"
                        />
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
