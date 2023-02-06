import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import github from '../../images/git-logo-48.png'
import linkedin  from '../../images/linked-logo.png'

const Footer = () => {
  return (
  
  <Navbar bg="light" expand="sm" fixed="bottom">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Nav.Link href="https://github.com/Kokkonut" target='_blank'><img src={github} alt={'github logo'}/></Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/nicolas-fraenkel-595486262/"  target='_blank'><img src={linkedin} alt={'linkedin logo'}/></Nav.Link>
      </Nav>
    </Navbar.Collapse>
</Navbar>
  );

}

export default Footer;

