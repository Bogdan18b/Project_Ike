import React from 'react';
import StarRating from '../star_rating';
import { Link } from 'react-router-dom';

export const ReviewIndexItem = ({ review }) => {
  return (
    <ul className="ike-review-main-list">
      <li>{review.userName}</li>
      <li><Link to={`/businesses/${review.businessId}`}>{review.businessName}</Link></li>
      <li><StarRating rating={review.rating} /></li>
      <li>{review.body}</li> //wrap in a div make overflow flow none button to expand change height property
    </ul>
  );
};
