const mostrar = (cosas, donde) => {
  let cadena = "";
  cosas.length
    ? cosas.map((valor, indince, array) => {
        cadena += `<p>El planeta ${valor.name} tiene un periodo orbital de ${valor.orbital_period} días terrestres.</p>`;
      })
    : (cadena = "No se han encontrado planetas en esta galaxia.");
  donde.innerHTML = cadena;
};

export { mostrar };
