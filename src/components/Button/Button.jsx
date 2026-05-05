import React from 'react';
import './Button.css';

const Button = ({ children, onClick, variant = 'primary', type = 'button', href }) => {
  const className = `btn btn--${variant}`;

  if (href) {
    const isExternal = !href.startsWith('#') && !href.startsWith('mailto:');
    return (
      <a href={href} className={className} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
