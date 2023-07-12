import { Button } from "react-bootstrap";

const HeaderCartButton=(props)=>{
return(
    <>
    <Button variant="outline-danger" onClick={props.onClick}>cart</Button>
    </>
);
};

export default HeaderCartButton;