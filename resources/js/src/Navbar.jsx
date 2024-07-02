import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import logo from './images/roomrent.jpg'; // Adjust the path to your logo

const CustomNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
                <img src={logo} alt="Logo" width="60" height="60" className="d-inline-block align-top" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/all-listings">All Listings</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/rooms">Rooms</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/pg">PG</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/location">Location</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Button variant="">
                    <Link to="/add-house">Add House</Link>
                </Button>
                <Button variant="outline-primary" as={Link} to="/profile">Profile</Button>
                <Button variant="outline-primary" as={Link} to="/register">Register</Button> {/* Add this line */}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;
