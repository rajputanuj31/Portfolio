import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter, FaDownload } from 'react-icons/fa';
import myImage from '../../asset/Anuj_Rajput.jpeg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-glow hero-glow-1"></div>
      <div className="hero-bg-glow hero-glow-2"></div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="hero-greeting">Hi there, I'm</span>
          <h1 className="hero-name">
            Anuj <span className="gradient-text">Rajput</span>
          </h1>
          <h2 className="hero-title">Blockchain Developer &amp; Full Stack Engineer</h2>
          <p className="hero-description">
            Building decentralized applications and scalable web solutions.
            Currently crafting institutional-grade Web3 products at{' '}
            <span className="highlight">GlueX Protocol</span>.
          </p>

          <div className="hero-cta">
            <a
              href={`${process.env.PUBLIC_URL}/Anuj_Rajput.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FaDownload /> Resume
            </a>
            <Link to="contact" smooth={true} offset={-70} duration={500}>
              <button className="btn btn-outline">Get in Touch</button>
            </Link>
          </div>

          <div className="hero-socials">
            <motion.a
              href="https://github.com/rajputanuj31"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{ y: -3, color: '#e2e8f0' }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/anuj-rajput-054b69230/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{ y: -3, color: '#0a66c2' }}
            >
              <FaLinkedinIn />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/___rajputanuj/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              whileHover={{ y: -3, color: '#e1306c' }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="https://x.com/_rajputanuj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              whileHover={{ y: -3, color: '#e2e8f0' }}
            >
              <FaTwitter />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="hero-image-ring">
            <img src={myImage} alt="Anuj Rajput" />
          </div>
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Available for work</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
