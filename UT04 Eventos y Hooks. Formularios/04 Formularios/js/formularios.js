"use strict";
import { validarFormulario } from "./biblioteca.js";
window.onload = () => {
  /* ************** Acceso a un formulario. ************** */

  //Mediante el atributo name.
  let formulario = document.forms.formCliente;

  console.log(formulario);
  console.log(formulario.nombre);
  console.log(formulario.correo.value);

  //Mediante el atributo id.
  let formuId = document.getElementById("frmClnt");
  let correoId = document.getElementById("email");

  /* ************** Elementos de un formulario. ************** */

  // Text (se accede a su valor a través del ctributo value).
  /**
   *  Hay varios tipos, entre ellos:
   *    type="search"   -> para búsquedas
   *    type="url"      -> para direcciones de internet
   *    type="email"    -> para correos electrçonicos
   *    type="password" -> para contraseñas
   *    type="hidden"   -> oculto al usuario (no al programador)
   *
   *  Si es necesario un texto multilínea o largo se utiliza <textarea>.
   *   */

  // Radio (única selección).
  let radioButton = document.getElementById("radioBoton");
  radioButton.addEventListener(
    "change",
    (evento) => {
      let radio = document.getElementsByName("pregunta");
      for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked === true)
          console.log(`Valor del elemento marcado ${radio[i].value}`);
      }
    },
    false
  );

  // CheckBox (múltiple selección).
  let checkBox = document.getElementById("cajaBoton");
  checkBox.addEventListener(
    "change",
    (evento) => {
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
  let seleccion = document.getElementById("selectAprobar");
  //console.log(seleccion.options);
  seleccion.addEventListener(
    "change",
    (evento) => {
      console.log(
        `El select tiene ${evento.target.options.length} opciones disponibles`
      );
      // Se guarda en la variable "sel" el índice de la opción seleccionada para poder acceder al array de sus valores.
      let sel = evento.target.selectedIndex;
      // Dentro de cada options, value almacena el valor y text el texto mostrado en pantalla (no tienen que ser iguales).
      console.log(
        `El valor de la opción seleccionada es ${evento.target.options[sel].value} y el texto asociado es ${evento.target.options[sel].text}`
      );
      //e.target.selectedIndex = 0; // Se cambia el índice seleccionado.
    },
    false
  );

  // ************** Validar un formulario con onSubmit. ************** */

  // <form onSubmit="return validarFormulario();" action='web_procesa_datos.php'> -> Evitar a toda costa.

  let boton = document.getElementById("aceptar");
  boton.addEventListener(
    "click",
    (evento) => {
      validarFormulario();
    },
    false
  );
}; //fin windows.onload.
