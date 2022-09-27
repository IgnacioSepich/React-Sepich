import React from "react";
import "./ItemListContainer.css";
import ItemList from "../../components/ItemList";
import { products } from "../../assets/Productos";
import { customFetch } from "../../utils/customFetch";
import { useState, useEffect } from "react";
import { SpinnerInfinity } from "spinners-react";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  const filtrarProductos = (productos, categoria) => {
    return productos.filter((product) => product.risk === categoria);
  };

  useEffect(() => {
    setLoading(true);
    customFetch(products)
      .then((res) => {
        if (categoriaId) res = filtrarProductos(res, categoriaId);
        setListProducts(res);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [categoriaId]);

  return (
    <div className="ItemListContainer">
      <header className="ItemListContainer__header">
        <h2 className="ItemListContainer__title">{greeting}</h2>
      </header>
      <div className="ItemListContainer__items">
        {loading ? (
        <SpinnerInfinity
          size={90}
          thickness={140}
          speed={100}
          color="rgba(27, 188, 155, 1)"
          secondaryColor="rgba(0, 0, 0, 0.44)"
        />
      ) : (
        <ItemList listProducts={listProducts} />
      )}
      </div>
      
    </div>
  );
};

export default ItemListContainer;
