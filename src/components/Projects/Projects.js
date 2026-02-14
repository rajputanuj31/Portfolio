import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTrophy } from 'react-icons/fa';
import details from '../../Details';
import './Projects.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Portfolio</span>
          <h2>Featured Projects</h2>
          <p>Hackathon-winning projects and impactful open source contributions</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {details.map((project, index) => (
            <motion.div key={index} className="project-card glass-card" variants={cardVariants}>
              {project.prize && (
                <div className="project-prize">
                  <FaTrophy />
                  <span>{project.prize}</span>
                </div>
              )}

              <div className="project-card-body">
                <div className="project-top">
                  <h3 className="project-name">{project.name}</h3>
                  <span className="project-date">{project.timePeriod}</span>
                </div>

                <p className="project-desc">{project.subheading}</p>

                <div className="project-tech">
                  {project.techstack.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub />
                    <span>Code</span>
                  </a>
                )}
                {project.Demo && (
                  <a href={project.Demo} target="_blank" rel="noopener noreferrer" className="project-link project-link-accent">
                    <FaExternalLinkAlt />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
