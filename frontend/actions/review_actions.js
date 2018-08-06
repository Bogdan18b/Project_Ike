import * as ReviewApiUtil from '../util/review_api_util';

export const FETCH_ALL_REVIEWS = "FETCH_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

export const fetchAllReviews = ({ reviews, users, businesses}) => {
  return {
    type: FETCH_ALL_REVIEWS,
    reviews,
    users,
    businesses
  };
};

export const receiveReview = (payload) => {
  return {
    type: RECEIVE_REVIEW,
    payload
  };
};

export const receiveReviewErrors = (errors) => {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors
  };
};

export const removeReview = (reviewId) => {
  return {
    type: REMOVE_REVIEW,
    reviewId
  };
};

export const requestAllReviews = () => {
  return dispatch => {
    return ReviewApiUtil.fetchAllReviews().then(payload => {
      return dispatch(fetchAllReviews(payload));
    });
  };
};

export const createReview = (review) => {
  return dispatch => {
    return ReviewApiUtil.createReview(review).then(
      payload => {
        return dispatch(receiveReview(payload));
      },
      errors => {
        return dispatch(receiveReviewErrors(errors.responseJSON));
      }
    );
  };
};

export const updateReview = (review) => {
  return dispatch => {
    return ReviewApiUtil.updateReview(review).then(
      review => {
        return dispatch(receiveReview(review));
      },
      errors => {
        return dispatch(receiveReviewErrors(errors.responseJSON));
      }
    );
  };
};

export const deleteReview = (id) => {
  return dispatch => {
    return ReviewApiUtil.deleteReview(id).then(
      reviewId => {
        return dispatch(removeReview(reviewId));
      }
    );
  };
};
