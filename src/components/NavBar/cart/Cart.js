import React from "react";
import { useCartContext } from "../../../context/CartContext";

const Cart = ({ carro }) => {
    const cart= useCartContext()
    console.log("estoy en el carrito", cart)
    return (
        <>
            <div> Cart </div>
        </>
    )
}

export default Cart;