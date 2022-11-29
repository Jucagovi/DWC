import React, { useState, useEffect } from "react";
import "./Colores.css";

function Coloricos() {
  const colorInicial = "black";
  const [color, setColor] = useState(colorInicial);

  const cambiarColor = (evento) => {
    if (evento.clientX < window.innerWidth / 2) {
      setColor("red");
    } else {
      setColor("grey");
    }
  };

  useEffect(() => {
    // Se ejecuta al crear el componente.
    // No se vuelve a ejecutar ya que el array está vacío.
    window.addEventListener("mousemove", cambiarColor);

    // Este return se ejecuta al desmontar el componente.
    // Además antes de cada ejecución.
    /*  return () => {
      window.removeEventListener("mousemove", cambiarColor);
    }; */
  }, []);
  return (
    <React.Fragment>
      <div id="colores" className={color}>
        Soy un div que cambia de color.
      </div>
    </React.Fragment>
  );
}

export default Coloricos;
