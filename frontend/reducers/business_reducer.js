import { FETCH_BUSINESS, FETCH_ALL_BUSINESSES } from '../actions/business_actions';
import { FETCH_ALL_REVIEWS } from '../actions/review_actions';
import { FETCH_SEARCH_RESULTS } from '../actions/search_actions';
import { merge } from 'lodash';

const businessReducer = (state = {}, action) => {
  let business;
  switch (action.type) {
    case FETCH_BUSINESS:
      business = action.payload.business;
      return merge({}, state, {[business.id]: business});
    case FETCH_ALL_BUSINESSES:
      return merge({}, state, action.businesses);
    case FETCH_ALL_REVIEWS:
      return merge({}, state, action.businesses);
    default:
      return state;
  }
};

export default businessReducer;
