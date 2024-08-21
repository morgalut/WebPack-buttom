import React, { useState } from 'react';
import './Button.css';

const Button = () => {
  const [color, setColor] = useState('blue');
  const [position, setPosition] = useState({ top: '50px', left: '50px' });

  const handleClick = () => {
    setColor(color === 'blue' ? 'red' : 'blue');
    setPosition({
      top: `${Math.random() * 400}px`,
      left: `${Math.random() * 400}px`,
    });
  };

  return (
    <button
      className="color-button"
      style={{ backgroundColor: color, position: 'absolute', top: position.top, left: position.left }}
      onClick={handleClick}
    >
      Click me!
    </button>
  );
};

export default Button;
