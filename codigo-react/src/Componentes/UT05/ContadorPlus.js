import React, { useState, useEffect } from "react";

function ContadorPlus() {
  const valorInicial = 0;
  const [contador, setContador] = useState(valorInicial);
  const [incremento, setIncremento] = useState(1);

  /** 
   * useEffect con dependencias (array de valores).
            -> sin parámetro:   se ejecuta después de cada dibujado.
            -> array vacío:     se ejecuta únicamente al montar el componente.
            -> con valores:     se ejecuta cuando los valores cambien (cuidado con las referencias de objetos y arrays).
      Por este último motivo es preferible utilizarlo con estados y/o props.
    */

  useEffect(() => {
    console.log(contador);
    document.title = `Contador con valor: ${contador}.`;
  });

  /* useEffect(() => {
    console.log(`Hola feos desde el inicio de la aplicación.`);
  }, []); */

  /* useEffect(() => {
    console.log(`Se ha aumentado el valor de incremento a ${incremento}`);
  }, [incremento]); */

  return (
    <React.Fragment>
      <div className="App-header">
        <h2>ContadorPlus</h2>
        <div>
          <h3>Contador: {contador}</h3>
          <h3>Incremento: {incremento}</h3>
          <button
            onClick={() => {
              setContador(contador + incremento);
            }}
          >
            Incrementar 1
          </button>

          <button
            onClick={() => {
              setIncremento(incremento + 1);
            }}
          >
            Incremento + 1
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContadorPlus;
