"use strict";

import { mostrarPeliculas } from "./Bibliotecas/manipularDOM.js";
import { obtenerDatos } from "./Bibliotecas/traerDatos.js";
import { getPeliculas, getElenco } from "./Bibliotecas/asincronas.js";

window.onload = () => {
  let divPeliculas = document.getElementById("peliculas");
  let divElenco = document.getElementById("elenco");
  let boton1 = document.getElementById("boton1");
  let boton2 = document.getElementById("boton2");
  const url = "http://swapi.py4e.com/api/films";

  boton1.addEventListener("click", () => {
    fetch(url)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((peliculas) => {
        mostrarPeliculas(peliculas.results, divPeliculas);
      })
      .catch(() => {
        rechazar(new Error("Ha habido un error."));
      });
  });

  // Dos formas de manejar asincronismo con async/await (con o sin funciones asíncronas).
  boton2.addEventListener("click", async () => {
    //let peliculas = await (await fetch(url)).json();
    let peliculas = await obtenerDatos(url);
    mostrarPeliculas(peliculas.results, divPeliculas);
    //getPeliculas(url, divContenedor);
  });

  contenedor.addEventListener("click", (e) => {
    if (e.target.tagName === "P") {
      getElenco(e.target.title, divElenco);
    }
  });
};
