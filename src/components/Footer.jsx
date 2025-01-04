import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterSection id="footer">
      <FooterContent>
        <Logo>Hamsafran Travels</Logo>
        <ContactInfo>
          <p>
            <FaPhoneAlt />
            <a href="tel:+917829881674">+91 9596319497</a>
            <a href="tel:+917829881674">+91 8491926174</a>

            
          </p>
          <p>
            <FaEnvelope />
            <a href="mailto:navee1110@gmail.com">hamsafrantravels@gmail.com</a>
          </p>
        </ContactInfo>
        <SocialLinks>
        <a href="https://www.instagram.com/hamsafran_travels?igsh=MW9sZTRtbTVxYjN1cQ==" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/your-profile" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
         
          <a href="https://www.twitter.com/your-profile" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </SocialLinks>
      </FooterContent>
      <FooterBottom>
        <p>© 2024 Hamsafran Travels. All rights reserved.</p>
      </FooterBottom>
    </FooterSection>
  );
};

export default Footer;

const FooterSection = styled.footer`
  background-color: #0f172a; /* Rich Navy Blue */
  color: #e2e8f0; /* Cool Light Gray */
  padding: 2rem 1rem 1rem;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  color: #94A3B8; /* Sky Blue */
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
`;

const ContactInfo = styled.div`
  font-size: 1rem;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0.5rem 0;

    a {
      color: #e2e8f0; /* Cool Light Gray */
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #38bdf8; /* Sky Blue */
      }
    }

    svg {
      color: #38bdf8; /* Sky Blue */
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.2rem;
  font-size: 1.6rem;

  a {
    color: #38bdf8; /* Sky Blue */
    transition: color 0.3s ease;

    &:hover {
      color: #fbbf24; /* Vibrant Yellow Accent */
    }
  }
`;

const FooterBottom = styled.div`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #94a3b8; /* Muted Gray */
`;
