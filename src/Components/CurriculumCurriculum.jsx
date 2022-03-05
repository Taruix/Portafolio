import React, { useState, useEffect } from "react";
import db from "../Data/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";

export default function CurriculumCurriculum() {
  const [curriculum, setCurriculum] = useState([]);

  useEffect(() => {
    const ObtenerCurriculum = async () => {
      onSnapshot(collection(db, "Curriculum"), (querySnapshot) => {
        const grupoCurriculum = [];
        querySnapshot.forEach((proy) => {
          grupoCurriculum.push({ ...proy.data(), id: proy.id });
        });
        setCurriculum(grupoCurriculum);
      });
    };
    ObtenerCurriculum();
  }, []);

  return (
    <>
      {curriculum.map((e) => {
        const Curriculu = e.Curri;
        console.log(Curriculu);
        return (
          <iframe
            title="Curriculum"
            src={e.Curri}
            className="w-full h-screen"
          ></iframe>
        );
      })}
    </>
  );
}
