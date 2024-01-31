import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";
import LoginPage from '../Pages/LoginPage/LoginPage';
import React, { useState } from 'react';
import Modal from 'react-modal';
import './LoginModal.css'
import close from '../Pages/Assets/close-button.svg'


function Navigation() {
    const [visible, setVisible]= useState(false) 
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Link to="/login">
                        <Button variant="outline-success" onClick={()=> setVisible(true)}>SignIn/SignUp</Button>
                        <Modal className="login-modal" isOpen={visible}>
                            <LoginPage/>
                            <button className= "close-modal-btn" onClick={()=>setVisible(false)}><img src={close}/> </button>           
                        </Modal>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;