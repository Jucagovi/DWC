import React, { useState } from "react";

function Formulario() {
  // Estados del formulario. Primera forma de hacerlo para formularios sencillos.
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");

  return (
    <React.Fragment>
      <div className="App-header">
        <h1>Formularios controlados con React.</h1>
        <form>
          <label htmlFor="nombre">Nombre:</label>
          <input
            name="nombre"
            className="conEstilo"
            type="text"
            placeholder="Escribe tu nombre."
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
          <br />
          <label htmlFor="apellidos">Apellidos:</label>
          <input
            name="apellidos"
            className="conEstilo"
            type="text"
            placeholder="Escribe tus apellidos."
            value={apellidos}
            onChange={(e) => {
              setApellidos(e.target.value);
            }}
          />
          <br />
          <label htmlFor="modulos">Correo:</label>
          <input
            name="correo"
            className="conEstilo"
            type="text"
            placeholder="Escribe tu correo electrónico."
            value={correo}
            onChange={(e) => {
              setCorreo(e.target.value);
            }}
          />
        </form>
        <div className="estado">
          <p>Valor del estado.</p>
          <p>{`nombre = ${nombre}`}</p>
          <p>{`apellidos = ${apellidos}`}</p>
          <p>{`correo = ${correo}`}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Formulario;
