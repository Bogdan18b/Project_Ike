import React from 'react';
import StarRating from '../star_rating';

export const ReviewIndexItem = ({ review }) => {
  return (
    <ul className="ike-review-main-list">
      <li>{review.userName}</li>
      <li>{review.businessName}</li>
      <li><StarRating rating={review.rating} /></li>
      <li>{review.body}</li>
    </ul>
  );
};
