import React from 'react';

import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavbarLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElement'


const Navbar = () => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavbarLogo to="/">GLOSTER MODELS</NavbarLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="item">Items</NavLinks>
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