import React, { useState } from "react";

function Mensaje() {
  // Se crea el estado del componente deconstruyendo la función useState.
  let [condicion, setCondicion] = useState(true);
  /* Funciones asociadas al estado.
   *    Se crean el mismo componente ya que dependen del estado.
   *    Si forman parte del "core" del componente se declaran en el componente.
   */
  const cambiar = () => {
    setCondicion(!condicion);
    //condicion = !condicion;
  };
  // Se crea el código JSX.
  return (
    <React.Fragment>
      <div className="App-header">
        {/* Se asigna un evento al botón para cambiar el estado. */}
        <button
          onClick={() => {
            cambiar();
          }}
        >
          Cambiar condición
        </button>
        {/* Se evalua el estado para redibujar el componente o no. */}
        {condicion ? <h1>¡Hola Feo!</h1> : <h1>¡Adiós Feo!</h1>}
      </div>
    </React.Fragment>
  );
}

export default Mensaje;
