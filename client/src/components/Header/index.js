import React from "react";
import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const styles = {
    navbutton: {
        border: "1px solid black",
    },
    flex: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "red",
    }
};


const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="sm" fixed="top">
                <Navbar.Brand href="#home">Nicolas Fraenkel</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-around">

                    <Nav>
                        <Nav.Link href="#home" style={styles.navbutton}>About me</Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link href="#home" style={styles.navbutton}>Portfolio</Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link href="#home" style={styles.navbutton}>Contact</Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link href="#link" style={styles.navbutton}>Resume</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );

}

export default Header;