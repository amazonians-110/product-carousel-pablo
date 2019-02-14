import React from 'react';
import product from './Product.css';
import Rating from './Rating/Rating.jsx';

const primeSprite = 'https://m.media-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/small-and-light-prime-logo._V509606070_.png';

const Product = ({
  product: {
    name, image, avgReview, price, isPrime, reviewCount,
  },
}) => (
  <div className={product.column}>
    <img src={image} alt="product was here" className={product.ad_image} />
    <h4 className={product.name}>{name}</h4>
    <div className={product.row}>
      <Rating avgReview={avgReview} />
      <span className={product.review_count}>
        {reviewCount}
      </span>
    </div>
    <div className={product.row}>
      <span className={product.price}>{`$${price}`}</span>
      <span>
        {isPrime === true
          ? <img className={product.prime} src={primeSprite} alt="" />
          : null }
      </span>
    </div>
  </div>
);

export default Product;
