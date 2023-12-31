
import './App.css';

import { Button, Container} from "react-bootstrap";
import {React, useState} from 'react';
import './App.css';
import Products from "./Components/Designing/Products";
import Navbar from 'react-bootstrap/Navbar';
import Cart from './Components/Cart/Cart';
import HeaderCartButton from './Components/Cart/HeaderCartButton';
import CartProvider from './Components/store/CartProvider';

const App=()=> {
  const [showCart, setshowCart] = useState(false);
  const showCarthandler=()=>{
    setshowCart(true);
  }
  const hideCartHandler = ()=>{
    setshowCart(false);
  }
  return (
  <CartProvider>
  <Navbar bg="dark" variant="dark" expand ="sm">
  <Container>
  
  <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
   <Button variant="link">Home</Button>
   <Button variant="link" className='ms-1'>Store</Button>
   <Button variant="link">About</Button>
   <HeaderCartButton onClick={showCarthandler}></HeaderCartButton>
   </Container>
   </Navbar>
   {showCart &&  <Cart onClose={hideCartHandler}/>}
   <Products/>
   </CartProvider>
  
  );
};

export default App;

