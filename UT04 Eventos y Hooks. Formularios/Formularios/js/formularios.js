"use strict";
import { validarFormulario } from "./biblioteca.js";
window.onload = () => {
  /* ************** Acceso a un formulario. ************** */

  //Mediante el atributo name.
  var formulario = document.forms.formCliente;
  var correo = formulario.correo;
  console.log(formulario);
  console.log(formulario.nombre);
  console.log(formulario.correo.value);

  //Mediante el atributo id.
  var formuId = document.getElementById("frmClnt");
  var correoId = document.getElementById("email");

  /* ************** Elementos de un formulario. ************** */

  // Radio (única selección).
  var radioButton = document.getElementById("radioBoton");
  radioButton.addEventListener(
    "change",
    (e) => {
      let radio = document.getElementsByName("pregunta");
      for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked === true)
          console.log(`Valor del elemento marcado ${radio[i].value}`);
      }
    },
    false
  );

  // CheckBox (múltiple selección).
  var checkBox = document.getElementById("cajaBoton");
  checkBox.addEventListener(
    "change",
    (e) => {
      let check = document.getElementsByName("preguntaC");
      var marcados = "";
      for (let i = 0; i < check.length; i++) {
        if (check[i].checked === true) {
          marcados += `${check[i].value} `;
        }
      }
      console.log(`Valores del elemento marcados ${marcados}`);
    },
    false
  );

  // Select (única y múltiple selección).
  // La propiedad selectedIndex contiene la posición del array <options> seleccionada o -1 si no hay seleccionada ninguna.
  var seleccion = document.getElementById("selectAprobar");
  seleccion.addEventListener(
    "change",
    (e) => {
      console.log(
        `El select tiene ${e.target.options.length} opciones disponibles`
      );
      let sel = e.target.selectedIndex;
      // Dentro de cada options, value almacena el valor y text el texto mostrado en pantalla (no tienen que ser iguales).
      console.log(
        `El valor de la opción seleccionada es ${e.target.options[sel].value} y el texto asociado es ${e.target.options[sel].text}`
      );
      //e.target.selectedIndex = 0; // Se cambia el índice seleccionado.
    },
    false
  );

  // ************** Validar un formulario con onSubmit. ************** */

  // <form onSubmit="return validarFormulario();" action='web_procesa_datos.php'> -> Evitar a toda costa.

  var boton = document.getElementById("aceptar");
  boton.addEventListener(
    "click",
    () => {
      validarFormulario();
    },
    false
  );
}; //fin windows.onload.
