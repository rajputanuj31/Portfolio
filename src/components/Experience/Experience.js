import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Career</span>
          <h2>Work Experience</h2>
        </motion.div>

        <motion.div
          className="exp-timeline"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="exp-card glass-card">
            <div className="exp-card-header">
              <div className="exp-icon-wrapper">
                <FaBriefcase />
              </div>
              <div className="exp-meta">
                <h3>Frontend Developer</h3>
                <span className="exp-company">GlueX Protocol</span>
                <span className="exp-date">Jan 2025 – Present</span>
              </div>
              <span className="exp-status">Current</span>
            </div>

            <ul className="exp-details">
              <li>
                <strong>GlueX Terminal:</strong> Built the institutional-grade portfolio dashboard using Next.js 16.
              </li>
              <li>
                Integrated TanStack Query for real-time data synchronization and PostHog for product analytics to track user engagement.
              </li>
              <li>
                Implemented secure wallet management and network switching using Privy and Wagmi v2.
              </li>
              <li>
                <strong>GlueX Widget:</strong> Redesigned the embeddable widget system, reduced bundle size and created fluid navigation animations using Tailwind CSS and Framer Motion.
              </li>
              <li>
                Managed global state across Dapp, Studio, and Terminal using Zustand; set up automated CI/CD pipelines on AWS Amplify.
              </li>
              <li>
                Maintained code quality through strict TypeScript typing and modular component architecture.
              </li>
            </ul>

            <div className="exp-tech-stack">
              {[
                'Next.js 16',
                'TypeScript',
                'Tailwind CSS',
                'Wagmi v2',
                'Privy',
                'Zustand',
                'TanStack Query',
                'AWS Amplify',
                'PostHog',
                'Framer Motion',
              ].map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
