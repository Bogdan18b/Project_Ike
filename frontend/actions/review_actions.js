import * as ReviewApiUtil from "../util/review_api_util";

export const FETCH_ALL_REVIEWS = "FETCH_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

export const fetchAllReviews = ({ reviews, users, businesses }) => ({
  type: FETCH_ALL_REVIEWS,
  reviews,
  users,
  businesses
});

export const receiveReview = payload => ({
  type: RECEIVE_REVIEW,
  payload
});

export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
});

export const requestAllReviews = () => dispatch =>
  ReviewApiUtil.fetchAllReviews().then(payload =>
    dispatch(fetchAllReviews(payload))
  );

export const createReview = review => dispatch =>
  ReviewApiUtil.createReview(review).then(
    payload => dispatch(receiveReview(payload)),
    errors => dispatch(receiveReviewErrors(errors.responseJSON))
  );

export const updateReview = review => dispatch =>
  ReviewApiUtil.updateReview(review).then(
    review => dispatch(receiveReview(review)),
    errors => dispatch(receiveReviewErrors(errors.responseJSON))
  );

export const deleteReview = id => dispatch =>
  ReviewApiUtil.deleteReview(id).then(reviewId =>
    dispatch(removeReview(reviewId))
  );
