import React, { useContext } from "react";
import { datosContexto } from "./Contextos/DatosProveedor";

const Saludo = () => {
  // Se obtiene los datos del contexto.
  const contexto = useContext(datosContexto);
  return (
    <React.Fragment>
      <h3 className="conBorde">
        {/* Se usan los datos del contexto como si fuesen propios. */}
        {contexto.datosEstado.nombre
          ? `¡Hola ${contexto.datosEstado.nombre} ${contexto.datosEstado.apellido1}!`
          : `No hay nadie a quién saludar.`}
      </h3>
    </React.Fragment>
  );
};

export default Saludo;
