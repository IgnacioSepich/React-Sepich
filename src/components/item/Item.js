import React from "react";
import { Link } from "react-router-dom";

import "./item.css";

const Item = ({ product }) => {

  return (
    <div className="Item">
      <h3> {product.title}</h3>
      <img src={product.pictureUrl} width="200px" className="Item__img" />
      <h4> $ {product.price}</h4>
      <Link to={`/detalle/${product.id}`}>
        <button> Ver Descripcion </button>
      </Link>
    </div>
  );
};

export default Item;
