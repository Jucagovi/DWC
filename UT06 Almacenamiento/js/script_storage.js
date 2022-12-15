"use strict";
import * as plantillas from "./plantillasFirebase.js";
window.onload = () => {
  const datos = document.getElementById("datos"); // Contenedor de datos.
  const informacion = document.getElementById("informacion"); // Contenedor de información.
  /**
   *
   * *****  localStorage / sessionStorage
   *
   * setItem    -->  crear una entrada en la base de datos.
   * getItem    --> obtener una entrada en la base de datos.
   * removeItem --> indica que valor hay que eliminar (recibe un key cmo parámetro).
   * key(n)     --> devuelve la clave enésima posición de la base de datos.
   * clear()    --> borrar la base de datos.
   * storage    --> evento que se ejecuta cuando hay cambios en la base de datos.
   *
   */

  // Comprobar si el navegador lo soporta.
  if (typeof Storage !== "undefined") {
    // Se puede acortar para facilitar la escritura del código.
    // No recomendable si se usan bibliotecas externas.
    // const db = localStorage;

    // Se revisa el prototipo del objeto.
    console.log(localStorage);

    // Guardar datos en localStorage.
    localStorage.setItem("nombre", "Guapo");
    localStorage.setItem("nombre", "Feo");
    localStorage.setItem("apellidos", "De Verdad");
    localStorage.setItem("fecha", "1954");

    // Se muestran los valores de localStorage.
    datos.innerHTML = `${localStorage.getItem("nombre")} ${localStorage.getItem(
      "apellidos"
    )}`;

    // Mostrar toda la información de la base de datos.
    /*  console.log("**** Contenido de la base de datos localStorage ****");
    for (let i = localStorage.length - 1; i >= 0; i--) {
      console.log(
        `${localStorage.key(i)} : ${localStorage.getItem(localStorage.key(i))}`
      );
    }
    console.log("****************************************************"); */

    // Borrar el almacenamiento.

    /* localStorage.clear();
    console.log(localStorage); */

    /** *** Recordadndo JSON **************************
     *
     * Repaso el protoripo.
     *    stringify  --> genera un string a partir de un JSON.
     *    parse      --> genera un objeto JSON a partir de un cadena de un string.
     *
     */

    // Se repasa su prototipo.
    //console.log(JSON);

    const feos = [
      {
        id: plantillas.generarUUID(),
        nombre: "Albert",
        apellidos: "Einstein",
        direccion: {
          calle: "De la luz",
          numero: "300.000",
          localidad: "Relativa",
          provincia: "Alicante",
        },
        modulos: ["DWC", "DWS", "DIW", "DAW"],
      },
      {
        id: plantillas.generarUUID(),
        nombre: "Juan",
        apellidos: "López",
        modulos: ["DWC", "DWS"],
        direccion: {
          calle: "Elm Street",
          numero: "54",
          localidad: "Petrer",
          provincia: "Alicante",
        },
      },
    ];

    /* // Se transforma el JSON en formato texto para poder guardarlo.
    localStorage.setItem("discentes", JSON.stringify(feos));
    // Se comprueba el contenido de localStorage.
    //console.log(localStorage);

    // Mostrar datos desde localStorage en formato JSON.
    datos.innerHTML = "";
    let discentes = JSON.parse(localStorage.getItem("discentes"));
    // Como los dotos obtenidos son un JSON los puedo recorrer:
    discentes.map((discente) => {
      datos.innerHTML += plantillas.pintarDiscenteJSON(discente);
    }); */
  } else {
    // Si no se dispone de esta tecnología.
    console.error("Este navegador no soporta la tecnología localStorage.");
  }
}; // Fin window.load.
