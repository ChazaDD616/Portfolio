import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import {
  Nav,
  NavContainer,
  NavLinks,
  NavLink,
  ThemeToggleButton
} from './styles';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav style={{ 
      background: isScrolled 
        ? isDark 
          ? 'rgba(18, 18, 18, 0.95)' 
          : 'rgba(255, 255, 255, 0.95)' 
        : 'transparent' 
    }}>
      <NavContainer>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Mi Portfolio</h1>
        </motion.div>

        <NavLinks>
          <NavLink 
            to="home" 
            smooth={true} 
            duration={500}
            spy={true}
            activeClass="active"
          >
            Inicio
          </NavLink>
          <NavLink 
            to="about" 
            smooth={true} 
            duration={500}
            spy={true}
            activeClass="active"
          >
            Sobre Mí
          </NavLink>
          <NavLink 
            to="skills" 
            smooth={true} 
            duration={500}
            spy={true}
            activeClass="active"
          >
            Habilidades
          </NavLink>
          <NavLink 
            to="projects" 
            smooth={true} 
            duration={500}
            spy={true}
            activeClass="active"
          >
            Proyectos
          </NavLink>
          <NavLink 
            to="contact" 
            smooth={true} 
            duration={500}
            spy={true}
            activeClass="active"
          >
            Contacto
          </NavLink>
          
          <ThemeToggleButton
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </ThemeToggleButton>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
