import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const socials = [
    { icon: <FaGithub />, href: 'https://github.com/rajputanuj31', label: 'GitHub' },
    { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/anuj-rajput-054b69230/', label: 'LinkedIn' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/___rajputanuj/', label: 'Instagram' },
    { icon: <FaTwitter />, href: 'https://x.com/_rajputanuj', label: 'X (Twitter)' },
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Connect</span>
          <h2>Get in Touch</h2>
          <p>Have a project in mind or want to collaborate? I'd love to hear from you.</p>
        </motion.div>

        <motion.div
          className="contact-card-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="contact-info-card glass-card">
            <div className="contact-email">
              <FaEnvelope />
              <div>
                <span className="contact-label">Email me at</span>
                <a href="mailto:rajputanuj041@gmail.com">rajputanuj041@gmail.com</a>
              </div>
            </div>

            <div className="contact-divider"></div>

            <div className="contact-social-section">
              <span className="contact-label">Find me on</span>
              <div className="contact-socials">
                {socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
