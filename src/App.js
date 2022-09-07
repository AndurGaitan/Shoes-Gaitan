import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <ItemListContainer />
      <ItemCount stock={5} initial={1} onAdd={0}/>
      <Footer/>
    </div>
  );
}

export default App;
