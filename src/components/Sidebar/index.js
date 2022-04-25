import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElement'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}> 
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
              <SidebarLink to="about" onClick={toggle}>About Us</SidebarLink>
                <SidebarLink to="products" onClick={toggle}>Products</SidebarLink>
                <SidebarLink to="map" onClick={toggle}>Location</SidebarLink>
                <SidebarLink to="OpeningHours" onClick={toggle}>Opening Hours</SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar