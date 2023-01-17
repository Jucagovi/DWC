import React from "react";
import DatosProveedor from "./Componentes/UT06/Contextos/DatosProveedor";
import Saludo from "./Componentes/UT06/Saludo";
import Despedida from "./Componentes/UT06/Despedida";
import Aficiones from "./Componentes/UT06/Aficiones";

const Unidad06 = () => {
  /**
   * Concepto de closure (Repaso)
   *
   * Son funciones que acceden a variables no globales fuera de su ámbito.
   *
   */

  function iniciar() {
    // La variable nombre es una variable local creada por iniciar.
    var nombre = "Feo";
    function mostrarNombre() {
      // La función mostrarNombre es una función interna, una clausura.
      console.log(nombre); // Usa una variable declarada en la función externa.
    }
    mostrarNombre();
  }
  iniciar();

  /**
   * Esto se está utilizando desde los primeros días en React.
   *
   */

  return (
    <React.Fragment>
      <div className="App-header">
        <h3>Unidad 06</h3>
        <DatosProveedor>
          <Saludo />
          <Aficiones />
        </DatosProveedor>
        <Despedida />
      </div>
    </React.Fragment>
  );
};

export default Unidad06;
