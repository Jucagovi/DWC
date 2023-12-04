"use strict";

const mostrarPlanetas = (planetas, donde) => {
  let cadena = "";
  // Esta versión sí comprueba si el primer parámetro es un array y además contiene valores.
  if (Array.isArray(planetas) && planetas.length) {
    planetas.map((v, i, a) => {
      cadena += `<p>El planeta ${v.name} tiene un periodo orbital de ${v.orbital_period} días terrestres.</p>`;
    });
  } else {
    cadena = "No se han encontrado planetas en esta galaxia.";
  }
  donde.innerHTML = cadena;
};

const mostrarGentuza = (gentuza, donde) => {
  let cadena = "";
  // Esta también.
  if (Array.isArray(gentuza) && gentuza.length) {
    gentuza.map((v, i, a) => {
      cadena += `<p class="gentuza"> ${v.name} tiene los ojos de color ${v.eye_color}.</p>`;
    });
  } else {
    cadena = "No se ha encontrado gentuza.";
  }
  donde.innerHTML = cadena;
};

export { mostrarPlanetas, mostrarGentuza };
