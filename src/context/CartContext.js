import React, { useState, useContext } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) => {
          return product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const clear = () => setCart([]);

  const isInCart = (id) => cart.find((product) => product.id === id);

  const removeItem = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, clear, isInCart, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
