import React, { Component } from 'react';
// Routing
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Bootstrap
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

export default class NavbarComp extends Component {
    render() {
        return (
    <Router>
   
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand as={Link} to={"/"}>GLOSTER MODELS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <NavDropdown title="Games Workshop" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to={"/warhammer40"}>Warhammer 40.000</NavDropdown.Item>
          <NavDropdown.Item as={Link} to={"/warhammerAge"}>Warhammer Age of Sigmar</NavDropdown.Item>
          </NavDropdown>
        <NavDropdown title="Warlord Games" id="collasible-nav-dropdown">
          <NavDropdown.Item as={Link} to={"/boltaction"}>Bolt Action</NavDropdown.Item>
          <NavDropdown.Item as={Link} to={"/blackpowder"}>Black Powder</NavDropdown.Item>
          <NavDropdown.Item as={Link} to={"/pikeshotte"}>Pike & Shotte</NavDropdown.Item>
          <NavDropdown.Item as={Link} to={"/hailcaesar"}>Hail Caesar</NavDropdown.Item>
          <NavDropdown.Item as={Link} to={"/spqr"}>SPQR</NavDropdown.Item>
          <NavDropdown.Item as={Link} to={"/projectz"}>Project Z</NavDropdown.Item>
          <NavDropdown.Item as={Link} to={"/strontiumdog"}>Strontium Dog</NavDropdown.Item>
          <NavDropdown.Item as={Link} to={"/judgedread"}>Judge Dread</NavDropdown.Item>
            </NavDropdown>
      
        <Nav.Link as={Link} to={"/perrymini"}>Perry Miniatures</Nav.Link>
        <Nav.Link as={Link} to={"/grippinbeast"}>Gripping Beast</Nav.Link>
        <Nav.Link as={Link} to={"/deusvult"}>Deus Vult</Nav.Link>
        <Nav.Link as={Link} to={"/renderaaccesories"}>Rendera Accessories</Nav.Link>
        <Nav.Link as={Link} to={"/paintaccesories"}>Paint Tools and Accessories</Nav.Link>
        <Nav.Link as={Link} to={"/otherscales"}>Games In Other Scales</Nav.Link>

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</Router>
        )
    }
}

