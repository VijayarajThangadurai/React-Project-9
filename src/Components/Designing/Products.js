import {Row,Col, Card, Container, CardImg, Button } from "react-bootstrap"
const productsArr = [

    {

    title: 'Colors',

    price: 100,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

    },

    {

    title: 'Black and white Colors',

    price: 50,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    },

    {

    title: 'Yellow and Black Colors',

    price: 70,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

    },

    {

    title: 'Blue Color',

    price: 100,

    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

    }

    ]

const Products =()=>{
    const productsList=productsArr.map((product)=>(
        <Container>
    <Row className="mt-4">
        <Col xs={3}>
        <Card >
            <CardImg top width="100%" src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"></CardImg>
            <Card.Body className="mr-50">
                {product.title}
                {product.price}
                <Button className="sm-19">AddCart</Button>
            </Card.Body>
        </Card>
        </Col>
    </Row>
    </Container>
    ))
return (
    <>
    {productsList}
    </>
)
}
export default Products;