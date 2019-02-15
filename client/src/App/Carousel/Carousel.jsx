/* eslint-disable import/extensions */
import React from 'react';
import propTypes from 'prop-types';
import Product from './Product/Product.jsx';
import Button from './Button/Button.jsx';
import carousel from './Carousel.css';

/* click */
const Carousel = ({ products, scroll }) => (
  <div className={carousel.container}>

    <Button scroll={scroll} direction="left" />
    {products
      ? products.map(product => <Product key={product.id} product={product} />)
      : null }
    <Button scroll={scroll} direction="right" />
  </div>
);

Carousel.propTypes = {
  products: propTypes.arrayOf(propTypes.object).isRequired,
  scroll: propTypes.func.isRequired,
  // click: propTypes.func.isRequired,
};

export default Carousel;
