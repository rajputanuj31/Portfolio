import React from 'react';
import { motion } from 'framer-motion';
import './Achievements.css';

const stats = [
  {
    number: '7+',
    label: 'Hackathon Wins',
    detail: 'EthIndia, Unfold, MLH events',
    icon: '\uD83C\uDFC6',
  },
  {
    number: '35+',
    label: 'Open Source PRs',
    detail: 'Merged in Joomla! CMS',
    icon: '\uD83D\uDD00',
  },
  {
    number: '300+',
    label: 'DSA Problems',
    detail: 'GFG & LeetCode',
    icon: '\uD83E\uDDE9',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Achievements = () => {
  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Milestones</span>
          <h2>Achievements</h2>
        </motion.div>

        <motion.div
          className="achievements-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, idx) => (
            <motion.div key={idx} className="achievement-card glass-card" variants={cardVariants}>
              <span className="achievement-icon">{stat.icon}</span>
              <span className="achievement-number">{stat.number}</span>
              <span className="achievement-label">{stat.label}</span>
              <span className="achievement-detail">{stat.detail}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
