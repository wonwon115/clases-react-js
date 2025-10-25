import './App.css'
import Hamburgesas from './hamburgesas'
import Header from './component/header/header'
import ProductsGrid from './component/producto/ProductsGrid';
import Props from '../clase 4/props'

function App() {

  return(
    <>
      <Header/>   
      <Hamburgesas/>
      <ProductsGrid/>
      <Props academia={"Cooderhouser"} curso={"React JS"} duracion={12} />
    </>
  ) 
}

export default App
