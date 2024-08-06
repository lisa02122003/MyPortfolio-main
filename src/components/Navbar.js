// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  padding: 1rem 2rem; /* Padding around the navbar */
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add a subtle shadow */
`;

const NavItems = styled.div`
  display: flex;
  gap: 2rem; /* Adjust the gap between navigation items */
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary}; /* Change color on hover */
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <h1>Lisa Alexander Rajan</h1>
      <NavItems>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#education">Education</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#publications">Publications</NavLink>
      </NavItems>
    </Nav>
  );
};

export default Navbar;

