import React from 'react'
import { Col, Container, Row, Button, Spinner  } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

const Cart = ({cart, updateCartQty, removeFormCart, emptyFormCart}) => {
    const EmptyCart = () => (
        <div className="emty-Cart ms-3">
            <h4 >You have no items   in your shopping cart,&nbsp;
                <Link className="emty-cart-link" to="/">start adding some!</Link>
            </h4>
        </div>
    )
    const FilledCart = () => 
        <>
            <Container>
                <Row xs={1} sm={1} md={2} lg={3} xl={3}>
                    {cart.line_items.map((item) => (
                        <Col key={item.id} className="mt-3 mb-2">
                            <CartItem item={item} updateCartQty={updateCartQty} removeFormCart={removeFormCart}/>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Container className="mt-4 mb-3">
                    <Row xs={1} sm={1} md={2} lg={2} xl={2}>
                        <Col className="mb-3 mt-2"> <h3>Subtotal: {cart.subtotal.formatted_with_symbol}</h3></Col>
                        <Col className="mb-2"> 
                            <div className="total-cart-btn justify-content-end">
                                <Button variant="danger" className="me-3" size="lg" onClick={emptyFormCart}>EMPTY CART</Button>
                                <Link to='/checkout'>
                                    <Button size="lg" variant="primary">CHECKOUT</Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
            </Container>
        </>
        if(!cart.line_items) return (
            <div className="d-flex" style={{ paddingTop: '40vh'}}>
                <Spinner animation="border" className="m-auto"/>  
            </div>
              
        )
    return ( 
        <Container fluid>
          <div className="title-Cart mt-2 ms-3">
              <h2>Your Shopping Cart</h2>
          </div>
          {!cart.line_items.length? <EmptyCart/>:<FilledCart/>}
        </Container>
    )
}

export default Cart
