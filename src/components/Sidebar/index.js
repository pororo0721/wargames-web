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
                <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="items" onClick={toggle}>Items</SidebarLink>
                <SidebarLink to="location" onClick={toggle}>Location</SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar