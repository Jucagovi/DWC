import React, { useState } from "react";
import { generarUUID } from "./biblioteca.js";
import Producto from "./Producto.js";

function ListaCompra() {
  const listaInicial = [];
  const productoInicial = {
    id: generarUUID(),
    nombre: "",
    descripcion: "",
    precio: "",
    unidades: "",
  };

  const [lista, setLista] = useState(listaInicial);
  const [producto, setProducto] = useState(productoInicial);

  const actualizarProducto = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const borrarProducto = (e) => {
    if (e.target.tagName === "P") {
      const filtrados = lista.filter((producto) => {
        return producto.id !== e.target.id;
      });
      setLista(filtrados);
    }
  };

  const borrarLista = () => {
    setLista([]);
  };

  const incluirProducto = () => {
    setLista([...lista, producto]);
    setProducto(productoInicial);
  };

  return (
    <React.Fragment>
      <div className="App-header">
        <h1>Solución (aproximada) ejercicio 4.08</h1>
        <form>
          {/* En un caso real, el id nunca se debe en manos del usuario. Recordad que es idiota. */}
          <p>
            <label htmlFor="id" readOnly>
              Id:
            </label>
            <input
              id="id"
              name="id"
              className="conEstilo"
              type="text"
              placeholder="Id del producto."
              value={producto.id}
              onChange={actualizarProducto}
            />
          </p>
          <p>
            <label htmlFor="nombre">Nombre del producto:</label>
            <input
              id="nombre"
              name="nombre"
              className="conEstilo"
              type="text"
              placeholder="Nombre del producto."
              value={producto.nombre}
              onChange={actualizarProducto}
            />
          </p>
          <p>
            <label htmlFor="descripcion">Descripción:</label>
            <input
              id="descripcion"
              name="descripcion"
              className="conEstilo"
              type="text"
              placeholder="Descripción del producto."
              value={producto.descripcion}
              onChange={actualizarProducto}
            />
          </p>
          <p>
            <label htmlFor="precio">Precio:</label>
            <input
              id="precio"
              name="precio"
              className="conEstilo"
              type="text"
              placeholder="Precio del producto (en euros)."
              value={producto.precio}
              onChange={actualizarProducto}
            />
          </p>
          <p>
            <label htmlFor="unidades">Unidades:</label>
            <input
              id="unidades"
              name="unidades"
              className="conEstilo"
              type="text"
              placeholder="Unidades del producto."
              value={producto.unidades}
              onChange={actualizarProducto}
            />
          </p>
        </form>
        <p>
          <button onClick={incluirProducto}>Añadir producto</button>
          <button onClick={borrarLista}>Borrar lista</button>
        </p>
        <div id="listado" onClick={borrarProducto}>
          <h2>Listado de la compra.</h2>
          {lista.length
            ? lista.map((articulo) => {
                return <Producto key={articulo.id} producto={articulo} />;
              })
            : "No existen artículos en la lista todavía."}
        </div>
        {/* Imprimir el estado con formato JSON (Objeto) para comprobar. */}
        <div className="estado">
          <p>Valor del estado producto.</p>
          <pre>{JSON.stringify(producto, null, 3)}</pre>
        </div>
        <div className="estado">
          <p>Valor del estado lista.</p>
          <pre>{JSON.stringify(lista, null, 3)}</pre>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ListaCompra;
