import React from "react";
import { useCartContext } from "../../../context/CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  const { totalProducts } = useCartContext();

  return (
    <>
      <ShoppingCartIcon color="action" sx={{ fontSize: 60 }} />
      <span>{totalProducts() || ""}</span>
    </>
  );
};

export default CartWidget;
