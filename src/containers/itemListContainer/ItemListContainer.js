import React from "react";
import "./ItemListContainer.css";
import ItemList from "../../components/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "products");
    if (categoriaId) {
      const queryFilter = query (
        queryCollection,
        where ("risk", "==", categoriaId),
      );
			getDocs(queryFilter).then((res) =>
				setData(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
    } else {
    getDocs(queryCollection).then((res) =>
      setData(
        res.docs.map((product) => ({ id: product.id, ...product.data() })),
      ),
    );
    }
  }, [categoriaId]);

  return (
    <>
      <div className="ItemListContainer">
        <header className="ItemListContainer__header">
          <h2 className="ItemListContainer__title">{greeting}</h2>
        </header>
        <ItemList data={data} />
      </div>
    </>
  );
};

export default ItemListContainer;
