import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../assets/images/logo.png'

function Header() {
    const expand = 'lg';
    return (
        <div className="container-fluid px-0">
          <Navbar expand={expand} className="navbar-wrp">
          <Container fluid>
            <Navbar.Brand href="#"><img src={logo}  className='me-5'/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="nav-wrp justify-content-start flex-grow-1 pe-5">
                  <Nav.Link className='nav-links' href="#action1">Home</Nav.Link>
                  <Nav.Link className='nav-links' href="#action2">About Us</Nav.Link>
                  <Nav.Link className='nav-links' href="#action2">Services</Nav.Link>
                  <Nav.Link className='nav-links' href="#action2">Blog</Nav.Link>
                  <Nav.Link className='nav-links' href="#action2">Customer Stories</Nav.Link>
                  
                </Nav>
                <Form className="d-flex">
                  <Button variant="outline-success">Contact Us</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </div>
  );
}

export default Header;
