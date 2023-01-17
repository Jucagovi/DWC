import React, { useState, createContext } from "react";

// Se crea el contexto general.
const datosContexto = createContext();

// Valores para el estado general.

const valoresIniciales = {
  nombre: "",
  apellido1: "",
  aficiones: [],
};

const valoresOtros = {
  nombre: "Feo",
  apellido1: "De verdad",
  aficiones: ["Rugby", "Videojuegos", "Fórmula 1"],
};

// Se crea el componente.
const DatosProveedor = (props) => {
  // Se crea un estado para este componente.
  // Se pueden crear todos los estados que sean necesarios.
  const [datosEstado, setDatosEstado] = useState(valoresIniciales);

  // Función que borra el estado.
  const borrarDatos = () => {
    setDatosEstado(valoresIniciales);
  };

  // Función que asigna datos al estado.
  const asignarDatos = () => {
    setDatosEstado(valoresOtros);
  };

  // Se exportan todos los objetos que son susceptibles a utilizarse.
  // Para ello se utiliza un objeto JSON.

  const datos = { datosEstado, borrarDatos, asignarDatos };

  return (
    // Se crea el proveedor del contexto a través del children.
    <datosContexto.Provider value={datos}>
      {props.children}
    </datosContexto.Provider>
  );
};

export default DatosProveedor;
// ¡¡¡Importante!!!
// Hay que exportar el contexto para que pueda ser utilizado.
export { datosContexto };
