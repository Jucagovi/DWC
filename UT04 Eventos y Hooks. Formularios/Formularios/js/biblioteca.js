"use strict";

const validarFormulario = () => {
  var expNombre = new RegExp("^[a-zA-Z][a-zA-Z0-9-_.]{2,20}$");
  //var expNombre = /^[a-zA-Z][a-zA-Z0-9-_\.]{2,20}$/;
  let nombre = document.getElementById("nombre");
  if (expNombre.test(nombre.value)) {
    document.getElementById("error").innerHTML = "El nombre es correcto.";
    // Envío el formulario con formulario.submit o lo gestiono a través de una función.
  } else {
    document.getElementById("error").innerHTML =
      "Escriba un nombre con entre 3 y 20 caracteres y debe comenzar con una letra.";
    // No envío el formulario.
  }
};

export { validarFormulario };
