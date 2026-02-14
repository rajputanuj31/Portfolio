import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="hero" smooth={true} duration={500} className="navbar-logo">
          <span className="logo-text">AR</span>
          <span className="logo-dot">.</span>
        </Link>

        <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          {['hero', 'experience', 'skills', 'projects', 'achievements', 'contact'].map(
            (section) => (
              <Link
                key={section}
                to={section}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="nav-active"
                onClick={closeMenu}
              >
                {section === 'hero' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            )
          )}
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
