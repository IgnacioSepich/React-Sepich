import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/itemDetail/ItemDetail";
import { SpinnerInfinity } from "spinners-react";
import { products } from "../../assets/Productos";
import { customFetch } from "../../utils/customFetch";
import { useParams } from "react-router-dom";

import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const filtrarProducto = (productos, id) => {
    return productos.filter((product) => product.id == id).pop();
  };


  useEffect(() => {
    setLoading(true);
    customFetch(products)
      .then((res) => {
        res = filtrarProducto(res, id);
        setData(res);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="ItemDetailContainer">
      {loading ? (
        <SpinnerInfinity
          size={90}
          thickness={140}
          speed={100}
          color="rgba(27, 188, 155, 1)"
          secondaryColor="rgba(0, 0, 0, 0.44)"
        />
      ) : (
        <ItemDetail data={data} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
