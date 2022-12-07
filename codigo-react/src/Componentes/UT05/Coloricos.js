import React, { useState, useEffect } from "react";
import "./Colores.css";

function Coloricos() {
  const colorInicial = "blue";
  const [color, setColor] = useState(colorInicial);

  const cambiarColor = (evento) => {
    if (evento.clientX < window.innerWidth / 2) {
      setColor("red");
    } else {
      setColor("grey");
    }
    console.log(
      `He ejecutado el evento de window en la coordenada ${evento.clientX}.`
    );
  };

  useEffect(() => {
    // Se ejecuta al crear el componente.
    // No se vuelve a ejecutar ya que el array está vacío.
    window.addEventListener("click", cambiarColor);

    // Este return se ejecuta al desmontar el componente.
    // Además antes de cada ejecución.
    return () => {
      window.removeEventListener("click", cambiarColor);
      console.log(`He quitado el evento del window.`);
    };
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
