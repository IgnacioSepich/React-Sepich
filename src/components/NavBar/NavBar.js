import logo from "../../assets/logo.jpg";
import CartWidget from '../navBar/cartWidget/CartWidget';
import "./NavBar.css";
import { Categorias } from "./sectores/Categorias";

const NavBar = () => {

    const categorias = [
        { id: 0, nombre: 'Higiene y Seguridad' },
        { id: 1, nombre: 'Medio Ambiente' },
        { id: 2, nombre: 'Productos' },
    ]

    return (
        <navbar>
            <img src= {logo} alt= "logo" />
            <h1> MGN Consultores </h1>
            <Categorias categorias={categorias} />
            <CartWidget/>
        </navbar>
    )
}

export default NavBar