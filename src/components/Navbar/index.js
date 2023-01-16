import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/zue-logo.png';
import ToggleMode from '../../assets/moon.png';

function Header() {

    return (
        <Navbar bg="white" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to='/'>
                        <img
                            src={Logo}
                            width="80"
                            height="80"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ml-auto">
                        <NavDropdown title="Menu" id="basic-nav-dropdown" className="menu">
                            <NavDropdown.Item>  <Link to='/'> Home </Link> </NavDropdown.Item>
                            <NavDropdown.Item> <Link to='/projects'> Projects </Link> </NavDropdown.Item>
                            <NavDropdown.Item> <Link to='/about'> About </Link> </NavDropdown.Item>
                            <NavDropdown.Item> <Link to='/contact'> Contact </Link> </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                View Resume
                            </NavDropdown.Item>
                        </NavDropdown>
                        <div className="vr" />
                        <Nav.Link href="#">
                            <img
                                src={ToggleMode}
                                width="25"
                                height="25"
                                className="d-inline-block align-top"
                                alt="toggle"
                            />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Header;