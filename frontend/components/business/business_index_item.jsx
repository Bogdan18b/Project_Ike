import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../star_rating';
const BusinessIndexItem = ({ business }) => {
  return (
    <ul className="ike-business-index-item">
      <li><img src={business.photoURL} alt="photo"/></li>
      <li><Link to={`/businesses/${business.id}`}>{business.name}</Link></li>

      <li><StarRating rating={business.rating} /></li>

      <li>{business.businessType}</li>
      <li>{business.address} {business.phone}</li>
    </ul>
  );
};

export default BusinessIndexItem;
