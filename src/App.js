import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
//import Banner from "./components/Banner";
import Cart from "./components/Cart";
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/cartContext';
import Checkout from './components/Checkout';


function App() {
  return (
  <CartProvider>
    <BrowserRouter>
      <NavBar />
      {/* <Banner /> */}
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/categoria/:id' element={<ItemListContainer />} />
        <Route exact path='/producto/:id' element={<ItemDetailContainer />} />
        <Route exact path='/cart' element={<Cart/>} />
        <Route exact path='/checkout' element={<Checkout/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </CartProvider>
  );
}

export default App;
