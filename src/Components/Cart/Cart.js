
import ModalCart from "./ModalCart";
import { Button, CardImg, Container, Card, Navbar} from "react-bootstrap";


    
    
const Cart =(props)=> {
    const cartElements = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 2,
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 3,
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        }
        
        ]
        const cartList = cartElements.map((product)=>(
<Card>
        
    <CardImg top width='10%' height='50' src='https://prasadyash2411.github.io/ecom-website/img/Album%203.png'/>
<Card.Body>
    {product.title} {product.price} {product.quantity }
</Card.Body>

</Card>
        ))


return (
<ModalCart>
<h2 style={{textAlign:"center"}}>Cart</h2>
<header bg='dark' variant='dark' expand='sm'>
    <Container>
        <Button variant='link'>Item</Button>
        <Button variant='link'>Price</Button>
        <Button variant='link'>Quantity</Button>
    </Container>
</header>
<div>
    {cartList}
</div>
    <h2 style={{margin:350 , marginTop:50}}>TotalAmount:$35</h2>
    <input class="btn btn-primary" type="button" value="Close" onClick={props.onClose}/>
    <input class="btn btn-primary" type="button" value="Purchase" />

    </ModalCart>
)
};

export default Cart;