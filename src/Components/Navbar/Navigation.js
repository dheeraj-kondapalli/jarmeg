import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState, useEffect } from 'react';
import './LoginModal.css'
import close from '../../Pages/Assets/close-button.svg'
import'./Navigation.css'
import Modal from 'react-bootstrap/Modal';
import LoginPage from '../../Pages/LoginPage/LoginPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logo from '../../Pages/Assets/jarmeg1.png'
import { useUserContext } from '../../Contexts/userContext';
import Cookies from 'js-cookie';

function Navigation() {

    const  { userData }  = useUserContext();
    const [show, setShow] = useState(false);
    const { login, setLogin } = useUserContext();

    const signInUser =(data) => {
        setLogin(data);
        console.log("in signinfunct")
        console.log(data)
    }
    const signOutUser =() => {
        setLogin(false);
        Cookies.remove('jwtToken');
        Cookies.remove('uniqueToken');
        sessionStorage.clear('userData');
    }

    useEffect(() => {
        sessionStorage.setItem('login', login);
        if (login === false){
            Cookies.remove('jwtToken');
            Cookies.remove('uniqueToken');
            sessionStorage.clear('userData');
        }
    }, [login]);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 
          
    return (
        <Navbar expand="lg" className="nav-container bg-body-tertiary" bg='dark' variant='dark' fixed='top'>
            <Container fluid className="navbar">
                <Navbar.Brand className="Title" href="/home"><img className='logo' src={logo}></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className="nav-contents" id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Collection</Nav.Link>
                        <Nav.Link href="/sale">Sale</Nav.Link>
                        <NavDropdown title="Products" id="navbarScrollingDropdown" >
                            <NavDropdown.Item href="/products">Products</NavDropdown.Item>
                            <NavDropdown.Item href="/products/men">Men</NavDropdown.Item>
                            <NavDropdown.Item href="/products/women">Women</NavDropdown.Item>
                            <NavDropdown.Item href="/products/kids">Kids</NavDropdown.Item>
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
                        <FontAwesomeIcon className='search-box-button' icon={faMagnifyingGlass} />
                    </Form>
                    <div className='signupbtn'>
                    {login === false ? <div>
                        <FontAwesomeIcon className='userIcon' icon={ faUser } onClick={handleShow} />            
                        <Modal className="login-modal d-flex" show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                            <LoginPage updateUser={signInUser}/>
                            <Button className= "close-modal-btn" variant="secondary" onClick={handleClose}><img src={close}/></Button>
                        </Modal></div>:<div>{userData && (<NavDropdown title={"hello, "+ userData.username} id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Account</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Settings</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={signOutUser}>Logout</NavDropdown.Item>
                        </NavDropdown>)}</div>}
                        </div>
                        <a className='cart' href='/cart'><FontAwesomeIcon className='cartIcon' icon={ faCartShopping }/></a>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;