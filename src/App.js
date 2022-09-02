import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Products from './components/Products';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
// import SuperForm from './asset/SuperForm';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer color="red" greeting = "Este es el lugar donde vamos a mostrar los productos con stylo"/>
      <Banner/>
      <Products nombre = "Zapatillas Adidas SSstar" precio = "23000" imagen = "https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw1e1cd6b9/products/AD_EG4958/AD_EG4958-1.JPG?sw=400&sh=400"/>
      <Footer/>
      {/* <SuperForm><SuperButton/><SuperForm/> */}
    </div>
  );
}

export default App;
