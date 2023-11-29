"use strict";

import {
  mostrarGentuza,
  mostrarPlanetas,
} from "../bibliotecas/manipularDOM.js";
import { getPlanetas, getDatos } from "../bibliotecas/traerDatos.js";

window.onload = () => {
  /********* Seleccionando elementod del DOM. ***********/

  const botonPlanetas = document.getElementById("botonPlanetas");
  const botonGentuza = document.getElementById("botonGentuza");
  const contenedorPlanetas = document.getElementById("planetas");
  const contenedorGentuza = document.getElementById("gentuza");

  /********* Origen de los datos. ***********************/

  const url = "https://swapi.py4e.com/api/people/";

  /*** Obtención y pintado de los datos. */

  fetch("http://swapi.py4e.com/api/planets")
    .then((respuesta) => {
      return respuesta.json(); // Se transforma el resultado a un objeto JSON.
    })
    .then((datos) => {
      let cadena = "";
      let planetas = datos.results;
      planetas.length
        ? planetas.map((valor, indice, array) => {
            cadena += `<p>El planeta ${valor.name} tiene un periodo orbital de ${valor.orbital_period} días terrestres.</p>`;
          })
        : (cadena = "No se han encontrado planetas en esta galaxia.");
      contenedorPlanetas.innerHTML = cadena;
    })
    .catch((error) => {
      return `Se ha producido un error: ${error.message}`; // Por si se produce un error.
    });

  /*** Trabajando con eventos. *****************************
   *
   * Se pueden crear funciones para la obtención de los datos
   * y añadirlas a un evento con addEventListener.
   *
   */

  botonPlanetas.addEventListener("click", (evento) => {
    // Se obtiene una promesa, no los datos que contiene.
    console.log(getPlanetas());
    // Se obtiene una promesa y se consume para acceder a su contenido.
    /* getPlanetas().then((datos) => {
      //console.log(datos);
      mostrarPlanetas(datos, contenedorPlanetas);
    }); */
  });

  /*  botonGentuza.addEventListener("click", (evento) => {
    getDatos(url).then((datos) => {
      console.log(datos);
      mostrarGentuza(datos, contenedorGentuza);
    });
  }); */

  /** Encadenamiento de promesas y cláusula. ********************************************
   *
   * Se usa cuando el resultado de un código asíncrono depende
   * de la ejecución de otrro código asíncrono.
   *
   */

  // Se define un objeto promesa que será el resulatdo de encadenar cuatro promesas.
  /*   const promesa = new Promise((resolver, rechazar) => {
    setTimeout(() => {
      return resolver(1);
    }, 1000);
  })
    .then((resultado_p1) => {
      console.log(resultado_p1);
      return resultado_p1 + 1;
    })
    .then((resultado_p2) => {
      console.log(resultado_p2);
      return resultado_p2 + 1;
    })
    .then((resultado_p3) => {
      console.log(resultado_p3);
      return resultado_p3 + 1;
    })
    .catch((error) => {
      console.log(error.message);
    })
    .finally(() => {
      // La cláusula finally se va a hacer siempre independientemente
      // de si la promesa ha sido resuelta o rechazada.
      console.log("Proceso de encadenamiento de promesas terminado.");
    });

  // Se consume la promesa.
  promesa.then((datos) => {
    console.log(`Los datos de la promesa son: ${datos}`);
  }); */
}; // Fin del window.load.
