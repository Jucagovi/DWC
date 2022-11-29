import React, { useState, useEffect } from "react";

function Contador2() {
  const valorInicial = 0;
  const [contador, setContador] = useState(valorInicial);

  /**
   * Manejar efectos secundarios, ciclo de vida y dependecncias.
   *
   * Parámetros del useEffect.
   *    -> fucnión a ejecutar,
   *    -> array de valores.
   *
   * useEffect como ciclo de vida.
   *        -> se ejecuta al crear el componente siempre (ComponentDidMount),
   *        -> sin array, se ejecuta tras cada dibujado (ComponentDidUpdate),
   *        -> usando el return, acciones al desmontar el componente (ComponentWillUnmount).
   *
   *    No es posible evitar su ejecución al montado del componente.
   *    Es muy recomendable utilizarlo sólo con estados y props.
   ***/

  /*  useEffect(() => {
    console.log(contador);
    document.title = `Contador con valor: ${contador}.`;
    // No se está accediendo al DOM, sino al BOM.
    // Esta parte del navegador se mantiene estable durante la ejecución de React.
    // No ocurre lo mismo con el DOM (nunca se accede al DOM desde React de forma directa).
  }); */

  return (
    <React.Fragment>
      <div className="App-header">
        <h2>ContadorPlus</h2>
        <div>
          <h3>Contador: {contador}</h3>
          <button
            onClick={() => {
              setContador(contador + 1);
              console.log(contador);
              document.title = `Contador con valor: ${contador}.`;
            }}
          >
            Incrementar 1
          </button>

          {/* <button
            onClick={() => {
              setContador(contador + 1);
              console.log(contador);
              document.title = `Contador con valor: ${contador}.`;
            }}
          >
            Incrementar 2
          </button>
          <button
            onClick={() => {
              setContador(contador + 1);
              console.log(contador);
              document.title = `Contador con valor: ${contador}.`;
            }}
          >
            Incrementar 3
          </button> */}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contador2;
