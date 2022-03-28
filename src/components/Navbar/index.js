import React, {useState} from 'react';

import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavbarLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElement'


const Navbar = ({toggle}) => {
    const [click, setClick] = React.useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

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
                        <NavLinks to="gamesworkshop" onClick={handleClick}>Games workshop</NavLinks>
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