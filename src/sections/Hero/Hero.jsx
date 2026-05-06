import React from 'react';
import Button from '../../components/Button/Button';
import './Hero.css';
import { PORTFOLIO_DATA } from '../../services/data/portfolio.data';
import { FaDownload } from 'react-icons/fa';

const Hero = () => {
  const { hero } = PORTFOLIO_DATA;

  return (
    <section id="home" className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <span className="hero__subtitle">Estudiante de Odontología - 4to Año</span>
          <h1 className="hero__title">
            Soy <span className="text-highlight">{hero.name} {hero.lastName}</span>
          </h1>
          <p className="hero__description">{hero.phrase}</p>
          <div className='container__btns'>
            <div className="hero__btns">
              <Button href="#contact">{hero.cta}</Button>
              <Button href="#portfolio" variant="outline">Ver Casos</Button>
            </div>
            <a href={hero.cv} target="_blank" rel="noopener noreferrer" download>
              <Button variant="secondary">Descargar CV <FaDownload className='download-cv-icon' /></Button>
            </a>
          </div>
        </div>
        <div className="hero__image-container">
          <div className="hero__image-bg"></div>
          <div className="hero__placeholder-image">
            <img src={hero.image} alt="Cande" className="hero__image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
