import React from "react";
import { useRef } from "react";
import "./Unidad03.css";
/* import {
  addFeo,
  addFeoConEstilo,
  borrarFeo,
  pintarRojo,
} from "./Bibliotecas/UT03Biblioteca.js"; */

function Unidad03() {
  /* ***************************************************
     ¡¡¡ ATENCIÓN !!!
  Acceso directo al DOM desde React está totalmente prohibido. 
  No se puede usar el atributo "id" para acceder con "getElementById"
  ni con ninnguna de sus variantes. En su lugar se usa "ref".
  */
  const referencia = useRef(null);
  const destino = useRef(null);

  /* Se comprueba la estructura del nuevo objeto. */
  console.log(destino);

  const addFeo = () => {
    destino.current.innerHTML += referencia.current.value;
  };

  /* const addFeoConEstilo = () => {
    destino.current.innerHTML += `<p>${referencia.current.value}</p>`;
  }; */

  /* const borrarFeo = () => {
    destino.current.innerHTML = "";
  }; */

  /*  const pintarRojo = () => {
    destino.current.classList.toggle("rojo");
  }; */

  return (
    <React.Fragment>
      <h2>Unidad 03 VDOM en React.</h2>
      <div>
        {/* Se usa "ref" en lugar de "id" 
            "referencia" es una variable de JavaScript,
            por eso se utiliza entre llaves.*/}
        <input ref={referencia} type="text" />
        <button onClick={addFeo}>Incluir usuario/a</button>
        {/* <button onClick={addFeoConEstilo}>Incluir usuario/a con estilo</button> */}
        {/* <button onClick={borrarFeo}>Limpiar usuarios</button> */}
        {/* <button onClick={pintarRojo}>Alertar usuarios</button> */}
        {/* Eventos con funciones que necesitan parámetros para su correcto funcionamiento. */}
        {/* <button
          onClick={() => {
            addFeo(destino, referencia);
          }}
        >
          Incluir usuario/a (parámetros)
        </button>
        <button
          onClick={() => {
            addFeoConEstilo(destino, referencia);
          }}
        >
          Incluir usuario/a con estilo (parámetros)
        </button>
        <button
          onClick={() => {
            borrarFeo(destino);
          }}
        >
          Limpiar usuarios (parámetros)
        </button>
        <button
          onClick={() => {
            pintarRojo(destino);
          }}
        >
          Alertar usuarios (parámetros)
        </button> */}
        <div id="destino" ref={destino}>
          Aquí no hay nada.
        </div>
      </div>
    </React.Fragment>
  );
}

export default Unidad03;
