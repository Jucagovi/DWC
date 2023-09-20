"use strict";

/******** OBJETOS *******/

/*** Definición de objetos (propiedades)*/
var nadie = {};
var persona = {
  nombre: "Feo",
  apellido1: "De Verdad",
  direccion: {
    // Puede haber JSON anidados.
    calle: "La de siempre",
    numero: 5,
    telefono: 123456789,
  },
  aficiones: ["Videojuegos"],
}; // Todo objeto JSON finaliza con un punto y coma ( ; ).

console.log(nadie);
console.log(persona);

/*** Acceso a las propiedades */

/* console.log(persona.nombre);
console.log(persona["apellido1"]);
console.log(
  `Que vive en ${persona.direccion.calle} número ${persona["direccion"].numero}.`
);
console.log(persona.aficiones);

persona.apellido2 = "De la buena";
console.log(persona); */

/*** Definición de objetos (métodos) */

/* persona.getNombreCompleto = function () {
  return `${this.nombre} ${this.apellido1}`;
};

console.log(persona);
console.log(persona.getNombreCompleto); // Se imprime por consola el objeto función.
console.log(persona.getNombreCompleto()); // Se ejecuta la función y se imprime su devolución. */

/*** Constructores de objetos */

/* function creaPersona(nom, ape1) {
  return {
    nombre: nom,
    apellido1: ape1,
    direccion: {
      calle: "La de siempre",
      numero: 5,
      telefono: 123456789,
    },
    aficiones: ["Videojuegos"],
    getNombreCompleto: function () {
      return this.nombre + " " + this.apellido1;
    },
    saluda: function (persona) {
      if (typeof persona.getNombreCompleto !== "undefined") {
        return "Hola " + persona.getNombreCompleto();
      } else {
        return "Hola colega";
      }
    },
  };
}
var persona2 = creaPersona("Feo", "De Verdad");
var persona3 = creaPersona("Bruce", "Wayne");
console.log(persona2.saluda(persona3)); // Hola Bruce Wayne
console.log(persona2.saluda({})); // Hola colega */

/*** Recorrer objetos con for in */

/* for (var clave in persona) {
  // Se comprueba que el JSON realmente tenga esa propiedad.
  // Se accede a su prototipo y se usa uno de sus métodos.
  if (persona.hasOwnProperty(clave)) {
    // Se muestra en pantalla la clave junto a su valor y el tipo de datos.
    console.log(
      `La clave es ${clave} y el valor es ${
        persona[clave]
      } y es del tipo ${typeof persona[clave]}`
    );
  }
} */

/*** Encadenamiento opcional (React)*/

// console.log(persona.direccion?.calle);
