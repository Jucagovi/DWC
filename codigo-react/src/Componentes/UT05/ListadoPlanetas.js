import React from "react";

function ListadoPlanetas(props) {
  return (
    <React.Fragment>
      <h2>Planetas</h2>
      <ul>
        {/* Se imprime el listado de planetas. */}
        {props.datos.length !== 0
          ? props.datos.map((v, i, a) => {
              return (
                <li
                  key={i}
                  className="planeta"
                  onClick={() => {
                    props.funcion(v.url);
                  }}
                >
                  {v.name}
                </li>
              );
            })
          : "No se han detectado planetas en este sistema."}
      </ul>
    </React.Fragment>
  );
}

export default ListadoPlanetas;
