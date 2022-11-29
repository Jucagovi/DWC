import React, { useState, useEffect } from "react";
import Coloricos from "./Coloricos.js";

function Colores() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <React.Fragment>
      <div className="App-header">
        <h2>Colores</h2>
        <button
          onClick={() => {
            setMostrar(false);
          }}
        >
          Quitar colores
        </button>
        {mostrar ? <Coloricos /> : null}
      </div>
    </React.Fragment>
  );
}

export default Colores;
