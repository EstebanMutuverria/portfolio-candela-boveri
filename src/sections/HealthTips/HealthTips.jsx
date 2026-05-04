import React from 'react';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import { FaTooth, FaCheckCircle, FaSyncAlt } from 'react-icons/fa';
import './HealthTips.css';
import { PORTFOLIO_DATA } from '../../services/data/portfolio.data';

const HealthTips = () => {
  const { healthTips } = PORTFOLIO_DATA;

  // Mapa de iconos basado en el ID o un nombre
  const getIcon = (id) => {
    switch(id) {
      case 1: return <FaTooth />;
      case 2: return <FaCheckCircle />;
      case 3: return <FaSyncAlt />;
      default: return <FaTooth />;
    }
  };

  return (
    <SectionWrapper id="tips" title="Tips de Salud Bucal">
      <div className="tips__grid">
        {healthTips.map((tip) => (
          <div key={tip.id} className="tip__card">
            <div className="tip__icon">{getIcon(tip.id)}</div>
            <h3 className="tip__title">{tip.title}</h3>
            <p className="tip__description">{tip.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default HealthTips;
