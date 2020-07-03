import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'

function Cart(){
    const [cartTotal,setTotal] = useState(0);
    const [cartContents,setCart] = useState(new Map());
    const [totalAmount,setAmount] = useState(0.00);

    const createSubtotal = (price) => {
        var newPrice = totalAmount+price;
        setAmount(Math.round(newPrice));
    };
    /**
     * const updateCart = (item) => {
        let __cart = {...cartContents};
        if (__cart.keys().length === 0 || !(__cart.keys().includes(item))){
            __cart[item] = 1;
        }
        else{
            __cart[item] = __cart[item] + 1;
        }
        setCart(__cart);
    };
     * 
     */
    

    /**let cartItems = cartContents.keys().map( (key,idx,keys) =>{
        return <div style={{backgroundColor:'yellow'}}><p>{key}-{cartContents[key]}</p></div>
    }); **/


    const increaseCart = (item,price) =>{
        setTotal(cartTotal+1);
        
        setCart(<div style={{backgroundColor:'yellow'}}>{cartContents} <p>{item}</p></div>);
    /**
     * Javascript object
     * A key/value pair
     * contains each item and quantites
     * property: name of item, value= quantity
     */
        createSubtotal(price);
    };
    
    const clearCart = () => {
        setTotal(0);
        setCart("");
        alert('cart emptied!');
    };

    
    return (
        <Container>
            <Row>
            <Col sm={8}>
            <h2>Shop!</h2>
              <CardGroup>
              <Card style={{ width: '10rem' }}>
                    <Card.Img variant="top" src={require("/Users/jasmynejeanremy/Desktop/Shopping App/shop-site/src/pics/pink sweater.jpeg")} />
                    <Card.Body>
                        <Card.Title> Pink Sweater</Card.Title>
                        <Card.Text>
                            A soft pink sweater perfect for any occassion
                            
                        </Card.Text>
                        <Button variant="primary" onClick={() => increaseCart("Pink Sweater",40.00)}>Add</Button>

                    </Card.Body>
                </Card>
            
               
                <Card style={{ width: '10rem' }}>
                    <Card.Img variant="top" src="https://www.lulus.com/images/product/xlarge/3423030_645782.jpg" />
                    <Card.Body>
                        <Card.Title> White Sweater</Card.Title>
                        <Card.Text>
                            A soft pink sweater perfect for any occassion
                        </Card.Text>
                        
                        <Button variant="primary" onClick={() => increaseCart("White Sweater",45.67)}>Add</Button>

                    </Card.Body>
                </Card>
             
                <Card style={{ width: '10rem' }}>
                    <Card.Img variant="top" src="https://www.lulus.com/images/product/xlarge/4862290_941362.jpg" />
                    <Card.Body>
                        <Card.Title> Blue Sweater</Card.Title>
                        <Card.Text>
                            A soft pink sweater perfect for any occassion
                            
                        </Card.Text>
                        <Button variant="primary" onClick={() => increaseCart("Blue Sweater",27.00)}>Add</Button>

                    </Card.Body>
                </Card>
              </CardGroup>
              <CardGroup>
              <Card style={{ width: '10rem' }}>
                    <Card.Img variant="top" src="https://img.ltwebstatic.com/images2_pi/2018/07/23/15323250461267617045_thumbnail_405x552.webp" />
                    <Card.Body>
                        <Card.Title> Light Blue Ripped Jeans</Card.Title>
                        <Card.Text>
                            A soft pink sweater perfect for any occassion
                            
                        </Card.Text>
                        <Button variant="primary" onClick={() => increaseCart("Ripped Jeans 1",60.00)}>Add</Button>

                    </Card.Body>
                </Card>
              </CardGroup>
                
                
               
             
            </Col>
            <Col>
            <h2>Cart</h2>
                <p>Cart Items: {cartTotal}</p>
                <p>Subtotal: {totalAmount}</p>
                <Button variant="danger" onClick={clearCart}>empty cart</Button>
                
                <div class="cart-items">
                    <h2>Your Shopping Cart</h2>
                    {cartContents}
                </div>
            </Col>
            </Row>
            
        </Container>
        
    );
}

export default Cart;