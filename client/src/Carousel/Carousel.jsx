/* eslint-disable import/extensions */
import React from 'react';
import Product from './Product/Product.jsx';
import styles from './Carousel.css';

const Carousel = ({ products }) => (
  <div className={styles.carousel}>
    {products.map(product => <Product key={product.id} product={product} />)}
  </div>
);

// Carousel.propTypes = {

// };

export default Carousel;
