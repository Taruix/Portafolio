import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
    <BrowserRouter>
      {/* Barra de Navegacion */}
      <Navbar/>

        <Routes>
          <Route path="/" element={<h1>Hello there Luz</h1>} />
          <Route path="/proyectos" element={<h1>Proyectos</h1>} />

          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>

    </BrowserRouter>
    </>
  )
}

export default App;
