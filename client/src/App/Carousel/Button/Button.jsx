import React from 'react';
import button from './Button.css';

const Button = ({ direction }) => (
  <span className={button.col}>
    <button className={button.box} type="button">
      <div className={button.arrow}>
        {direction === 'left'
          ? '<'
          : '>'}
      </div>
    </button>
  </span>
);

export default Button;
