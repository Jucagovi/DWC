"use strict";

const anadirBoton = () => {
  // Se añade el botón al contenedor.
  document.getElementById("contenedor").innerHTML +=
    "<button class='boton'>Botón nuevo</button>";
};

// Intento de solucionar el problema. Mala idea.
const anadirBotonConId = () => {
  // Se crea el identificador.
  let identificador = crypto.randomUUID();
  // Se añade el botón al contenedor con id.
  document.getElementById(
    "contenedor"
  ).innerHTML += `<button class='boton' id="${identificador}">Botón nuevo</button>`;
  // Se añade el evento al nuevo botón.
  document.getElementById(identificador).addEventListener(
    "click",
    (evento) => {
      console.log(evento.target);
    },
    false
  );
};

// Mala idea. Mejor poner un sólo evento en el contenedor.
const anadirEvento = (elementos) => {
  // Se transforma elementos en un Array (de este modo puedo usar tanto getElement como querySelector).
  Array.from(elementos).forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
      console.log(evento.target.tagName);
    });
  });
};

export { anadirBoton, anadirBotonConId, anadirEvento };
