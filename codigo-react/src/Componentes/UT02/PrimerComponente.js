import React from "react";

// const PrimerComponente = (props) => {
function PrimerComponente(props) {
  const texto = "Esto es un compoenente de prueba";
  return (
    <React.Fragment>
      <h1>Hola mundo desde mi primer componente</h1>
      <h2>{texto}</h2>
    </React.Fragment>
  );
}

export default PrimerComponente;
