import React, { useEffect, useState } from "react";
import { colorAleatorio } from "../Bibliotecas/dibujado.js";

const ColorinesMal = () => {
  const valorInicial = "#999";
  const [color, setColor] = useState(valorInicial);
  // Función para el evento click.
  const cambiaColor = (e) => {
    setColor(colorAleatorio());
    document.body.style.backgroundColor = color;
  };

  useEffect(() => {
    window.addEventListener("click", cambiaColor);
    return () => {
      window.removeEventListener("click", cambiaColor);
    };
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <React.Fragment>
      <p>Cambio de color = {color}.</p>
    </React.Fragment>
  );
};

export default ColorinesMal;
