// src/components/Publications.js
import React from 'react';
import styled from 'styled-components';

const PublicationsSection = styled.section`
  padding: 2rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

const Publications = () => {
  return (
    <PublicationsSection id="publications">
      <h3>Publications</h3>
      <div>
        <h4>Fraud Detection Using IoT and ML Approaches</h4>
        <p>Authored research paper selected for ICPCSN 24 conference publication. Employed machine learning and IoT techniques for fraud document detection. Investigated physical attributes to identify fraudulent documents. Incorporated cross-verification with unique database identifiers for robust validation.</p>
      </div>
    </PublicationsSection>
  );
};

export default Publications;
