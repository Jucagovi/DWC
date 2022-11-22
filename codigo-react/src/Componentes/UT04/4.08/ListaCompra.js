import React, { useState } from "react";
import { generarUUID } from "./biblioteca.js";

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

  return (
    <React.Fragment>
      <form>
        {/* En un caso real, el id nunca se debe en manos del usuario. Recordad que es idiota. */}
        <p>
          <label htmlFor="id" readOnly>
            Id:
          </label>
          <input
            id="id"
            name="id"
            type="text"
            placeholder="Id del producto."
            value={producto.id}
            onChage={actualizarProducto}
          />
        </p>
        <p>
          <label htmlFor="nombre">Nombre del producto:</label>
          <input
            id="nombre"
            name="nombre"
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
            type="text"
            placeholder="Unidades del producto."
            value={producto.unidades}
            onChange={actualizarProducto}
          />
        </p>
      </form>
      <div id="listado">Listado de la compra.</div>
      {/* Imprimir el estado con formato JSON (Objeto) para comprobar. */}
      <div className="estado">
        <p>Valor del estado actual.</p>
        <pre>{JSON.stringify(producto, null, 3)}</pre>
      </div>
    </React.Fragment>
  );
}

export default ListaCompra;
