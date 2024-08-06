// src/components/Skills.js
import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
  padding: 2rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <h3>Skills</h3>
      <ul>
        <li>Java</li>
        <li>Python</li>
        <li>HTML, CSS, JavaScript</li>
        <li>React, Express</li>
        <li>MySQL, MongoDB</li>
        <li>Selenium</li>
        <li>Git</li>
      </ul>
    </SkillsSection>
  );
};

export default Skills;
