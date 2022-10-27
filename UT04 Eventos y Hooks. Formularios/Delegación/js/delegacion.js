"use strict";
import { addButton, addEvento } from "./biblioteca.js";

let botones = document.getElementsByTagName("button");
let contenedor = document.getElementById("contenedor");

document.getElementById("nuevo").addEventListener("click", () => {
  addButton();
});

addEvento(botones);

/*********************************************
 *
 *  Delegación de eventos.
 * Se aprovecha la delegación para añadir un sólo evento,
 * incluso si los elementos del contenedor aumentan.
 *
 *  */

/* contenedor.addEventListener(
  "click",
  (e) => {
    console.log(e.target.tagName);
  },
  true
); */
