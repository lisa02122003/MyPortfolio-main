// src/components/BackToTop.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: ${({ show }) => (show ? 'block' : 'none')};
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

const BackToTop = () => {
  const [show, setShow] = useState(false);

  const checkScrollTop = () => {
    if (!show && window.pageYOffset > 300) {
      setShow(true);
    } else if (show && window.pageYOffset <= 300) {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [show]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return <Button onClick={scrollToTop} show={show}>↑</Button>;
};

export default BackToTop;
