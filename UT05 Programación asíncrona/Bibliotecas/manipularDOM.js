"use strict";

function mostrar(cosas, donde) {
  let cadena = "";
  cosas.map((v, i, a) => {
    cadena += `<p>El planeta ${v.name} tiene un periodo orbital de ${v.orbital_period} días terrestres.</p>`;
  });
  donde.innerHTML = cadena;
}

function mostrarPeliculas(peliculas, donde) {
  let cadena = "";
  peliculas.map((v, i, a) => {
    cadena += `<p class="pelicula" title="${v.url}"> ${v.title} </p>`;
  });
  donde.innerHTML = cadena;
}

function mostrarElenco(elenco, donde) {
  let cadena = "";
  elenco.map((v, i, a) => {
    //console.log(v);
    cadena += `<p class="elenco"> ${v.value.name} tiene los ojos de color ${v.value.eye_color}.</p>`;
  });
  donde.innerHTML = cadena;
}

export { mostrar, mostrarPeliculas, mostrarElenco };
