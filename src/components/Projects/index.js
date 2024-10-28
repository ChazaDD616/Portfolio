import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import {
  ProjectsSection,
  ProjectsContainer,
  ProjectsHeader,
  ProjectsGrid,
  ProjectCard,
  ProjectInfo,
  TagsContainer,
  Tag
} from './styles';

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const projects = [
    {
      id: 1,
      title: "Gimansio",
      description: "Plataforma web de Gimnasio con Frontend y Backend",
      image: "/images/Gimnasio.jpeg",
      tags: ["HTML5", "CSS", "PHP", "Node.js"],
    },
  ];

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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <ProjectsSection id="projects" ref={ref}>
      <ProjectsContainer
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <ProjectsHeader
          variants={cardVariants}
        >
          <h2>Mis Proyectos</h2>
        </ProjectsHeader>

        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <ProjectInfo>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <TagsContainer>
                  {project.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagsContainer>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;

