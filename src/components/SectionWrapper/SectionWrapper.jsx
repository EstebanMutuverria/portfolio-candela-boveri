import React from 'react';

const SectionWrapper = ({ children, id, className, title, bgColor }) => {
  const sectionStyle = {
    backgroundColor: bgColor || 'transparent',
  };

  return (
    <section id={id} className={className} style={sectionStyle}>
      <div className="container">
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
