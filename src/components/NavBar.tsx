import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom"
function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="md">
            <Container>
                <Navbar.Brand href="#home">
                    React Portfolio
                </Navbar.Brand>
                <Navbar.Toggle area-controls="responsive-navbar-nav" ></Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar