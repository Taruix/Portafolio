import { data } from "autoprefixer";
import React, { useState } from "react";
import Data from "../Data/skills.json";

export default function Skills() {
  const [skills, setSkills] = useState(Data);

  return (
    <>
      {/* Contenedor de las habilidades y conocimientos */}
      <div>
        {/* Contenido de las habilidades */}
        <div className="flex overflow-x-auto  justify-center gap-x-7 scrollbar-hide snap-mandatory before:shrink-0s after:shrink-0">
          {skills.map((info) => {
            return (
              <>
                <div key={info.id} className="shrink-0">
                  <h5 className="p-2">{info.grupo}</h5>
                  <hr />
                  <div className="flex p-2">
                    {info.habilidades.map((hab) => {
                      return <img src={hab} alt="" />;
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
