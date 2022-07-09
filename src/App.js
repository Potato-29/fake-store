import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductsPage from './Pages/ProductsPage';
import SinglePage from './Pages/SinglePage';
import { CartContext } from './Helper/Context';
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import CartPage from './Pages/CartPage';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';


function App() {

  const [cartItems, setCartItems]  = useState([])

  return (

        <Router>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/products' element={<ProductsPage/>}/>
              <Route path='/singleProduct/:id' element={<SinglePage/>}/>
              <Route path='/cart' element={<CartPage/>}/>
              <Route path='/signup' element={<SignUpPage/>}/>
              {/* <Route path='/login' element={<LoginPage/>}/> */}
          </Routes>
        </Router>
  );
}

export default App;
