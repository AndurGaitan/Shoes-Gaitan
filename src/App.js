import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Banner from "./components/Banner";
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  return (
    <BrowserRouter>
     <NavBar />
     <Banner />
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route exact path='/categoria/:genero' element={<ItemListContainer/>}/>
        <Route exact path="/producto/:id" element={<ItemDetailContainer/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>    
  );
}

export default App;
