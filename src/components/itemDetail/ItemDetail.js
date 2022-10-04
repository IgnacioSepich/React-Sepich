import React, { useState } from "react";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

export const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addItem } = useCartContext ();

  const agregarAlCarrito = (quantity) => {
    setGoToCart (true);
    addItem (data, quantity);
  };

  return (
    <div className="ItemDetail__container">
      <div className="ItemDetail__detail">
        <img className="ItemDetail__image" src={data.pictureUrl} alt="" />
        <div className="ItemDetail__content">
          <h1> {data.title} </h1>
          <h3> {data.description} </h3>
          <h4> $ {data.price} </h4>
        </div>
      </div>
      {goToCart ? (
          <Link to="/carrito"> <button> Terminar mi compra </button> </Link>
      ) : (
        <ItemCount stock={data.stock} initial={1} onAdd={agregarAlCarrito} />
      )}
    </div>
  );
};

export default ItemDetail;
