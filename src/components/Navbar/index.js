import React from 'react';

import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavbarLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElement'


const Navbar = ({toggle}) => {


  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavbarLogo to="/">GLOSTER MODELS</NavbarLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                <NavItem>
                        <NavLinks to="about" >About Us</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="products" >Products</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="location">Location</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer> 
        </Nav>
    </>
  );
};

export default Navbar