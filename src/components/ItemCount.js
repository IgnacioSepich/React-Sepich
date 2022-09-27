import React, { useState } from "react";

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
      <h1> {contador} </h1>
      <button onClick={sumar}> + </button>
      <button onClick={restar}> - </button>
      <button onClick={agregarAlCarrito}> Agregar al Carrito </button>
    </>
  );
};

export default ItemCount;
