import React, { useContext } from "react";
import { datosContexto } from "./Contextos/DatosProveedor";

function AficionesDatos() {
  // Se usa el contexto con toda su información.
  const contexto = useContext(datosContexto);
  return (
    <React.Fragment>
      <div>
        {contexto.datosEstado.aficiones.length
          ? contexto.datosEstado.aficiones.map((valor, indice, a) => {
              return <li key={indice}>{valor}</li>;
            })
          : `No se ha seleccionado a ningún usuario.`}
      </div>
    </React.Fragment>
  );
}

export default AficionesDatos;
