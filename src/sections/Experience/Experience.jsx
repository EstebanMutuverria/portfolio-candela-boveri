import React from 'react';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import { FaTooth } from 'react-icons/fa';
import './Experience.css';
import { PORTFOLIO_DATA } from '../../services/data/portfolio.data';

const Experience = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <SectionWrapper id="experience" title="Prácticas y Experiencia">
      <div className="experience__grid">
        {experience.map((exp, index) => (
          <div key={index} className="experience__card">
            <div className="experience__icon"><FaTooth /></div>
            <h3 className="experience__area">{exp.area}</h3>
            <p className="experience__description">{exp.description}</p>
          </div>
        ))}
      </div>
      <div className="experience__note">
        <p>* Prácticas clínicas realizadas bajo supervisión profesional en la facultad (UNO).</p>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
