import React from "react";
import Discente from "./Discente.js";

function Discentes() {
  const discentes = [
    {
      id: 1,
      nombre: "Feo",
      apellidos: "De verdad de la buena",
      curso: "2DAW",
      modulos: "DWC, DWS, DIW, DES",
    },
    {
      id: 2,
      nombre: "Fea",
      apellidos: "También De verdad",
      curso: "2DAW",
      modulos: "DWC, DWS, DIW",
    },
    {
      id: 3,
      nombre: "Horrible",
      apellidos: "De verdad",
      curso: "2DAW",
      modulos: "DWC",
    },
  ];

  return (
    <React.Fragment>
      <h1>Listado de discentes.</h1>
      <Discente />
      {/*  <Discente
        nombre="Federico"
        apellidos="Martínez Rodríguez"
        curso="2DAW"
        modulos="DWC,DWS"
      /> */}
      {/* <Discente nombre="Federico" apellidos="Martínez Rodríguez" curso="2DAW">
        DWC, DWS
      </Discente> */}
      <div>
        {discentes.map((v) => {
          return (
            <Discente
              key={v.id}
              nombre={v.nombre}
              apellidos={v.apellidos}
              curso={v.curso}
            >
              {v.modulos}
            </Discente>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default Discentes;
