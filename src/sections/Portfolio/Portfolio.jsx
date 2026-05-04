import React from 'react';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import './Portfolio.css';
import { PORTFOLIO_DATA } from '../../services/data/portfolio.data';

const Portfolio = () => {
  const { cases } = PORTFOLIO_DATA;

  return (
    <SectionWrapper id="portfolio" title="Casos Clínicos" bgColor="var(--secondary-blue)">
      <div className="portfolio__grid">
        {cases.map((item) => (
          <div key={item.id} className="portfolio__item">
            <div className="portfolio__images">
              <div className="portfolio__image-box">
                <img src={item.beforeImg} alt="Antes" />
                <span>Antes</span>
              </div>
              <div className="portfolio__image-box">
                <img src={item.afterImg} alt="Después" />
                <span>Después</span>
              </div>
            </div>
            <div className="portfolio__content">
              <h3 className="portfolio__item-title">{item.title}</h3>
              <p className="portfolio__item-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Portfolio;
