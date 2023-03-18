import './App.css';
import { Route,Routes } from 'react-router-dom';
import Main from './components/Main';
import Products from './components/Products';
import Item from './components/Item';
import Cart from './components/Cart';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'  element={<Main/>} />
        <Route path='/products' element={<Products/>}/>
        <Route path='/item/:name'element={<Item/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
