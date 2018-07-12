import { FETCH_ALL_BUSINESS_TYPES } from '../actions/business_actions';
import { merge } from 'lodash';

const businessTypeReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALL_BUSINESS_TYPES:
      return merge({}, state, action.types);
    default:
      return state;
  }
};

export default businessTypeReducer;
