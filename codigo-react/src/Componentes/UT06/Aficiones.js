import React, { useContext } from "react";
import AficionesDatos from "./AficionesDatos";
import { datosContexto } from "./Contextos/DatosProveedor";

const Aficiones = () => {
  // Se importa el contexto con toda su información.
  const contexto = useContext(datosContexto);

  return (
    <React.Fragment>
      <div className="conBorde">
        <h3>Datos del proveedor.</h3>
        <div>
          <button onClick={contexto.asignarDatos}>Cambiar Datos</button>
          <button onClick={contexto.borrarDatos}>Borrar datos</button>
        </div>
        <div>
          <AficionesDatos />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Aficiones;
