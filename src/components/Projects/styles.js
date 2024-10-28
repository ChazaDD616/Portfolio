import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectsSection = styled.section`
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
  padding: 5rem 2rem;
`;

export const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProjectsHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
  
  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 1rem;
  }
`;

export const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const ProjectInfo = styled.div`
  padding: 1.5rem;
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.text};
  }
  
  p {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.text};
    opacity: 0.9;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Tag = styled.span`
  padding: 0.3rem 0.8rem;
  background: ${({ theme }) => theme.primary}33;
  color: ${({ theme }) => theme.primary};
  border-radius: 20px;
  font-size: 0.8rem;
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    padding: 0.5rem 1rem;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    
    &:first-child {
      background: ${({ theme }) => theme.primary};
      color: white;
      
      &:hover {
        background: ${({ theme }) => theme.primary}ee;
      }
    }
    
    &:last-child {
      border: 1px solid ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.primary};
      
      &:hover {
        background: ${({ theme }) => theme.primary}11;
      }
    }
  }
`;
