import React, { Component, Fragment, useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";

const ratingMessage = rating => {
  switch (rating) {
    case 1:
      return <p id="rating-message">Eek! Me thinks not.</p>;
    case 2:
      return <p id="rating-message">Meh! I've experienced better.</p>;
    case 3:
      return <p id="rating-message">A-Okay!</p>;
    case 4:
      return <p id="rating-message">Yay! I'm a fan!</p>;
    case 5:
      return <p id="rating-message">Woohoo! As good as it gets!</p>;
    default:
      return <p id="rating-message">Select your rating</p>;
  }
};

const CreateReviewForm = props => {
  const [review, setReview] = useState(props.review);

  const handleSubmit = e => {
    e.preventDefault();
    props
      .action(review)
      .then(() =>
        props.history.push(`/businesses/${props.match.params.businessId}`)
      );
  };

  const updateBody = e => setReview({ ...review, body: e.target.value });
  return (
    <Fragment>
      <div className="ike-review-form-header">
        <Link to="/">
          <img
            id="ike-review-logo"
            src="https://s3.amazonaws.com/project-ike-seeding-dev/logo.png"
          />
        </Link>
        <h3>{props.formType}</h3>
      </div>
      <form className="ike-review-form" onSubmit={handleSubmit}>
        <div className="ike-review-form-wrapper">
          <div className="ike-review-stars">
            <span
              className={
                review.rating > 0
                  ? "fa fa-star red-star"
                  : "fa fa-star grey-star"
              }
              onClick={() => setReview({ ...review, rating: 1 })}
            />

            <span
              className={
                review.rating > 1
                  ? "fa fa-star red-star"
                  : "fa fa-star grey-star"
              }
              onClick={() => setReview({ ...review, rating: 2 })}
            />

            <span
              className={
                review.rating > 2
                  ? "fa fa-star red-star"
                  : "fa fa-star grey-star"
              }
              onClick={() => setReview({ ...review, rating: 3 })}
            />

            <span
              className={
                review.rating > 3
                  ? "fa fa-star red-star"
                  : "fa fa-star grey-star"
              }
              onClick={() => setReview({ ...review, rating: 4 })}
            />

            <span
              className={
                review.rating > 4
                  ? "fa fa-star red-star"
                  : "fa fa-star grey-star"
              }
              onClick={() => setReview({ ...review, rating: 5 })}
            />

            {ratingMessage(review.rating)}
          </div>

          <textarea
            className="ike-review-form-body"
            rows="60"
            cols="60"
            value={review.body}
            onChange={e => updateBody(e)}
            placeholder="Your review helps others learn about great local businesses.
            Please do not review this business if you received a freebie for writing this review, or if you are connected in any way to the owner or employees."
          />

          <ul className="ike-review-errors">
            {props.errors.map((error, idx) => (
              <li key={`error-${idx}`}>{error}</li>
            ))}
          </ul>
        </div>

        <input
          className="ike-review-form-button"
          type="submit"
          value={props.formType}
        />
      </form>
    </Fragment>
  );
};

CreateReviewForm.propTypes = {
  action: PropTypes.func,
  errors: PropTypes.arrayOf(PropTypes.string),
  formType: PropTypes.string,
  review: PropTypes.object
};

export default withRouter(CreateReviewForm);
