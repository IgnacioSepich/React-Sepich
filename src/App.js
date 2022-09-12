import React from "react";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./containers/itemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount";

const App = () => {
  const mensaje = "Bienvenido a MGN Consultores";

  const agregarAlCarrito = (count) => {
    console.log("Compra Exitosa");
  };

  agregarAlCarrito();

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={mensaje} />
      <ItemCount stock={3} initial={1} onAdd={agregarAlCarrito} />
    </>
  );
};

export default App;
