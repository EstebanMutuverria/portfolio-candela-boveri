import React, { useState, useEffect } from 'react';
import { FaTooth, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Intersection Observer logic for active section
      const sections = document.querySelectorAll('section');
      let current = 'home';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Formación', href: '#formation' },
    { name: 'Certificados', href: '#certificates' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Casos', href: '#portfolio' },
    { name: 'Tips', href: '#tips' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__container">
        <div className="navbar__logo">
          <FaTooth className="logo-icon" /> <span>Cande.Odonto</span>
        </div>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className={activeSection === link.href.substring(1) ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
