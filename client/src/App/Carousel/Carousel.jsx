/* eslint-disable import/extensions */
import React from 'react';
import Product from './Product/Product.jsx';
import Button from './Button/Button.jsx';
import carousel from './Carousel.css';


const Carousel = ({ products }) => (
  <div className={carousel.container}>

    <Button direction="left" />
    {products
      ? products.map(product => <Product key={product.id} product={product} />)
      : null }
    <Button direction="right" />
  </div>
);

// Carousel.propTypes = {

// };

export default Carousel;
