import React, {useState} from 'react'

function Prueba() {
    const estadoInicial = [];
    const objeto = {nombre: "Feo",apellidos: "De verdad"}
    let [prueba, setPrueba] = useState(estadoInicial);

    const addObjeto = () => {
        setPrueba([...prueba,objeto]);
    };
  return (
    <React.Fragment>
        <button onClick={addObjeto}>Añadir objeto</button>
        {/* Imprimir el estado con formato JSON (Objeto) para comprobar. */}
        <div className="estado">
          <p>Valor del estado actual.</p>
          <pre>{JSON.stringify(prueba, null, 3)}</pre>
        </div>
    </React.Fragment>
  )
}

export default Prueba