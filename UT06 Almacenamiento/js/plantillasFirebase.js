"use strict";

export const pintarDiscente = (documento) => {
  console.log(documento.data());
  return `<div class="fila">
  <img class="borrar" src="./img/borrar.png" id="${documento.id}">
  <div class="celda">${
    documento.data().hasOwnProperty("nombre")
      ? documento.data().nombre
      : "Sin nombre"
  }</div>
  <div class="celda">${
    documento.data().hasOwnProperty("apellidos")
      ? documento.data().apellidos
      : "Sin apellidos"
  }</div>
  <div class="celda">con los módulos: ${
    documento.data().hasOwnProperty("modulos")
      ? documento.data().modulos
      : "Sin módulos"
  }</div>
  <div class="celda"> ${
    documento.data().hasOwnProperty("direccion")
      ? documento.data().direccion.calle
      : "Sin dirección"
  }, ${
    documento.data().hasOwnProperty("direccion")
      ? documento.data().direccion.numero
      : "Sin número"
  } en ${
    documento.data().hasOwnProperty("direccion")
      ? documento.data().direccion.localidad
      : "Sin localidad"
  } (${
    documento.data().hasOwnProperty("direccion")
      ? documento.data().direccion.provincia
      : "Sin provincia"
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
