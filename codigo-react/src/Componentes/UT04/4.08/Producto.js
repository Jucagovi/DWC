import React from "react";

function Producto(props) {
  return (
    <React.Fragment>
      <p id={props.producto.id}>
        {props.producto.nombre} ({props.producto.descripcion}){" a "}
        {props.producto.precio} € x {props.producto.unidades} =
        {props.producto.precio * props.producto.unidades} €
      </p>
    </React.Fragment>
  );
}

export default Producto;
