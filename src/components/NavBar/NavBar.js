import React from "react";
import logo from "../../assets/logo.jpg";
import CartWidget from "../navBar/cartWidget/CartWidget";
import "./NavBar.css";
import { Categorias } from "./sectores/Categorias";
import { Link } from "react-router-dom";

const NavBar = () => {
  const categorias = [
    { id: 0, nombre: "Incendio", route: "/categoria/incendio" },
    { id: 1, nombre: "COVID-19", route: "/categoria/covid19" },
  ]

  return (
    <nav className="NavBar__container">
      <Link to="/">
        <img src={logo} alt="logo" className="NavBar__img" />
      </Link>
      <Categorias categorias={categorias} />
      <Link to="/carrito" >
        <CartWidget />
      </Link>
    </nav>
  );
};

export default NavBar;
