import React from 'react';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import './Formation.css';
import { PORTFOLIO_DATA } from '../../services/data/portfolio.data';

const Formation = () => {
  const { formation } = PORTFOLIO_DATA;

  return (
    <SectionWrapper id="formation" title="Formación Académica" bgColor="var(--primary-pink)">
      <div className="formation__list">
        {formation.map((item, index) => (
          <div key={index} className="formation__item">
            <div className="formation__dot"></div>
            <div className="formation__content">
              <span className="formation__period">{item.period}</span>
              <h3 className="formation__title">{item.title}</h3>
              <h4 className="formation__institution">{item.institution}</h4>
              <p className="formation__description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Formation;
