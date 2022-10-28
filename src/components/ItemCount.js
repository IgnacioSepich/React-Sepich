import React, { useState } from "react";

import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > initial) {
      setContador(contador - 1);
    }
  };

  const agregarAlCarrito = () => {
    onAdd(contador);
  };

  return (
    <>
      <div className="ItemCount__count">
        <h1 className="ItemCount__h1"> CANTIDAD: </h1>
        <h2 className="ItemCount__h2"> {contador} Unidad/es </h2>
      </div>
      <div className="ItemCount__botton">
        <button className="ItemCount__sumar" onClick={sumar}> + </button>
        <button className="ItemCount__restar" onClick={restar}> - </button>
      </div>
      <button className="ItemCount__agregar" onClick={agregarAlCarrito}> Agregar al Carrito </button>
    </>
  );
};

export default ItemCount;
