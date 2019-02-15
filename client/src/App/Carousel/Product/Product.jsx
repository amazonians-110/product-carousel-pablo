import React from 'react';
import propTypes from 'prop-types';
import product from './Product.css';
import Rating from './Rating/Rating.jsx';

const primeSprite = 'https://m.media-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/small-and-light-prime-logo._V509606070_.png';

const Product = ({
  product: {
    id, name, image, avgReview, price, isPrime, reviewCount, category,
  },
}) => (
  <div className={product.column}>
    <a href={`localhost:8000/${category}/${id}}`}>
      <img src={image} alt="product was here" className={product.ad_image} />
      <h4 className={product.name}>{name}</h4>
    </a>
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
  product: propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    avgReview: propTypes.number.isRequired,
    price: propTypes.number.isRequired,
    isPrime: propTypes.bool.isRequired,
    reviewCount: propTypes.number.isRequired,
    category: propTypes.string.isRequired,
  }).isRequired,
};

export default Product;
