"use strict";

const anadirBoton = () => {
  // Se añade el botón al contenedor.
  document.getElementById("contenedor").innerHTML +=
    "<button class='boton'>Botón nuevo</button>";
};

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

const anadirEvento = (elementos) => {
  // Se transforma elementos en un Array (de este modo puedo usar tanto getElement como querySelector).
  Array.from(elementos).forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
      console.log(evento.target.tagName);
      console.log(evento.target);
    });
  });
};

export { anadirBoton, anadirBotonConId, anadirEvento };
