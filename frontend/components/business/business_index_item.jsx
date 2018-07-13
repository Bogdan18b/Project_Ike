import React from 'react';
import { Redirect } from 'react-router-dom';

const BusinessIndexItem = ({ business }) => {
  return (
    <ul>
      <li key={`a${business.id}`}>{business.name}</li>
      <li key={`b${business.id}`}>{business.address}</li>
      <li key={`c${business.id}`}>{business.phone}</li>
      <li key={`d${business.id}`}>{business.website}</li>
      <li key={`e${business.id}`}>{business.businessType}</li>
      <li key={`f${business.id}`}>{business.rating}</li>
    </ul>
  );
};

export default BusinessIndexItem;
