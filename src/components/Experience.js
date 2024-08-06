// src/components/Experience.js
import React from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  padding: 2rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <h3>Experience</h3>
      <div>
        <h4>Web Developer Intern - Compass Insurance Brokers</h4>
        <p>May 2024 - July 2024, Dubai, UAE</p>
        <p>Contributed to building an online aggregator for the company to enhance and consolidate their products and policies, focusing on front-end development. Utilized tools and technologies, including HTML, CSS, JavaScript, React, npm, and Bootstrap.</p>
      </div>
    </ExperienceSection>
  );
};

export default Experience;
