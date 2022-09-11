import './App.css';
import Main from './components/Main';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/ItemDetailContainer" element={<ItemDetailContainer/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
