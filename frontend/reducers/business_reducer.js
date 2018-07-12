import { FETCH_BUSINESS, FETCH_ALL_BUSINESSES } from '../actions/business_actions';
import { merge } from 'lodash';

const businessReducer = (state = {}, action) => {
  debugger
  switch (action.type) {
    case FETCH_BUSINESS:
      return merge({}, state, {[action.business.id]: action.business});
    case FETCH_ALL_BUSINESSES:
      return merge({}, state, action.businesses);
    default:
      return state;
  }
};

export default businessReducer;
