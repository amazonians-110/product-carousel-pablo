import React from 'react';
import propTypes from 'prop-types';
import product from './Product.css';
import Rating from './Rating/Rating.jsx';

const primeSprite = 'https://m.media-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/small-and-light-prime-logo._V509606070_.png';

const Product = ({
  // click,
  product: {
    id, name, image, avgReview, price, isPrime, reviewCount, category,
  },
}) => (
  <div className={product.column}>
    <a href={`/${category}/${id}`}>
      <div style={{ backgroundImage: image }} alt="product was here" className={product.ad_image} />
    </a>
    <a href={`/${category}/${id}`} className={product.name}>{name}</a>
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

Product.propTypes = {
  // click: propTypes.func.isRequired,
  product: propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    avgReview: propTypes.string.isRequired,
    price: propTypes.string.isRequired,
    isPrime: propTypes.bool.isRequired,
    reviewCount: propTypes.number.isRequired,
    category: propTypes.string.isRequired,
  }).isRequired,
};

export default Product;
