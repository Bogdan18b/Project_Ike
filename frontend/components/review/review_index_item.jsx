import React from "react";
import StarRating from "../star_rating";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const showMore = e => {
  e.target.parentElement.style.overflow = "scroll";
  console.log((e.target.innerHTML = ""));
};

const ReviewIndexItem = ({ review }) => {
  const len = review.body.length;
  const show = len > 100;
  let date =
    review.createdAt
      .slice(0, 10)
      .split("-")
      .join("/") || "";
  return (
    <ul className="ReviewsHome-wrapper">
      <li className="ReviewsHome-wrapper-item">{review.userName}</li>
      <li className="ReviewsHome-wrapper-item">
        <Link to={`/businesses/${review.businessId}`}>
          {review.businessName}
        </Link>
      </li>
      <li className="ReviewsHome-wrapper-item">
        <StarRating rating={review.rating} /> {date}
      </li>
      <li className="ReviewsHome-wrapper-item">
        {show && (
          <span
            className="ReviewsHome-wrapper-item-showMore"
            onClick={showMore}
          >
            +
          </span>
        )}
        {review.body}
      </li>
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
