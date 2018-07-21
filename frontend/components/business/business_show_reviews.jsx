import React from 'react';
import StarRating from '../star_rating';

export const Reviews = ({ reviews }) => {
  const rev = reviews.map(review => (
    <ul key={review.id}>
      <li>{review.userName}</li>
      <li><StarRating rating={review.rating}/></li>
      <li>{review.body}</li>
    </ul>
  ));
  return (
    rev
  );
};
