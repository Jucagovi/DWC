import React from "react";
import "./App.css";
import Discente from "./Componentes/Discente";
import Discentes from "./Componentes/Discentes.js";
// 1 -> Importo el fichero desde un archivo.
import feo from "./Ejercicio2.json";
// -> Otra opción es copiar el código del objeto JSON del fichero Ejericio2.js aquí.

function App() {
  // 2-> Compruebo la estructura de lo que se ha importado para saber cómo tratarlo.
  console.log(feo);
  // --> resulta que es un objeto y dentro de él un JSON (el que necesito).
  // Esto es así ya que el fichero no estaba pensado para ser importado, sino para ser copiado y pegado dentro del componente <App>.
  // Aún así, está bien que queráis experimentar. Bien hecho.
  const objeto = {
    nombre: "Juan",
    apellidos: "Berna Fran",
    curso: "2DAW",
    modulos: "DWC, DWS, DIW",
  };
  return (
    <React.Fragment>
      <Discente nombre="Feo" apellidos="De Verdad" curso="2DAW">
        DWC, DWS, DIW, DAW
      </Discente>
      {/* 3 -> Ahora que ya sé cual es su estructura, lo recorro con map. */}
      {feo.peliculas.map((peli) => {
        return <p key={peli.id}>{peli.nombre}</p>;
      })}
    </React.Fragment>
  );
}

export default App;
