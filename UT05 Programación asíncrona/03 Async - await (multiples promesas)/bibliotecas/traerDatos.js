"use strict";

// Función para consumir promesas específica.
const getPlanetas = () => {
  // La API fetch siempre devolverá un objeto Promise que habrá que consumir.
  return fetch("http://swapi.py4e.com/api/planets")
    .then((respuesta) => {
      return respuesta.json(); // Se transforma el resultado a un objeto JSON.
    })
    .then((planetas) => {
      // El objeto planetas.results es lo que devuelve el fetch que, a su vez, es
      // devuelto fuera de la función, es decir, getPlanetas devolverá
      // el resultado del fetch (que es una promesa).
      return planetas.results;
    })
    .catch((error) => {
      return `Se ha producido un error: ${error.message}`; // Por si se produce un error.
    });
};

// Función para consumir promesas generalista.
const getDatos = (url) => {
  // Obtiene datos de una API y los transforma a JSON.
  return (
    fetch(url)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        return datos.results;
      })
      // Si se produce un error se devuelve un mensaje.
      .catch((error) => {
        return `Se ha producido un error: ${error.message}`;
      })
  );
};

export { getPlanetas, getDatos };
