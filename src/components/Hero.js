// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  text-align: center;
  flex-direction: column;
`;

const Photo = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const Hero = () => {
  return (
    <HeroSection>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
       
        <div>
          <h2>Welcome to My Portfolio</h2>
          <p>I am a highly motivated, receptive, and an adaptable individual with the intention of extending
 my knowledge and potential for the improvement and growth of the company. I possess thorough
 knowledge in various languages and technologies . I am eager to work in a fast-paced
 environment that will help me evolve as a professional while also contributing to the company's
 goals.</p>
        </div>
      </motion.div>
    </HeroSection>
  );
};

export default Hero;

