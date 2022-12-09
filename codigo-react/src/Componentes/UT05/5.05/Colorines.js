import React, { useEffect } from "react";
import { colorAleatorio } from "../Bibliotecas/dibujado.js";

const Colorines = () => {
  const cambiaColor = (e) => {
    document.body.style.backgroundColor = colorAleatorio();
  };

  useEffect(() => {
    window.addEventListener("click", cambiaColor);
    return () => {
      window.removeEventListener("click", cambiaColor);
    };
  }, []);

  return (
    <React.Fragment>
      <p>Cambio de color.</p>
    </React.Fragment>
  );
};

export default Colorines;
