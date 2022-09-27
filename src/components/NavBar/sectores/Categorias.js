import React from "react";
import { NavLink } from "react-router-dom";

import "./categorias.css";

export const Categorias = ({ categorias }) => {
  return (
    <nav className="Categorias">
      {categorias.map((categoria) => {
        return (
          <NavLink key={categoria.id} to={categoria.route}>
            {categoria.nombre}
          </NavLink>
        )
      })}
    </nav>
  );
};
