import React, { useState } from "react";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { formatNumber } from "../../utils/formatNumber";

import "./ItemDetail.css";

export const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addItem } = useCartContext ();

  const agregarAlCarrito = (quantity) => {
    setGoToCart (true);
    addItem (data, quantity);
  };

  const separarDescripcionPorParrafo = (description) => {
    return description?.split('#')
  }
  
  const description = separarDescripcionPorParrafo(data.description)
  
  return (
    <div className="ItemDetail__container">
        <img className="ItemDetail__image" src={data.pictureUrl} alt="" />
        <h1 className="ItemDetail__title"> {data.title} </h1>
        <span>
          <h2 className="ItemDetail__price"> $ {formatNumber (data.price)} </h2>
          <h3 className= "ItemDetail__stock"> STOCK DISPONIBLE: {data.stock} Unidad/es</h3>
        </span>
      <div className="ItemDetail__botton">
        {goToCart ? (
          <Link to="/carrito"> <button className="ItemDetail__finalizar"> Finalizar compra </button> </Link>
        ) : (
          <ItemCount stock={data.stock} initial={1} onAdd={agregarAlCarrito} />
        )}
      </div>
      <div className="ItemDetail__description">
        {description?.length && description.map(parrafo => <p>{parrafo.trim()}</p>)}
      </div>
    </div>
  );
};

export default ItemDetail;
