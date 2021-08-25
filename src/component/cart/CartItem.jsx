import React from 'react'
import {Card, Button } from 'react-bootstrap'

const CartItem = ({item, updateCartQty, removeFormCart}) => {
    return (
        <Card className="product-cart">
            <Card.Img src = {item.media.source} title={item.name} className="img-product-cart"/>
            <Card.Body>
                <div className="title-product mb-1">
                    <Card.Title as="h3">{item.name}</Card.Title>
                    <Card.Title as="h5">{item.line_total.formatted_with_symbol}</Card.Title>
                </div>
                <div className="math-btn mt-2">
                    <Button className="me-2 ps-3 pe-3" size="sm" variant="light" onClick={() => updateCartQty(item.id,item.quantity - 1)}>-</Button>
                    <h6 className="mt-2">{item.quantity}</h6>
                    <Button className="ms-2 ps-3 pe-3"  size="sm" variant="light" onClick={() => updateCartQty(item.id,item.quantity + 1)}>+</Button>
                    <Button className="Delete-btn" variant="danger" onClick={() =>(removeFormCart(item.id))}>Remove</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CartItem
