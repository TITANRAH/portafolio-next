'use client'

import React, { useState } from "react";
import MobilNavbar from "./MobilNavbar";
import Navbar from "./Navbar";

function ResponsiveNavbar() {
  // aqui nace el estado en falso
  const [showNavbar, setShowNavbar] = useState(false);

  // un handle pasa a true para convertir ele stado a verdadero
  const showNavbarHandler = () => setShowNavbar(true);

  // el otro handle pasa  afalso 
  const closeNavbarHandler = () => setShowNavbar(false);
  return (
    <div>
       {/* el handle que pas a verdadero pasa al componente Navbar para poder desde elnav abrir elmenu lateral */}
      <Navbar openNav={showNavbarHandler} />
      {/* el estado pasa al componente MobilNavbar y la funcion que pasa a falso para cerrar el menu lateral */}
      <MobilNavbar showNavbar={showNavbar} closeNav={closeNavbarHandler} />
    </div>
  );
}

export default ResponsiveNavbar;
