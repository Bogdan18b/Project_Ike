import React, { Fragment, useState, useEffect } from "react";
import StarRating from "../../star_rating";
import PropTypes from "prop-types";

const Reviews = props => {
  const [reviews, setReviews] = useState(props.reviews);
  const [hideClass, setHideClass] = useState("is-hidden");

  const handleRemove = id => {
    props.deleteReview(id);
    const remainingReviews = props.reviews.filter(review => review.id !== id);
    setReviews(remainingReviews);
  };
  const handleHover = () => setHideClass("");
  const handleHoverOut = () => setHideClass("is-hidden");
  return (
    <Fragment>
      {reviews.map(review => {
        const showRemoveButton = props.currentUserId === review.userId;
        return (
          <div key={review.id} className="BusinessShow-reviews-item">
            <div className="BusinessShow-reviews-item-details">
              <h3>{props.users[review.userId].firstName}</h3>
              <StarRating rating={review.rating} />
              <p>
                {review.createdAt
                  .slice(0, 10)
                  .split("-")
                  .join("/")}
              </p>
            </div>
            <div className="BusinessShow-reviews-item-body">
              <p>{review.body}</p>
              {showRemoveButton && (
                <button onClick={() => handleRemove(review.id)}>
                  <i
                    className="fas fa-trash-alt BusinessShow-reviews-item-body-removeIcon"
                    onMouseOver={handleHover}
                    onMouseOut={handleHoverOut}
                  />
                  <p
                    className={`BusinessShow-reviews-item-body-removeIconTooltip ${hideClass}`}
                  >
                    Remove Review
                  </p>
                </button>
              )}
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

Reviews.propTypes = {
  businessId: PropTypes.number,
  currentUserId: PropTypes.number,
  deleteReview: PropTypes.func,
  reviews: PropTypes.arrayOf(PropTypes.object),
  users: PropTypes.object
};

export default Reviews;
