"use strict";

/************** Trabajando con el DOM **************/

/* Tipos de nodo en un document HTML.

  -> Element, nodo que contiene una etiqueta HTML (nodeType = 1).
  -> Attr, nodo que forma parte de un elemento HTML (nodeType = 2).
  -> Text, nodo que contiene texto y que no puede tener hijos (nodeType = 3).
  -> Existen 12 tipos de nodos.

*/

/* Posicionamiento relativo firstChild, lastChild, nextSibling, previousSibling. */

/* var parrafo = document.body.firstChild;
var parrafo2 = document.body.firstElementChild;
console.log(parrafo);
console.log(parrafo2); */

/* Tipos de nodo Element (1), Attr (2) y Text (3). */

/* console.log(parrafo.nodeType);
console.log(parrafo2.nodeType);
console.log(parrafo.nodeName); 
console.log(parrafo.nodeValue); */

/* Crear referencia del document para evitar subir al alcance global a cada llamada (optimización del código). */

var doc = window.document;

/* Seleccionando elementos (recursivamente) -> getElementsByTagName, getElementById, getElementsByName. */

/* var parrafos = doc.getElementsByTagName("p"); // parrafos es un NodeList.
console.log(parrafos); // Ver la estructura del objeto (siempre es buena idea).
console.log(`Párrafos seleccionados ${parrafos.length}`);
for (var i = 0; i < parrafos.length; i++) {
  console.log(parrafos[i]);
}

// Error. No es un array.
parrafos.map((p) => {
  console.log(p);
}); */

/* Seleccionando elementos como en CSS -> querySelectorAll y querySelector. */

/* var inputs = doc.querySelectorAll("input");
console.log(inputs);

inputs.map((i) => {
  console.log(i);
});

var capa_botones = doc.querySelector("#botones");
console.log(capa_botones);

var capas = doc.querySelectorAll("div div");
console.log(capas);

var capas2 = doc.querySelectorAll(".contenido");
console.log(capas2); */

/**  ¡¡¡ATENCIÓN!!!
 *  -> Las referencias con getElementById siempre contienen el estado actual del documento (están vivas).
 *  -> Las referencias con querySelector contienen los elementos en el momento de ejecución (no cambian).
 *  */

/* Creando objetos en el DOM -> document.createElement y document.createTextNode. */

/* 
  // const crearCE = function() { 
  const crearCE = () => {
  // 1.- Se crea el elemento,
  var elemento = doc.createElement("p");
  // 2.- Se crea el texto (contenido),
  var contenido = doc.createTextNode(
    "Nuevo párrafo creado <strong>dinámicamente</strong>"
  );
  // 3.- Se añade el contenido (texto) al elemento,
  elemento.appendChild(contenido);
  // 4.- Se añade al DOM -> appendChild(nuevo), insertBefore(nuevo,existente),  removeChild(existente), replaceChild(nuevo,existente).
  doc.getElementById("botones").appendChild(elemento);
};

// Usando innerHTML (¡¡¡ATENCIÓN!!! -> reemplaza todo el contenido del nodo por el nuevo). 

const crearIH = () => {
  // 1.- Se crea el elemento,
  var ele2 = doc.createElement("p");
  // 2.- Se crea el texto (contenido),
  ele2.innerHTML =
    "Nuevo párrafo creado dinámicamente con <strong>innerHTML</strong>";
  // 3.- Se añade al DOM -> appendChild(nuevo), insertBefore(nuevo,existente),  removeChild(existente), replaceChild(nuevo,existente).
  doc.getElementById("botones").appendChild(ele2);
} */

// Usando insertAdjacentHTML("dondeInsertar", "contenidoAInsertar") -> respeta el contenido previo.

/* Ejemplos e uso localización. 

<!-- beforebegin -->
<p id=”feo”>
  <!-- afterbegin -->
  	Párrafo muy feo.
  <!-- beforeend -->
</p>
<!-- afterend --> 

*/

/* Acceso y modificacción de atributos -> getAttribute(nombre), setAttribute(nombre, valor) o como propiedades de elementos. */

/* const derecha = () => {
  var der = document.getElementById("primero");
  console.log(der.getAttribute("align")); // No está definido.
  der.setAttribute("align", "right");
  console.log(der.getAttribute("align")); // Después del cambio es "right".
}; */

/* Usando la propiedad style pada dar formato -> elemento.style.propiedad (Mala idea). */

/* const pintarAzul = () => {
  var azules = doc.getElementsByClassName("contenido");
  //console.log(azules);
  for (var i = 0; i < azules.length; i++) {
    azules[i].style.color = "blue";
  }
}; */

/* Mejor se usa CSS -> className o classList (add, remove, toggle, length y contains). */

/* var primero = doc.getElementById("primero");
primero.classList.add("verde"); */

/* const destacar = () => {
  var nuevos = doc.getElementsByClassName("nuevo");
  for (var i = 0; i < nuevos.length; i++) {
    nuevos[i].classList.toggle("destacado");
  }
}; */
