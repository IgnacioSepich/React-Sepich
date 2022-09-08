import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./containers/itemListContainer/ItemListContainer";

const App = () => {

  const mensaje = "Bienvenido a MGN Consultores";

  return (
    <>
      < NavBar />
      < ItemListContainer greeting={mensaje}/>
    </>
  )
}

export default App
