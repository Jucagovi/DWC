"use strict";

const mostrarPlanetas = (planetas, donde) => {
  let cadena = "";
  planetas.length
    ? planetas.map((v, i, a) => {
        cadena += `<p>El planeta ${v.name} tiene un periodo orbital de ${v.orbital_period} días terrestres.</p>`;
      })
    : (cadena = "No se han encontrado planetas en esta galaxia.");
  donde.innerHTML = cadena;
};

const mostrarGentuza = (gentuza, donde) => {
  let cadena = "";
  gentuza.length
    ? gentuza.map((v, i, a) => {
        //console.log(v);
        cadena += `<p class="gentuza"> ${v.name} tiene los ojos de color ${v.eye_color}.</p>`;
      })
    : (cadena = "No se ha encontrado gentuza.");
  donde.innerHTML = cadena;
};

export { mostrarPlanetas, mostrarGentuza };
