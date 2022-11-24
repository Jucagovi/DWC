"use strict";

import { obtenerDatos } from "./traerDatos.js";
import { mostrarElenco, mostrarPeliculas } from "./manipularDOM.js";

const getPeliculas = async (url, donde) => {
  let peliculas = await obtenerDatos(url);
  mostrarPeliculas(peliculas.results, donde);
};

const getElenco = async (pelicula, donde) => {
  //Obtener datos de las películas.
  let elenco = await obtenerDatos(pelicula);
  //Se comprueba lo que se ha recibido.
  //console.log(elenco);
  //console.log(elenco.characters);
  //Se crea un array con las promesas de los datos de los actores.
  let arrayPromesasPersonajes = elenco.characters.map(
    (valor, indice, array) => {
      return obtenerDatos(valor);
    }
  );
  // Se consume la promesa de promesas con then.
  Promise.allSettled(arrayPromesasPersonajes).then((valoresPromesas) => {
    console.log(valoresPromesas);
    mostrarElenco(valoresPromesas, donde);
  });
  // Se consume la promesa de promesas con await.
  /* const valoresPromesas = await Promise.allSettled(arrayPromesasPersonajes);
  console.log(valoresPromesas); */
  // Se pasa a la función que lo pinta en el DOM.
  //mostrarElenco(valoresPromesas, donde);
};

export { getPeliculas, getElenco };
