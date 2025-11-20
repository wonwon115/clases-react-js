import './App.css'
import Hamburgesas from './hamburgesas'
import Header from './component/header/header'
import ProductsGrid from './component/producto/ProductsGrid';
import Props from '../clase 4/props'
import Estados from "../clase 4/estados"

function App() {

  return(
    <>
      <Header/>   
      <Hamburgesas/>
      <ProductsGrid/>
      <Props academia={"Cooderhouser"} curso={"React JS"} duracion={"2 Años 6 meses"} />
      <Estados/>  
    </>
  ) 
}

export default App
