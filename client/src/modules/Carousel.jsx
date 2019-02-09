const React = require('react');

function Carousel({
  name, image, avgReview, price, isPrime,
}) {
  return (
    <div className="product_ad">
      <div className="clickable">
        <img src={image} alt="https://cdn3.iconfinder.com/data/icons/pictomisc/100/sadface-512.png" />
        <h4>{name}</h4>
      </div>
      <div className="review">
        <div className="stars">
          <span>&#11088;</span>
          <span>&#11088;</span>
          <span>&#11088;</span>
          <span>&#11088;</span>
          <span>&#11088;</span>
        </div>
        {avgReview}
      </div>
      <div className="details">
        <div className="price">{`$${price}`}</div>
        {isPrime === 't'
          ? <div className="prime"><em>PRIME</em></div>
          : <div className="not_prime">) - :</div>
            }
      </div>
    </div>
  );
}

export default Carousel;
