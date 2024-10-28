import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutSection = styled.section`
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
  padding: 5rem 2rem;
`;

export const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ImageContainer = styled(motion.div)`
  position: relative;
  
  img {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

export const ContentContainer = styled(motion.div)`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.primary};
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.text};
  }
`;

export const StatsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const StatItem = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: ${({ theme }) => theme.cardBackground || theme.background};
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  h3 {
    font-size: 2rem;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.text};
    margin: 0;
  }
`;
