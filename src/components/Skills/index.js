import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import {
  SkillsSection,
  SkillsContainer,
  SkillsHeader,
  SkillsGrid,
  SkillCard,
  ProgressBar
} from './styles';

const Skills = () => {
  const [skills] = useState([
    {
      category: "Frontend",
      items: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "SQL", level: 60 }
      ]
    }
  ]);

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
        staggerChildren: 0.2
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
    <SkillsSection id="skills" ref={ref}>
      <SkillsContainer
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <SkillsHeader variants={itemVariants}>
          <h2>Mis Habilidades</h2>
          <p>
            Una colección de las tecnologías y herramientas que domino,
            desarrolladas a través de años de experiencia y aprendizaje continuo.
          </p>
        </SkillsHeader>

        <SkillsGrid>
          {skills.map((skillGroup, index) => (
            <SkillCard
              key={index}
              variants={itemVariants}
            >
              <h3>{skillGroup.category}</h3>
              {skillGroup.items.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <ProgressBar>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </ProgressBar>
                </div>
              ))}
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;

