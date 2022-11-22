"use strict";

import { obtenerDatos, getPlanetas } from "./Bibliotecas/traerDatos.js";
import { mostrar } from "./Bibliotecas/manipularDOM.js";

window.onload = () => {
  const contenedor = document.getElementById("contenedor");
  const boton = document.getElementById("boton");
  const url = "http://swapi.py4e.com/api/planets";

  // Una solicitud asíncrona consumida con then.

  /* let feo = obtenerDatos(url);
  //console.log(feo); */

  /*  feo = obtenerDatos(url).then((datos) => {
    return datos.results;
  });
  //console.log(feo); */

  /* feo.then((datos) => {
    // Consumo esa promesa.
    console.log(datos.results);
  }); */

  /* ******************** async / await ***************************
   Consumir promesas de forma "síncrona":
      - async, establece un contexto asíncrono para el intérprete del código.
      - await, obliga al intérprete a "esperar" la ejecución del código asíncrono.
 */

  // Solicitud "síncrona" --> ¡Error!. No se ha definido un ámbito asíncrono.

  /*  console.log("Se hace la llamada");
  let datos = await obtenerDatos(url);
  mostrar(datos.results, contenedor);
  console.log(datos.results);
  console.log("Después de la llamada"); */

  // Solicitud "síncrona" en un ámbito asíncrono.

  /* const mostrarPlanetas = async () => {
    console.log("Hago la llamada");
    let datos = await obtenerDatos(url);
    mostrar(datos.results, contenedor);
    console.log(datos.results);
    console.log("Después de la llamada");
  }; */

  /* const mostrarPlanetasModoGuay = async () => {
    let d = await (await fetch(url)).json();
    console.log(d.results);
  }; */

  // Generación de funciones extra y puede llegar a ser complicado.
  //mostrarPlanetas();
  //mostrarPlanetasModoGuay();

  // Utilizando ámbitos existentes para llamar a funciones await.

  /* boton.addEventListener("click", async () => {
    let informacion = await obtenerDatos(url);
    //console.log(informacion); // .results es exigencia de la API.
    mostrar(informacion.results, contenedor);
  }); */

  // ****************** Encadenamiento de promesas ***************************
  //    all()         --> resuelve una promesa cuando TODAS las pasadas como parámetro sean resueltas.
  //    allSettled()  --> resuelve una promesa cuando TODAS estén en estado settled.
  //    any()         --> resuelve una promesa cuando la PRIMERA de ellas esté resuelta.
  //    race()        --> resuelve una promesa con el resultado de la PRIMERA fulfilled
  //                      (la primera en estar rechazada o resuleta).

  //console.log(Promise); //Imprimo el objeto para ver sus propiedades.

  // Se declaran cuatro promesas con resultados diferentes:
  /* var p1 = new Promise((resolver, rechazar) => {
    setTimeout(() => resolver("Uno"), 1100);
  });
  var p2 = new Promise((resolver, rechazar) => {
    setTimeout(() => resolver("Dos"), 900);
  });
  var p3 = new Promise((resolver, rechazar) => {
    let feo = 0;
    if (feo === 0) {
      setTimeout(() => resolver(`El valor de feo es ${feo}.`), 1500);
    } else {
      rechazar(new Error("Promise p3 rechazada."));
    }
  });
  var p4 = new Promise((resolver, rechazar) => {
    setTimeout(() => rechazar(new Error("Promise p4 rechazada.")), 1000);
  }); */

  /* Promise.all([p1, p2, p3])
    .then((values) => {
      console.log(values);
    })
    .catch((error) => {
      console.error(error.message);
    }); */

  /* Promise.all([p1, p2, p3, p4])
    .then((values) => {
      console.log(values);
    })
    .catch((error) => {
      console.error(error.message);
    }); */

  // *** Buena opción para manejar errores en las promesas.

  /*  Promise.allSettled([p1, p2, p3, p4])
    .then((values) => {
      console.log(values);
      values.map((valor, indice, array) => {
        console.log(
          `La promesa "p${indice + 1}" ha sido "${
            valor.status
          }" con una valor de "${valor.value}".`
        );
      });
    })
    .catch((error) => {
      console.error(error.message);
    }); */

  /* Promise.any([p1, p2, p4]) // Primera en estado "fullfiled".
    .then((values) => {
      console.log(values); // Un valor solamente.
      console.log(`${values} desde any()`);
    })
    .catch((error) => {
      console.error(error.message);
    }); */

  /* Promise.race([p1, p2, p4]) // Primera en estado "settled".
    .then((values) => {
      console.log(values); // Un sólo valor, el más rápido.
      console.log(`${values} desde race()`);
    })
    .catch((error) => {
      console.error(error.message);
    }); */
}; // fin del archivo
