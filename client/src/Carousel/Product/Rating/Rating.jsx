import React from 'react';

const starPoints = `M 9.000 13.000
  L 13.702 15.472
  L 12.804 10.236
  L 16.608 6.528
  L 11.351 5.764
  L 9.000 1.000
  L 6.649 5.764
  L 1.392 6.528
  L 5.196 10.236
  L 4.298 15.472
  L 9.000 13.000`;

const halfStarPoints = `M 9.000 1.000
  L 6.649 5.764
  L 1.392 6.528
  L 5.196 10.236
  L 4.298 15.472
  L 9.000 13.000`;

// apply linear gradient to stars

const Rating = ({ avgReview }) => {
  const stars = [];
  const fullStars = Math.floor(avgReview);
  for (let i = 0; i < Math.floor(fullStars); i += 1) {
    stars.push(
      <svg height="20" width="20">
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
      <svg height="20" width="20">
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
      <svg height="20" width="20">
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
