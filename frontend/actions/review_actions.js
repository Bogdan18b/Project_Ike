import * as ReviewApiUtil from '../util/review_api_util';

export const FETCH_ALL_REVIEWS = "FETCH_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

export const fetchAllReviews = ({ reviews, users, businesses}) => {
  return {
    type: FETCH_ALL_REVIEWS,
    reviews,
    users,
    businesses
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
    return ReviewApiUtil.fetchAllReviews().then(payload => {
      return dispatch(fetchAllReviews(payload));
    });
  };
};

export const createReview = (review) => {
  return dispatch => {
    return ReviewApiUtil.createReview(review).then(review => {
      return dispatch(receiveReview(review));
    });
  };
};
