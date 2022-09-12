import React from "react";
import "./ItemListContainer.css";
import "../../components/ItemCount";

const ItemListContainer = ({ greeting }) => {
  return (
    <header className="ItemListContainer__header">
      <h2 className="ItemListContainer__title">{greeting}</h2>
    </header>
  );
};

export default ItemListContainer;
