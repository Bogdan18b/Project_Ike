import * as ReviewApiUtil from '../util/review_api_util';

export const FETCH_ALL_REVIEWS = "FETCH_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

export const fetchAllReviews = (reviews) => {
  return {
    type: FETCH_ALL_REVIEWS,
    reviews
  };
};

export const receiveReview = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review
  };
};

export const requestAllReviews = () => {
  return dispatch => {
    ReviewApiUtil.fetchAllReviews().then(reviews => {
      return dispatch(fetchAllReviews(reviews));
    });
  };
};

export const createReview = (review) => {
  return dispatch => {
    ReviewApiUtil.createReview(review).then(review => {
      return dispatch(receiveReview(review));
    });
  };
};
