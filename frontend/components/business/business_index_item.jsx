import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../star_rating';

const BusinessIndexItem = ({ business }) => {
  let count = business.reviewIds.length;
  return (
    <div className="ike-business-index-item">
      <Link to={`/businesses/${business.id}`}><img src={business.photoURL} alt="photo"/></Link>
      <div>
      <h1>{business.id}. <Link to={`/businesses/${business.id}`}>{business.name}</Link></h1>

      <h1><StarRating rating={business.rating} /></h1>
      <p>{ count === 1 ? "1 review" : `${count} reviews`}</p>
    </div>

    <div id="last">
      <p>{business.address}</p>
      <p>{business.phone}</p>
    </div>
  </div>
  );
};

export default BusinessIndexItem;
