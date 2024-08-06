// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 2rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <h3>Projects</h3>
      <div>
        <h4>Online Expense Tracker</h4>
        <p>Technologies Used: HTML, CSS, JavaScript, Express, MongoDB, React, Node.js, GraphQL</p>
        <p>Tracks and manages user expenditures. Displays expenditure data using interactive graphs. Integrates with banks using the Plaid API for seamless transaction data retrieval.</p>
      </div>
      <div>
        <h4>IoT Smoke Detector</h4>
        <p>Components Used: NodeMCU, Smoke Sensor, Blynk</p>
        <p>Integrated NodeMCU with smoke sensor to send data to Blynk app, providing real-time notifications and remote management.</p>
      </div>
    </ProjectsSection>
  );
};

export default Projects;
