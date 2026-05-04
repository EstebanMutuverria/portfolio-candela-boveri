import React from 'react';
import './Button.css';

const Button = ({ children, onClick, variant = 'primary', type = 'button', href }) => {
  const className = `btn btn--${variant}`;

  if (href) {
    return (
      <a href={href} className={className} target={href.startsWith('#') ? '' : "_blank"} rel="noopener noreferrer">
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
