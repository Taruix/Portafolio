import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import ContactPage from "./Pages/ContactPage";
import HomaPage from "./Pages/HomaPage";
import ProyectsPage from "./Pages/ProyectsPage";
import SkillsPage from "./Pages/SkillsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        {/* Barra de Navegacion */}
        <Navbar />

        <Routes>
          <Route path="/" element={<HomaPage />} />
          <Route path="/proyectos" element={<ProyectsPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/habilidades" element={<SkillsPage />} />

          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
