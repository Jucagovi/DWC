"use strict";

const sumar = (numero1, numero2) => {
  return numero1 + numero2;
};

const restar = (numero1, numero2) => {
  return numero1 - numero2;
};

const multiplicar = (numero1, numero2) => {
  return numero1 * numero2;
};

const dividir = (numero1, numero2) => {
  return numero2 ? numero1 / numero2 : "No se puede dividir";
};

export { sumar, restar, multiplicar, multiplicar as multi, dividir };
