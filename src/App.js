import './App.css';
import Header from './asset/header';
import Banner from './asset/Banner';
import Products from './asset/Products';
import Footer from './asset/Footer';
import Item from './asset/Item';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Products nombre = "Zapatillas Adidas SSstar" precio = "23000" imagen = "https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw1e1cd6b9/products/AD_EG4958/AD_EG4958-1.JPG?sw=400&sh=400"/>
      <Item greeting = "Este es el lugar donde vamos a mostrar los productos"/>
      <Footer/>
    </div>
  );
}

export default App;
