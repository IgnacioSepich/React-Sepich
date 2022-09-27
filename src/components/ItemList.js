import Item from "./item/Item";
import { products } from "../assets/Productos";

const ItemList = ({ listProducts }) => {
  return (
    <>
      {listProducts.map((prod, i) =>
        <Item key={`${prod.title} - ${i}`} product = {prod}/>
      )}
    </>
  );
};

export default ItemList;
