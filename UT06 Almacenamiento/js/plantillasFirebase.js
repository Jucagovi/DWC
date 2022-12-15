"use strict";

const pintarDiscente = (documento) => {
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

const pintarBien = (id) => {
  return `<div class="bien">¡Transacción con id ${id} realizada con éxito!</div>`;
};

const pintarMal = (error) => {
  return `<div class="mal">Error al hacer la acción: ${error}.</div>`;
};

const borrar = (objetoDOM) => {
  setTimeout(() => {
    objetoDOM.innerHTML = "";
  }, 2000);
};

const generarUUID = () => {
  var d = new Date().getTime();
  var uuid = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
};

const pintarDiscenteJSON = (discente) => {
  return `<div class="fila">
    <img class="borrar" src="./img/borrar.png" id="${discente.id}">
    <div class="celda">${
      discente.hasOwnProperty("nombre") ? discente.nombre : "Sin nombre"
    }</div>
    <div class="celda">${
      discente.hasOwnProperty("apellidos")
        ? discente.apellidos
        : "Sin apellidos"
    }</div>
    <div class="celda">con los módulos: ${
      discente.hasOwnProperty("modulos") ? discente.modulos : "Sin módulos"
    }</div>
    <div class="celda"> ${
      discente.hasOwnProperty("direccion")
        ? discente.direccion.calle
        : "Sin dirección"
    }, ${
    discente.hasOwnProperty("direccion")
      ? discente.direccion.numero
      : "Sin número"
  } en ${
    discente.direccion.hasOwnProperty("direccion")
      ? discente.direccion.localidad
      : "Sin localidad"
  } (${
    discente.direccion.hasOwnProperty("provincia")
      ? discente.direccion.provincia
      : "Sin provincia"
  })</div>
    </div>`;
};

export {
  pintarDiscenteJSON,
  generarUUID,
  borrar,
  pintarMal,
  pintarBien,
  pintarDiscente,
};
