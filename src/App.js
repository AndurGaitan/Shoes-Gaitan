import './App.css';
import Main from './components/Main';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/ItemDetailContainer" element={<ItemDetailContainer/>}/>
        <Route exact path='/categoria/:genero' element={<ItemListContainer/>}/>
        <Route exact path='/producto/:id' element={<ItemDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
