import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemCount from './components/ItemCount';


function App() {
  return (
    <div className='app'>
      <NavBar/>
      <Banner/>
      <ItemListContainer />
      <ItemDetailContainer/>
      <ItemCount stock={5} initial={1} onAdd={0}/>  
      <Footer/>
    </div>
  );
}

export default App;
