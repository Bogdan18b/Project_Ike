import { FETCH_ALL_REVIEWS, RECEIVE_REVIEW } from '../actions/review_actions';
import { FETCH_BUSINESS } from '../actions/business_actions';
import { merge } from 'lodash';

const reviewReducer = (state = {}, action) => {
  debugger
  let reviews;
  switch (action.type) {
    case FETCH_ALL_REVIEWS:
      return merge({}, state, action.reviews);
      case FETCH_BUSINESS:
    debugger
        return merge({}, state, action.payload.reviews);
    default:
      return state;
  }
};

export default reviewReducer;
