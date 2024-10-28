import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import {
  AboutSection,
  AboutContainer,
  ImageContainer,
  ContentContainer,
  StatsList,
  StatItem
} from './styles';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <AboutSection id="about" ref={ref}>
      <AboutContainer
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <ImageContainer variants={itemVariants}>
          <img src="/images/Persona.jpeg" alt="Maximo Chazarreta" />
        </ImageContainer>

        <ContentContainer variants={itemVariants}>
          <h2>Sobre Mí</h2>
          <p>
            Soy un desarrollador web apasionado por crear experiencias digitales
            únicas y funcionales. Con experiencia en React, JavaScript y diseño
            responsive, me especializo en construir aplicaciones web modernas y
            eficientes.
          </p>
          <p>
            Mi objetivo es combinar diseño atractivo con funcionalidad robusta
            para crear soluciones que impacten positivamente en los usuarios.
          </p>

          <StatsList>
            <StatItem variants={itemVariants}>
              <h3>4</h3>
              <p>Años de Estudiando Informatica</p>
            </StatItem>
            <StatItem variants={itemVariants}>
              <h3>8+</h3>
              <p>Lenguajes de Programacion Aprendidos</p>
            </StatItem>
          </StatsList>
        </ContentContainer>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
