import React from 'react';
import product from './Product.css';

const Product = ({
  product: {
    name, image, avgReview, price, isPrime,
  },
}) => (
  <div className={product.column}>
    <img src={image} alt="product was here" className={product.image} />
    <h4>{name}</h4>
    <div className={product.row}>
      <div className="stars">
        <span>&#11088;</span>
        <span>&#11088;</span>
        <span>&#11088;</span>
        <span>&#11088;</span>
        <span>&#11088;</span>
      </div>
      <div>
        4,345
      </div>
    </div>
    <div className={product.row}>
      <div className="price">{`$${price}`}</div>
      {isPrime === 't'
        ? <div className="prime"><em>PRIME</em></div>
        : <div className="not_prime">NOT PRIME</div>
          }
    </div>
  </div>
);

export default Product;
