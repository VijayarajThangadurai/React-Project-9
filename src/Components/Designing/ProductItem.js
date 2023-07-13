import { useContext } from "react";
import ProductForm from "./ProductForm";
import CartContext from "../store/cart-context";
import {Card} from "react-bootstrap";
const ProductItem =(props)=>{
const cartCtx = useContext(CartContext);
const addToCartHandler= amount =>{
    cartCtx.addProduct({
        product: props.product,
        amount:amount,
        price: props.price,
        imageUrl:props.imageUrl
    });
};
return(
    <>
    <Card>
        <div>
            <img src={props.imageUrl}/>
            <h3>{props.product}</h3>
            <div>{props.amount}</div>
            <div>{props.price}</div>
        </div>
        <div>
            <ProductForm onAddToCart={addToCartHandler}/>
        </div>
    </Card>
    </>
)
};

export default ProductItem;