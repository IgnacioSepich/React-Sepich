import React from "react";
import "./ItemListContainer.css";
import ItemList from "../../components/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { SpinnerDotted } from "spinners-react";
import { customFetch } from "../../utils/customFetch";


const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "products");
    customFetch(data)
    .then ((res) => {
      if (categoriaId) {
        const queryFilter = query(
          queryCollection,
          where("risk", "==", categoriaId)
        );
        getDocs(queryFilter).then((res) =>
          setData(
            res.docs.map((product) => ({ id: product.id, ...product.data() }))
          )
        );
      } else {
        getDocs(queryCollection).then((res) =>
          setData(
            res.docs.map((product) => ({ id: product.id, ...product.data() }))
          )
        );
      }
    })
    .finally(() => setLoading(false));
  }, [categoriaId]);

  return (
    <>
      <div className="ItemListContainer">
        {loading ? (
          <SpinnerDotted size={90} thickness={140} speed={100} color="rgba(27, 188, 155, 1)" />
        ) : (
          <ItemList data={data} />
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
