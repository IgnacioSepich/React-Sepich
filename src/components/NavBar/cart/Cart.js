import React from "react";
import { useCartContext } from "../../../context/CartContext";

const Cart = ({ carro }) => {
    const cart= useCartContext()
    return (
        <>
            <div> Cart </div>
        </>
    )
}

export default Cart;