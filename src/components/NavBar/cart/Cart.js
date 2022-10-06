import React from "react";
import { useCartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  return (
    <>
      {cart.length === 0 ? (
        <>
          <h1 className="cartVacio">
            No tenes productos en el carrito. Para comprar ingresa <Link to="/"> aca</Link>
          </h1>
        </>
      ) : (
        <>
          {cart.map((product) => (
            <ItemCart key={product.id} product={product} />
          ))}
          <p>TOTAL: ${totalPrice()}</p>
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
