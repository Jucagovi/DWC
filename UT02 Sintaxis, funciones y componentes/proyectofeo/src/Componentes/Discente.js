import React from "react";

function Discente(props) {
  return (
    <React.Fragment>
      <div>
        {/* <p>Apellidos, Nombre</p>
        <p>Curso matrícula</p>
        <p>Módulos matrícula</p> */}
         {/* <p>
          {props.datos.apellidos}, {props.datos.nombre}
        </p>
        <p>{props.datos.curso}</p>
        <p>{props.datos.modulos}</p> */}
        <p>
          {props.apellidos}, {props.nombre}
        </p>
        <p>{props.curso}</p>
        <p>{props.children}</p>
      </div>
    </React.Fragment>
  );
}

export default Discente;
