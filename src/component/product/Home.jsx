import { Col, Container, Row } from 'react-bootstrap'
import React, { Fragment } from 'react'
import Product from './Product'
import Banner from './Banner'

const Home = ({products,onAddCart}) => {
    return (  
        <Fragment>
            <Banner/> 
            <Container fluid>
                <Row xs={1} sm={1} md={2} lg={3} xl={4}  className="mt-3 mb-5" >
                        {products.map(product =>(
                            <Col key={product.id} className="mt-3 mb-2">
                                <Product product={product} onAddCart={onAddCart}/>
                            </Col>
                        ))}
                </Row>
            </Container> 
        </Fragment>        
    )
}

export default Home
