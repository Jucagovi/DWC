"use strict";

import {
  mostrarGentuza,
  mostrarPlanetas,
} from "../bibliotecas/manipularDOM.js";
import { getPlanetas, getDatos } from "../bibliotecas/traerDatos.js";

window.onload = () => {
  /************* NOTA *****************************
   *
   * Explicación anterior sobre .finally();
   *
   * .finally(() => {
      // La cláusula finally se va a hacer siempre independientemente
      // de si la promesa ha sido resuelta o rechazada.
    });
   *
   */

  /********* Seleccionando elementod del DOM. ***********/

  const botonPlanetas = document.getElementById("botonPlanetas");
  const botonGentuza = document.getElementById("botonGentuza");
  const contenedorPlanetas = document.getElementById("planetas");
  const contenedorGentuza = document.getElementById("gentuza");

  /********* Origen de los datos. ***********************/

  const url = "https://swapi.py4e.com/api/planets/";

  /** **************** Conjunto de promesas ***************************
   *
   *  Permiten esvaluar un conjunto de promesas como una sola.
   *  Se dispone de:
   *
   *    all()         --> resuelve una promesa cuando TODAS las pasadas como parámetro sean resueltas.
   *    allSettled()  --> resuelve una promesa cuando TODAS estén en estado settled.
   *    any()         --> resuelve una promesa cuando la PRIMERA de ellas esté resuelta.
   *    race()        --> resuelve una promesa con el resultado de la primera fulfilled.
   *                      (la primera en estar rechazada o resuleta).
   *
   */

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

  // Cuando todas las promesas sean resueltas.
  // ¡Ojo!, se está utilizando el método del prototipo Promise.
  // Éste que devuelve una promesa, no es necesario un constructor (new).
  //const todas = Promise.all([p1, p2, p3]);

  // Se obtiene una promesa.
  //console.log(todas);
  // Se consume esa promesa para acceder a los datos.
  /* todas
    .then((datos) => {
      console.log(datos);
      console.log(datos[0]);
    })
    .catch((error) => {
      console.error(error.message);
    }); */

  // Si falla una, fallan todas.
  /*  const todasFallo = Promise.all([p1, p2, p3, p4]);

  todasFallo
    .then((datos) => {
      console.log(datos);
    })
    .catch((error) => {
      console.error(error.message);
    }); */

  // Todas se han realizado (fulfilled) independientemente de su resultado.
  // *** Buena opción para manejar errores en las promesas.
  /*  const todasHechas = Promise.allSettled([p1, p2, p3, p4]);

  console.log(todasHechas);

  todasHechas
    .then((datos) => {
      let estado;
      datos.map((valor, indice, array) => {
        valor.status === "rejected"
          ? (estado = valor.reason)
          : (estado = valor.status);
        console.log(
          `La promesa "p${indice + 1}" ha sido "${
            valor.status
          }" con una valor de "${estado}".`
        );
      });
    })
    .catch((error) => {
      console.error(error.message);
    }); */

  // Primera en estado "fullfiled".
  /* const primera = Promise.any([p1, p2, p4]);

  console.log(primera);

  primera
    .then((values) => {
      console.log(values); // Un valor solamente.
    })
    .catch((error) => {
      console.error(error.message);
    }); */

  // Primera en estado "settled".
  /*  const masRapida = Promise.race([p1, p2, p4]);

  console.log(masRapida);

  masRapida
    .then((values) => {
      console.log(values); // Un sólo valor, el más rápido.
      console.log(`${values} desde race()`);
    })
    .catch((error) => {
      console.error(error.message);
    }); */

  /**
   * ******************** async / await ***************************
   *
   * ¿Y si se vuelve al sistema síncrono?
   *
   * Consumir promesas de forma "síncrona":
   *  - async, establece un ámbito asíncrono para el intérprete del código.
   *  - await, obliga al intérprete a "esperar" la ejecución del código asíncrono.
   *
   * Para utilizarlo hay que crear un ámbito y declararlo como asíncrono.
   * Lo idea es hacerlo en una función ya que es un ámbito pequeño y
   * controlable.
   *
   */

  // Solicitud "síncrona" en un ámbito asíncrono.
  // Hay que utilizar async/await.

  const dibujarPlanetas = () => {
    console.log("Hago la llamada.");
    let datos = getDatos(url);
    mostrarPlanetas(datos, contenedorPlanetas);
    console.log(datos);
    console.log("Después de la llamada.");
  };

  /* const dibujarPlanetasModoGuay = async () => {
    let esperoEntendereloDentroDeUnMes = await (await fetch(url)).json();
    console.log(esperoEntendereloDentroDeUnMes.results);
  }; */

  //dibujarPlanetas();
  //dibujarPlanetasModoGuay();

  /** Puede suponer un problema:
   *    - se generan funciones extra que hacen demasiadas cosas (se puede hacer una exceción),
   *    - puede llegar a compliarse con tantas funciones.
   *
   *  Solución: en la medida de lo posible utilizar ámbitos existentes y
   *            convertirlos en asíncronos (como el de un evento).
   */

  botonPlanetas.addEventListener("click", async (evento) => {
    let datos = await getDatos(url);
    console.log(datos);
    mostrarPlanetas(datos, contenedorGentuza);
  });

  botonGentuza.addEventListener("click", async (evento) => {
    dibujarPlanetas();
  });
}; // fin del archivo
