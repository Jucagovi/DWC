"use strict";
// La importación debe hacerse al inicio del documento.
import { saludar, saludarNombre, decirAdios } from "./biblioteca.js";
// Esperar a la carga del DOM
/* 
document.addEventListener("DOMContentLoaded", function () {
  // Todo el código JavaScript aquí.
});
 */
// De todo el objeto windows (es preferible utilizar esta opción por si es necesario interactuar con otros objetos que no sean del DOM).
window.onload = function () {
  const elemento = document.getElementById("feo");
  const boton = document.getElementById("boton");

  // **************** Asignación de eventos **** Cómo no hacerlo a partir de ahora *********************************
  //-------------------------------------------------------------------------------------
  //<input type="button" value="Boton Hola Feo" onClick="alert('Hola Feo');alert('Adios Feo');" />
  //<input type="button" value="Botón miFuncion" onClick="miFuncion('parametroFeo');" />
  //-------------------------------------------------------------------------------------

  /* **************** Usar sólo en caso de emergencia ************************************************************** */
  /* 
  elemento.onclick = "saludar"; // Asigna la función Saludar como manejador.
  elemento.onclick = "saludar()"; // Asigna el resultado de la función Saludar al manejador.
  elemento.setAttribute("onClick", "saludar();");
 */
  /** ************ Cómo hacerlo a partir de ahora -> addEventListener() *********************************
   * addEventListener(
   *   -> Nombre del evento,
   *   -> Función declaración a utilizar (cuidado con las funciones anónimas o flecha),
   *   -> Flujo de eventos (false -> event bubblig (recomendado), true -> event capture),
   *   -> Opciones de ejecución -> objeto con las opciones {capture: true, once: true, passive: true, signal: true}
   * );
   *    */

  /*  elemento.addEventListener("click", saludar, false); */

  // Añadir varias funciones al evento.

  /*  elemento.addEventListener("click", decirAdios, false); */

  // Funciones con parámetros a través de una función flecha.

  /* feo.addEventListener(
    "click",
    () => {
      saludarNombre("Feo");
      decirAdios();
    },
    false
  ); */

  // ************** Como eliminar un evento -> removeEventListener() *********************************

  /** Si se ha añadido un evento a través de una función declaración es posible eliminar ese método. */
  /** Si se ha añadido a través de una función anónima o flecha no se podrá eliminar el evento (aunque sí el elemento). */

  /*  elemento.addEventListener("click", decirAdios);
  boton.addEventListener("click", () => {
    elemento.removeEventListener("click", decirAdios);
  }); */

  // **************** Flujo de eventos *********************************

  /*  let c = 0;
  let j = 0;
  // Añadir un evento a todo el documento.
  document.addEventListener(
    "click",
    () => {
      c++;
      console.log(`Pulsado document ${c} veces`);
    },
    false
  );
  // Jugando con la propagación de eventos.
  document.getElementById("arrastrables").addEventListener(
    "click",
    () => {
      j++;
      console.log(`Pulsado feo ${j} veces`);
    },
    false
  ); */

  // **************** Objeto event *********************************

  /*  elemento.addEventListener(
    "click",
    (evento) => {
      console.log(evento);
    },
    false
  ); */

  // ***************** Arrastrar y soltar *********************************

  // Eventos a tener en cuenta -> dragstart, dragover y drop,
  // (de modo opcional dragenter, dragleave y dragend para aplicar efectos de diseño).

  // Asignar propiedad "dragable" a los objetos arrastables.

  /*   var arr = document.getElementsByClassName("arrastrable");
  for (var i = 0; i < arr.length; i++) {
    arr[i].setAttribute("draggable", true);
  }

  var elementoArrastrado; // Elemento que va a ser arrastarado.

  document.addEventListener(
    "dragstart",
    function (evento) {
      elementoArrastrado = evento.target; // Forma de hacerlo con objeto completo.
      //event.dataTransfer.setData("feo", event.target.id); // Forma de hacerlo con id.
    },
    false
  );

  document.addEventListener(
    "dragover",
    function (evento) {
      evento.preventDefault(); // ¡¡IMPORTANTE!! -> previene el funcionamiento por defecto.
    },
    false
  );

  document.addEventListener(
    "drop",
    function (evento) {
      evento.preventDefault(); // ¡¡IMPORTANTE!! -> previene el funcionamiento por defecto.
      if (evento.target.className == "soltable") {
        console.log(`Soltado en ${event.target.className}`);

        evento.target.appendChild(
          elementoArrastrado
          //document.getElementById(event.dataTransfer.getData("feo"))
        );
      }
    },
    false
  ); */
}; // Fin del window.onload.
