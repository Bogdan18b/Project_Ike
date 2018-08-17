import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../star_rating';

const BusinessIndexItem = ({ business }) => {
  let count = business.reviewIds.length;
  return (
    <div className="ike-business-index-item">
      <Link to={`/businesses/${business.id}`}><img src={business.photoURL} alt="photo"/></Link>
      <div>
      <h1>{business.id}. <Link className="ike-business-list-name"
        to={`/businesses/${business.id}`}>{business.name}</Link></h1>

      <h1 className="ike-business-review-and-stars"><StarRating rating={business.rating} />
        <p>{ count === 1 ? "1 review" : `${count} reviews`}</p>
      </h1>
      <div className="ike-business-tags">
        <Link to={`/businesses?tags=${business.tags[0]}`}>{business.tags[0]}</Link>,
        <Link to={`/businesses?tags=${business.tags[1]}`}>{business.tags[1]}</Link>,
        <Link to={`/businesses?tags=${business.tags[2]}`}>{business.tags[2]}</Link>
      </div>
    </div>

    <div id="last">
      <p>{business.address}</p>
      <p>{business.phone}</p>
    </div>
  </div>
  );
};

export default BusinessIndexItem;
