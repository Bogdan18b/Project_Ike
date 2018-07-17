import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../star_rating';

const BusinessIndexItem = ({ business }) => {
  debugger
  return (
    <div className="ike-business-index-item">
      <img src={business.photoURL} alt="photo"/>
      <div>
      <h1>{business.id}. <Link to={`/businesses/${business.id}`}>{business.name}</Link></h1>

      <h1><StarRating rating={business.rating} /></h1>
      <p>{business.reviewIds.length} reviews</p>
      <p>{business.businessType}</p>
    </div>
    <div id="last">
      <p>{business.address}</p>
      <p>{business.phone}</p>
    </div>
  </div>
  );
};

export default BusinessIndexItem;
