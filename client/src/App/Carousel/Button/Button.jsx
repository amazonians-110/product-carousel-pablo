import React from 'react';
import propTypes from 'prop-types';
import button from './Button.css';

const Button = ({ direction, scroll }) => (
  <span className={button.col}>
    <button className={button.box} type="button" onClick={() => scroll(direction)}>
      <div className={button.arrow}>
        {direction === 'left'
          ? '<'
          : '>'}
      </div>
    </button>
  </span>
);

Button.propTypes = {
  direction: propTypes.string.isRequired,
  scroll: propTypes.func.isRequired,
};

export default Button;
