import React from 'react';
import StarRating from '../../star_rating';
import { Link } from 'react-router-dom';

const PopularBusiness = ({ business }) => {
  return (
    <ul>
      <li><img src={business.photoURL} alt={business.name}/></li>
      <li><Link to={`/businesses/${business.id}`}>{business.name}</Link></li>
      <li><div><StarRating rating={business.rating} /><p>{business.reviewIds.length} review{business.reviewIds.length === 1 ? "" : "s"}</p></div></li>
      <li><p>{business.tags.join(", ")}</p></li>
    </ul>
  )
};

export default PopularBusiness;
