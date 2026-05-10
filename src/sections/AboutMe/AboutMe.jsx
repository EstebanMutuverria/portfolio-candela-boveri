import React from 'react';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import { FaGraduationCap, FaCalendarAlt, FaHeart } from 'react-icons/fa';
import './AboutMe.css';
import { PORTFOLIO_DATA } from '../../services/data/portfolio.data';

const AboutMe = () => {
  const { aboutMe } = PORTFOLIO_DATA;

  return (
    <SectionWrapper id="about" title="Sobre Mí">
      <div className="about__grid">
        <div className="about__content">
          <h3 className="about__welcome">Futura Profesional en Formación</h3>
          <p className="about__text">{aboutMe.motivation}</p>

          <div className="about__info-cards">
            <div className="info-card">
              <span className="info-card__icon"><FaGraduationCap /></span>
              <div className="info-card__content">
                <h4>Universidad</h4>
                <p>{aboutMe.university}</p>
              </div>
            </div>
            <div className="info-card">
              <span className="info-card__icon"><FaCalendarAlt /></span>
              <div className="info-card__content">
                <h4>Nivel</h4>
                <p>{aboutMe.year}</p>
              </div>
            </div>
          </div>

          {/*           <div className="about__specialties">
            <h4>Áreas de Interés:</h4>
            <div className="specialty-tags">
              {aboutMe.interests.map((interest) => (
                <span key={interest} className="tag">{interest}</span>
              ))}
            </div>
          </div> */}
        </div>

        <div className="about__values">
          <div className="values-box">
            <FaHeart className="values-icon" />
            <h4>Mis Valores</h4>
            <p>{aboutMe.values}</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutMe;
