import React, { useState, useEffect } from "react";
import { obtenerDatos } from "./Bibliotecas/getDatos.js";
import "./Planetas.css";
import Planeta from "./Planeta.js";
import ListadoPlanetas from "./ListadoPlanetas.js";

function Planetas() {
  const url = "http://swapi.py4e.com/api/planets";
  const valoresIniciales = [];
  const planetaInicial = {};
  const [planetas, setPlanetas] = useState(valoresIniciales);
  const [planeta, setPlaneta] = useState(planetaInicial);

  const getPlanetas = async (origen) => {
    // Se obtienen los datos desde el exterior (función asíncrona).
    let datos = await obtenerDatos(origen);
    // Control de errores.
    if (!datos.message) {
      // Si todo va bien, actualizo el estado.
      setPlanetas(datos.results);
    }
  };

  const getDatosPlaneta = async (origen) => {
    let datos = await obtenerDatos(origen);
    if (!datos.message) {
      setPlaneta(datos);
    }
  };

  useEffect(() => {
    // Cargo los datos al montar el componente.
    // Hay una dependencia vacía por lo que sólo se carga una vez.
    getPlanetas(url);
  }, []);

  return (
    <React.Fragment>
      <div className="App-header caja">
        <div id="listadoPLanetas">
          <h2>Planetas</h2>
          <ul>
            {planetas.length !== 0
              ? planetas.map((v, i, a) => {
                  return (
                    <li
                      key={i}
                      className="planeta"
                      onClick={() => {
                        getDatosPlaneta(v.url);
                      }}
                    >
                      {v.name}
                    </li>
                  );
                })
              : "No se han detectado planetas en este sistema."}
          </ul>
        </div>
        <div id="datos">
          {Object.keys(planeta).length !== 0 ? (
            <React.Fragment>
              <h2>{planeta.name}</h2>
              <p>
                El período orbital de {planeta.name} es de{" "}
                {planeta.rotation_period} días. Posee un clima {planeta.climate}{" "}
                y una población de {planeta.population} habitantes
              </p>
              <p>
                Su gravedad es de {planeta.gravity} y es del tipo{" "}
                {planeta.terrain}.
              </p>
            </React.Fragment>
          ) : (
            "No se ha seleccionado un planeta de la lista."
          )}
        </div>
      </div>
    </React.Fragment>
  );

  /* return (
    <React.Fragment>
      <div className="App-header caja">
        <div id="listadoPLanetas">
          <ListadoPlanetas datos={planetas} funcion={getDatosPlaneta} />
        </div>
        <div id="datos">
          {Object.keys(planeta).length !== 0 ? (
            <Planeta datos={planeta} />
          ) : (
            "No se ha seleccionado un planeta de la lista."
          )}
        </div>
      </div>
    </React.Fragment>
  ); */
}

export default Planetas;
