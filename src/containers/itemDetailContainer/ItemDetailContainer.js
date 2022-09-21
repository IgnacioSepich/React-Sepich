import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "../../components/itemDetail/ItemDetail";
import { SpinnerInfinity } from 'spinners-react';

const extintor = {
  id: 1001,
  title: "Matafuegos Polvo Quimico (1 kg.)",
  risk: "incendio",
  description:
    "Aísla químicamente los fuegos Clase A, fundiéndose aproximadamente a 177 ºC y cubre la superficie a la que se aplicó, sofoca y rompe la reacción en cadena de los fuegos Clase B y no conduce electricidad hacia el operador.",
  price: 1000,
  pictureUrl:
    "https://www.georgia.com.ar/wp-content/uploads/2016/06/matafuegos_polvo_1kg.jpg",
  stock: 100,
};

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState (true)

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(extintor);
      }, 2000);
    });

    getData.then((res) => {setLoading (false); setData(res)})
  }, []);

  return (
    <>
        {
            loading ?
                <SpinnerInfinity size={90} thickness={140} speed={100} color="rgba(27, 188, 155, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" />
            :
            <ItemDetail data={data} />
        }       
    </>
  );
};

export default ItemDetailContainer;


