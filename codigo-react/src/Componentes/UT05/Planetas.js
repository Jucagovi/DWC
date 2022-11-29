import React, { useState, useEffect } from "react";
import { obtenerDatos } from "./Bibliotecas/getDatos.js";
import "./Planetas.css";
import Planeta from "./Planeta.js";

function Planetas() {
  const url = "http://swapi.py4e.com/api/planets";
  const valoresIniciales = [];
  const planetaInicial = {};
  const [planetas, setPlanetas] = useState(valoresIniciales);
  const [planeta, setPlaneta] = useState(planetaInicial);

  const getPlanetas = async (origen) => {
    let datos = await obtenerDatos(origen);
    if (!datos.message) {
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
    getPlanetas(url);
  }, []);

  return (
    <React.Fragment>
      <div className="App-header">
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
        <div id="datos">
          {Object.keys(planeta).length !== 0 ? (
            <Planeta datos={planeta} />
          ) : (
            "No se ha seleccionado un planeta de la lista."
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Planetas;
