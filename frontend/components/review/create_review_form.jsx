import React, { Fragment, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";

const ratingMessage = rating => {
  switch (rating) {
    case 1:
      return (
        <p className="ReviewForm-main-stars-message">Eek! Me thinks not.</p>
      );
    case 2:
      return (
        <p className="ReviewForm-main-stars-message">
          Meh! I've experienced better.
        </p>
      );
    case 3:
      return <p className="ReviewForm-main-stars-message">A-Okay!</p>;
    case 4:
      return <p className="ReviewForm-main-stars-message">Yay! I'm a fan!</p>;
    case 5:
      return (
        <p className="ReviewForm-main-stars-message">
          Woohoo! As good as it gets!
        </p>
      );
    default:
      return (
        <p className="ReviewForm-main-stars-message">Select your rating</p>
      );
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
      <div className="ReviewForm-header">
        <Link to="/">
          <img src="https://s3.amazonaws.com/project-ike-seeding-dev/logo.png" />
        </Link>
      </div>
      <form className="ReviewForm-main" onSubmit={handleSubmit}>
        <h1 className="ReviewForm-main-title">{props.formType}</h1>
        <div className="ReviewForm-main-stars">
          <span
            className={
              review.rating > 0 ? "fa fa-star red-star" : "fa fa-star grey-star"
            }
            onClick={() => setReview({ ...review, rating: 1 })}
          />

          <span
            className={
              review.rating > 1 ? "fa fa-star red-star" : "fa fa-star grey-star"
            }
            onClick={() => setReview({ ...review, rating: 2 })}
          />

          <span
            className={
              review.rating > 2 ? "fa fa-star red-star" : "fa fa-star grey-star"
            }
            onClick={() => setReview({ ...review, rating: 3 })}
          />

          <span
            className={
              review.rating > 3 ? "fa fa-star red-star" : "fa fa-star grey-star"
            }
            onClick={() => setReview({ ...review, rating: 4 })}
          />

          <span
            className={
              review.rating > 4 ? "fa fa-star red-star" : "fa fa-star grey-star"
            }
            onClick={() => setReview({ ...review, rating: 5 })}
          />

          {ratingMessage(review.rating)}
        </div>

        <textarea
          className="ike-review-form-body ReviewForm-main-body"
          rows="60"
          cols="60"
          value={review.body}
          onChange={e => updateBody(e)}
          placeholder="Your review helps others learn about great local businesses.
            Please do not review this business if you received a freebie for writing this review, or if you are connected in any way to the owner or employees."
        />

        <ul className="ReviewForm-main-errors">
          {props.errors.map((error, idx) => (
            <li key={`error-${idx}`}>{error}</li>
          ))}
        </ul>
        <input
          className="ReviewForm-main-button"
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
