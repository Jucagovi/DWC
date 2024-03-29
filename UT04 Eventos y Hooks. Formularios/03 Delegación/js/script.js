"use strict";

// Se importan las funciones necesarias de la biblioteca.

import { anadirBoton, anadirBotonConId, anadirEvento } from "./biblioteca.js";

window.onload = () => {
  //****************************************************************
  //** Delegación de eventos */

  // Seleccion de los elementos del DOM para los ejemplos.
  let botones = document.getElementsByClassName("boton");

  document.getElementById("nuevo").addEventListener("click", () => {
    anadirBoton();
  });

  // Es mala idea ya que se ponen eventos de más.
  //anadirEvento(botones);

  //** ¿Cómo solucionamos el problema de los eventos? */

  let contenedor = document.getElementById("contenedor");

  // Solución al problema: usar delegación de eventos (evento al contenedor).
  contenedor.addEventListener(
    // Se utiliza la delegación de eventos.
    "click",
    (evento) => {
      console.log(evento.target.tagName);
    },
    false
  );
}; // Fin del window.onload.
