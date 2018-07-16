import { FETCH_BUSINESS, FETCH_ALL_BUSINESSES } from '../actions/business_actions';
import { merge } from 'lodash';

const businessReducer = (state = {}, action) => {
  debugger
  let business;
  switch (action.type) {
    case FETCH_BUSINESS:
      business = action.payload.business;
      return merge({}, state, {[business.id]: business});
    case FETCH_ALL_BUSINESSES:
      return merge({}, state, action.businesses);
    default:
      return state;
  }
};

export default businessReducer;
