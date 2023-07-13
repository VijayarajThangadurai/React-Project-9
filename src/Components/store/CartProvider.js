import { useReducer} from "react";
import CartContext from "./cart-context";


const defaultCartState={
    products:[],
    totalAmount:0
}
const CartReducer =(state,action)=>{
    if(action.type==='Add'){
        const updatedproducts=state.products.concat(action.product)
        const updatedTotalAmount= state.totalAmount+action.product.price
        return {
            products:updatedproducts,
            totalAmount:updatedTotalAmount
        }
    }
}
const CartProvider =(props)=>{
const [cartState,dispatchCartAction]= useReducer(CartReducer,defaultCartState)
const addProductToCartHandler =(product)=>{
    dispatchCartAction({type:'Add', product:product})
}
const removeProductFromCartHandler=(id)=>{
    dispatchCartAction({type:'remove',id:id})
}
const cartContext={
    products:cartState.products,
    totalAmount: cartState.totalAmount,
    addProduct: addProductToCartHandler,
    removeProduct: removeProductFromCartHandler
}
return(
    <CartContext.Provider value={cartContext}>
{props.children}
    </CartContext.Provider>
)
};

export default CartProvider;