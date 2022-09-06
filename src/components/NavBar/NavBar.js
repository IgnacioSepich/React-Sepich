import logo from "../../assets/logo.jpg";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./NavBar.css"


const NavBar = () => {
    return (
        <navbar>
            <img src= {logo} alt= "logo" />
            <h1> MGN Consultores </h1>
            <nav>
                <a href= "" > Higiene y Seguridad </a>
                <a href= "" > Medio Ambiente </a>
                <a href= "" > Productos </a>
            </nav>
            <ShoppingCartIcon sx={{ fontSize: 60 }}/>
        </navbar>
    )
}

export default NavBar