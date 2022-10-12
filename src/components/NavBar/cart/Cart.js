import React from "react";
import { useCartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";

import "./Cart.css";

const Cart = () => {
  const { cart, totalPrice, clear } = useCartContext();

  const order = {
    buyer: {
      name: "Juan Carlos",
      phone: "54651325",
      email: "juancarlos123@gmail.com",
    },
    items: cart.map((product) => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
    date: serverTimestamp (),
    total: totalPrice (),
  }

  const handleClick = () => {
    const db = getFirestore();
		const ordersCollection = collection(db, "orders");
		addDoc(ordersCollection, order).then(({ id }) => console.log(id));
  };

  return (
    <>
      {cart.length === 0 ? (
        <>
          <h1 className="cartVacio">
            No tenes productos en el carrito. Para comprar ingresa{" "}
            <Link to="/"> aca</Link>
          </h1>
        </>
      ) : (
        <>
          {cart.map((product) => (
            <ItemCart key={product.id} product={product} />
          ))}
          <p>TOTAL: ${totalPrice()}</p>
          <button onClick={handleClick}>Finalizar compra</button>
          <button onClick={clear}>Vaciar carrito</button>
        </>
      )}
    </>
  );
};

const ItemCart = ({ product }) => {
  const { removeItem } = useCartContext();
  return (
    <>
      <div className="itemCart">
        <img src={product.pictureUrl} alt={product.title} />
        <div>
          <p>Título: {product.title}</p>
          <p>Cantidad: {product.quantity}</p>
          <p>Precio u.: ${product.price}</p>
          <p>Subtotal: ${product.quantity * product.price}</p>
          <button onClick={() => removeItem(product.id)}>
            Eliminar Producto
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
