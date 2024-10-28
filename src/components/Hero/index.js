import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { HeroSection, Title, ProjectButton } from './styles';
import { Link } from 'react-scroll';

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2
      }
    });
  }, [controls]);

  return (
    <HeroSection id="home">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={controls}
      >
        <Title
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hola, soy Máximo Daniel Chazarreta
        </Title>
        
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ color: ({ theme }) => theme.primary }}
        >
          Desarrollador Web Frontend
        </motion.h2>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
            <br></br>
          <Link to="projects" smooth={true} duration={500}>
            <ProjectButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              
              <span>Ver Proyectos</span>
            </ProjectButton>
          </Link>
        </motion.div>
      </motion.div>
    </HeroSection>
  );
};

export default Hero;
