import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElement'

const Sidebar = () => {
  return (
    <SidebarContainer> 
        <Icon>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about">About</SidebarLink>
                <SidebarLink to="items">Items</SidebarLink>
                <SidebarLink to="location">Location</SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar