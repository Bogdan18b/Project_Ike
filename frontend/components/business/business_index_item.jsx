import React from 'react';
import { Link } from 'react-router-dom';

const BusinessIndexItem = ({ business }) => {
  return (
    <ul className="ike-business-index-item">
      <li><img src={business.photoURL} alt="photo"/></li>
      <li><Link to={`/businesses/${business.id}`}>{business.name}</Link></li>

      <li>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
      </li>

      <li>{business.businessType}</li>
      <li>{business.address} {business.phone}</li>
    </ul>
  );
};

export default BusinessIndexItem;
