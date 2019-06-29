import React from "react";
import PropTypes from "prop-types";

const StarRating = ({ rating }) => (
  <div>
    <span
      className={rating > 0 ? "fa fa-star red-star" : "fa fa-star grey-star"}
    />
    <span
      className={rating > 1 ? "fa fa-star red-star" : "fa fa-star grey-star"}
    />
    <span
      className={rating > 2 ? "fa fa-star red-star" : "fa fa-star grey-star"}
    />
    <span
      className={rating > 3 ? "fa fa-star red-star" : "fa fa-star grey-star"}
    />
    <span
      className={rating > 4 ? "fa fa-star red-star" : "fa fa-star grey-star"}
    />
  </div>
);

StarRating.propTypes = {
  rating: PropTypes.number
};

export default StarRating;
