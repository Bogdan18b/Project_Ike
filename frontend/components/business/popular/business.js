import React from "react";
import StarRating from "../../star_rating";
import { Link } from "react-router-dom";

const PopularBusiness = ({ business }) => (
  <div className="PopularBusinesses-wrapper-item">
    <img src={business.photoURL} alt={business.name} />
    <Link to={`/businesses/${business.id}`}>{business.name}</Link>
    <div>
      <StarRating rating={business.rating} />
      <p>
        {business.reviewIds.length} review
        {business.reviewIds.length === 1 ? "" : "s"}
      </p>
    </div>
    <p>{business.tags.join(", ")}</p>
  </div>
);
export default PopularBusiness;
