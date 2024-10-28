import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.background};
  position: relative;
  overflow: hidden;
`;

export const HeroContent = styled(motion.div)`
  text-align: center;
  z-index: 1;
`;

export const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled(motion.h2)`
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ProjectButton = styled(motion.button)`
  background: ${({ theme }) => theme.primary};
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.primary}ee;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
  }
  
  &:active {
    transform: translateY(1px);
  }
`;
