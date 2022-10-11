import Item from "./item/Item";
import { products } from "../assets/Productos";

const ItemList = ({ data = [] }) => {
  return data.map((prod) => <Item key={prod.id} info={prod}/>);
};

export default ItemList;
