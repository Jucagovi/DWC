"use strict";

export const pintarDiscente = (documento) => {
  return `<div class="fila">
  <img class="borrar" src="./img/borrar.png" id="${documento.id}">
  <div class="celda">${documento.data().nombre}</div>
  <div class="celda">${documento.data().apellidos}</div>
  <div class="celda">con los módulos: ${documento.data().modulos}</div>
  <div class="celda"> ${documento.data().direccion.calle}, ${
    documento.data().direccion.numero
  } en ${documento.data().direccion.localidad} (${
    documento.data().direccion.provincia
  })</div>
  </div>`;
};

export const pintarBien = (id) => {
  return `<div class="bien">¡Transacción con id ${id} realizada con éxito!</div>`;
};

export const pintarMal = (error) => {
  return `<div class="mal">Error al hacer la acción: ${error}.</div>`;
};

export const borrar = (objetoDOM) => {
  setTimeout(() => {
    objetoDOM.innerHTML = "";
  }, 2000);
};
