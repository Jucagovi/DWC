import React from "react";
import Colores from "./Componentes/UT05/Colores.js";
import Contador2 from "./Componentes/UT05/Contador2.js";
import ContadorPlus from "./Componentes/UT05/ContadorPlus.js";
import Planetas from "./Componentes/UT05/Planetas.js";

function Unidad05() {
  return (
    <React.Fragment>
      {/* Control del ciclo de vida con useEffect. */}
      {/* <Contador2 /> */}
      <Colores />
      {/* Dependecias en useEffect */}
      {/* <ContadorPlus /> */}
      {/* Trabajando con peticiones externas */}
      {/* <Planetas /> */}
    </React.Fragment>
  );
}

export default Unidad05;
