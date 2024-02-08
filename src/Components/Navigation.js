import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import './LoginModal.css'
import close from '../Pages/Assets/close-button.svg'
import'./Navigation.css'
import Modal from 'react-bootstrap/Modal';
import LoginPage from '../Pages/LoginPage/LoginPage';

function Navigation() {
    const [show, setShow] = useState(false);
    const [login, SetLogin] = useState(false);
    const [loggedUser, setLoggedUser] = useState('');

    const updateUser = (loggedinuser) => {
        setLoggedUser(loggedinuser);
        SetLogin(true);
        console.log(loggedUser);
    };

    const logoutUser =() => {
        setLoggedUser(null);
        SetLogin(false);

    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);    return (
        <Navbar expand="lg" className="nav-container bg-body-tertiary" bg='dark' variant='dark' fixed='top'>
            <Container fluid className="navbar">
                <Navbar.Brand className="Title" href="/home">JarMeg</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className="nav-contents" id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">New Collection</Nav.Link>
                        <Nav.Link href="#action2">Sale</Nav.Link>
                        <NavDropdown title="Products" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/card">Men</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Women
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                                Kids
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Clearance
                        </Nav.Link>
                    </Nav>
                    <Form inline className="searchform d-flex justify-content-center align-items-center">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="search-box"
                            aria-label="Search"
                        />
                        <Button className='search-box-button' variant="outline-success">Search</Button>
                    </Form>
                    <div className='signupbtn'>
                    {login === false ? <div>
                        <Button variant="outline-success"  onClick={handleShow}>SignUp</Button>
                        <Modal className="login-modal d-flex" show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                            <LoginPage setCurrentUser={updateUser}/>
                            <Button className= "close-modal-btn" variant="secondary" onClick={handleClose}><img src={close}/></Button>
                        </Modal></div>:<div><NavDropdown title={"Hello, "+ loggedUser.firstName} id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Account</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Settings</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={logoutUser}>Logout</NavDropdown.Item>
                        </NavDropdown></div>}
                        </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;