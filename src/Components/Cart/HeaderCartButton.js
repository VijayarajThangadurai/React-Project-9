import { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../store/cart-context";

const HeaderCartButton=(props)=>{
    const cartCtx=useContext(CartContext)
    const numberofCartItems = cartCtx.products.reduce((currNum, product)=>{
        return currNum + product.amount
    }, 0)
return(
    <>
    <Button variant="outline-danger" onClick={props.onClick}>Cart
    <span className="badge">{numberofCartItems}</span>
    </Button>
    </>
);
};

export default HeaderCartButton;