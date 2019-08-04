import React from "react";
import { Link } from "react-router-dom";
import StarRating from "../../star_rating";
import PropTypes from "prop-types";

const BusinessIndexItem = ({ business, idx }) => {
  let count = business.reviewIds.length;
  return (
    <div className="BusinessIndex-item">
      <Link to={`/businesses/${business.id}`}>
        <img src={business.photoURL} alt="photo" />
      </Link>
      <div>
        <h1>
          {idx + 1}.{" "}
          <Link
            className="BusinessIndex-item-name"
            to={`/businesses/${business.id}`}
          >
            {business.name}
          </Link>
        </h1>

        <h1 className="BusinessIndex-item-starsAndReviews">
          <StarRating rating={business.rating} />
          <p>{count === 1 ? "1 review" : `${count} reviews`}</p>
        </h1>
        <div className="BusinessIndex-item-tags">
          <Link to={`/businesses?tags=${business.tags[0]}`}>
            {business.tags[0]}
          </Link>
          ,
          <Link to={`/businesses?tags=${business.tags[1]}`}>
            {business.tags[1]}
          </Link>
          ,
          <Link to={`/businesses?tags=${business.tags[2]}`}>
            {business.tags[2]}
          </Link>
        </div>
      </div>

      <div className="BusinessIndex-item-details">
        <p>{business.address}</p>
        <p>{business.phone}</p>
      </div>
    </div>
  );
};

BusinessIndexItem.propTypes = {
  business: PropTypes.shape({
    id: PropTypes.number,
    categoryId: PropTypes.number,
    address: PropTypes.string,
    name: PropTypes.string,
    website: PropTypes.string,
    hours: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
    reviewIds: PropTypes.arrayOf(PropTypes.number),
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    photoURL: PropTypes.string,
    rating: PropTypes.number
  }),
  idx: PropTypes.number
};

export default BusinessIndexItem;
