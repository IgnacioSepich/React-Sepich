import React from "react";
import "./ItemListContainer.css";
import ItemList from "../../components/ItemList";
import { products } from "../../assets/Productos";
import { customFetch } from "../../utils/customFetch";
import { useState, useEffect } from "react";
import { SpinnerInfinity } from 'spinners-react';

const ItemListContainer = ({ greeting }) => {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState (true)

  useEffect(() => {
    customFetch(products)
    .then((res) => {
        setLoading (false)
        setListProducts(res)
    })
  }, []);

  return (
    <>
      <header className="ItemListContainer__header">
        <h2 className="ItemListContainer__title">{greeting}</h2>
      </header>
      {
        loading ?
            <SpinnerInfinity size={90} thickness={140} speed={100} color="rgba(27, 188, 155, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" />
        :
            <ItemList listProducts={listProducts}/>
      }
    </>
  );
};

export default ItemListContainer;


