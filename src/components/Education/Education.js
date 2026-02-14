import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Background</span>
          <h2>Education</h2>
        </motion.div>

        <motion.div
          className="education-card glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="edu-icon-wrapper">
            <FaGraduationCap />
          </div>
          <div className="edu-info">
            <h3>Indian Institute of Information Technology, Pune</h3>
            <p className="edu-degree">B.Tech in Electronics and Communication Engineering</p>
            <p className="edu-location">
              <FaMapMarkerAlt />
              <span>Maharashtra, India</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
