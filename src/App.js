import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Banner from "./components/Banner";
import ItemDetail from './components/ItemDetail';



function App() {
  return (
    <BrowserRouter>
     <NavBar />
     <Banner />
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route exact path='/categoria/:genero' element={<ItemListContainer/>}/>
        <Route exact path='/producto/:id' element={<ItemDetail/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>    
  );
}

export default App;
