import * as ReviewApiUtil from '../util/review_api_util';

export const FETCH_ALL_REVIEWS = "FETCH_ALL_REVIEWS";

export const fetchAllReviews = (reviews) => {
  return {
    type: FETCH_ALL_REVIEWS,
    reviews
  };
};

export const requestAllReviews = () => {
  return dispatch => {
    ReviewApiUtil.fetchAllReviews().then(reviews => {
      return dispatch(fetchAllReviews(reviews));
    });
  };
};
