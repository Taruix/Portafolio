import React from "react";
import Footer from "../Components/Footer";
import HeroImage from "../Components/HeroImage";
import HomeProyects from "../Components/HomeProyects";
import HomeSkills from "../Components/HomeSkills";

export default function HomaPage() {
  return (
    <>
      <HeroImage />
      <HomeProyects />
      <HomeSkills />

      <Footer />
    </>
  );
}
