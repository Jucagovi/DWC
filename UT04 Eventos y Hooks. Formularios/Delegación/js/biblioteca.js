"use strict";

const addButton = () => {
  // Añado el botón al contenedor.
  document.getElementById("contenedor").innerHTML +=
    "<button class='boton'>Botón dentro del contenedor</button>";
  /* let bot = document.getElementsByClassName("boton");
  addEvento(bot); */
  /**
   *
   * Existe una modo para que respete los eventos preexistentes.
   *  Se utiliza insertAdjacentHTML(posición, código_a_introducir)
   *  para añadir objetos al DOM (existe versión con elementos insertAdjacentElement() ).
   *
   *  Ejemplo del valor de "posición":
   *    --- beforebegin ---
   *    <div id="contenedor">
   *      --- afterbegin ---
   *      <p>Texto existente en el objeto de destino.</p>
   *      --- beforeend ---
   *    </div>
   *    --- afterend ---
   *
   *
   */
  /*   document
    .getElementById("contenedor")
    .insertAdjacentHTML(
      "beforeend",
      `<button class='boton'>Botón dentro del contenedor con innerAdjacentHTML</button>`
    ); */
};

const addEvento = (b) => {
  Array.from(b).forEach((elemento) => {
    elemento.addEventListener("click", (e) => {
      //console.log(e.target.tagName);
      console.log(e.target);
    });
  });
};

export { addButton, addEvento };
