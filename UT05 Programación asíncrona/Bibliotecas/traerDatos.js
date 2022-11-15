"use strict";

const getPlanetas = (fuente) => {
  // La API fetch siempre devolverá un objeto Promise que habrá que consumir.
  return fetch(fuente)
    .then((respuesta) => {
      return respuesta.json(); // Se transforma el resultado a un objeto JSON.
    })
    .then((planetas) => {
      return planetas.results; // Se devuelven los datos contenidos en la promesa.
    })
    .catch((error) => {
      console.error(error); // Por si diera un error.
    });
};

export { getPlanetas, getElenco };
