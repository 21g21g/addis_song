import React from 'react';
import {FooterBottom,FooterColumn,FooterContainer,FooterLink,FooterTitle,FooterWrapper,SocialIcons,} from "../../components/styles/FooterStyle"

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterColumn>
          <FooterTitle>About Us</FooterTitle>
          <FooterLink href="#">Our Story</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink href="#">Home</FooterLink>
          <FooterLink href="#">Genres</FooterLink>
          <FooterLink href="#">Artists</FooterLink>
          <FooterLink href="#">Albums</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Follow Us</FooterTitle>
          <SocialIcons>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
          </SocialIcons>
        </FooterColumn>
      </FooterContainer>
      <FooterBottom>
        &copy; {new Date().getFullYear()} SongManaement. All rights reserved.
      </FooterBottom>
    </FooterWrapper>
  );
};
export default Footer