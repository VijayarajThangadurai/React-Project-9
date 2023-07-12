
import './App.css';

import { Button, Container} from "react-bootstrap";
import React from 'react';
import './App.css';
import Products from "./Components/Designing/Products";
import Navbar from 'react-bootstrap/Navbar';

const App=()=> {
  return (
  <>
  <Navbar bg="dark" variant="dark" expand ="sm">
  <Container>
  <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
   <Button variant="link">Home</Button>
   <Button variant="link">Store</Button>
   <Button variant="link">About</Button>
   <Button>Cart</Button>
   </Container>
   </Navbar>
   <Products/>
   </>
  
  );
};

export default App;

