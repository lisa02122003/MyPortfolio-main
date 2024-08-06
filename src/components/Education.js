// src/components/Education.js
import React from 'react';
import styled from 'styled-components';

const EducationSection = styled.section`
  padding: 2rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

const Education = () => {
  return (
    <EducationSection id="education">
      <h3>Education</h3>
      <ul>
        <li>B.Tech Computer Science Engineering - GITAM Deemed to be University (Expected July 2025)</li>
        <li>Higher Secondary - GEMS Our Own Indian School, Dubai (90% in CBSE Board Examination: Science, 2020)</li>
        <li>Secondary School - GEMS Our Own Indian School, Dubai (91% in CBSE Board Examination, 2018)</li>
      </ul>
    </EducationSection>
  );
};

export default Education;
