import React from 'react'
import {FaFacebook, FaEbay} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute, SidebarIcon } from './SidebarElement'

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
            <SideBtnWrap>
               <SidebarRoute >
                 <SidebarIcon aria-label="Facebook"  href="https://www.facebook.com/Gloster-Models-111043008150531" >
                    <FaFacebook />
                 </SidebarIcon>
                 </SidebarRoute>
                  <SidebarRoute >
                 <SidebarIcon aria-label="Ebay">
                    <FaEbay />
                  </SidebarIcon>
                  </SidebarRoute>
                  <SidebarRoute >
                  <SidebarIcon aria-label="Email">
                    <AiOutlineMail />
                  </SidebarIcon>
                 </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar