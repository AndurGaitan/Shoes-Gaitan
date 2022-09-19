import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Banner from "./components/Banner";
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/cartContext';


function App() {
  return (
  <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Banner />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path='/categoria/:genero' element={<ItemListContainer />} />
        <Route exact path="/producto/:id" element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </CartProvider>
  );
}

export default App;
