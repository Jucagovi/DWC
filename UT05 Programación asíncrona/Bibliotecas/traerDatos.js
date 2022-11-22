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

const obtenerDatos = (url) => {
  // Obtiene datos de una API y los transforma a JSON.
  return (
    fetch(url)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        return datos;
      })
      // Si se produce un error se devuelve un mensaje.
      .catch(() => {
        rechazar(new Error("Ha habido un error."));
      })
  );
};

export { getPlanetas, obtenerDatos };
