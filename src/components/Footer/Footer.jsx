import React from 'react';
import { FaTooth, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__logo">
            <FaTooth /> <span>Odonto.Cande</span>
          </div>
          <p className="footer__text">
            Profesional en formación con experiencia clínica supervisada en la Universidad Nacional del Oeste.
          </p>
          {/*           <div className="footer__socials">
            <a href="#" className="footer__social-link"><FaInstagram /> Instagram</a>
            <a href="#" className="footer__social-link"><FaLinkedin /> LinkedIn</a>
          </div> */}
        </div>
        <div className="footer__bottom">
          <p>&copy; {currentYear} Candela Boveri. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
