"use strict";

/****** Operador spread (...) */

/** Objeto sencillo. */
let persona = {
  nombre: "Feo",
  apellido1: "De Verdad",
};

/** Copia de objeto (no referencia). */

let persona2 = { ...persona, apellido2: "De la buena" };

/** Copia por refencia. */

let persona3 = persona;

/** Se modifica persona3 y no persona (al menos directamente). */

persona3.ciudad = "Petrer";

/* console.log(persona);
console.log(persona2);
console.log(persona3); */

/*****  Arrays. ********/

/** Declaración.  */

let cosas = new Array();
let tresTipos = new Array(11, "Feo", true);
let tresTiposDos = [11, "hola", true];
let masCosas = [];

/** Spread también funciona con arrays. */

/** Copiar arrays. */

/* let animales = ["perro", "gato", "feo"];
console.log(animales);
let copiaDeAnimales = [...animales];
console.log(copiaDeAnimales); */

/** Concatenar arrays */

/* let numeros = [1, 2, 3];
let meses = ["enero", "febrero", "marzo"];
console.log([...numeros, ...meses]); */

/** Comm parámetros en una fucnión */

/* let numeros = [1, 2, 3];
const sumaNumeros = (a, b, c) => {
  console.log(a + b + c);
};
sumaNumeros(...numeros); // Muestra 6. */

/** 
            ¡¡Cuidado!!
Métodos que modifican el array original y otros no.
Algunos devuelven un elemento u otro valor.
Incluso los hay que no hacen nada.

forEach(función) 	  → ejecuta la función para cada elemento (descartado → funciones puras).
map(función) 		    → ejecuta la función para cada elemento (devuelve).
every(función) 		  → si la función se cumple siempre.
some(función) 		  → si la función se cumple para alguno.
filter(función) 		→ devuelve un nuevo array con elementos que cumplen la función.

Los callbacks reciben tres parámetros opcionales en este orden:
  → el valor del elemento del array,
  → el índice del elemento y
  → el propio array.

*/

const feos = ["Rodrigo", "Juan", "Artura", "Javier"];

/*** Recorrer un objeto (no se modifica pero hay que utilizar map). */

/* const feos2 = feos.map((feo) => {
  return feo;
});

console.log(feos2); */

/*  // Versión reducida. Evitar a toda costa.
const feos2 = feos.map((feo) => feo);  */

/*** Añadir un nuevo valor al objeto (uso de spread operator). */

/* const nuevoFeo = "Juan Carlos";
const feos3 = [...feos, nuevoFeo];

console.log(feos3); */

/*** Eliminar un elemento del objeto (filter). */

/* const feos4 = feos3.filter((feo) => {
  return feo !== nuevoFeo;
});

console.log(feos4); */

/***  Actualizar un elemento del objeto. */

/* const nuevoValor = "Arturo";
const valorCambiar = "Artura";
const feos5 = feos.map((feo) => {
  if (feo === valorCambiar) {
    return nuevoValor;
  } else {
    return feo;
  }
});

console.log(feos5); */

/****** Desestructuración de objetos. */

let nombre = persona.nombre;
let apellido1 = persona.apellido1;

//let {nombre, apellido1} = persona;

/** Es posible cambiar el nombre de los atributos y
 *  la asignación de valores por defecto.
 */

// let { nombre: nom, apellido1: cognom1, malnom = "Feo" } = persona;

/** Funciona con arrays aunque de forma posicional. */

/* let sorpresa = ["Luke", "yo", "soy", "tu", "padre"];
let [sustantivo, pronombre, verbo] = sorpresa;
console.log(sustantivo);
console.log(pronombre);
console.log(verbo); */
