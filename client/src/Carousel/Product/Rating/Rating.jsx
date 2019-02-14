import React from 'react';

const starPoints = `M 9.000 13.500
  L 13.702 15.472
  L 13.280 10.391
  L 16.608 6.528
  L 11.645 5.359
  L 9.000 1.000
  L 6.355 5.359
  L 1.392 6.528
  L 4.720 10.391
  L 4.298 15.472
  L 9.000 13.500`;

const halfStarPoints = `M 9.000 1.000
  L 6.355 5.359
  L 1.392 6.528
  L 4.720 10.391
  L 4.298 15.472
  L 9.000 13.500`;

// apply linear gradient to stars

const Rating = ({ avgReview }) => {
  const stars = [];
  const fullStars = Math.floor(avgReview);
  for (let i = 0; i < Math.floor(fullStars); i += 1) {
    stars.push(
      <svg height="21" width="21">
        <path
          d={starPoints}
          fill="#f4b03e"
          stroke="#a98143"
          strokeWidth="1"
        />
      </svg>,
    );
  }
  const halfStars = Math.ceil(avgReview % 1);
  for (let i = 0; i < halfStars; i += 1) {
    stars.push(
      <svg height="21" width="21">
        <path
          d={halfStarPoints}
          fill="#f4b03e"
        />
        <path
          d={starPoints}
          fill="none"
          stroke="#a98143"
          strokeWidth="1"

        />
      </svg>,
    );
  }
  const emptyStars = 5 - (fullStars + halfStars);
  for (let i = 0; i < emptyStars; i += 1) {
    stars.push(
      <svg height="21" width="21">
        <path
          d={starPoints}
          fill="none"
          stroke="#a98143"
          strokeWidth="1"
        />
      </svg>,
    );
  }
  return (
    <div>
      {stars}
    </div>
  );
};

export default Rating;
