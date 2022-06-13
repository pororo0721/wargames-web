import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {FaFacebook, FaEbay} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import { FooterContainer, 
    FooterWrap, 
    SocialMedia, 
    SocialMediaWrap, 
    SocialLogo, 
    WebsiteRights, 
    SocialIcons, 
    SocialIconLink, 
} from './FooterElement'


const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

  return (
    <>
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        GLOSTER MODELS
                    </SocialLogo>
                    <WebsiteRights>GLOSTER MODELS © {new Date().getFullYear()}</WebsiteRights>
                    <WebsiteRights>
                    TEL.07919 264225</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="https://www.facebook.com/Gloster-Models-111043008150531" target="_blank"
                        aria-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="https://www.ebay.co.uk/usr/ploppy1964" target="_blank"
                        aria-label="Ebay">
                            <FaEbay/>
                        </SocialIconLink>
                        <SocialIconLink href="mailto:glostermodels@gmail.com" target="_blank"
                        aria-label="Mail">
                            <AiOutlineMail/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
        </FooterContainer>
    </>
  )
}

export default Footer