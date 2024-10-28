import styled from 'styled-components';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ theme }) => theme.navBackground};
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

export const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.text};
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
    
    &:after {
      width: 100%;
    }
  }

  &.active {
    color: ${({ theme }) => theme.primary};
    
    &:after {
      width: 100%;
    }
  }
`;

export const ThemeToggleButton = styled(motion.button)`
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${({ theme }) => theme.primary}ee;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
