"use strict";

function mostrar(objeto, donde) {
  let cadena = "";
  objeto.map((v, i, a) => {
    cadena += `<p>El planeta ${v.name} tiene un periodo orbital de ${v.orbital_period} días terrestres.</p>`;
  });
  donde.innerHTML = cadena;
}

export { mostrar };
