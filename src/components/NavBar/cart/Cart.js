import React from "react";
import { useCartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import { formatNumber } from "../../../utils/formatNumber";

import "./Cart.css";

const Cart = () => {
  const { cart, totalPrice, clear } = useCartContext();

  const order = {
    buyer: {
      name: "Juan Carlos",
      phone: "54651325",
      email: "juancarlos123@gmail.com",
    },
    items: cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    })),
    date: serverTimestamp(),
    total: totalPrice(),
  };

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => console.log(id));
  };

  return (
    <>
      {cart.length === 0 ? (
        <>
          <h1 className="Cart__vacio">
            Tu carrito esta vacio! Para comprar ingresa<Link to="/" className="Cart__link">ACA</Link>
          </h1>
        </>
      ) : (
        <>
          {cart.map((product) => (
            <ItemCart key={product.id} product={product} />
          ))}
          <p className="Cart__total">TOTAL $ {formatNumber(totalPrice())}</p>
          <div className="Cart__botton">
            <button className="Cart__vaciar" onClick={clear}>
              Vaciar carrito
            </button>
            <Link to="/ReactMGN-Sepich/">
              <button className="Cart__finalizar" onClick={()=>{handleClick(); clear()}}> 
                Finalizar compra
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

const ItemCart = ({ product }) => {
  const { removeItem } = useCartContext();
  return (
    <>
      <div className="Cart__item">
        <Link key={product.id} to={`/detalle/${product.id}`}>
          <img src={product.pictureUrl} alt={product.title} />
        </Link>
        <div className="Cart__p">
          <p>TITULO: {product.title}</p>
          <p>CANTIDAD: {formatNumber(product.quantity)}</p>
          <p>PRECIO U.: $ {formatNumber(product.price)}</p>
          <button
            className="Cart__eliminar"
            onClick={() => removeItem(product.id)}
          >
            Eliminar Producto
          </button>
        </div>
        <p className="Cart__subtotal">
          $ {formatNumber(product.quantity * product.price)}
        </p>
      </div>
    </>
  );
};

export default Cart;
