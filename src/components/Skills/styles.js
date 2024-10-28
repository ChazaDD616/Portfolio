import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SkillsSection = styled.section`
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
  padding: 5rem 2rem;
`;

export const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SkillsHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
  
  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.primary};
  }
  
  p {
    font-size: 1.1rem;
    max-width: 600px;
    margin: 1rem auto;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

export const SkillCard = styled(motion.div)`
  background: ${({ theme }) => theme.background};
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.text};
  }
`;

export const ProgressBar = styled(motion.div)`
  height: 10px;
  background: ${({ theme }) => theme.background};
  border-radius: 5px;
  margin-top: 0.5rem;
  overflow: hidden;
  
  div {
    height: 100%;
    background: ${({ theme }) => theme.primary};
    border-radius: 5px;
  }
`;

export const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  
  span {
    color: ${({ theme }) => theme.text};
  }
  
  p {
    color: ${({ theme }) => theme.text};
  }
`;
