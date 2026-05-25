import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    icon: '{ }',
    skills: ['TypeScript', 'JavaScript', 'Python'],
  },
  {
    title: 'Frameworks',
    icon: '< >',
    skills: ['Next.js', 'React 19', 'FastAPI', 'LangChain', 'LangGraph', 'Tailwind CSS', 'Node.js'],
  },
  {
    title: 'Web3',
    icon: '\u039E',
    skills: ['Wagmi v2', 'Viem', 'Ethers.js', 'Privy', 'The Graph'],
  },
  {
    title: 'AI & Tools',
    icon: '\u2699',
    skills: [
      'OpenAI API',
      'Pinecone',
      'FAISS',
      'RAG',
      'MCP',
      'LangSmith',
      'TanStack Query',
      'Zustand',
      'AWS Amplify',
      'Git',
      'PostHog',
      'Framer Motion',
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Expertise</span>
          <h2>Technical Skills</h2>
          <p>Technologies and tools I work with to build modern applications</p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} className="skill-category glass-card" variants={cardVariants}>
              <div className="skill-category-header">
                <span className="skill-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
