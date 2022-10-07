import React from "react";
import "./App.css";
import Discente from "./Componentes/Discente";
import Discentes from "./Componentes/Discentes.js";

function App() {
  const objeto = {
    nombre: "Juan",
    apellidos: "Berna Fran",
    curso: "2DAW",
    modulos: "DWC, DWS, DIW",
  };
  return (
    <React.Fragment>
      <Discente nombre="Feo" apellidos="De Verdad" curso="2DAW">
        DWC, DWS, DIW, DAW
      </Discente>
    </React.Fragment>
  );
}

export default App;
