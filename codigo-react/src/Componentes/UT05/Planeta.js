import React from "react";
import { formatear } from "./Bibliotecas/getDatos.js";

function Planeta(props) {
  return (
    <React.Fragment>
      <h2>{props.datos.name}</h2>
      <p>
        El período orbital de {props.datos.name} es de{" "}
        {props.datos.rotation_period} días. Posee un clima {props.datos.climate}{" "}
        y una población de {formatear(props.datos.population)} habitantes
      </p>
      <p>
        Su gravedad es de {props.datos.gravity} y es del tipo{" "}
        {props.datos.terrain}.
      </p>
    </React.Fragment>
  );
}

export default Planeta;
