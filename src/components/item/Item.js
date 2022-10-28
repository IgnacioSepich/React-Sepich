import React from "react";
import { Link } from "react-router-dom";
import { formatNumber } from "../../utils/formatNumber";

import "./item.css";

const Item = ({ info }) => {

  return (
    <div className="Item__container">
      <Link to={`/detalle/${info.id}`}>
        <h3 className="Item__title"> {info.title}</h3>
        <img src={info.pictureUrl} width="300px" height="300px" className="Item__img" />
      </Link>
      <h4 className="Item__price"> $ {formatNumber (info.price)}</h4>
      <Link to={`/detalle/${info.id}`}>
        <button className="Item__button"> VER PRODUCTO </button>
      </Link>
    </div>
  );
};

export default Item;
