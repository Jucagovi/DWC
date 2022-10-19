const addFeo = (d, r) => {
  d.current.innerHTML += r.current.value;
};

const addFeoConEstilo = (d, r) => {
  d.current.innerHTML += `<p>${r.current.value}</p>`;
};

const borrarFeo = (d) => {
  d.current.innerHTML = "";
};

const pintarRojo = (d) => {
  d.current.classList.toggle("rojo");
};

export { addFeo, addFeoConEstilo, borrarFeo, pintarRojo };
