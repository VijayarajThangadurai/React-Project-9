
import { useContext } from "react";
import ModalCart from "./ModalCart";
import { Button, CardImg, Container, Card} from "react-bootstrap";
import CartContext from "../store/cart-context";


    
    
const Cart =(props)=> {
    const cartCtx=useContext(CartContext)
    const totalAmount= `${cartCtx.totalAmount}`
    const cartElements = [

        {
        
        title: "Colors",
        
        price: 100,
        
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        
      amount: 2,
        
        },
        
        {
        
        title: "Black and white Colors",
        
        price: 50,
        
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        
       amount: 3,
        
        },
        
        {
        
        title: "Yellow and Black Colors",
        
        price: 70,
        
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        
        amount: 1,
        
        }
        
        ]
        const cartList = cartCtx.products.map((product)=>(
<Card>
        
    <CardImg 
    top width='10%' 
    height='50' 
    src= "https://prasadyash2411.github.io/ecom-website/img/Album%203.png"/>
<Card.Body>
    {product.imageUrl} {product.title} {product.price } {product.amount}
</Card.Body>

</Card>
        ));


return (
<ModalCart>
<h2 style={{textAlign:"center"}}>Cart</h2>
<header bg='dark' variant='dark' expand='sm'>
    <Container>
        <Button variant='link'>Item</Button>
        <Button variant='link'>Price</Button>
        <Button variant='link'>Amount</Button>
    </Container>
</header>
<div>
    {cartList}
</div>
    <h2 style={{marginLeft: 350 , marginTop: 50}}>{totalAmount}</h2>
    <input class="btn btn-primary" type="button"  value="Close"  onClick={props.onClose}/>
    <input class="btn btn-primary" type="button"  value="Purchase" />

    </ModalCart>
);
};

export default Cart;