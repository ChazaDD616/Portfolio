import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import {
  ContactSection,
  ContactContainer,
  ContactHeader,
  ContactInfo,
  ContactItem,
  IconWrapper,
  InfoText,
  SocialLinks,
  SocialIcon
} from './styles';

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <ContactHeader>
          Contáctame
        </ContactHeader>

        <ContactInfo>
          <ContactItem>
            <IconWrapper>
              <FaEnvelope />
            </IconWrapper>
            <InfoText>maxi.chazarreta.terma@gmail.com</InfoText>
          </ContactItem>
          <ContactItem>
            <IconWrapper>
              <FaPhone />
            </IconWrapper>
            <InfoText>+54 9 223 344 4099</InfoText>
          </ContactItem>
        </ContactInfo>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
