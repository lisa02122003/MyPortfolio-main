// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  padding: 1rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterSection>
      <p>&copy; 2024 Lisa Alexander Rajan</p>
      <p>Email: lisaalexander2003@gmail.com | Phone: +91 9618595919</p>
    </FooterSection>
  );
};

export default Footer;
