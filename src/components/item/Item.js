import React from "react";
import { Link } from "react-router-dom";

import "./item.css";

const Item = ({ info }) => {

  return (
    <div className="Item">
      <h3> {info.title}</h3>
      <img src={info.pictureUrl} width="200px" className="Item__img" />
      <h4> $ {info.price}</h4>
      <Link to={`/detalle/${info.id}`}>
        <button> Ver Descripcion </button>
      </Link>
    </div>
  );
};

export default Item;
