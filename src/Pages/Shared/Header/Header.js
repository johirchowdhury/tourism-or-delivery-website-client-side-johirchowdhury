import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css';
import logo from '../../../images/logo.png'
import useFirebase from '../../../hooks/useFirebase';
const Header = () => {
    const { user, logOut } = useFirebase();
    const linkStyle = {
        float: 'left',
        textDecoration: 'none'

    }
    return (
        <>
            <Navbar class="navbar navbar-light" style={{ backgroundColor: "#1a3e35" }} variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Link to="/">
                        <Navbar.Brand >
                            <img src={logo} alt="" />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end menubar">
                        <Nav.Link as={HashLink} to="/">Home</Nav.Link>


                        {
                            user?.email ?
                                < nav >

                                    <Nav.Link style={linkStyle}><Link to='/ManageService' >Manage All Service</Link></Nav.Link>
                                    <Nav.Link style={linkStyle}><Link to='/manageOrder' >Manage Order</Link></Nav.Link>
                                    <Nav.Link style={linkStyle}><Link to='/myorder'>My Orders</Link></Nav.Link>
                                    <Nav.Link style={linkStyle}><Link s to='/addService'>Add Service</Link></Nav.Link>


                                    <Navbar.Text style={linkStyle}>
                                        <a href="#login" style={{ float: 'left' }}> {user?.displayName}</a>
                                    </Navbar.Text>

                                    <Button style={linkStyle} onClick={logOut} variant="light">Logout</Button>

                                </nav>
                                :
                                <Link to='/login'>
                                    <button style={{ color: 'white' }} className='btn'>Login</button>
                                </Link>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;