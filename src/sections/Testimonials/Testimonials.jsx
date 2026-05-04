import React from 'react';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import { FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';
import { PORTFOLIO_DATA } from '../../services/data/portfolio.data';

const Testimonials = () => {
  const { testimonials } = PORTFOLIO_DATA;

  return (
    <SectionWrapper id="testimonials" title="Testimonios">
      <div className="testimonials__grid">
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial__card">
            <div className="testimonial__quote"><FaQuoteLeft /></div>
            <p className="testimonial__comment">{item.comment}</p>
            <div className="testimonial__author">
              <h4 className="testimonial__name">{item.name}</h4>
              <span className="testimonial__role">{item.role}</span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
