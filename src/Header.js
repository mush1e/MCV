import React from "react";
import {Navbar, Nav, Container, NavDropdown, Button, Form }from 'react-bootstrap'

let Header = () => 
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">MyCanadaVisas.com</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#Home">HOME</Nav.Link>
      <Nav.Link href="#About">ABOUT</Nav.Link>
      <NavDropdown title="SERVICES" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">STUDENT VISA</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">IMMIGRATION VISA</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">VISIT VISA</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#Contact">CONTACT US</Nav.Link>
    </Nav>
      <Form inline >
        <Button variant="primary" href="/login">Book Appointment</Button>
      </Form>
  </Navbar.Collapse>
  </Container>
</Navbar>
export default Header