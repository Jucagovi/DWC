import React, { useState } from "react";

function Discente() {
  // Un objeto completo para utilizarlo más tarde.
  const datosDiscente = {
    nombre: "Feo",
    apellidos: "De verdad",
    modulos: ["DWC", "DWS", "DAW", "DIW"],
  };
  // Crear un estado inicial (objeto con valores por defecto para evitar errores al dibujar (segundo nivel).
  const datosIniciales = {
    nombre: "",
    apellidos: "",
    modulos: [],
  };

  const [discente, setDiscente] = useState(datosIniciales);

  const cambiarNombre = () => {
    setDiscente({ ...discente, nombre: "Rodrigo" });
  };

  const cambiarApellidos = () => {
    setDiscente({ ...discente, apellidos: "Horrible" });
  };

  const asignarModulos = () => {
    setDiscente({ ...discente, modulos: ["DWC", "DWS", "DAW", "DIW", "EIE"] });
  };

  const asignarObjeto = () => {
    setDiscente(datosDiscente);
  };

  const borrarDatos = () => {
    setDiscente(datosIniciales);
  };

  /* const actualizarDato = (propiedad, valor) => {
    setDiscente({ ...discente, [propiedad]: valor });
  }; */

  return (
    <React.Fragment>
      <div className="App-header">
        <h1>Discente</h1>
        <p>
          <button onClick={cambiarNombre}>Cambiar nombre</button>
          <button onClick={cambiarApellidos}>Cambiar apellidos</button>
          <button onClick={asignarModulos}>Matricular</button>
          <button onClick={asignarObjeto}>Asignar objeto</button>
          <button onClick={borrarDatos}>Borrar Datos</button>
        </p>
        <div>
          <p>{`${discente.nombre} ${discente.apellidos}`}</p>
          <ul>
            {discente.modulos.map((modulo) => {
              return <li key={modulo}>{modulo}</li>;
            })}
          </ul>
        </div>
        {/* Imprimir el estado con formato JSON (Objeto) para comprobar. */}
        <div className="estado">
          <p>Valor del estado actual.</p>
          <pre>{JSON.stringify(discente, null, 3)}</pre>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Discente;
