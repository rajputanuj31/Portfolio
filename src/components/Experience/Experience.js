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
                <span className="exp-date">Jan 2025 – Jan 2026</span>
              </div>
            </div>

            <ul className="exp-details">
              <li>
                Built real-time DeFi portfolio dashboard in Next.js 16, displaying live positions across 10+ protocols — reduced load time by 40% via code splitting.
              </li>
              <li>
                Integrated TanStack Query for real-time data synchronization, reducing data loading times by 30% and improving application responsiveness.
              </li>
              <li>
                Implemented secure wallet management and seamless network switching using Privy and Wagmi v2, strengthening user security and overall experience.
              </li>
              <li>
                Redesigned the embeddable widget system, reducing bundle size by 25% and improving load time on 3rd-party integrations.
              </li>
              <li>
                Built swap UI for DEX aggregation, displaying optimal routing across multiple liquidity sources for best price execution.
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
