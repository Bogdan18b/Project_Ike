import React from 'react';
import StarRating from '../star_rating';
import { Link } from 'react-router-dom';

export const ReviewIndexItem = ({ review }) => {
  let date = review.createdAt.slice(0, 10).split("-").join("/") || "";
  return (
    <ul className="ike-review-main-list">
      <li>{review.userName}</li>
      <li><Link to={`/businesses/${review.businessId}`}>{review.businessName}</Link></li>
      <li><StarRating rating={review.rating} /> {date}</li>
      <li>{review.body}</li>
    </ul>
  );
};
