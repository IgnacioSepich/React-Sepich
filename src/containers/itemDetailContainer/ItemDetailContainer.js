import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { SpinnerDotted } from "spinners-react";
import { customFetch } from "../../utils/customFetch";

import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { detalleId } = useParams();

  useEffect(() => {
    setLoading(true);
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "products", detalleId);
    customFetch(data)
    getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }))
    .finally(() => setLoading(false));
  }, [detalleId]);

  return (
    <>
      <div className="ItemDetailContainer">
        {loading ? (
          <SpinnerDotted size={90} thickness={140} speed={100} color="rgba(27, 188, 155, 1)" />
        ) : (
          <ItemDetail data={data} />
        )}
      </div>
    </>
  );
};

export default ItemDetailContainer;
