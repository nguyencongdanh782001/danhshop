import React from 'react'
import { Navbar,Nav, Container, FormControl, Button, Form, NavDropdown, Badge} from 'react-bootstrap'
import { HiShoppingCart } from "react-icons/hi";
import {Link, useLocation} from "react-router-dom"
const Navigation = ({toltalItem}) => {
    const location = useLocation();
    return (
            <Navbar bg='dark' variant='dark' sticky='top' expand='md' collapseOnSelect>
                <Container fluid>
                    <Link variant="dark" com className="home" to="/" >
                        <Navbar.Brand className='ms-3 me-5'>
                            <img src="" alt="" />
                            DanhShop
                        </Navbar.Brand>
                    </Link>
                    <Navbar className="justify-content-start" expand='lg'>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                size="sm"
                                aria-label="Search"
                            />
                            <Button variant="outline-info" size='sm'>Search</Button>{' '}
                        </Form>
                    </Navbar>
                    <Navbar.Toggle aria-controls="" className="justify-content-end"/>
                    <Navbar.Collapse className="justify-content-center">
                        <Nav defaultActiveKey="/home">
                            <Nav.Item className='pe-5'>
                                <Nav.Link href='/'>
                                        Home
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='pe-5'>
                               <NavDropdown title="Product"
                               className="pe-2"
                               menuVariant="dark"
                               >
                                    <NavDropdown title="TOPS"
                                        className="pe-2"
                                        menuVariant="dark"
                                        drop="end">
                                        <NavDropdown.Item>T-SHIRTS {'&'} POLO SHIRTS</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item>SHIRTS</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item>SWEATERS {'&'} CARDIGANS</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item>OUTERWEAR</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="BOTTOM"
                                        className="pe-2"
                                        menuVariant="dark"
                                        drop="end">
                                        <NavDropdown.Item>T-SHIRTS {'&'} POLO SHIRTS</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item>SHIRTS</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item>SWEATERS {'&'} CARDIGANS</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item>OUTERWEAR</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="ACCESSORIES"
                                        className="pe-2"
                                        menuVariant="dark"
                                        drop="end">
                                        <NavDropdown.Item>T-SHIRTS {'&'} POLO SHIRTS</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item>SHIRTS</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item>SWEATERS {'&'} CARDIGANS</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item>OUTERWEAR</NavDropdown.Item>
                                    </NavDropdown>
                               </NavDropdown>
                            </Nav.Item>
                            <Nav.Item className='pe-5'>
                                <Nav.Link href="/about">About</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end me-2" >
                        <Nav>
                            <NavDropdown title="Account"
                             className='pe-2'
                             menuVariant="dark"
                            >
                                <NavDropdown.Item>Info Account</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        {location.pathname === '/cart'?'':(
                            <Nav>
                                <Link to="/cart">
                                    <Button size="sm" variant="light"  className="rounded-circle position-relative ">
                                        <HiShoppingCart/><Badge bg="danger" className="rounded-circle position-absolute top-0 translate-middle pt-1 pb-1">{toltalItem >9?'9+':toltalItem}</Badge>
                                    </Button>
                                </Link>
                            </Nav>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default Navigation

