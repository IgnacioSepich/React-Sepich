import { Card, Container } from "@mui/material";

const Item = ({ product }) => {
  return (
    <>
        <h3> {product.title}</h3>
        <img src = {product.pictureUrl} width= "200px"/>
        <h4> $ {product.price}</h4>
        <button> Ver Descripcion </button>
    </>
  );
};

export default Item;
