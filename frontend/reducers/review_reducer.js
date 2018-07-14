import { FETCH_ALL_REVIEWS } from '../actions/review_actions';
import { merge } from 'lodash';

const reviewReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALL_REVIEWS:
      return merge({}, state, action.reviews);
    default:
      return state;
  }
};

export default reviewReducer;
