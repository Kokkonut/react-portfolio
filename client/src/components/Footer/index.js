import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
  <Navbar bg="light" expand="lg" fixed="bottom">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">GitHub</Nav.Link>
        <Nav.Link href="#home">LinkedIn</Nav.Link>
      </Nav>
    </Navbar.Collapse>
</Navbar>
  );

}

export default Footer;