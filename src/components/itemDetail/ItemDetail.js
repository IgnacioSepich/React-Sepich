import React from "react";
import ItemCount from "../ItemCount";

export const ItemDetail = ({ data }) => {
  const agregarAlCarrito = () => {};

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
      <ItemCount stock={data.stock} initial={1} onAdd={agregarAlCarrito} />
    </div>
  );
};

export default ItemDetail;
