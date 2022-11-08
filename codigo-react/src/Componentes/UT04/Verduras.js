import React, { useState } from "react";

function Verduras() {
  const valorInicial = ["Apio", "Calabacín", "Pimiento", "Calabaza", "Cebolla"];

  const [verduras, setVerduras] = useState(valorInicial);

  const addVerdura = (nuevaVerdura) => {
    //setVerduras([nuevaVerdura]); // ERROR -> Sustituyo a todo el array.
    setVerduras([...verduras, nuevaVerdura]);
  };
  const deleteVerdura = (nuevaVerdura) => {
    const nuevasVerduras = verduras.filter((verdura) => {
      return verdura !== nuevaVerdura;
    });
    setVerduras(nuevasVerduras);
  };
  const updateVerdura = (nuevoNombre) => {
    const nuevasVerduras = verduras.map((verdura) => {
      return verdura === nuevoNombre ? `${verdura} <-- ¡Cambiado!` : verdura;
      /*   if (verdura === nuevoNombre) {
        return "Cambiado";
      } else {
        return verdura;
      } */
    });
    setVerduras(nuevasVerduras);
  };

  const limpiarVerdura = () => {
    setVerduras([]);
  };

  const iniciarVerdura = () => {
    setVerduras(valorInicial);
  };
  return (
    <React.Fragment>
      <div className="App-header">
        <h1>Verduras</h1>
        <p>
          <button
            onClick={() => {
              addVerdura("Boniato");
            }}
          >
            Añadir
          </button>
          <button
            onClick={() => {
              deleteVerdura("Pimiento");
            }}
          >
            Borrar
          </button>
          <button
            onClick={() => {
              updateVerdura("Cebolla");
            }}
          >
            Actualizar
          </button>
          <button onClick={limpiarVerdura}>Limpiar</button>
          <button onClick={iniciarVerdura}>Iniciar</button>
        </p>
        <p>
          {verduras.map((verdura) => {
            return <li key={verdura}>{verdura}</li>;
          })}
        </p>
        <div className="estado">
          <p>Valor del estado actual.</p>
          <pre>{JSON.stringify(verduras, null, 3)}</pre>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Verduras;
