import React from "react";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./containers/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/itemDetailContainer/ItemDetailContainer";
import NotFound from "./components/notFound";
import Cart from "./components/navBar/cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";

const App = () => {
  const mensaje = "Bienvenido a MGN Consultores";

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={mensaje} />}
            />
            <Route
              path="/categoria/:categoriaId"
              element={<ItemListContainer greeting={mensaje} />}
            />
            <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
            <Route path="/carrito/" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
