import React from 'react';

export const Reviews = ({ reviews }) => {
  const rev = reviews.map(review => (
    <ul key={review.id}>
      <li>{review.userName}</li>
      <li>{review.rating}</li>
      <li>{review.body}</li>
    </ul>
  ));
  return (
    rev
  );
};
