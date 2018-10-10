import React from 'react';
import StarRating from '../star_rating';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ReviewIndexItem = ({ review }) => {
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

ReviewIndexItem.propTypes = {
  body: PropTypes.string,
  businessId: PropTypes.number,
  businessName: PropTypes.string,
  createdAt: PropTypes.string,
  id: PropTypes.number,
  rating: PropTypes.number,
  userId: PropTypes.number,
  userName: PropTypes.string
};

export default ReviewIndexItem;
