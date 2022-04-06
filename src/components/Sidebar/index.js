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
                <SidebarLink to="historical" onClick={toggle}>Historical</SidebarLink>
                <SidebarLink to="sci_fi/fantasy" onClick={toggle}>Sci-Fi/Fantasy</SidebarLink>
                <SidebarLink to="hobby" onClick={toggle}>Hobby</SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar