import React from "react";
import AboutMe from "../Components/AboutMe";
import ContactMe from "../Components/ContactMe";
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
      <AboutMe />
      <ContactMe />
      <Footer />
    </>
  );
}
