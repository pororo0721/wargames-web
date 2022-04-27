import React from 'react'
import {FaFacebook, FaEbay} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute, SidebarSocialIcon } from './SidebarElement'

const Sidebar = ({isOpen, toggle}) => {

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/Gloster-Models-111043008150531', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:glostermodels@gmail.com', '_blank');
  };
  
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
                 <SidebarSocialIcon  onClick={handleFacebookClick} aria-label="Facebook">
                    <FaFacebook />
                 </SidebarSocialIcon >
                 </SidebarRoute>
                  <SidebarRoute >
                 <SidebarSocialIcon  aria-label="Ebay">
                    <FaEbay />
                  </SidebarSocialIcon >
                  </SidebarRoute>
                  <SidebarRoute >
                  <SidebarSocialIcon onClick={handleEmailClick} aria-label="Email">
                    <AiOutlineMail />
                  </SidebarSocialIcon >
                 </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar