import React from "react";
import logo from "../../assets/logo.jpg";
import CartWidget from "../navBar/cartWidget/CartWidget";
import "./NavBar.css";
import { Categorias } from "./sectores/Categorias";

const NavBar = () => {
  const categorias = [
    { id: 0, nombre: "Incendio" },
    { id: 1, nombre: "COVID-19" },
  ];

  return (
    <nav className="NavBar__container">
      <img src={logo} alt="logo" className="NavBar__img" />
      <h1 className="NavBar__title"> MGN Consultores </h1>
      <Categorias categorias={categorias} className="NavBar__categorias" />
      <CartWidget />
    </nav>
  );
};

export default NavBar;
