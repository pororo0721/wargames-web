import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

export default class NavbarComp extends Component {
    render() {
        return (
<div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">GLOSTER MODELS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="#shop">Shop</Nav.Link>
        <NavDropdown title="Games Workshop" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1.1">Warhammer 40.000</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1.2">Warhammer Age of Sigmar</NavDropdown.Item>
          </NavDropdown>
        <NavDropdown title="Warlord Games" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.2.1">Bolt Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2.2">Black Powder</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2.3">Pike & Shotte</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2.4">Hail Caesar</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2.5">SPQR</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2.6">Project Z</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2.7">Strontium Dog</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2.8">Judge Dread</NavDropdown.Item>
            </NavDropdown>
      
        <Nav.Link href="#perryminiatures ">Perry Miniatures</Nav.Link>
        <Nav.Link href="#grippingbeast">Gripping Beast</Nav.Link>
        <Nav.Link href="#deusvult">Deus Vult</Nav.Link>
        <Nav.Link href="#Renderaaccessories">Rendera Accessories</Nav.Link>
        <Nav.Link href="#accessories">Paint Tools and Accessories</Nav.Link>
        <Nav.Link href="#otherscales">Games In Other Scales</Nav.Link>

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>
        )
    }
}

